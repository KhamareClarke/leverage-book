const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

async function generatePDF() {
    console.log('🚀 Starting PDF generation...');
    
    // Verify QR codes exist before starting
    console.log('🔍 Verifying QR code files exist...');
    const qrCodeFiles = [
        './leverage/qr-codes/qr-chapter1-goals.png',
        './leverage/qr-codes/qr-chapter2-daily.png',
        './leverage/qr-codes/qr-chapter3-dashboard.png',
        './leverage/qr-codes/qr-chapter4-stats.png',
        './leverage/qr-codes/qr-chapter5-dashboard.png'
    ];
    
    for (const qrFile of qrCodeFiles) {
        if (!fs.existsSync(qrFile)) {
            console.error(`❌ QR code file not found: ${qrFile}`);
            throw new Error(`QR code file missing: ${qrFile}`);
        } else {
            console.log(`✅ Found: ${qrFile}`);
        }
    }
    
    // Start a local HTTP server to serve files (better for loading images)
    const http = require('http');
    const server = http.createServer((req, res) => {
        let filePath = '.' + req.url;
        if (filePath === './') filePath = './index.html';
        
        // Normalize path separators for Windows
        filePath = path.normalize(filePath);
        
        // Security: prevent directory traversal
        if (filePath.includes('..')) {
            res.writeHead(403);
            res.end('Forbidden');
            return;
        }
        
        fs.readFile(filePath, (err, data) => {
            if (err) {
                console.error(`❌ File not found: ${filePath} (requested: ${req.url})`);
                res.writeHead(404);
                res.end('File not found');
                return;
            }
            
            const ext = path.extname(filePath);
            const contentType = {
                '.html': 'text/html',
                '.css': 'text/css',
                '.js': 'application/javascript',
                '.png': 'image/png',
                '.jpg': 'image/jpeg',
                '.jpeg': 'image/jpeg',
                '.svg': 'image/svg+xml',
                '.json': 'application/json'
            }[ext] || 'text/plain';
            
            res.writeHead(200, { 
                'Content-Type': contentType,
                'Cache-Control': 'no-cache'
            });
            res.end(data);
        });
    });
    
    // Start server on a random port
    const serverPort = await new Promise((resolve) => {
        server.listen(0, () => {
            resolve(server.address().port);
        });
    });
    
    const baseUrl = `http://localhost:${serverPort}`;
    console.log(`🌐 Started local server on ${baseUrl}`);
    
    const browser = await puppeteer.launch({
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    
    try {
        const page = await browser.newPage();
        
        console.log(`📄 Loading HTML from: ${baseUrl}/index.html`);
        
        // Load the HTML file via HTTP server
        await page.goto(`${baseUrl}/index.html`, {
            waitUntil: 'networkidle0',
            timeout: 60000
        });
        
        // Wait for the journal to be generated (check for journal-content)
        console.log('⏳ Waiting for journal content to load...');
        await page.waitForSelector('#journal-content', { timeout: 60000 });
        
        // Wait for JavaScript to execute and generate content
        console.log('⏳ Waiting for JavaScript to generate journal content...');
        await new Promise(resolve => setTimeout(resolve, 3000));
        
        // Trigger journal generation if it hasn't started
        await page.evaluate(() => {
            // Check if generateMasterJournal exists and call it
            if (typeof generateMasterJournal === 'function') {
                console.log('Calling generateMasterJournal...');
                generateMasterJournal();
            }
        });
        
        // Wait for the journal generation to complete by checking for page numbers
        console.log('⏳ Waiting for journal generation to complete...');
        
        // First, check if the function exists and wait for it to be called
        await page.evaluate(() => {
            return new Promise((resolve) => {
                // Check if already generating
                if (window.journalGenerationInProgress) {
                    console.log('Journal generation already in progress...');
                }
                
                // Wait for generation to complete
                const checkComplete = setInterval(() => {
                    const pages = document.querySelectorAll('.page');
                    const journalContent = document.getElementById('journal-content');
                    const hasManyPages = pages.length > 50;
                    const hasContent = journalContent && journalContent.children.length > 0;
                    
                    if (hasManyPages && hasContent && !window.journalGenerationInProgress) {
                        clearInterval(checkComplete);
                        resolve();
                    }
                }, 500);
                
                // Timeout after 2 minutes
                setTimeout(() => {
                    clearInterval(checkComplete);
                    resolve();
                }, 120000);
            });
        });
        
        // Now wait for pages to actually appear
        let pagesLoaded = false;
        let attempts = 0;
        const maxAttempts = 120; // 120 attempts * 1 second = 2 minutes max
        
        while (!pagesLoaded && attempts < maxAttempts) {
            const result = await page.evaluate(() => {
                const pages = document.querySelectorAll('.page');
                const pageNumbers = document.querySelectorAll('.page-number');
                const journalContent = document.getElementById('journal-content');
                const hasContent = journalContent && journalContent.children.length > 0;
                const lastPageNumber = Array.from(pageNumbers).map(p => p.textContent.trim()).filter(p => p && p !== '001' && p !== '002').pop();
                return {
                    pageCount: pages.length,
                    pageNumberCount: pageNumbers.length,
                    hasContent: hasContent,
                    lastPageNumber: lastPageNumber,
                    journalChildren: journalContent ? journalContent.children.length : 0
                };
            });
            
            if (attempts % 10 === 0 || result.pageCount > 50) {
                console.log(`   Attempt ${attempts + 1}: Found ${result.pageCount} pages, ${result.pageNumberCount} page numbers, ${result.journalChildren} journal children (last page: ${result.lastPageNumber || 'N/A'})`);
            }
            
            // Wait for at least 80 pages (journal should have ~140+ pages, but static HTML has ~18)
            if (result.pageCount >= 80 && result.pageNumberCount >= 80 && result.hasContent) {
                pagesLoaded = true;
                console.log(`✅ Journal content loaded: ${result.pageCount} pages`);
                break;
            }
            
            await new Promise(resolve => setTimeout(resolve, 1000)); // Wait 1 second
            attempts++;
        }
        
        if (!pagesLoaded) {
            const finalCheck = await page.evaluate(() => {
                return {
                    pages: document.querySelectorAll('.page').length,
                    pageNumbers: document.querySelectorAll('.page-number').length,
                    journalChildren: document.getElementById('journal-content')?.children.length || 0
                };
            });
            console.warn(`⚠️  Timeout waiting for all pages. Found ${finalCheck.pages} pages, ${finalCheck.pageNumbers} page numbers, ${finalCheck.journalChildren} journal children. Proceeding anyway...`);
        }
        
        // Wait a bit more for any dynamic content to finish rendering
        console.log('⏳ Finalizing content...');
        await new Promise(resolve => setTimeout(resolve, 5000));
        
        // Wait for all images (including QR codes) to load
        console.log('⏳ Waiting for images to load...');
        
        // Specifically wait for QR code images
        const qrCodeImages = [
            'qr-chapter1-goals.png',
            'qr-chapter2-daily.png',
            'qr-chapter3-dashboard.png',
            'qr-chapter4-stats.png',
            'qr-chapter5-dashboard.png'
        ];
        
        // Function to wait for QR codes with retries
        const waitForQRCodes = async (maxRetries = 10) => {
            for (let attempt = 0; attempt < maxRetries; attempt++) {
                const qrCheck = await page.evaluate(async (qrCodes, baseUrl) => {
                    const checkImageLoaded = (img) => {
                        return new Promise((resolve) => {
                            if (img.complete && img.naturalHeight > 0) {
                                resolve(true);
                                return;
                            }
                            
                            let resolved = false;
                            const timeout = setTimeout(() => {
                                if (!resolved) {
                                    resolved = true;
                                    resolve(false);
                                }
                            }, 10000); // 10 second timeout
                            
                            img.onload = () => {
                                if (!resolved) {
                                    resolved = true;
                                    clearTimeout(timeout);
                                    resolve(true);
                                }
                            };
                            
                            img.onerror = () => {
                                if (!resolved) {
                                    resolved = true;
                                    clearTimeout(timeout);
                                    console.warn(`Image failed to load: ${img.src}`);
                                    resolve(false);
                                }
                            };
                            
                            // Force reload if not loaded
                            if (!img.complete) {
                                const originalSrc = img.src;
                                img.src = '';
                                img.src = originalSrc;
                            }
                        });
                    };
                    
                    // Find all QR code images
                    const allImages = Array.from(document.images);
                    const qrImages = allImages.filter(img => {
                        return qrCodes.some(qr => img.src.includes(qr));
                    });
                    
                    console.log(`Found ${qrImages.length} QR code images out of ${qrCodes.length} expected`);
                    
                    // Wait for all QR code images with individual timeouts
                    const results = await Promise.all(qrImages.map(checkImageLoaded));
                    const loadedCount = results.filter(r => r).length;
                    
                    // Also wait for all other images
                    const otherImages = allImages.filter(img => {
                        return !qrCodes.some(qr => img.src.includes(qr));
                    });
                    await Promise.all(otherImages.map(checkImageLoaded));
                    
                    // Get detailed status
                    const details = qrImages.map(img => ({
                        src: img.src,
                        loaded: img.complete && img.naturalHeight > 0,
                        fileName: img.src.split('/').pop(),
                        naturalWidth: img.naturalWidth,
                        naturalHeight: img.naturalHeight
                    }));
                    
                    return { 
                        qrLoaded: loadedCount, 
                        totalQr: qrImages.length,
                        details: details
                    };
                }, qrCodeImages, baseUrl);
                
                console.log(`\n📊 QR Code Status (Attempt ${attempt + 1}/${maxRetries}):`);
                console.log(`   Total QR codes found: ${qrCheck.totalQr}`);
                console.log(`   QR codes loaded: ${qrCheck.qrLoaded}/${qrCodeImages.length}`);
                qrCheck.details.forEach((qr, i) => {
                    const status = qr.loaded ? '✅' : '❌';
                    const size = qr.loaded ? `(${qr.naturalWidth}x${qr.naturalHeight})` : '';
                    console.log(`   ${i + 1}. ${qr.fileName}: ${status} ${size}`);
                    if (!qr.loaded) {
                        console.log(`      Source: ${qr.src}`);
                    }
                });
                
                // If all QR codes are loaded, break
                if (qrCheck.qrLoaded >= qrCodeImages.length && qrCheck.totalQr >= qrCodeImages.length) {
                    console.log('✅ All QR codes loaded successfully!');
                    break;
                }
                
                // Wait before retrying
                if (attempt < maxRetries - 1) {
                    console.log(`⏳ Waiting 3 seconds before retry...`);
                    await new Promise(resolve => setTimeout(resolve, 3000));
                    
                    // Force page reload of images
                    await page.evaluate(() => {
                        const qrImages = Array.from(document.images).filter(img => 
                            img.src.includes('qr-chapter')
                        );
                        qrImages.forEach(img => {
                            if (!img.complete || img.naturalHeight === 0) {
                                const originalSrc = img.src;
                                img.src = '';
                                img.src = originalSrc + '?t=' + Date.now();
                            }
                        });
                    });
                }
            }
        };
        
        await waitForQRCodes(10);
        
        // Final verification
        const finalCheck = await page.evaluate(() => {
            const qrImages = Array.from(document.images).filter(img => 
                img.src.includes('qr-chapter')
            );
            const loadedQrImages = qrImages.filter(img => 
                img.complete && img.naturalHeight > 0
            );
            
            return {
                total: qrImages.length,
                loaded: loadedQrImages.length,
                details: qrImages.map(img => ({
                    src: img.src,
                    loaded: img.complete && img.naturalHeight > 0,
                    fileName: img.src.split('/').pop(),
                    naturalWidth: img.naturalWidth,
                    naturalHeight: img.naturalHeight
                }))
            };
        });
        
        console.log(`\n📊 Final QR Code Status:`);
        console.log(`   Total QR codes found: ${finalCheck.total}`);
        console.log(`   QR codes loaded: ${finalCheck.loaded}/${qrCodeImages.length}`);
        
        if (finalCheck.loaded < qrCodeImages.length) {
            console.warn(`⚠️  WARNING: Only ${finalCheck.loaded}/${qrCodeImages.length} QR codes are loaded!`);
            console.warn(`   The PDF will be generated, but some QR codes may be missing.`);
            finalCheck.details.forEach((qr, i) => {
                if (!qr.loaded) {
                    console.warn(`   Missing: ${qr.fileName} (${qr.src})`);
                }
            });
        } else {
            console.log('✅ All QR codes verified and loaded!');
        }
        
        // Additional wait to ensure everything is rendered
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        console.log('📄 Generating PDF...');
        
        // Generate PDF with A5 page size
        await page.pdf({
            path: 'Leverage-Journal-A5.pdf',
            format: 'A5',
            printBackground: true,
            margin: {
                top: '0mm',
                right: '0mm',
                bottom: '0mm',
                left: '0mm'
            },
            preferCSSPageSize: true,
            displayHeaderFooter: false
        });
        
        console.log('✅ PDF generated successfully: Leverage-Journal-A5.pdf');
        
    } catch (error) {
        console.error('❌ Error generating PDF:', error);
        throw error;
    } finally {
        await browser.close();
        server.close();
        console.log('🔒 Server closed');
    }
}

// Run the PDF generation
generatePDF().catch(console.error);
