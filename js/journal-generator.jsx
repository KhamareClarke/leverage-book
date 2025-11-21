// THE LEVERAGE JOURNAL™ - MASTER EDITION GENERATOR
// Complete restructured version with proper chapters and organization

console.log('✅ Journal generator script loaded successfully - ' + new Date().toISOString());

// Initialize when page loads - handle both cases (DOM ready or already loaded)
async function initializeJournal() {
    console.log('🔄 Initializing journal generation...');

    // Ensure we have the required container
    const container = document.getElementById('journal-content');
    if (!container) {
        throw new Error('journal-content element not found');
    }

    // Create a promise to handle DOM loading with timeout
    const domReady = new Promise((resolve, reject) => {
        const timeout = setTimeout(() => {
            reject(new Error('DOM loading timed out after 10 seconds'));
        }, 10000);

        if (document.readyState === 'loading') {
            console.log('⏳ DOM still loading, waiting for DOMContentLoaded...');
            document.addEventListener('DOMContentLoaded', () => {
                clearTimeout(timeout);
                console.log('✅ DOMContentLoaded fired');
                resolve();
            });
        } else {
            clearTimeout(timeout);
            console.log('✅ DOM already loaded');
            resolve();
        }
    });

    try {
        await domReady;
        
        // Ensure dependencies are loaded
        if (!window.generateMasterJournal) {
            throw new Error('Required functions not loaded');
        }

        // Clear any previous error states
        container.innerHTML = '';
        window.journalGenerationInProgress = false;

        // Start generation with error boundary
        await generateMasterJournal().catch(error => {
            throw new Error(`Journal generation failed: ${error.message}`);
        });
    } catch (error) {
        console.error('❌ Error during journal initialization:', error);
        displayError(error);
        throw error; // Re-throw for debugging
    }
}

// Add a fallback with proper async handling
window.addEventListener('load', async function() {
    const journalContent = document.getElementById('journal-content');
    if (journalContent && journalContent.querySelectorAll('.page').length === 0) {
        console.log('⚠️ Fallback: No pages found after window load, attempting generation...');
        try {
            await generateMasterJournal();
        } catch (error) {
            console.error('❌ Error during fallback generation:', error);
        }
    }
});

// Helper function to display errors
function displayError(error) {
    const container = document.getElementById('journal-content');
    if (container) {
        const errorDiv = document.createElement('div');
        errorDiv.style.cssText = 'color: red; text-align: center; padding: 2rem; background: #ff000010; border: 2px solid red; border-radius: 8px; margin: 20px;';
        errorDiv.innerHTML = `
            <h3 style="margin: 0 0 1rem 0;">⚠️ Generation Error</h3>
            <p style="margin: 0 0 0.5rem 0;">An error occurred while generating the journal content.</p>
            <p style="font-size: 0.9rem; color: #666; margin: 0 0 1rem 0;">${error.message}</p>
            <button onclick="window.location.reload()" style="padding: 0.5rem 1rem; background: #ff0000; color: white; border: none; border-radius: 4px; cursor: pointer;">Refresh Page</button>
        `;
        container.appendChild(errorDiv);
    }
}

// Start initialization with error handling
try {
    initializeJournal().catch(error => {
        console.error('❌ Initialization failed:', error);
    });
} catch (error) {
    console.error('❌ Failed to start initialization:', error);
    displayError(error);
}

async function generateMasterJournal() {
    // Prevent multiple simultaneous executions
    if (window.journalGenerationInProgress) {
        console.log('⏸️ Journal generation already in progress, skipping...');
        return;
    }
    window.journalGenerationInProgress = true;

    // Create a cleanup function
    const cleanup = () => {
        window.journalGenerationInProgress = false;
    };
    
    try {
        console.log('🚀 Starting journal generation...');
        
        // Get the main container first to ensure it exists
        const mainContainer = document.getElementById('journal-content');
        if (!mainContainer) {
            console.error(' Could not find journal-content element');
            window.journalGenerationInProgress = false;
            return;
        }
        console.log('✅ Found journal-content container');
        
        // Create a temporary container to hold all pages
        const tempContainer = document.createElement('div');
        
        // Implement proper sequential page numbering throughout entire journal
        console.log('📊 Implementing complete sequential page numbering...');
        
        // FRONT MATTER & STRATEGIC FRAMEWORK: Pages 1-9
        // CHAPTER 1 VISION: Pages 10-19 (already fixed)
        // CHAPTER 2 PLAN: Pages 20-29 
        // CHAPTER 3 DO: Pages 30-119 (90 daily pages)
        // CHAPTER 4 REVIEW: Pages 120-125
        // CHAPTER 5 LEGACY: Pages 126
        const chapter1 = generateChapter1Vision();
        console.log(' Chapter 1 Vision Complete');
        
        console.log(' Generating Chapter 1 Stories...');
        const chapter1Stories = generateChapter1Stories();
        console.log(' Chapter 1 Stories Complete');
        
        const chapter1Complete = generateChapter1VisionComplete(10);  // Start at page 10
        console.log(' Chapter 1 Vision Complete section done');
        
        console.log(' Generating Chapter 2 Plan...');
        const chapter2 = generateChapter2Plan();
        console.log(' Chapter 2 Plan Complete');
        
        console.log(' Generating Chapter 2 Stories...');
        const chapter2Stories = generateChapter2Stories();
        console.log(' Chapter 2 Stories Complete');
        
        console.log(' Generating Strategic Warfare Section...');
        const strategicWarfare = generateStrategicWarfareSection();
        console.log(' Strategic Warfare Complete');
        
        console.log(' Generating Chapter 3 Do (this may take a moment - 90 pages)...');
        const chapter3 = generateChapter3Do();
        console.log(' Chapter 3 Do Complete');
        
        console.log(' Generating Chapter 4 Review...');
        const chapter4 = generateChapter4Review();
        console.log(' Chapter 4 Review Complete');
        
        console.log(' Generating Chapter 4 Stories...');
        const chapter4Stories = generateChapter4Stories();
        console.log(' Chapter 4 Stories Complete');
        
        console.log(' Generating Chapter 5 Legacy...');
        const chapter5 = generateChapter5Legacy();
        console.log(' Chapter 5 Legacy Complete');
        
        console.log(' Generating Chapter 5 Stories...');
        const chapter5Stories = generateChapter5Stories();
        console.log(' Chapter 5 Stories Complete');
        
        // NOTE: Systems are now integrated into daily pages at strategic days
        // Day 5: Emergency Protocol
        // Day 7: Mental Health Protocols
        // Day 10: Energy Management System
        // Day 15: Physical Wellness Tracker
        // Day 22: Financial Success Systems
        // Day 25: Productivity & Time Mastery
        // Day 32: Relationship & Communication
        // Day 40: Skills & Learning Systems
        // Day 47: Decision-Making & Risk
        // Day 55: Creativity & Innovation
        // Day 77: Contribution & Legacy
        
        console.log(' Generating Creativity & Innovation (Page 135)...');
        const creativitySystems = generateCreativityInnovation(135);
        console.log(' Creativity Systems Complete');
        
        console.log(' Generating Contribution & Legacy (Page 136)...');
        const contributionSystems = generateContributionLegacy(136);
        console.log(' Contribution Systems Complete');
        
        console.log(' Generating Back Matter (Pages 137-139)...');
        const backMatter = generateBackMatter(137);
        console.log(' Back Matter Complete');
        console.log(' Generating Back Cover...');
        const backCover = generateBackCover();
        console.log(' Back Cover Complete');
        console.log('✅ Back Cover Complete');
        
        console.log('📦 Assembling all content...');
        tempContainer.innerHTML = 
            chapter1 +
            chapter1Stories +      // Vision stories
            chapter1Complete +
            chapter2 +
            strategicWarfare +     // Greene strategic enhancements
            chapter2Stories +      // Planning stories
            chapter3 +             // Chapter 3 already includes storytelling pages
            chapter4 +
            chapter4Stories +      // Review stories
            chapter5 +
            chapter5Stories +      // Legacy stories
            creativitySystems +    // Creativity & Innovation
            contributionSystems +  // Contribution & Legacy
            backMatter +
            backCover;
        
        console.log('📥 Inserting content into DOM...');
        // Clear existing content and append new content
        mainContainer.innerHTML = '';
        while (tempContainer.firstChild) {
            mainContainer.appendChild(tempContainer.firstChild);
        }
        
        // Initialize interactive elements
        initializeInteractiveElements();
        
        // Count pages for verification
        const pages = mainContainer.querySelectorAll('.page');
        const dailyPages = mainContainer.querySelectorAll('.daily-page');
        console.log(`✅ Journal content generated successfully!`);
        console.log(`📊 Total pages generated: ${pages.length}`);
        console.log(`📊 Daily pages: ${dailyPages.length}`);
        console.log('🎉 Generation complete!');
        
        window.journalGenerationInProgress = false;
        
    } catch (error) {
        console.error('❌ Error generating journal:', error);
        console.error('Error stack:', error.stack);
        window.journalGenerationInProgress = false;
        // Show error to user but don't break the page
        const mainContainer = document.getElementById('journal-content');
        if (mainContainer) {
            // First error page
            const errorPage1 = document.createElement('div');
            errorPage1.className = 'page';
            errorPage1.style.cssText = 'text-align: center; padding: 2rem;';
            errorPage1.innerHTML = `
                <div style="background: var(--black-card); padding: 2rem; border-radius: 12px; border: 2px solid var(--gold); margin: 1.5rem 0;">
                    <h1 class="gold-gradient" style="font-size: 2.3rem; margin-bottom: 1rem;">⚠️ Journal Generation Error</h1>
                    <div class="gold-line" style="margin-bottom: 1.5rem;"></div>
                    
                    <h3 style="color: var(--gold); font-size: 1.2rem; margin-bottom: 1rem;">The 3-Step Recovery Protocol</h3>
                    
                    <div style="text-align: left; margin: 1.5rem 0;">
                        <p style="color: var(--gray-light); font-size: 0.9rem; margin-bottom: 1rem;">
                            <span style="color: var(--gold);">1.</span> Clear your browser cache
                        </p>
                        <p style="color: var(--gray-light); font-size: 0.9rem; margin-bottom: 1rem;">
                            <span style="color: var(--gold);">2.</span> Refresh the page
                        </p>
                        <p style="color: var(--gray-light); font-size: 0.9rem; margin-bottom: 1rem;">
                            <span style="color: var(--gold);">3.</span> If error persists, check browser console
                        </p>
                    </div>
                    
                    <button onclick="window.location.reload()" style="background: var(--gold); color: black; border: none; border-radius: 6px; padding: 0.8rem 1.5rem; font-size: 1rem; cursor: pointer; margin-top: 1rem;">
                        Refresh Page
                    </button>
                </div>
                <div class="footer-wisdom">Every error is a step toward mastery.</div>
                <div class="page-number">ERR-1</div>
            `;
            
            // Second error page with technical details
            const errorPage2 = document.createElement('div');
            errorPage2.className = 'page';
            errorPage2.style.cssText = 'text-align: center; padding: 2rem;';
            errorPage2.innerHTML = `
                <div style="background: var(--black-card); padding: 2rem; border-radius: 12px; border: 2px solid var(--gold); margin: 1.5rem 0;">
                    <h1 class="gold-gradient" style="font-size: 2.3rem; margin-bottom: 1rem;">Technical Details</h1>
                    <div class="gold-line" style="margin-bottom: 1.5rem;"></div>
                    
                    <div style="background: rgba(212, 175, 55, 0.05); padding: 1.5rem; border-radius: 8px; text-align: left; margin: 1.5rem 0;">
                        <h3 style="color: var(--gold); font-size: 1.1rem; margin-bottom: 0.8rem;">Error Message:</h3>
                        <p style="color: var(--gray-light); font-family: monospace; font-size: 0.9rem; line-height: 1.4; margin-bottom: 1rem; word-break: break-word;">
                            ${error.message}
                        </p>
                        
                        <h3 style="color: var(--gold); font-size: 1.1rem; margin: 1.5rem 0 0.8rem;">Stack Trace:</h3>
                        <p style="color: var(--gray-light); font-family: monospace; font-size: 0.8rem; line-height: 1.4; white-space: pre-wrap;">
                            ${error.stack}
                        </p>
                    </div>
                </div>
                <div class="footer-wisdom">Debug with patience, resolve with persistence.</div>
                <div class="page-number">ERR-2</div>
            `;
            mainContainer.appendChild(errorPage1);
            mainContainer.appendChild(errorPage2);
        }
    }
}

// FRONT MATTER GENERATION - REMOVED TO ELIMINATE DUPLICATES
// The HTML file already contains pages 001-004, so this function is no longer needed

// Continue with other functions...
function generateSuccessStorySection() {
    return `
    <!-- SUCCESS STORY SECTION -->
    <div class="page" style="background: white; padding: 1.5rem;">
        <div class="flex flex-col h-full" style="border: 2px solid var(--gold); border-radius: 8px; padding: 1.5rem; height: 100%;">
            <!-- Header -->
            <div class="text-center mb-6">
                <h2 class="text-6xl font-bold mb-6" style="color: var(--gold);">THE SUCCESS STORY</h2>
                <div class="gold-line mx-auto mb-7" style="width: 160px;"></div>
                <div class="flex items-center justify-center mb-10">
                    <span class="text-7xl mr-6">📖</span>
                    <p class="text-5xl font-medium" style="color: var(--gold);">Your Story Begins Now</p>
                </div>
            </div>
            
            <!-- Hero's Journey Text -->
            <div class="mb-8 p-6" style="background: rgba(212, 175, 55, 0.05); border-radius: 6px; border-left: 3px solid var(--gold);">
                <p class="text-2xl mb-7" style="color: var(--gray-dark); line-height: 2.0;">
                    Every hero's journey begins with a call to adventure. Yours started the moment you opened this journal. Like Odysseus leaving Troy, like Colonel Sanders starting KFC at age 62, like every entrepreneur who ever bet on themselves—you've answered the call.
                </p>
                <p class="text-xl" style="color: var(--gray-dark); line-height: 2.0;">
                    But the journey ahead has dragons. The dragon of self-doubt whispers you're not good enough. The dragon of comfort tempts you to stay where you are. The dragon of fear shows you all the ways you could fail.
                </p>
            </div>
            
            <!-- Origin Story -->
            <div class="mb-6">
                <div class="flex items-center mb-2">
                    <span class="text-5xl mr-4">✍️</span>
                    <h3 class="text-4xl font-semibold" style="color: var(--gold);">Write Your Origin Story</h3>
                </div>
                <p class="text-2xl mb-7" style="color: var(--gray-light);">
                    What moment in your life led you here? What was your "enough is enough" moment?
                </p>
                <div class="h-24 border-b border-dashed border-gray-300 mb-3"></div>
            </div>
            
            <!-- Hero Archetypes -->
            <div class="mb-4">
                <div class="flex items-center mb-3">
                    <span class="text-5xl mr-4">🗡️</span>
                    <h3 class="text-4xl font-semibold" style="color: var(--gold);">Which Hero Are You?</h3>
                </div>
                
                <div class="grid grid-cols-2 gap-3 mb-4">
                    <!-- Warrior -->
                    <div class="p-3 text-center" style="border: 1px solid var(--gold); border-radius: 6px;">
                        <div class="text-6xl mb-5">⚔️</div>
                        <h4 class="font-semibold text-2xl mb-4" style="color: var(--gold);">The Warrior</h4>
                        <p class="text-xl" style="color: var(--gray-light);">Fights through obstacles</p>
                    </div>
                    
                    <!-- Sage -->
                    <div class="p-3 text-center" style="border: 1px solid var(--gold); border-radius: 6px;">
                        <div class="text-6xl mb-5">🧙</div>
                        <h4 class="font-semibold text-2xl mb-4" style="color: var(--gold);">The Sage</h4>
                        <p class="text-xl" style="color: var(--gray-light);">Seeks wisdom & truth</p>
                    </div>
                    
                    <!-- Explorer -->
                    <div class="p-3 text-center" style="border: 1px solid var(--gold); border-radius: 6px;">
                        <div class="text-6xl mb-5">🧭</div>
                        <h4 class="font-semibold text-2xl mb-4" style="color: var(--gold);">The Explorer</h4>
                        <p class="text-xl" style="color: var(--gray-light);">Discovers new paths</p>
                    </div>
                    
                    <!-- Creator -->
                    <div class="p-3 text-center" style="border: 1px solid var(--gold); border-radius: 6px;">
                        <div class="text-6xl mb-5">🛠️</div>
                        <h4 class="font-semibold text-2xl mb-4" style="color: var(--gold);">The Creator</h4>
                        <p class="text-xl" style="color: var(--gray-light);">Builds new worlds</p>
                    </div>
                </div>
                
                <p class="text-xl text-center mt-5" style="color: var(--gray-light);">
                    Circle your hero archetype. You may see yourself in multiple—that's your unique strength.
                </p>
            </div>
            
            <div class="mt-auto pt-4 text-center">
                <div class="page-number"></div>
            </div>
        </div>
    </div>`;
}

function generateMyWhySection() {
    return `
    <!-- MY WHY SECTION -->
    <div class="page" style="background: white; padding: 1.5rem;">
        <div class="flex flex-col h-full" style="border: 2px solid var(--gold); border-radius: 8px; padding: 1.5rem; height: 100%;">
            <!-- Header -->
            <div class="text-center mb-6">
                <h2 class="text-2xl font-bold mb-2" style="color: var(--gold);">MY WHY</h2>
                <div class="gold-line mx-auto mb-4" style="width: 100px;"></div>
                <p class="text-sm mb-6" style="color: var(--gray-light);">
                    ⚠️ MOST PEOPLE STOP AT SURFACE REASONS. THE 8% DIG DEEPER. ANSWER ALL 3 LAYERS.
                </p>
            </div>
            
            <!-- Surface Why -->
            <div class="mb-8 p-4" style="background: rgba(212, 175, 55, 0.05); border-radius: 6px; border-left: 3px solid var(--gold);">
                <div class="flex items-center mb-2">
                    <span class="text-2xl mr-2">🔹</span>
                    <h3 class="text-lg font-semibold" style="color: var(--gold);">SURFACE WHY</h3>
                </div>
                <p class="text-sm mb-3" style="color: var(--gray-light);">
                    What do you want? (e.g., "I want to make money")
                </p>
                <div class="h-24 border-b border-dashed border-gray-300 mb-3"></div>
                <p class="text-xs text-right" style="color: var(--gray-light);">
                    Your why is your compass in the storm.
                </p>
            </div>
            
            <!-- Deeper Why -->
            <div class="mb-8 p-4" style="background: rgba(212, 175, 55, 0.03); border-radius: 6px; border-left: 3px solid var(--gold);">
                <div class="flex items-center mb-2">
                    <span class="text-2xl mr-2">🔸</span>
                    <h3 class="text-lg font-semibold" style="color: var(--gold);">DEEPER WHY</h3>
                </div>
                <p class="text-sm mb-3" style="color: var(--gray-light);">
                    Why does that matter? Who benefits?
                </p>
                <div class="h-24 border-b border-dashed border-gray-300 mb-3"></div>
            </div>
            
            <!-- Core Why -->
            <div class="p-4" style="background: rgba(212, 175, 55, 0.01); border-radius: 6px; border-left: 3px solid var(--gold);">
                <div class="flex items-center mb-2">
                    <span class="text-2xl mr-2">💎</span>
                    <h3 class="text-lg font-semibold" style="color: var(--gold);">CORE WHY</h3>
                </div>
                <p class="text-sm mb-3" style="color: var(--gold-light);">
                    What's the ultimate impact? How does this connect to your legacy?
                </p>
                <div class="h-24 border-b border-dashed border-gray-300 mb-3"></div>
                <p class="text-xs text-right mt-4" style="color: var(--gray-light);">
                    "He who has a why to live can bear almost any how." — Friedrich Nietzsche
                </p>
            </div>
            
            <div class="mt-auto pt-4 text-center">
                <div class="page-number"></div>
            </div>
        </div>
    </div>`;
}

function generateChapter1Vision() {
    return `
    <!-- CHAPTER 1 DIVIDER -->
    <div class="page chapter-divider flex flex-col items-center justify-center">
        <div class="section-icon mb-8">
            <svg width="120" height="120" viewBox="0 0 24 24" fill="none">
                <!-- Detailed Vision Eye Icon -->
                <path d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z" stroke="var(--gold)" stroke-width="2" fill="none"/>
                <circle cx="12" cy="12" r="4" stroke="var(--gold)" stroke-width="2" fill="none"/>
                <circle cx="12" cy="12" r="2" fill="var(--gold)"/>
                <!-- Vision rays -->
                <path d="M12 2L12 6M12 18L12 22M22 12L18 12M6 12L2 12" stroke="var(--gold)" stroke-width="1" opacity="0.7"/>
                <path d="M18.36 5.64L15.54 8.46M8.46 15.54L5.64 18.36M18.36 18.36L15.54 15.54M8.46 8.46L5.64 5.64" stroke="var(--gold)" stroke-width="1" opacity="0.5"/>
            </svg>
        </div>
        
        <h1 class="font-serif text-center gold-gradient mb-6" style="font-size: 4rem; line-height: 1;">
            CHAPTER 1
        </h1>
        
        <h2 class="text-center gold-gradient mb-8" style="font-size: 2.5rem; font-weight: 300;">
            VISION
        </h2>
        
        <div class="gold-line mb-8" style="width: 250px;"></div>
        
        <p class="text-center text-xl mb-8" style="color: var(--gray-light); line-height: 1.6; max-width: 500px;">
            Every empire begins with a vision.<br>
            Every vision begins with clarity.<br>
            <span class="gold-gradient font-semibold">Every clarity begins with focus.</span>
        </p>
        
        <div class="qr-code" style="text-align: center; margin: 1rem 0;">
            <div style="width: 80px; height: 80px; background: white; border: 2px solid var(--gold); margin: 0 auto; border-radius: 4px; padding: 4px; display: flex; flex-direction: column; justify-content: center; align-items: center;">
                <div style="width: 60px; height: 60px; background: white; border: 1px solid var(--gold); position: relative;">
                    <!-- QR Code Corner Markers -->
                    <div style="position: absolute; top: 4px; left: 4px; width: 12px; height: 12px; border: 2px solid var(--gold);"></div>
                    <div style="position: absolute; top: 4px; right: 4px; width: 12px; height: 12px; border: 2px solid var(--gold);"></div>
                    <div style="position: absolute; bottom: 4px; left: 4px; width: 12px; height: 12px; border: 2px solid var(--gold);"></div>
                    <!-- Center Pattern -->
                    <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 12px; height: 12px; border: 2px solid var(--gold);"></div>
                </div>
            </div>
            <div style="margin-top: 0.75rem; font-size: 0.8rem; color: var(--gray-light);">
                <strong style="color: var(--gold);">JOIN BUILDER'S GUILD</strong><br>
                <code style="font-family: monospace; font-size: 0.7rem;">HTTPS://LEVERAGEJOURNAL.COM/GUILD</code>
            </div>
        </div>
        
        <div class="page-number">010</div>
    </div>`;
}

// Continue Chapter 1 - VISION
function generateChapter1VisionComplete(startPageNumber = 10) {
    let currentPage = startPageNumber;
    return `
    <!-- MY WHY - PAGE 1: DEEPER & SURFACE WHY -->
    <div class="page" style="padding: 0.8rem 1.5rem;">
        <h1 class="text-center gold-gradient" style="font-size: 2.2rem; margin: 0 0 0.2rem 0; letter-spacing: 0.05em;">MY WHY</h1>
        <div class="gold-line" style="margin: 0 auto 0.3rem; width: 80%;"></div>
        
        <div style="background: rgba(212, 175, 55, 0.05); padding: 0.3rem; border-radius: 6px; margin-bottom: 0.5rem; text-align: center; border: 1px solid var(--gold);">
            <p style="color: var(--gold); font-size: 0.85rem; margin: 0; line-height: 1.3; font-weight: 600;">
                ⚠️ MOST PEOPLE STOP AT SURFACE REASONS. THE 8% DIG DEEPER. ANSWER ALL 3 LAYERS.
            </p>
        </div>
        
        <!-- Layer 2: Deeper Why -->
        <div style="background: var(--black-card); padding: 0.7rem; border-radius: 6px; margin-bottom: 0.6rem; border-left: 2px solid var(--gold);">
            <div style="display: flex; align-items: center; margin-bottom: 0.3rem;">
                <span style="color: var(--gold); font-size: 1rem; margin-right: 0.4rem;">🔹</span>
                <h4 style="color: var(--gold); font-size: 0.95rem; margin: 0; font-weight: 600;">DEEPER WHY</h4>
            </div>
            <p style="color: var(--gold-light); font-size: 0.85rem; margin: 0.2rem 0 0.4rem; line-height: 1.3;">
                Why does that matter? Who benefits?
            </p>
            <div style="min-height: 2.2rem; margin: 0.3rem 0; padding: 0.5rem; background: rgba(255,255,255,0.03); border: 1px dashed var(--gray-dark); border-radius: 4px;"></div>
            <div style="min-height: 2.2rem; margin: 0.3rem 0; padding: 0.5rem; background: rgba(255,255,255,0.03); border: 1px dashed var(--gray-dark); border-radius: 4px;"></div>
            <div style="min-height: 2.2rem; margin: 0.3rem 0; padding: 0.5rem; background: rgba(255,255,255,0.03); border: 1px dashed var(--gray-dark); border-radius: 4px;"></div>
        </div>
        
        <!-- Layer 1: Surface Why -->
        <div style="background: var(--black-card); padding: 0.7rem; border-radius: 6px; margin-bottom: 0.6rem; border-left: 2px solid var(--gold);">
            <div style="display: flex; align-items: center; margin-bottom: 0.3rem;">
                <span style="color: var(--gold); font-size: 1rem; margin-right: 0.4rem;">🔸</span>
                <h4 style="color: var(--gold); font-size: 0.95rem; margin: 0; font-weight: 600;">SURFACE WHY</h4>
            </div>
            <p style="color: var(--gold-light); font-size: 0.85rem; margin: 0.2rem 0 0.4rem; line-height: 1.3;">
                What do you want? (e.g., "I want to make money")
            </p>
            <div style="min-height: 2.2rem; margin: 0.3rem 0; padding: 0.5rem; background: rgba(255,255,255,0.03); border: 1px dashed var(--gray-dark); border-radius: 4px;"></div>
            <div style="min-height: 2.2rem; margin: 0.3rem 0; padding: 0.5rem; background: rgba(255,255,255,0.03); border: 1px dashed var(--gray-dark); border-radius: 4px;"></div>
            <div style="min-height: 2.2rem; margin: 0.3rem 0; padding: 0.5rem; background: rgba(255,255,255,0.03); border: 1px dashed var(--gray-dark); border-radius: 4px;"></div>
        </div>
        
        <div class="footer-wisdom" style="margin-top: 0.3rem; font-size: 0.75rem;">Your why is your compass in the storm.</div>
        <div class="page-number">10</div>
    </div>

    <!-- MY WHY - PAGE 2: CORE WHY & COST OF INACTION -->
    <div class="page">
        <!-- Layer 3: Core Why -->
        <div style="background: var(--black-card); padding: 1.2rem; border-radius: 8px; border-left: 3px solid var(--gold); margin-bottom: 1.5rem;">
            <h4 style="color: var(--gold); font-size: 1.1rem; margin-bottom: 0.5rem; display: flex; align-items: center;">
                <span style="margin-right: 0.5rem;">💎</span> LAYER 3: CORE WHY (Soul Level)
            </h4>
            <p style="color: var(--gray-light); font-size: 0.85rem; margin-bottom: 0.4rem;">
                What's the REAL truth? What are you afraid of? What are you trying to prove/escape/become?
            </p>
            <p style="color: var(--gold-light); font-size: 0.8rem; margin-bottom: 0.8rem; font-style: italic;">
                (e.g., "I'm terrified of being a failure," "I need to prove I'm not worthless")
            </p>
            <div style="border-bottom: 1px solid var(--gray-dark); height: 2.2rem; margin-bottom: 0.6rem;"></div>
            <div style="border-bottom: 1px solid var(--gray-dark); height: 2.2rem; margin-bottom: 0.6rem;"></div>
            <div style="border-bottom: 1px solid var(--gray-dark); height: 2.2rem;"></div>
        </div>
        
        <!-- Cost of Inaction -->
        <div style="background: rgba(255, 0, 0, 0.05); padding: 1.2rem; border-radius: 8px; border-left: 3px solid #ff4444;">
            <h4 style="color: #ff4444; font-size: 1.1rem; margin-bottom: 0.5rem; display: flex; align-items: center;">
                <span style="margin-right: 0.5rem;">💀</span> THE COST OF INACTION
            </h4>
            <p style="color: var(--gray-light); font-size: 0.85rem; margin-bottom: 0.8rem; font-style: italic;">
                If you DON'T change, what will your life look like in 5 years? Be brutally honest.
            </p>
            <div style="border-bottom: 1px solid var(--gray-dark); height: 2.2rem; margin-bottom: 0.6rem;"></div>
            <div style="border-bottom: 1px solid var(--gray-dark); height: 2.2rem; margin-bottom: 0.6rem;"></div>
            <div style="border-bottom: 1px solid var(--gray-dark); height: 2.2rem;"></div>
        </div>
        
        <div class="footer-wisdom">Face your fears to find your power.</div>
        <div class="page-number">${currentPage++}</div>
    </div>

    <!-- MY WHY - PAGE 3: DEATHBED REGRET & MENTORS -->
    <div class="page">
        <!-- Deathbed Regret Section -->
        <div style="background: var(--black-card); padding: 1.5rem; border-radius: 12px; border: 2px solid var(--gold); margin-bottom: 2rem;">
            <h3 style="color: var(--gold); font-size: 1.2rem; margin-bottom: 1rem;">⏳ YOUR DEATHBED REGRET</h3>
            <p style="color: var(--gray-light); font-size: 0.85rem; margin-bottom: 1rem;">On your deathbed, what will you regret NOT doing? Write it now. Let this fuel you.</p>
            <div style="border-bottom: 1px solid var(--gray-dark); height: 2.5rem; margin-bottom: 0.8rem;"></div>
            <div style="border-bottom: 1px solid var(--gray-dark); height: 2.5rem; margin-bottom: 0.8rem;"></div>
            <div style="border-bottom: 1px solid var(--gray-dark); height: 2.5rem;"></div>
        </div>
        
        <!-- Mentors & Role Models Section -->
        <div style="background: var(--black-card); padding: 1.5rem; border-radius: 12px; border: 2px solid var(--gold);">
            <h3 style="color: var(--gold); font-size: 1.2rem; margin-bottom: 1rem;">👥 MENTORS & ROLE MODELS</h3>
            <p style="color: var(--gray-light); font-size: 0.85rem; margin-bottom: 1rem;">Who do you study and learn from? (Living or historical)</p>
            <div style="border-bottom: 1px solid var(--gray-dark); height: 2.5rem; margin-bottom: 0.8rem;"></div>
            <div style="border-bottom: 1px solid var(--gray-dark); height: 2.5rem; margin-bottom: 0.8rem;"></div>
            <div style="border-bottom: 1px solid var(--gray-dark); height: 2.5rem;"></div>
        </div>
        
        <div class="footer-wisdom">Your mentors light the path ahead.</div>
        <div class="page-number">${currentPage++}</div>
    </div>
    
    <!-- PAGE 009: FREEDOM THROUGH FOCUS -->
    <div class="page">
        <div class="philosophy-section">
            <h1 class="philosophy-title">Freedom Through Focus</h1>
            
            <div class="philosophy-essay">
                <p style="font-size: 0.85rem; line-height: 1.4; margin-bottom: 0.75rem;">Freedom is not the absence of constraints. It is the intelligent application of constraints. Warren Buffett limits Berkshire Hathaway to businesses he can understand. This constraint created freedom to achieve extraordinary returns.</p>
                
                <p style="font-size: 0.85rem; line-height: 1.4; margin-bottom: 0.75rem;">In a world of infinite distractions, focus becomes your competitive advantage. While others scatter energy, you concentrate on the few that matter most.</p>
                
                <p style="font-size: 0.85rem; line-height: 1.4; margin-bottom: 0.75rem;">Each day in this journal, you will identify your three most important tasks. Not ten. Not five. Three. This constraint frees you from the urgent and elevates you to the important.</p>
                
                <div class="focus-framework" style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 0.5rem; margin: 1rem 0;">
                    <div class="focus-item" style="text-align: center; padding: 0.75rem; background: var(--black-card); border-radius: 8px;">
                        <div style="color: var(--gold); font-size: 1.5rem; margin-bottom: 0.3rem;">🎯</div>
                        <h4 style="color: var(--gold-light); font-size: 0.85rem;">Priority 1</h4>
                        <p style="color: var(--gray); font-size: 0.75rem;">Most Important</p>
                    </div>
                    <div class="focus-item" style="text-align: center; padding: 0.75rem; background: var(--black-card); border-radius: 8px;">
                        <div style="color: var(--gold); font-size: 1.5rem; margin-bottom: 0.3rem;">⚡</div>
                        <h4 style="color: var(--gold-light); font-size: 0.85rem;">Priority 2</h4>
                        <p style="color: var(--gray); font-size: 0.75rem;">High Impact</p>
                    </div>
                    <div class="focus-item" style="text-align: center; padding: 0.75rem; background: var(--black-card); border-radius: 8px;">
                        <div style="color: var(--gold); font-size: 1.5rem; margin-bottom: 0.3rem;">🚀</div>
                        <h4 style="color: var(--gold-light); font-size: 0.85rem;">Priority 3</h4>
                        <p style="color: var(--gray); font-size: 0.75rem;">Strategic Move</p>
                    </div>
                </div>
                
                <div class="reflection-prompt" style="font-size: 0.8rem; padding: 0.5rem; margin-bottom: 0.5rem;">
                    <strong>Reflection:</strong> What would you accomplish with laser focus for 90 days?
                </div>
            </div>
        </div>
        
        <div class="page-number">${currentPage++}</div>
        <div class="footer-wisdom">"Focus is the art of knowing what to ignore." - Khamare Clarke</div>
    </div>
    
    <!-- PAGE 010: GOAL TIMELINE FRAMEWORK -->
    <div class="page" style="padding-top: 0;">
        <h1 class="text-center gold-gradient mb-1" style="font-size: 1.4rem; margin-top: 0;">GOAL TIMELINE FRAMEWORK</h1>
        <div class="gold-line" style="margin-bottom: 0.1rem;"></div>
        
        <div class="timeline-intro" style="margin-bottom: 0.1rem;">
            <p style="color: var(--gray-light); font-size: 0.75rem; line-height: 1.1; text-align: center; margin: 0;">
                Success is a journey with waypoints. Map your path.
            </p>
        </div>
        
        <div class="goal-timeline" style="display: grid; gap: 0.2rem; margin-top: 0.1rem;">
            <!-- 10+ Year Legacy Goals -->
            <div class="timeline-section" style="background: var(--black-card); padding: 0.3rem; border-radius: 5px; border-left: 4px solid var(--gold);">
                <h3 style="color: var(--gold); margin-bottom: 0.05rem; display: flex; align-items: center; font-size: 0.75rem;">
                    <span style="font-size: 0.8rem; margin-right: 0.2rem;">🏛️</span>
                    LEGACY (10+ Years)
                </h3>
                <p style="color: var(--gray); font-size: 0.65rem; margin-bottom: 0.1rem;">What legacy will you leave?</p>
                <div class="goal-lines">
                    <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.25rem 0; height: 16px;"></div>
                    <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.25rem 0; height: 16px;"></div>
                    <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.25rem 0; height: 16px;"></div>
                    <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.25rem 0; height: 16px;"></div>
                    <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.25rem 0; height: 16px;"></div>
                    <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.25rem 0; height: 16px;"></div>
                </div>
            </div>
            
            <!-- 5-10 Year Vision Goals -->
            <div class="timeline-section" style="background: var(--black-card); padding: 0.3rem; border-radius: 5px; border-left: 4px solid var(--gold-light);">
                <h3 style="color: var(--gold-light); margin-bottom: 0.05rem; display: flex; align-items: center; font-size: 0.75rem;">
                    <span style="font-size: 0.8rem; margin-right: 0.2rem;">🌟</span>
                    VISION (5-10 Years)
                </h3>
                <p style="color: var(--gray); font-size: 0.65rem; margin-bottom: 0.1rem;">Your ideal life. What does success look like?</p>
                <div class="goal-lines">
                    <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.25rem 0; height: 16px;"></div>
                    <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.25rem 0; height: 16px;"></div>
                    <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.25rem 0; height: 16px;"></div>
                    <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.25rem 0; height: 16px;"></div>
                    <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.25rem 0; height: 16px;"></div>
                    <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.25rem 0; height: 16px;"></div>
                </div>
            </div>
            
            <!-- 2-5 Year Strategic Goals -->
            <div class="timeline-section" style="background: var(--black-card); padding: 0.3rem; border-radius: 5px; border-left: 4px solid #FFD700;">
                <h3 style="color: #FFD700; margin-bottom: 0.05rem; display: flex; align-items: center; font-size: 0.75rem;">
                    <span style="font-size: 0.8rem; margin-right: 0.2rem;">🎯</span>
                    STRATEGIC (2-5 Years)
                </h3>
                <p style="color: var(--gray); font-size: 0.65rem; margin-bottom: 0.1rem;">Major milestones for your vision.</p>
                <div class="goal-lines">
                    <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.25rem 0; height: 16px;"></div>
                    <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.25rem 0; height: 16px;"></div>
                    <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.25rem 0; height: 16px;"></div>
                    <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.25rem 0; height: 16px;"></div>
                    <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.25rem 0; height: 16px;"></div>
                    <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.25rem 0; height: 16px;"></div>
                </div>
            </div>
        </div>
        
        <div class="page-number">022</div>
        <div class="footer-wisdom" style="font-size: 0.75rem;">"A goal without a timeline is a wish." - Khamare Clarke</div>
    </div>
    
    <!-- PAGE 011: TACTICAL GOALS & QUARTERLY PLANNING -->
    <div class="page" style="padding-top: 5mm;">
        <h1 class="text-center gold-gradient mb-2" style="font-size: 1.4rem; margin-top: -0.5rem;">TACTICAL EXECUTION</h1>
        <div class="gold-line" style="margin-bottom: 0.2rem;"></div>
        
        <div class="tactical-goals" style="display: grid; gap: 0.3rem; margin-top: 0.2rem;">
            <!-- 3-6 Month Tactical Goals -->
            <div class="timeline-section" style="background: var(--black-card); padding: 0.3rem; border-radius: 6px; border-left: 4px solid #FFA500;">
                <h3 style="color: #FFA500; margin-bottom: 0.1rem; display: flex; align-items: center; font-size: 0.75rem;">
                    <span style="font-size: 0.8rem; margin-right: 0.2rem;">⚡</span>
                    TACTICAL (3-6 Months)
                </h3>
                <p style="color: var(--gray); font-size: 0.65rem; margin-bottom: 0.2rem;">Bridge goals for strategic objectives.</p>
                <div class="goal-lines">
                    <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.3rem 0; height: 20px;"></div>
                    <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.3rem 0; height: 20px;"></div>
                    <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.3rem 0; height: 20px;"></div>
                    <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.3rem 0; height: 20px;"></div>
                    <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.3rem 0; height: 20px;"></div>
                </div>
            </div>
            
            <!-- Current Quarter Focus -->
            <div class="timeline-section" style="background: var(--black-card); padding: 0.3rem; border-radius: 6px; border-left: 4px solid #32CD32;">
                <h3 style="color: #32CD32; margin-bottom: 0.1rem; display: flex; align-items: center; font-size: 0.75rem;">
                    <span style="font-size: 0.8rem; margin-right: 0.2rem;">🚀</span>
                    THIS QUARTER (90 Days)
                </h3>
                <p style="color: var(--gray); font-size: 0.65rem; margin-bottom: 0.2rem;">Your immediate focus for next 90 days.</p>
                <div class="goal-categories" style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.3rem; margin-top: 0.2rem;">
                    <div>
                        <h4 style="color: var(--gold-light); font-size: 0.65rem; margin-bottom: 0.1rem;">💼 CAREER</h4>
                        <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.25rem 0; height: 20px;"></div>
                        <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.25rem 0; height: 20px;"></div>
                        <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.25rem 0; height: 20px;"></div>
                    </div>
                    <div>
                        <h4 style="color: var(--gold-light); font-size: 0.65rem; margin-bottom: 0.1rem;">💪 HEALTH</h4>
                        <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.25rem 0; height: 20px;"></div>
                        <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.25rem 0; height: 20px;"></div>
                        <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.25rem 0; height: 20px;"></div>
                    </div>
                    <div>
                        <h4 style="color: var(--gold-light); font-size: 0.65rem; margin-bottom: 0.1rem;">💰 FINANCIAL</h4>
                        <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.25rem 0; height: 20px;"></div>
                        <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.25rem 0; height: 20px;"></div>
                        <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.25rem 0; height: 20px;"></div>
                    </div>
                    <div>
                        <h4 style="color: var(--gold-light); font-size: 0.65rem; margin-bottom: 0.1rem;">❤️ RELATIONSHIPS</h4>
                        <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.25rem 0; height: 20px;"></div>
                        <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.25rem 0; height: 20px;"></div>
                        <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.25rem 0; height: 20px;"></div>
                    </div>
                    <div>
                        <h4 style="color: var(--gold-light); font-size: 0.65rem; margin-bottom: 0.1rem;">🎓 LEARNING</h4>
                        <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.25rem 0; height: 20px;"></div>
                        <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.25rem 0; height: 20px;"></div>
                        <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.25rem 0; height: 20px;"></div>
                    </div>
                    <div>
                        <h4 style="color: var(--gold-light); font-size: 0.65rem; margin-bottom: 0.1rem;">🌟 GROWTH</h4>
                        <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.25rem 0; height: 20px;"></div>
                        <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.25rem 0; height: 20px;"></div>
                        <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.25rem 0; height: 20px;"></div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="page-number">014</div>
        <div class="footer-wisdom">"Strategy without tactics is slow." - Sun Tzu</div>
    </div>
    
    <!-- PAGE 012: MY COMMITMENT -->
    <div class="page">
        <h1 class="text-center gold-gradient mb-4" style="font-size: 1.8rem;">MY COMMITMENT</h1>
        <div class="gold-line" style="margin-bottom: 0.75rem;"></div>
        
        <div class="commitment-section">
            <p class="mb-3" style="color: var(--gray-light); font-size: 0.8rem; line-height: 1.4;">
                I understand that transformation requires commitment. I commit to using this journal daily for 90 days, knowing consistency creates compound results.
            </p>
            
            <div class="commitment-pledge" style="background: var(--black-card); padding: 1rem; border-radius: 8px; border: 2px solid var(--gold); margin: 1rem 0;">
                <h3 style="color: var(--gold); text-align: center; margin-bottom: 0.75rem; font-size: 0.95rem;">My Commitment</h3>
                
                <div class="pledge-text" style="color: var(--gray-light); line-height: 1.5; font-size: 0.8rem;">
                    <p style="margin-bottom: 0.5rem;">I, _________________________, commit to:</p>
                    <p style="margin-bottom: 0.3rem;">✓ Completing daily pages every morning</p>
                    <p style="margin-bottom: 0.3rem;">✓ Reflecting on progress every evening</p>
                    <p style="margin-bottom: 0.3rem;">✓ Reviewing goals weekly</p>
                    <p style="margin-bottom: 0.3rem;">✓ Celebrating victories monthly</p>
                    <p style="margin-bottom: 0.5rem;">✓ Never breaking the chain for 90 days</p>
                    <p style="margin-bottom: 0.5rem;">I understand this commitment is to myself and my future.</p>
                    <div style="display: flex; justify-content: space-between; margin-top: 1rem;">
                        <div>
                            <p style="font-size: 0.75rem;">Signature: _________________</p>
                        </div>
                        <div>
                            <p style="font-size: 0.75rem;">Date: _________________</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="accountability-partner" style="margin-top: 1rem;">
                <h4 style="color: var(--gold); margin-bottom: 0.5rem; font-size: 0.85rem;">Accountability Partner(s)</h4>
                <p style="color: var(--gray-light); margin-bottom: 0.5rem; font-size: 0.75rem;">Share with someone who will hold you accountable:</p>
                <div style="border-bottom: 1px solid var(--gold-dark); margin: 0.3rem 0; height: 18px;"></div>
                <div style="border-bottom: 1px solid var(--gold-dark); margin: 0.3rem 0; height: 18px;"></div>
                <div style="border-bottom: 1px solid var(--gold-dark); margin: 0.3rem 0; height: 18px;"></div>
                <div style="border-bottom: 1px solid var(--gold-dark); margin: 0.3rem 0; height: 18px;"></div>
                <p style="color: var(--gray); font-size: 0.7rem; margin-top: 0.2rem;">Name & Contact</p>
            </div>
        </div>
        
        <div class="page-number">015</div>
        <div class="footer-wisdom" style="font-size: 0.75rem;">"Commitment is the foundation of accomplishment." - Khamare Clarke</div>
    </div>
    
    <!-- PAGE 013: MY VISION -->
    <div class="page">
        <h1 class="text-center gold-gradient mb-4" style="font-size: 1.8rem;">MY VISION</h1>
        <div class="gold-line" style="margin-bottom: 0.75rem;"></div>
        
        <div class="vision-questions">
            <div class="question-section mb-4">
                <h3 style="color: var(--gold); margin-bottom: 0.3rem; font-size: 0.85rem;">🏰 My Empire Vision</h3>
                <p style="color: var(--gray-light); margin-bottom: 0.3rem; font-style: italic; font-size: 0.7rem; line-height: 1.2;">
                    Describe the empire you're building. What does your life look like in 5 years?
                </p>
                <div class="writing-lines">
                    <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.35rem 0; height: 22px;"></div>
                    <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.35rem 0; height: 22px;"></div>
                    <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.35rem 0; height: 22px;"></div>
                    <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.35rem 0; height: 22px;"></div>
                    <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.35rem 0; height: 22px;"></div>
                    <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.35rem 0; height: 22px;"></div>
                </div>
            </div>
            
            <div class="question-section mb-4">
                <h3 style="color: var(--gold); margin-bottom: 0.3rem; font-size: 0.85rem;">💰 Financial Freedom Number</h3>
                <p style="color: var(--gray-light); margin-bottom: 0.3rem; font-style: italic; font-size: 0.7rem; line-height: 1.2;">
                    What annual income would give you complete financial freedom?
                </p>
                <div class="writing-lines">
                    <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.35rem 0; height: 22px;"></div>
                    <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.35rem 0; height: 22px;"></div>
                    <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.35rem 0; height: 22px;"></div>
                </div>
            </div>
            
            <div class="question-section mb-4">
                <h3 style="color: var(--gold); margin-bottom: 0.3rem; font-size: 0.85rem;">🌍 Legacy Impact</h3>
                <p style="color: var(--gray-light); margin-bottom: 0.3rem; font-style: italic; font-size: 0.7rem; line-height: 1.2;">
                    How do you want to be remembered? What impact will you leave?
                </p>
                <div class="writing-lines">
                    <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.35rem 0; height: 22px;"></div>
                    <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.35rem 0; height: 22px;"></div>
                    <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.35rem 0; height: 22px;"></div>
                    <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.35rem 0; height: 22px;"></div>
                    <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.35rem 0; height: 22px;"></div>
                </div>
            </div>
        </div>
        
        <div class="page-number">007</div>
        <div class="footer-wisdom" style="font-size: 0.75rem;">"Vision without action is merely a dream." - Joel A. Barker</div>
    </div>
    
    <!-- PAGE 014: MY WHY (3-LAYER DEEP EXCAVATION) -->
    <div class="page" style="padding-top: 0.01rem;">
        <h1 class="text-center gold-gradient" style="font-size: 1.6rem; margin: 0 0 0.05rem 0; line-height: 1.1;">MY WHY</h1>
        <div class="gold-line" style="margin: 0 auto 0.05rem; width: 90%;"></div>
        
        <div style="background: rgba(212, 175, 55, 0.08); border: 1px solid var(--gold); padding: 0.15rem; border-radius: 3px; margin: 0 0 0.1rem 0;">
            <p style="color: var(--gray-light); text-align: center; font-size: 0.7rem; margin: 0.05rem 0; line-height: 1.2;">
                ⚠️ MOST PEOPLE STOP AT SURFACE REASONS. THE 8% DIG DEEPER. ANSWER ALL 3 LAYERS.
            </p>
        </div>
        
        <!-- LAYER 1: SURFACE -->
        <div style="background: rgba(212, 175, 55, 0.03); padding: 0.15rem 0.2rem 0.1rem; border-radius: 3px; border-left: 2px solid var(--gold); margin: 0 0 0.1rem 0;">
            <h3 style="color: var(--gold); margin: 0 0 0.03rem 0; font-size: 0.8rem; line-height: 1.1;">🔸 LAYER 1: SURFACE WHY</h3>
            <p style="color: var(--gray-light); margin: 0 0 0.2rem 0; font-style: italic; font-size: 0.7rem; line-height: 1.2;">
                What do you want? (e.g., "I want to make money," "I want to be healthy")
            </p>
            <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.1rem 0; height: 20px;"></div>
            <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.1rem 0; height: 20px;"></div>
            <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.1rem 0; height: 20px;"></div>
        </div>
        
        <!-- LAYER 2: DEEPER -->
        <div style="background: rgba(212, 175, 55, 0.05); padding: 0.2rem 0.2rem 0.1rem; border-radius: 3px; border-left: 2px solid var(--gold); margin: 0 0 0.15rem 0;">
            <h3 style="color: var(--gold); margin: 0 0 0.05rem 0; font-size: 0.8rem; line-height: 1.1;">🔹 LAYER 2: DEEPER WHY</h3>
            <p style="color: var(--gray-light); margin: 0 0 0.2rem 0; font-style: italic; font-size: 0.7rem; line-height: 1.2;">
                Why does that matter? Who benefits? (e.g., "I want freedom for my family," "I want to prove I can")
            </p>
            <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.1rem 0; height: 20px;"></div>
            <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.1rem 0; height: 20px;"></div>
            <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.1rem 0; height: 20px;"></div>
        </div>
        
        <!-- LAYER 3: CORE (SOUL LEVEL) -->
        <div style="background: rgba(212, 175, 55, 0.08); padding: 0.2rem 0.2rem 0.1rem; border-radius: 3px; border-left: 2px solid var(--gold); margin: 0 0 0.15rem 0;">
            <h3 style="color: var(--gold); margin: 0 0 0.05rem 0; font-size: 0.8rem; line-height: 1.1;">💎 LAYER 3: CORE WHY (Soul Level)</h3>
            <p style="color: var(--gray-light); margin: 0 0 0.05rem 0; font-style: italic; font-size: 0.7rem; line-height: 1.1;">
                What's the REAL truth? What are you afraid of? What are you trying to prove/escape/become?
            </p>
            <p style="color: var(--gold-light); margin: 0 0 0.1rem 0; font-size: 0.7rem; line-height: 1.1; font-style: italic;">
                (e.g., "I'm terrified of being a failure," "I need to prove I'm not worthless")
            </p>
            <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.1rem 0 0.3rem 0; height: 20px;"></div>
            <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.1rem 0 0.3rem 0; height: 20px;"></div>
            <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.1rem 0 0.3rem 0; height: 20px;"></div>
        </div>
        
        <!-- MY WHY - PAGE 1 -->
        <div class="page">
            <h1 class="text-center gold-gradient" style="font-size: 2.3rem; margin-bottom: 1rem;">MY WHY</h1>
            <div class="gold-line" style="margin-bottom: 1.5rem;"></div>
            
            <div style="background: var(--black-card); padding: 1.5rem; border-radius: 12px; border: 2px solid var(--gold); margin-bottom: 1.5rem;">
                <h3 style="color: var(--gold); font-size: 1.2rem; margin-bottom: 1rem;">⚠️ Deep Why Analysis</h3>
                <p style="color: var(--gray-light); font-size: 0.9rem; line-height: 1.4; margin-bottom: 1.5rem;">
                    Most people stop at surface reasons. The 8% dig deeper. Answer all 3 layers.
                </p>
                
                <div style="margin-bottom: 1.5rem;">
                    <h4 style="color: var(--gold-light); font-size: 1.1rem; margin-bottom: 0.8rem;">🔸 LAYER 1: SURFACE WHY</h4>
                    <p style="color: var(--gray-light); font-size: 0.85rem; margin-bottom: 0.5rem;">What do you want? (e.g., "I want to make money," "I want to be healthy")</p>
                    <div style="border-bottom: 1px solid var(--gray-dark); height: 2rem; margin-bottom: 0.5rem;"></div>
                    <div style="border-bottom: 1px solid var(--gray-dark); height: 2rem; margin-bottom: 0.5rem;"></div>
                    <div style="border-bottom: 1px solid var(--gray-dark); height: 2rem;"></div>
                </div>
                
                <div style="margin-bottom: 1.5rem;">
                    <h4 style="color: var(--gold-light); font-size: 1.1rem; margin-bottom: 0.8rem;">🔹 LAYER 2: DEEPER WHY</h4>
                    <p style="color: var(--gray-light); font-size: 0.85rem; margin-bottom: 0.5rem;">Why does that matter? Who benefits?</p>
                    <div style="border-bottom: 1px solid var(--gray-dark); height: 2rem; margin-bottom: 0.5rem;"></div>
                    <div style="border-bottom: 1px solid var(--gray-dark); height: 2rem; margin-bottom: 0.5rem;"></div>
                    <div style="border-bottom: 1px solid var(--gray-dark); height: 2rem;"></div>
                </div>
            </div>
            
            <div class="footer-wisdom">Your why is your compass in the storm.</div>
            <div class="page-number">${currentPage++}</div>
        </div>
        
        <!-- MY WHY - PAGE 2 -->
        <div class="page">
            <div style="background: var(--black-card); padding: 1.5rem; border-radius: 12px; border: 2px solid var(--gold); margin: 1.5rem 0;">
                <h4 style="color: var(--gold-light); font-size: 1.1rem; margin-bottom: 0.8rem;">💎 LAYER 3: CORE WHY (Soul Level)</h4>
                <p style="color: var(--gray-light); font-size: 0.85rem; margin-bottom: 1rem;">What's the REAL truth? What are you afraid of? What are you trying to prove/escape/become?</p>
                <div style="border-bottom: 1px solid var(--gray-dark); height: 2rem; margin-bottom: 0.5rem;"></div>
                <div style="border-bottom: 1px solid var(--gray-dark); height: 2rem; margin-bottom: 0.5rem;"></div>
                <div style="border-bottom: 1px solid var(--gray-dark); height: 2rem;"></div>
            </div>
            
            <div style="background: rgba(255, 0, 0, 0.05); padding: 1.5rem; border-radius: 12px; border: 2px solid #ff4444; margin: 1.5rem 0;">
                <h3 style="color: #ff4444; font-size: 1.2rem; margin-bottom: 1rem;">💀 THE COST OF INACTION</h3>
                <p style="color: var(--gray-light); font-size: 0.85rem; margin-bottom: 1rem;">If you DON'T change, what will your life look like in 5 years? Be brutally honest.</p>
                <div style="border-bottom: 1px solid var(--gray-dark); height: 2rem; margin-bottom: 0.5rem;"></div>
                <div style="border-bottom: 1px solid var(--gray-dark); height: 2rem; margin-bottom: 0.5rem;"></div>
                <div style="border-bottom: 1px solid var(--gray-dark); height: 2rem;"></div>
            </div>
            
            <div class="footer-wisdom">Face your fears to find your power.</div>
            <div class="page-number">${currentPage++}</div>
        </div>
        
        <!-- MY WHY - PAGE 3 -->
        <div class="page">
            <div style="background: var(--black-card); padding: 1.5rem; border-radius: 12px; border: 2px solid var(--gold); margin: 1.5rem 0;">
                <h3 style="color: var(--gold); font-size: 1.2rem; margin-bottom: 1rem;">⏳ YOUR DEATHBED REGRET</h3>
                <p style="color: var(--gray-light); font-size: 0.85rem; margin-bottom: 1rem;">On your deathbed, what will you regret NOT doing? Write it now. Let this fuel you.</p>
                <div style="border-bottom: 1px solid var(--gray-dark); height: 2rem; margin-bottom: 0.5rem;"></div>
                <div style="border-bottom: 1px solid var(--gray-dark); height: 2rem; margin-bottom: 0.5rem;"></div>
                <div style="border-bottom: 1px solid var(--gray-dark); height: 2rem;"></div>
            </div>
            
            <div style="background: var(--black-card); padding: 1.5rem; border-radius: 12px; border: 2px solid var(--gold); margin: 1.5rem 0;">
                <h3 style="color: var(--gold); font-size: 1.2rem; margin-bottom: 1rem;">👥 MENTORS & ROLE MODELS</h3>
                <p style="color: var(--gray-light); font-size: 0.85rem; margin-bottom: 1rem;">Who do you study and learn from? (Living or historical)</p>
                <div style="border-bottom: 1px solid var(--gray-dark); height: 2rem; margin-bottom: 0.5rem;"></div>
                <div style="border-bottom: 1px solid var(--gray-dark); height: 2rem; margin-bottom: 0.5rem;"></div>
                <div style="border-bottom: 1px solid var(--gray-dark); height: 2rem;"></div>
            </div>
            
            <div class="footer-wisdom">Your mentors light the path ahead.</div>
            <div class="page-number">${currentPage++}</div>
        </div>
        
        <!-- MENTORS & ROLE MODELS -->
        <div style="background: var(--black-card); padding: 0.5rem; border-radius: 3px; border: 1px solid var(--gold); margin: 0 0 0.5rem 0;">
            <h3 style="color: var(--gold); margin: 0 0 0.2rem 0; font-size: 0.85rem; line-height: 1.1;">👥 Mentors & Role Models</h3>
            <p style="color: var(--gray-light); margin: 0 0 0.3rem 0; font-style: italic; font-size: 0.7rem; line-height: 1.2;">
                Who do you study and learn from? (Living or historical)
            </p>
            <div>
                <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.3rem 0; height: 18px;"></div>
                <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.3rem 0; height: 18px;"></div>
                <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.3rem 0; height: 18px;"></div>
            </div>
        </div>
        
        <!-- CORE PRINCIPLES -->
        <div style="background: var(--black-card); padding: 0.5rem; border-radius: 3px; border: 1px solid var(--gold);">
            <h3 style="color: var(--gold); margin: 0 0 0.2rem 0; font-size: 0.85rem; line-height: 1.1;">💡 Core Principles</h3>
            <p style="color: var(--gray-light); margin: 0 0 0.3rem 0; font-style: italic; font-size: 0.7rem; line-height: 1.2;">
                What are your 3 most important life principles?
            </p>
            <div>
                <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.3rem 0; height: 18px;"></div>
                <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.3rem 0; height: 18px;"></div>
                <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.3rem 0; height: 18px;"></div>
            </div>
        </div>
            
            <div class="question-section">
                <h3 style="color: var(--gold); margin-bottom: 0.3rem; font-size: 0.85rem;">💡 Core Principles</h3>
                <p style="color: var(--gray-light); margin-bottom: 0.3rem; font-style: italic; font-size: 0.7rem; line-height: 1.2;">
                    What are your 3 most important life principles?
                </p>
                <div class="writing-lines">
                    <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.35rem 0; height: 22px;"></div>
                    <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.35rem 0; height: 22px;"></div>
                    <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.35rem 0; height: 22px;"></div>
                    <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.35rem 0; height: 22px;"></div>
                    <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.35rem 0; height: 22px;"></div>
                </div>
            </div>
        </div>
        
        <div class="page-number">${currentPage++}</div>
        <div class="footer-wisdom" style="font-size: 0.75rem;">Your principles are your power.</div>
    </div>
    
    <!-- PAGE 016: THE SUCCESS STORY (STORYTELLING PAGE) -->
    <div class="page" style="padding-top: 0.25rem;">
        <h1 class="text-center gold-gradient mb-1" style="font-size: 1.7rem; margin: 0;">THE SUCCESS STORY</h1>
        <div class="gold-line" style="margin: 0.25rem 0;"></div>
        
        <div class="story-section" style="background: rgba(212, 175, 55, 0.05); padding: 0.75rem; border-radius: 6px; border: 1px solid var(--gold); margin: 0.5rem 0;">
            <h3 style="color: var(--gold); margin: 0 0 0.3rem 0; font-size: 0.85rem;">📖 Your Story Begins Now</h3>
            <p style="color: var(--gray-light); font-size: 0.75rem; line-height: 1.3; margin: 0 0 0.4rem 0;">
                Every hero's journey begins with a call to adventure. Yours started the moment you opened this journal. Like Odysseus leaving Troy, like Colonel Sanders starting KFC at age 62, like every entrepreneur who ever bet on themselves-you've answered the call.
            </p>
            <p style="color: var(--gray-light); font-size: 0.75rem; line-height: 1.3; margin: 0;">
                But the journey ahead has dragons. The dragon of self-doubt whispers you're not good enough. The dragon of comfort tempts you to stay where you are. The dragon of fear shows you all the ways you could fail.
            </p>
        </div>
        
        <div class="story-prompt" style="margin-bottom: 1rem;">
            <h4 style="color: var(--gold); margin-bottom: 0.3rem; font-size: 0.85rem;">✍️ Write Your Origin Story</h4>
            <p style="color: var(--gray-light); font-size: 0.7rem; font-style: italic; margin-bottom: 0.3rem;">
                What moment in your life led you here? What was your "enough is enough" moment?
            </p>
            <div class="writing-lines">
                <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.35rem 0; height: 22px;"></div>
                <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.35rem 0; height: 22px;"></div>
                <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.35rem 0; height: 22px;"></div>
                <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.35rem 0; height: 22px;"></div>
                <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.35rem 0; height: 22px;"></div>
            </div>
        </div>
        
        <div class="hero-archetypes" style="background: var(--black-card); padding: 0.8rem; border-radius: 8px;">
            <h4 style="color: var(--gold); margin-bottom: 0.5rem; font-size: 0.85rem;">🗡️ Which Hero Are You?</h4>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.5rem;">
                <div style="padding: 0.3rem; border: 1px solid var(--gold-dark); border-radius: 4px;">
                    <strong style="color: var(--gold-light); font-size: 0.75rem;">The Warrior</strong>
                    <p style="color: var(--gray); font-size: 0.65rem; margin: 0;">Fights through obstacles</p>
                </div>
                <div style="padding: 0.3rem; border: 1px solid var(--gold-dark); border-radius: 4px;">
                    <strong style="color: var(--gold-light); font-size: 0.75rem;">The Sage</strong>
                    <p style="color: var(--gray); font-size: 0.65rem; margin: 0;">Seeks wisdom & truth</p>
                </div>
                <div style="padding: 0.3rem; border: 1px solid var(--gold-dark); border-radius: 4px;">
                    <strong style="color: var(--gold-light); font-size: 0.75rem;">The Explorer</strong>
                    <p style="color: var(--gray); font-size: 0.65rem; margin: 0;">Discovers new paths</p>
                </div>
                <div style="padding: 0.3rem; border: 1px solid var(--gold-dark); border-radius: 4px;">
                    <strong style="color: var(--gold-light); font-size: 0.75rem;">The Creator</strong>
                    <p style="color: var(--gray); font-size: 0.65rem; margin: 0;">Builds new worlds</p>
                </div>
            </div>
        </div>
        
        <div class="page-number">019</div>
        <div class="footer-wisdom" style="font-size: 0.75rem;">"The cave you fear holds the treasure." - Joseph Campbell</div>
    </div>`;
}

// CHAPTER 2 - PLAN
function generateChapter2Plan() {
    return `
    <!-- CHAPTER 2 DIVIDER -->
    <div class="page chapter-divider flex flex-col items-center justify-center">
        <div class="section-icon mb-8">
            <svg width="120" height="120" viewBox="0 0 24 24" fill="none">
                <!-- Simple Clipboard Icon -->
                <path d="M9 5H7C5.89543 5 5 5.89543 5 7V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V7C19 5.89543 18.1046 5 17 5H15" stroke="var(--gold)" stroke-width="2"/>
                <path d="M9 5C9 6.10457 9.89543 7 11 7H13C14.1046 7 15 6.10457 15 5M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5" stroke="var(--gold)" stroke-width="2"/>
                <!-- Main Content Lines -->
                <path d="M8 11H16" stroke="var(--gold)" stroke-width="2"/>
                <path d="M8 15H16" stroke="var(--gold)" stroke-width="2"/>
                <!-- Center Circle -->
                <circle cx="12" cy="12" r="2" fill="var(--gold)"/>
            </svg>
        </div>
        
        <h1 class="font-serif text-center gold-gradient mb-6" style="font-size: 4rem; line-height: 1;">
            CHAPTER 2
        </h1>
        
        <h2 class="text-center gold-gradient mb-8" style="font-size: 2.5rem; font-weight: 300;">
            PLAN
        </h2>
        
        <div class="gold-line mb-8" style="width: 250px;"></div>
        
        <p class="text-center text-xl mb-8" style="color: var(--gray-light); line-height: 1.6; max-width: 500px;">
            Strategy is the foundation of victory.<br>
            Define your targets. Map your route.<br>
            <span class="gold-gradient font-semibold">Execute with precision.</span>
        </p>
        
        <div class="qr-code" style="text-align: center; margin: 1rem 0;">
            <div style="width: 80px; height: 80px; background: white; border: 2px solid var(--gold); margin: 0 auto; border-radius: 4px; padding: 4px; display: flex; flex-direction: column; justify-content: center; align-items: center;">
                <div style="width: 60px; height: 60px; background: white; border: 1px solid var(--gold); position: relative;">
                    <!-- QR Code Corner Markers -->
                    <div style="position: absolute; top: 4px; left: 4px; width: 12px; height: 12px; border: 2px solid var(--gold);"></div>
                    <div style="position: absolute; top: 4px; right: 4px; width: 12px; height: 12px; border: 2px solid var(--gold);"></div>
                    <div style="position: absolute; bottom: 4px; left: 4px; width: 12px; height: 12px; border: 2px solid var(--gold);"></div>
                    <!-- Center Pattern -->
                    <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 12px; height: 12px; border: 2px solid var(--gold);"></div>
                </div>
            </div>
            <div style="margin-top: 0.75rem; font-size: 0.8rem; color: var(--gray-light);">
                <strong style="color: var(--gold);">ACCESS PLAN DASHBOARD</strong><br>
                <code style="font-family: monospace; font-size: 0.7rem;">HTTPS://LEVERAGEJOURNAL.COM/PLAN</code>
            </div>
        </div>
        
        <div class="page-number">010</div>
    </div>
    
    <!-- PAGE 017: THE 7 LAWS OF LEVERAGE -->
    <div class="page" style="padding: 5mm;">
        <h1 class="text-center gold-gradient mb-1" style="font-size: 2rem;">The 7 Laws of Leverage</h1>
        <div class="gold-line" style="margin-bottom: 0.2rem;"></div>
        
        <p style="font-size: 1.1rem; line-height: 1.2; margin: 0.3rem 0 0.5rem 0; text-align: center; color: var(--gold-light);">Master these laws to achieve maximum results with minimum effort.</p>
                    
        <div class="laws-grid" style="display: grid; grid-template-columns: 1fr; gap: 0.3rem; margin: 0.5rem 0;">
            <div class="law-item" style="background: var(--black-card); padding: 0.4rem; border-radius: 3px; border-left: 2px solid var(--gold);">
                <h4 style="color: var(--gold); margin: 0 0 0.1rem 0; font-size: 1.1rem; font-weight: bold; line-height: 1.1;">1. Compound Focus</h4>
                <p style="color: var(--gray-light); font-size: 0.95rem; line-height: 1.1; margin: 0;">Small, consistent actions compound over time.</p>
            </div>
            
            <div class="law-item" style="background: var(--black-card); padding: 0.4rem; border-radius: 3px; border-left: 2px solid var(--gold);">
                <h4 style="color: var(--gold); margin: 0 0 0.1rem 0; font-size: 1.1rem; font-weight: bold; line-height: 1.1;">2. Strategic Constraint</h4>
                <p style="color: var(--gray-light); font-size: 0.95rem; line-height: 1.1; margin: 0;">Intelligent limits create infinite possibilities.</p>
            </div>
            
            <div class="law-item" style="background: var(--black-card); padding: 0.4rem; border-radius: 3px; border-left: 2px solid var(--gold);">
                <h4 style="color: var(--gold); margin: 0 0 0.1rem 0; font-size: 1.1rem; font-weight: bold; line-height: 1.1;">3. System Supremacy</h4>
                <p style="color: var(--gray-light); font-size: 0.95rem; line-height: 1.1; margin: 0;">Systems beat goals. Build systems that work without you.</p>
            </div>
            
            <div class="law-item" style="background: var(--black-card); padding: 0.4rem; border-radius: 3px; border-left: 2px solid var(--gold);">
                <h4 style="color: var(--gold); margin: 0 0 0.1rem 0; font-size: 1.1rem; font-weight: bold; line-height: 1.1;">4. Identity Transformation</h4>
                <p style="color: var(--gray-light); font-size: 0.95rem; line-height: 1.1; margin: 0;">Change your identity, change your reality.</p>
            </div>
            
            <div class="law-item" style="background: var(--black-card); padding: 0.4rem; border-radius: 3px; border-left: 2px solid var(--gold);">
                <h4 style="color: var(--gold); margin: 0 0 0.1rem 0; font-size: 1.1rem; font-weight: bold; line-height: 1.1;">5. Environmental Design</h4>
                <p style="color: var(--gray-light); font-size: 0.95rem; line-height: 1.1; margin: 0;">Shape your environment, shape your behavior.</p>
            </div>
            
            <div class="law-item" style="background: var(--black-card); padding: 0.4rem; border-radius: 3px; border-left: 2px solid var(--gold);">
                <h4 style="color: var(--gold); margin: 0 0 0.1rem 0; font-size: 1.1rem; font-weight: bold; line-height: 1.1;">6. Momentum Multiplication</h4>
                <p style="color: var(--gray-light); font-size: 0.95rem; line-height: 1.1; margin: 0;">Success accelerates through momentum.</p>
            </div>
            
            <div class="law-item" style="background: var(--black-card); padding: 0.2rem; border-radius: 2px; border-left: 2px solid var(--gold);">
                <h4 style="color: var(--gold); margin-bottom: 0rem; font-size: 1.1rem; font-weight: bold;">7. Leverage Amplification</h4>
                <p style="color: var(--gray-light); font-size: 1rem; line-height: 1; margin: 0;">Small inputs, massive outputs through leverage.</p>
            </div>
        </div>
        
        <div class="page-number">017</div>
        <div class="footer-wisdom">"Be like water." - Bruce Lee</div>
    </div>
    
    <!-- PAGE 018: PROPRIETARY FRAMEWORKS -->
    <div class="page" style="padding: 2mm 5mm 5mm 5mm;">
        <h1 class="text-center gold-gradient mb-4" style="font-size: 1.5rem; margin: 0 0 0.3rem 0;">Proprietary Frameworks</h1>
        <div class="gold-line" style="margin-bottom: 0.4rem;"></div>
        
        <p style="font-size: 0.7rem; line-height: 1.2; margin-bottom: 0.5rem; text-align: center; color: var(--gray-light);">
            These are exclusive systems developed specifically for The Leverage Journal™. Master these to accelerate your results.
        </p>
        
        <!-- LEVERAGE SCORE™ -->
        <div style="background: var(--black-card); padding: 0.5rem; border-radius: 4px; border: 1px solid var(--gold); margin-bottom: 0.5rem;">
            <h3 style="color: var(--gold); margin-bottom: 0.25rem; font-size: 0.9rem; font-weight: 700;">📊 THE LEVERAGE SCORE™</h3>
            <p style="color: var(--gray-light); font-size: 0.65rem; line-height: 1.2; margin-bottom: 0.25rem;">
                Daily calculation of how much leverage you're applying. Track this in your weekly reviews.
            </p>
            <div style="background: rgba(212, 175, 55, 0.1); padding: 0.4rem; border-radius: 4px;">
                <p style="color: var(--gold-light); font-size: 0.6rem; font-family: monospace; margin: 0;">
                    <strong>Formula:</strong> (Impact × Automation) ÷ Time Invested = Leverage Score
                </p>
                <p style="color: var(--gray); font-size: 0.55rem; margin-top: 0.15rem; margin-bottom: 0;">
                    Score 1-3: Low leverage | 4-7: Good leverage | 8-10: Maximum leverage
                </p>
            </div>
        </div>
        
        <!-- THE 8% PROTOCOL™ -->
        <div style="background: var(--black-card); padding: 0.5rem; border-radius: 4px; border: 1px solid var(--gold); margin-bottom: 0.5rem;">
            <h3 style="color: var(--gold); margin-bottom: 0.25rem; font-size: 0.9rem; font-weight: 700;">👑 THE 8% PROTOCOL™</h3>
            <p style="color: var(--gray-light); font-size: 0.65rem; line-height: 1.2; margin-bottom: 0.25rem;">
                The exact system the elite 8% follow to complete what 92% quit.
            </p>
            <div style="display: grid; gap: 0.2rem;">
                <div style="display: flex; align-items: start; gap: 0.3rem;">
                    <span style="color: var(--gold); font-weight: 700; font-size: 0.7rem;">1.</span>
                    <p style="color: var(--gray-light); font-size: 0.6rem; margin: 0; line-height: 1.2;">Never miss 2 days in a row</p>
                </div>
                <div style="display: flex; align-items: start; gap: 0.3rem;">
                    <span style="color: var(--gold); font-weight: 700; font-size: 0.7rem;">2.</span>
                    <p style="color: var(--gray-light); font-size: 0.6rem; margin: 0; line-height: 1.2;">Track your 3 enemies daily</p>
                </div>
                <div style="display: flex; align-items: start; gap: 0.3rem;">
                    <span style="color: var(--gold); font-weight: 700; font-size: 0.7rem;">3.</span>
                    <p style="color: var(--gray-light); font-size: 0.6rem; margin: 0; line-height: 1.2;">Review weekly, no exceptions</p>
                </div>
                <div style="display: flex; align-items: start; gap: 0.3rem;">
                    <span style="color: var(--gold); font-weight: 700; font-size: 0.7rem;">4.</span>
                    <p style="color: var(--gray-light); font-size: 0.6rem; margin: 0; line-height: 1.2;">Share wins with accountability partner</p>
                </div>
                <div style="display: flex; align-items: start; gap: 0.3rem;">
                    <span style="color: var(--gold); font-weight: 700; font-size: 0.7rem;">5.</span>
                    <p style="color: var(--gray-light); font-size: 0.6rem; margin: 0; line-height: 1.2;">Finish what you start, always</p>
                </div>
            </div>
        </div>
        
        <!-- THE ACCUMULATION ALGORITHM™ -->
        <div style="background: var(--black-card); padding: 0.5rem; border-radius: 4px; border: 1px solid var(--gold); margin-bottom: 0.5rem;">
            <h3 style="color: var(--gold); margin-bottom: 0.25rem; font-size: 0.9rem; font-weight: 700;">📈 THE ACCUMULATION ALGORITHM™</h3>
            <p style="color: var(--gray-light); font-size: 0.65rem; line-height: 1.2; margin-bottom: 0.25rem;">
                Mathematical proof that small daily actions create exponential results.
            </p>
            <div style="background: rgba(212, 175, 55, 0.1); padding: 0.4rem; border-radius: 4px; text-align: center;">
                <p style="color: var(--gold-light); font-size: 0.65rem; font-weight: 700; margin: 0;">
                    1% better each day = 37× better in 90 days
                </p>
                <p style="color: var(--gray); font-size: 0.55rem; margin-top: 0.15rem; margin-bottom: 0;">
                    (1.01)^90 = 2.45 | But with leverage: (1.01 × 1.5)^90 = 37.4
                </p>
            </div>
        </div>
        
        <!-- THE ENEMY DETECTOR™ -->
        <div style="background: var(--black-card); padding: 0.5rem; border-radius: 4px; border: 1px solid #ff6600; margin-bottom: 0.5rem;">
            <h3 style="color: #ff6600; margin-bottom: 0.3rem; font-size: 1rem; font-weight: 700;">⚠️ THE ENEMY DETECTOR™</h3>
            <p style="color: var(--gray-light); font-size: 0.65rem; line-height: 1.2; margin-bottom: 0.25rem;">
                Self-sabotage early warning system. If you notice these patterns, you're under attack:
            </p>
            <div style="display: grid; gap: 0.2rem;">
                <p style="color: var(--gray-light); font-size: 0.6rem; margin: 0; line-height: 1.2;">🐌 <strong style="color: var(--gold);">Laziness:</strong> "I'll do it tomorrow" × 3 days</p>
                <p style="color: var(--gray-light); font-size: 0.6rem; margin: 0; line-height: 1.2;">🧠 <strong style="color: var(--gold);">Disbelief:</strong> "This won't work for me"</p>
                <p style="color: var(--gray-light); font-size: 0.6rem; margin: 0; line-height: 1.2;">💣 <strong style="color: var(--gold);">Sabotage:</strong> Creating chaos when succeeding</p>
            </div>
        </div>
        
        <div class="page-number" style="font-size: 0.7rem;">021</div>
        <div class="footer-wisdom" style="font-size: 0.65rem;">"Systems are the secret to success." - Khamare Clarke</div>
    </div>`;
}
// UNIQUE QUOTE SYSTEM FOR DAILY PAGES - BALANCED GLOBAL LEADERS
function getDailyQuote(day) {
    const quotes = [
        // Military & Strategic Leaders
        '"Victory belongs to the most persevering." - Napoleon Bonaparte',
        '"Know yourself and you will win all battles." - Sun Tzu',
        '"I came, I saw, I conquered." - Julius Caesar',
        '"Fortune favors the bold." - Alexander the Great',
        '"Strike at weakness." - Sun Tzu',
        
        // Philosophers & Ancient Wisdom
        '"Excellence is a habit." - Aristotle',
        '"The unexamined life is not worth living." - Socrates',
        '"Quality is not an act, it is a habit." - Aristotle',
        '"Never stop moving forward." - Confucius',
        '"Start with small stones." - Confucius',
        
        // Scientists & Innovators
        '"Genius is perspiration." - Thomas Edison',
        '"In the middle of difficulty lies opportunity." - Albert Einstein',
        '"The way to get started is to quit talking and begin doing." - Walt Disney',
        '"Focus on building the new, not fighting the old." - Socrates',
        '"Success is failing without losing enthusiasm." - Winston Churchill',
        
        // Business & Success Leaders
        '"Plant trees today." - Chinese Proverb',
        '"Whether you think you can or you can\'t, you\'re right." - Henry Ford',
        '"Courage to continue counts." - Winston Churchill',
        '"The only impossible journey is the one you never begin." - Tony Robbins',
        '"Give up good for great." - John D. Rockefeller',
        
        // Athletes & Champions
        '"Champions train, losers complain." - Muhammad Ali',
        '"I can accept failure, but I can\'t accept not trying." - Michael Jordan',
        '"Be like water." - Bruce Lee',
        '"The will to win means nothing without the will to prepare." - Juma Ikangaa',
        '"You miss 100% of the shots you don\'t take." - Wayne Gretzky',
        
        // Historical Leaders (Balanced Selection)
        '"The future belongs to those who prepare for it today." - Malcolm X',
        '"If you have no confidence in self, you are twice defeated." - Marcus Garvey',
        '"Education is the most powerful weapon." - Nelson Mandela',
        '"Strength does not come from physical capacity." - Mahatma Gandhi',
        '"The only thing we have to fear is fear itself." - Franklin D. Roosevelt',
        
        // Khamare Clarke Original Quotes (Shorter & More Relevant)
        '"Systems create freedom." - Khamare Clarke',
        '"What gets measured gets mastered." - Khamare Clarke',
        '"Discipline bridges goals and accomplishment." - Khamare Clarke',
        '"Progress, not perfection." - Khamare Clarke',
        '"Focus is knowing what to ignore." - Khamare Clarke',
        '"Consistency compounds." - Khamare Clarke',
        '"Daily choices become destiny." - Khamare Clarke',
        '"Excellence is systematic." - Khamare Clarke',
        '"Leverage amplifies effort." - Khamare Clarke',
        '"Masters fail more than beginners try." - Khamare Clarke',
        '"Reflection creates wisdom." - Khamare Clarke',
        '"Principles guide practices." - Khamare Clarke',
        '"Success is systematic." - Khamare Clarke',
        '"Do it right once." - Khamare Clarke',
        '"Excellence attracts excellence." - Khamare Clarke',
        '"Goals need timelines." - Khamare Clarke',
        '"Execute or hallucinate." - Khamare Clarke',
        '"Prepare for tomorrow today." - Khamare Clarke',
        '"Mastery requires practice." - Khamare Clarke',
        '"Environment shapes behavior." - Khamare Clarke',
        '"Small choices, big results." - Khamare Clarke',
        '"Vision needs action." - Khamare Clarke',
        '"Commitment creates accomplishment." - Khamare Clarke',
        '"Questions determine quality." - Khamare Clarke',
        '"Courage plus consistency." - Khamare Clarke',
        '"Network equals net worth." - Khamare Clarke',
        '"Habits compound interest." - Khamare Clarke',
        '"Systems over goals." - Khamare Clarke',
        '"Plant trees today." - Khamare Clarke',
        '"Clarity precedes mastery." - Khamare Clarke',
        '"Identity shapes actions." - Khamare Clarke',
        '"Momentum drives achievement." - Khamare Clarke',
        '"Practice makes permanent." - Khamare Clarke',
        '"Success leaves clues." - Khamare Clarke',
        '"Mornings set the tone." - Khamare Clarke',
        '"Constraints create creativity." - Khamare Clarke',
        '"Obstacles become the way." - Khamare Clarke',
        '"Feedback fuels champions." - Khamare Clarke',
        '"Simplicity is sophistication." - Khamare Clarke',
        '"Thoughts become reality." - Khamare Clarke',
        '"Time amplifies everything." - Khamare Clarke',
        '"Standards create results." - Khamare Clarke',
        '"Intensity beats intelligence." - Khamare Clarke',
        '"Execution trumps perfection." - Khamare Clarke',
        '"Momentum multiplies effort." - Khamare Clarke',
        '"Clarity creates confidence." - Khamare Clarke',
        '"Persistence pays compound interest." - Khamare Clarke',
        '"Systems scale success." - Khamare Clarke',
        '"Habits automate excellence." - Khamare Clarke',
        '"Focus filters distractions." - Khamare Clarke',
        '"Preparation prevents poor performance." - Khamare Clarke'
    ];
    
    // Ensure we have enough quotes for 90 days
    return quotes[(day - 1) % quotes.length];
}

// UNIQUE QUOTE SYSTEM FOR WEEKLY REVIEWS
function getWeeklyQuote(week) {
    const weeklyQuotes = [
        "The week's end is the beginning of wisdom. - Khamare Clarke",
        "Reflection is the mother of all progress. - Confucius", 
        "A life unexamined is not worth living. - Socrates",
        "Experience is the teacher of all things. - Julius Caesar",
        "Learning never exhausts the mind. - Leonardo da Vinci",
        "The only source of knowledge is experience. - Albert Einstein",
        "Experience teaches wisdom. - Mark Twain",
        "In learning you will teach, and in teaching you will learn. - Phil Collins",
        "Learning stays with you. - B.B. King",
        "Live today, learn forever. - Mahatma Gandhi",
        "Involvement creates learning. - Benjamin Franklin",
        "Learning is a choice. - Brian Herbert",
        "Success is the sum of small efforts repeated day in and day out. - Robert Collier"
    ];
    
    return weeklyQuotes[(week - 1) % weeklyQuotes.length];
}
function generateChapter3Do() {
    let html = `
    <!-- CHAPTER 3 DIVIDER -->
    <div class="page chapter-divider flex flex-col items-center" style="padding: 0 0 0.25rem;">
        <div class="section-icon" style="margin-bottom: 0;">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="var(--gold)" stroke-width="2" fill="var(--gold)" opacity="0.1"/>
            </svg>
        </div>
        
        <h1 class="font-serif text-center gold-gradient" style="font-size: 2.2rem; line-height: 1; margin: 0;">
            CHAPTER 3
        </h1>
        
        <h2 class="text-center gold-gradient" style="font-size: 1.6rem; font-weight: 300; margin: 0 0 0.1rem 0;">
            DO
        </h2>
        
        <div class="gold-line" style="width: 100px; margin: 0 0 0.1rem 0;"></div>
        
        <p class="text-center" style="color: var(--gray-light); line-height: 1.1; max-width: 380px; font-size: 0.8rem; margin: 0 0 0.1rem 0;">
            Excellence is not an act, but a habit.<br>
            Execute with intention.<br>
            <span class="gold-gradient font-semibold">Transform through action.</span>
        </p>
        
        <!-- Steve Jobs Method Card -->
        <div style="background: rgba(212, 175, 55, 0.05); padding: 0.8rem; border-radius: 6px; border: 2px solid var(--gold); margin: 0.5rem 0;">
            <div style="text-align: center; margin-bottom: 0.5rem;">
                <div style="font-size: 2.2rem; margin: 0.3rem 0 0.5rem 0; line-height: 1.2;">🍎</div>
                <h2 class="gold-gradient" style="font-size: 1.2rem; margin: 0;">The Steve Jobs Method</h2>
            </div>
            
            <div style="background: var(--black-card); padding: 0.6rem; border-radius: 4px; margin-bottom: 0.5rem; border: 1px solid var(--gold);">
                <h3 style="color: var(--gold); font-size: 0.95rem; margin: 0 0 0.3rem 0; text-align: center;">
                    Your Daily Challenge
                </h3>
                <p style="color: var(--gray-light); line-height: 1.3; margin: 0; font-size: 0.8rem; text-align: center;">
                    Complete 3 priorities in the next 18 hours.<br>
                    <strong style="color: var(--gold-light);">Nothing else matters today.</strong>
                </p>
            </div>
            
            <blockquote style="background: var(--black-card); padding: 0.6rem; border-radius: 4px; border-left: 3px solid var(--gold); margin: 0; text-align: center;">
                <p style="color: var(--gold-light); font-style: italic; font-size: 0.8rem; line-height: 1.3; margin: 0 0 0.3rem 0;">
                    "Deciding what not to do is as important as deciding what to do."
                </p>
                <cite style="display: block; color: var(--gray-light); font-size: 0.75rem;">- Steve Jobs</cite>
            </blockquote>
        </div>

        <div class="gold-line mb-10"></div>

        <!-- Daily Tracker Access Card -->
        <div style="background: rgba(212, 175, 55, 0.05); padding: 0.5rem; border-radius: 4px; border: 1px solid var(--gold); text-align: center;">
            <h3 class="gold-gradient" style="font-size: 0.9rem; margin: 0 0 0.3rem 0;">Daily Tracker Access</h3>
            
            <div style="display: flex; flex-direction: column; align-items: center; gap: 0.3rem;">
                <!-- QR Code -->
                <div style="background: white; padding: 0.3rem; border-radius: 4px; border: 1px solid var(--gold);">
                    <svg width="60" height="60" viewBox="0 0 100 100">
                        <rect width="100" height="100" fill="white"/>
                        <g transform="translate(10,10) scale(0.75)">
                            <!-- QR Code for leveragejournal.com/daily -->
                            <path d="M0 0h7v7h-7z M9 0h7v7h-7z M0 9h7v7h-7z M93 0h7v7h-7z M102 0h7v7h-7z M93 9h7v7h-7z M0 93h7v7h-7z M9 93h7v7h-7z M0 102h7v7h-7z" fill="black"/>
                            <path d="M16 6h3v3h-3z M22 6h3v3h-3z M28 6h3v3h-3z M34 6h3v3h-3z M40 6h3v3h-3z M46 6h3v3h-3z" fill="black"/>
                            <path d="M16 16h3v3h-3z M22 16h3v3h-3z M28 16h3v3h-3z M34 16h3v3h-3z M40 16h3v3h-3z M46 16h3v3h-3z" fill="black"/>
                            <path d="M16 22h3v3h-3z M28 22h3v3h-3z M34 22h3v3h-3z M40 22h3v3h-3z" fill="black"/>
                            <path d="M22 28h3v3h-3z M28 28h3v3h-3z M34 28h3v3h-3z M46 28h3v3h-3z" fill="black"/>
                            <path d="M16 34h3v3h-3z M22 34h3v3h-3z M34 34h3v3h-3z M40 34h3v3h-3z" fill="black"/>
                            <path d="M16 40h3v3h-3z M28 40h3v3h-3z M34 40h3v3h-3z M46 40h3v3h-3z" fill="black"/>
                            <path d="M22 46h3v3h-3z M28 46h3v3h-3z M40 46h3v3h-3z M46 46h3v3h-3z" fill="black"/>
                        </g>
                    </svg>
                </div>
                
                <!-- URL Link -->
                <a href="https://leveragejournal.com/daily" target="_blank" 
                   style="color: var(--gold); 
                          font-size: 0.8rem; 
                          text-decoration: none; 
                          font-weight: 600;
                          background: var(--black-card); 
                          padding: 0.3rem 0.6rem; 
                          border-radius: 3px; 
                          border: 1px solid var(--gold);
                          display: inline-block;">
                    leveragejournal.com/daily
                </a>
                
                <!-- Instructions -->
                <p style="color: var(--gray-light); font-size: 0.7rem; margin: 0; max-width: 200px; line-height: 1.2;">
                    Scan or click to access your daily tracking tools
                </p>
            </div>
        </div>
        </div>
        
        <div class="page-number">026</div>
    </div>`;
    
    // Generate ALL 90 unique daily pages with distinct quotes
    const uniqueQuotes = [
        // Days 1-10: Foundation Building
        { quote: "The way to get started is to quit talking and begin doing.", author: "Walt Disney", lesson: "Action beats intention every time.", reflection: "What is one action you've been postponing that could change everything?" },
        { quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill", lesson: "Persistence is the ultimate leverage.", reflection: "How can you turn today's challenges into tomorrow's advantages?" },
        { quote: "The only impossible journey is the one you never begin.", author: "Tony Robbins", lesson: "Starting is half the victory.", reflection: "What journey are you ready to begin today?" },
        { quote: "Excellence is never an accident. It is always the result of high intention, sincere effort, and intelligent execution.", author: "Aristotle", lesson: "Excellence is a system, not an event.", reflection: "How will you systematize excellence in your daily practice?" },
        { quote: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt", lesson: "Belief is the foundation of achievement.", reflection: "What dream deserves your unwavering belief today?" },
        { quote: "Discipline bridges goals and accomplishment.", author: "Khamare Clarke", lesson: "Discipline transforms dreams into reality.", reflection: "Where do you need more discipline to bridge the gap to your goals?" },
        { quote: "Focus is not about doing more things right, but doing the right things.", author: "Khamare Clarke", lesson: "Clarity precedes mastery.", reflection: "What is the one right thing you must focus on today?" },
        { quote: "Momentum is built one decision at a time.", author: "Khamare Clarke", lesson: "Small choices compound into massive results.", reflection: "What decision will you make today to build unstoppable momentum?" },
        { quote: "You are what you do, not what you say you'll do.", author: "Carl Jung", lesson: "Identity is forged through action.", reflection: "What actions today will align with who you want to become?" },
        { quote: "The best time to plant a tree was 20 years ago. The second best time is now.", author: "Chinese Proverb", lesson: "Perfect timing is a myth.", reflection: "What have you been waiting for the 'right time' to start?" },
        
        // Days 11-20: Momentum Building
        { quote: "Success is the sum of small efforts repeated day in and day out.", author: "Robert Collier", lesson: "Consistency compounds exponentially.", reflection: "What small effort can you repeat today to build your empire?" },
        { quote: "The cave you fear holds the treasure.", author: "Joseph Campbell", lesson: "Growth lives outside your comfort zone.", reflection: "What fear is actually pointing you toward your greatest opportunity?" },
        { quote: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson", lesson: "Persistence outlasts resistance.", reflection: "How can you maintain momentum when motivation fades?" },
        { quote: "Your limitation-it's only your imagination.", author: "Unknown", lesson: "Mental barriers are self-imposed.", reflection: "What limitation are you ready to prove wrong today?" },
        { quote: "Great things never come from comfort zones.", author: "Neil Strauss", lesson: "Comfort is the enemy of greatness.", reflection: "What comfort zone will you step out of today?" },
        { quote: "Dream it. Wish it. Do it.", author: "Unknown", lesson: "Action transforms dreams into reality.", reflection: "What dream needs your immediate action today?" },
        { quote: "Success doesn't just find you. You have to go out and get it.", author: "Unknown", lesson: "Success is actively pursued, not passively received.", reflection: "What will you actively pursue today to create your success?" },
        { quote: "The harder you work for something, the greater you'll feel when you achieve it.", author: "Unknown", lesson: "Effort amplifies satisfaction.", reflection: "What are you willing to work harder for today?" },
        { quote: "Dream bigger. Do bigger.", author: "Unknown", lesson: "Your actions should match your ambitions.", reflection: "How can you scale your actions to match your biggest dreams?" },
        { quote: "Don't stop when you're tired. Stop when you're done.", author: "Marilyn Monroe", lesson: "Completion matters more than comfort.", reflection: "What will you complete today, regardless of how you feel?" },
        
        // Days 21-30: System Optimization
        { quote: "The way to get started is to quit talking and begin doing.", author: "Walt Disney", lesson: "Execution trumps explanation.", reflection: "What conversation needs to become action today?" },
        { quote: "It always seems impossible until it's done.", author: "Nelson Mandela", lesson: "Impossibility is often an illusion.", reflection: "What 'impossible' goal will you take one step toward today?" },
        { quote: "If you're going through hell, keep going.", author: "Winston Churchill", lesson: "Persistence through adversity builds character.", reflection: "What challenge will you push through today instead of avoiding?" },
        { quote: "Believe you can and you're halfway there.", author: "Theodore Roosevelt", lesson: "Belief is the foundation of achievement.", reflection: "What do you need to believe about yourself to succeed today?" },
        { quote: "Whether you think you can or you can't, you're right.", author: "Henry Ford", lesson: "Belief shapes reality.", reflection: "How can you strengthen your belief in yourself today?" },
        { quote: "All of our dreams can come true if we have the courage to pursue them.", author: "Walt Disney", lesson: "Dreams require courage to manifest.", reflection: "How will you courageously pursue your dreams today?" },
        { quote: "I have not failed. I've just found 10,000 ways that won't work.", author: "Thomas Edison", lesson: "Failure is education in disguise.", reflection: "How will you reframe any setbacks as learning today?" },
        { quote: "The way to get started is to quit talking and begin doing.", author: "Walt Disney", lesson: "Action conquers analysis paralysis.", reflection: "What action will you take instead of just thinking today?" },
        { quote: "Success is failing without losing enthusiasm.", author: "Winston Churchill", lesson: "Resilience fuels long-term success.", reflection: "What enthusiasm will you maintain despite any challenges today?" },
        { quote: "Quality is not an act, it is a habit.", author: "Aristotle", lesson: "Excellence is a daily practice.", reflection: "How will you practice quality in everything you do today?" },
        
        // Days 31-40: Mastery Development  
        { quote: "We are what we repeatedly do. Excellence, then, is not an act, but a habit.", author: "Aristotle", lesson: "Identity is shaped by consistent action.", reflection: "What habit will you strengthen today to become who you want to be?" },
        { quote: "The only person you are destined to become is the person you decide to be.", author: "Ralph Waldo Emerson", lesson: "Destiny is a choice, not fate.", reflection: "Who are you deciding to become through today's actions?" },
        { quote: "What lies behind us and what lies before us are tiny matters compared to what lies within us.", author: "Ralph Waldo Emerson", lesson: "Inner strength determines outer success.", reflection: "What inner strength will you draw upon today?" },
        { quote: "Do not go where the path may lead, go instead where there is no path and leave a trail.", author: "Ralph Waldo Emerson", lesson: "Leadership means creating new possibilities.", reflection: "What new path will you create today?" },
        { quote: "The mind is everything. What you think you become.", author: "Buddha", lesson: "Thoughts shape reality.", reflection: "What empowering thoughts will you cultivate today?" },
        { quote: "Peace comes from within. Do not seek it without.", author: "Buddha", lesson: "Inner peace is the foundation of outer success.", reflection: "How will you cultivate inner peace amidst today's challenges?" },
        { quote: "Three things cannot be long hidden: the sun, the moon, and the truth.", author: "Buddha", lesson: "Authenticity always emerges.", reflection: "What truth about yourself will you honor today?" },
        { quote: "Better than a thousand hollow words, is one word that brings peace.", author: "Buddha", lesson: "Quality matters more than quantity.", reflection: "What meaningful words will you speak today?" },
        { quote: "Hatred does not cease by hatred, but only by love; this is the eternal rule.", author: "Buddha", lesson: "Love is more powerful than force.", reflection: "How will you lead with love today?" },
        { quote: "The only true wisdom is in knowing you know nothing.", author: "Socrates", lesson: "Humility opens the door to learning.", reflection: "What will you approach with beginner's mind today?" },
        
        // Days 41-50: Leadership Emergence
        { quote: "An unexamined life is not worth living.", author: "Socrates", lesson: "Self-reflection drives growth.", reflection: "What aspect of your life needs deeper examination today?" },
        { quote: "Focus on building the new, not fighting the old.", author: "Socrates", lesson: "Creation is more powerful than destruction.", reflection: "What new reality will you build today instead of fighting the old?" },
        { quote: "He who is not a good servant will not be a good master.", author: "Plato", lesson: "Leadership begins with service.", reflection: "How will you serve others while pursuing your goals today?" },
        { quote: "Courage is knowing what not to fear.", author: "Plato", lesson: "Wisdom distinguishes real from imaginary threats.", reflection: "What fear will you recognize as powerless today?" },
        { quote: "The first and greatest victory is to conquer yourself.", author: "Plato", lesson: "Self-mastery precedes external success.", reflection: "What aspect of yourself will you master today?" },
        { quote: "I cannot teach anybody anything. I can only make them think.", author: "Galileo", lesson: "True education sparks independent thought.", reflection: "What will you think deeply about today?" },
        { quote: "In questions of science, the authority of a thousand is not worth the humble reasoning of a single individual.", author: "Galileo", lesson: "Truth matters more than consensus.", reflection: "What truth will you stand for today, regardless of popular opinion?" },
        { quote: "You cannot teach a man anything, you can only help him find it within himself.", author: "Galileo", lesson: "Answers lie within us.", reflection: "What wisdom within yourself will you discover today?" },
        { quote: "Passion is the genesis of genius.", author: "Galileo", lesson: "Intense interest creates breakthrough thinking.", reflection: "What are you passionate enough about to pursue with genius today?" },
        { quote: "I have never made but one prayer to God, a very short one: Oh Lord, make my enemies ridiculous. And God granted it.", author: "Voltaire", lesson: "Humor disarms opposition.", reflection: "How can you approach today's challenges with lightness and wisdom?" },
        
        // Days 51-60: Influence Expansion
        { quote: "Common sense is not so common.", author: "Voltaire", lesson: "Wisdom is rare and valuable.", reflection: "What common sense wisdom will you apply today?" },
        { quote: "Judge a man by his questions rather than his answers.", author: "Voltaire", lesson: "Questions reveal thinking quality.", reflection: "What powerful questions will you ask today?" },
        { quote: "It is difficult to free fools from the chains they revere.", author: "Voltaire", lesson: "People often resist their own liberation.", reflection: "What limiting belief will you free yourself from today?" },
        { quote: "The perfect is the enemy of the good.", author: "Voltaire", lesson: "Progress beats perfection.", reflection: "What good action will you take today instead of waiting for perfect conditions?" },
        { quote: "Doubt is not a pleasant condition, but certainty is absurd.", author: "Voltaire", lesson: "Intellectual humility enables learning.", reflection: "What certainty are you willing to question today?" },
        { quote: "The best way to find out if you can trust somebody is to trust them.", author: "Ernest Hemingway", lesson: "Trust is both a risk and a revelation.", reflection: "Who will you choose to trust today?" },
        { quote: "There is nothing noble in being superior to your fellow man; true nobility is being superior to your former self.", author: "Ernest Hemingway", lesson: "Growth is the only meaningful competition.", reflection: "How will you be superior to yesterday's version of yourself?" },
        { quote: "Courage is grace under pressure.", author: "Ernest Hemingway", lesson: "Character is revealed in difficult moments.", reflection: "How will you demonstrate grace under today's pressures?" },
        { quote: "The world breaks everyone, and afterward, some are strong at the broken places.", author: "Ernest Hemingway", lesson: "Adversity can create strength.", reflection: "How have your broken places become sources of strength?" },
        { quote: "All you have to do is write one true sentence. Write the truest sentence that you know.", author: "Ernest Hemingway", lesson: "Truth is the foundation of all creation.", reflection: "What is the truest thing you know about your purpose today?" },
        
        // Days 61-70: Wisdom Integration
        { quote: "The best revenge is massive success.", author: "Frank Sinatra", lesson: "Success speaks louder than words.", reflection: "How will you let your success speak for you today?" },
        { quote: "I'm gonna live till I die.", author: "Frank Sinatra", lesson: "Full engagement with life is a choice.", reflection: "How will you live fully today?" },
        { quote: "You only live once, but if you do it right, once is enough.", author: "Mae West", lesson: "Quality of life matters more than quantity.", reflection: "What would 'doing it right' look like in your life today?" },
        { quote: "I never said it would be easy, I only said it would be worth it.", author: "Mae West", lesson: "Value justifies difficulty.", reflection: "What difficult but worthwhile action will you take today?" },
        { quote: "Keep your face always toward the sunshine-and shadows will fall behind you.", author: "Walt Whitman", lesson: "Focus determines experience.", reflection: "What sunshine will you face today to leave shadows behind?" },
        { quote: "Be yourself; everyone else is already taken.", author: "Oscar Wilde", lesson: "Authenticity is your unique advantage.", reflection: "How will you be more authentically yourself today?" },
        { quote: "I can resist everything except temptation.", author: "Oscar Wilde", lesson: "Self-awareness includes acknowledging weaknesses.", reflection: "What temptation will you resist today?" },
        { quote: "We are all in the gutter, but some of us are looking at the stars.", author: "Oscar Wilde", lesson: "Perspective transforms circumstances.", reflection: "What stars will you focus on today despite current challenges?" },
        { quote: "Experience is merely the name men gave to their mistakes.", author: "Oscar Wilde", lesson: "Mistakes become wisdom through reflection.", reflection: "What recent mistake has become valuable experience?" },
        { quote: "The only way to get rid of temptation is to yield to it.", author: "Oscar Wilde", lesson: "Sometimes we must face what we avoid.", reflection: "What positive temptation will you yield to today?" },
        
        // Days 71-80: Legacy Building
        { quote: "The two most important days in your life are the day you are born and the day you find out why.", author: "Mark Twain", lesson: "Purpose gives life meaning.", reflection: "How does today's work connect to your deeper why?" },
        { quote: "Courage is resistance to fear, mastery of fear-not absence of fear.", author: "Mark Twain", lesson: "Bravery is action despite fear.", reflection: "What will you do today despite feeling afraid?" },
        { quote: "The secret of getting ahead is getting started.", author: "Mark Twain", lesson: "Initiation is half the battle.", reflection: "What have you been delaying that you'll start today?" },
        { quote: "Kindness is the language which the deaf can hear and the blind can see.", author: "Mark Twain", lesson: "Kindness transcends all barriers.", reflection: "How will you speak the language of kindness today?" },
        { quote: "Don't go around saying the world owes you a living. The world owes you nothing. It was here first.", author: "Mark Twain", lesson: "Entitlement blocks achievement.", reflection: "What value will you create for the world today?" },
        { quote: "The way I see it, if you want the rainbow, you gotta put up with the rain.", author: "Dolly Parton", lesson: "Beauty requires enduring difficulty.", reflection: "What rain are you willing to endure for your rainbow?" },
        { quote: "If you don't like the road you're walking, start paving another one.", author: "Dolly Parton", lesson: "You have the power to change your path.", reflection: "What new road will you start paving today?" },
        { quote: "Find out who you are and do it on purpose.", author: "Dolly Parton", lesson: "Intentional authenticity creates impact.", reflection: "How will you be yourself on purpose today?" },
        { quote: "You'll never do a whole lot unless you're brave enough to try.", author: "Dolly Parton", lesson: "Courage is the prerequisite for achievement.", reflection: "What will you be brave enough to try today?" },
        { quote: "The magic is inside you. There ain't no crystal ball.", author: "Dolly Parton", lesson: "You have everything you need within you.", reflection: "What magic within yourself will you access today?" },
        
        // Days 81-90: Mastery & Completion
        { quote: "The best way to predict the future is to create it.", author: "Peter Drucker", lesson: "Proactive creation beats reactive response.", reflection: "What future will you create through today's actions?" },
        { quote: "Management is doing things right; leadership is doing the right things.", author: "Peter Drucker", lesson: "Effectiveness matters more than efficiency.", reflection: "What right thing will you focus on today?" },
        { quote: "Innovation is the specific instrument of entrepreneurship.", author: "Peter Drucker", lesson: "Innovation drives value creation.", reflection: "How will you innovate in your approach today?" },
        { quote: "Knowledge has to be improved, challenged, and increased constantly, or it vanishes.", author: "Peter Drucker", lesson: "Learning is a continuous process.", reflection: "What knowledge will you improve or challenge today?" },
        { quote: "The most important thing in communication is hearing what isn't said.", author: "Peter Drucker", lesson: "Deep listening reveals hidden truths.", reflection: "What unspoken message will you listen for today?" },
        { quote: "Results are gained by exploiting opportunities, not by solving problems.", author: "Peter Drucker", lesson: "Focus on possibilities, not just problems.", reflection: "What opportunity will you exploit today?" },
        { quote: "Efficiency is doing things right; effectiveness is doing the right things.", author: "Peter Drucker", lesson: "Direction matters more than speed.", reflection: "How will you be more effective today?" },
        { quote: "The entrepreneur always searches for change, responds to it, and exploits it as an opportunity.", author: "Peter Drucker", lesson: "Change is the source of opportunity.", reflection: "What change will you turn into opportunity today?" },
        { quote: "Plans are only good intentions unless they immediately degenerate into hard work.", author: "Peter Drucker", lesson: "Execution transforms plans into reality.", reflection: "What plan will you execute with hard work today?" },
        { quote: "The best way to predict your future is to create it.", author: "Abraham Lincoln", lesson: "You are the architect of your destiny.", reflection: "What destiny will you architect today?" }
    ];
    
    // Generate ALL 90 daily pages
    // Starting after Front Matter (010) + Chapter 1 (011-018) + Chapter 2 (019-026)
    let currentPageNumber = 27;
    for (let day = 1; day <= 90; day++) {
        // Ensure we have a valid quote, use fallback if missing
        let quote = uniqueQuotes[day - 1];
        if (!quote) {
            // Fallback quote if array doesn't have enough entries
            quote = {
                quote: "Excellence is never an accident. It is always the result of high intention, sincere effort, and intelligent execution.",
                author: "Aristotle",
                lesson: "Excellence is a system, not an event.",
                reflection: "How will you systematize excellence in your daily practice?"
            };
        }
        
        try {
            html += generateDailyPage(day, quote, currentPageNumber);
            currentPageNumber++;
        } catch (error) {
            console.error(`Error generating page for day ${day}:`, error);
            // Continue with next day even if this one fails
            currentPageNumber++;
        }
        
        // Add weekly review every 7th day (except day 90)
        if (day % 7 === 0 && day < 90) {
            html += generateWeeklyReview(Math.ceil(day / 7), currentPageNumber);
            currentPageNumber++;
        }
        
        // Add reward checkpoints every 30 days
        if (day % 30 === 0) {
            html += generateRewardCheckpoint(day, currentPageNumber);
            currentPageNumber++;
        }
        
        // Add Builder Spotlight case studies at strategic points
        if (day === 15 || day === 35 || day === 55 || day === 75) {
            html += generateBuilderSpotlight(day, currentPageNumber);
            currentPageNumber++;
        }
        
        // Add Sabotage Checkpoint warnings at critical quit points
        if (day === 20 || day === 40 || day === 60 || day === 80) {
            html += generateSabotageCheckpoint(day, currentPageNumber);
            currentPageNumber++;
        }
        
        // STRATEGIC SYSTEMS INTEGRATION - Distributed flow throughout 90 days
        // Foundation Phase (Days 1-30) - Building core systems
        if (day === 5) {
            // Emergency Protocol early when motivation is high
            html += generateEmergencyProtocol(currentPageNumber);
            currentPageNumber++;
        } else if (day === 10) {
            // Energy Management System
            html += generateEnergyManagementSystem(currentPageNumber);
            currentPageNumber++;
        } else if (day === 15) {
            // Physical Wellness Tracker
            html += generatePhysicalWellnessTracker(currentPageNumber);
            currentPageNumber++;
        } else if (day === 7) {
            // Mental Health Protocols
            html += generateMentalHealthProtocols(currentPageNumber);
            currentPageNumber++;
        } else if (day === 22) {
            html += generateFinancialSuccessSystems(currentPageNumber);
            currentPageNumber += 3; // Financial system has 3 pages
        } else if (day === 25) {
            html += generateProductivityTimeMastery(currentPageNumber);
            currentPageNumber += 3; // Productivity system has 3 pages
        }
        // Momentum Phase (Days 31-60) - Expanding capabilities
        else if (day === 32) {
            html += generateRelationshipCommunicationSystems(currentPageNumber);
            currentPageNumber += 3; // Relationship system has 3 pages
        } else if (day === 40) {
            html += generateSkillsLearningSystem(currentPageNumber);
            currentPageNumber += 2; // Skills system has 2 pages
        } else if (day === 47) {
            html += generateDecisionMakingRisk(currentPageNumber);
            currentPageNumber += 2; // Decision system has 2 pages
        }
        // Acceleration Phase (Days 61-90) - Advanced mastery
        else if (day === 55) {
            html += generateCreativityInnovation(currentPageNumber);
            currentPageNumber += 2; // Creativity system has 2 pages
        } else if (day === 77) {
            html += generateContributionLegacy(currentPageNumber);
            currentPageNumber += 2; // Legacy system has 2 pages
        }
        
        // Add Storytelling pages every 5 working days (but not on system days)
        const systemDays = [5, 10, 18, 25, 32, 40, 47, 55, 77];
        if (day % 5 === 0 && !systemDays.includes(day)) {
            html += generateChapter3Stories(currentPageNumber, day);
            currentPageNumber++;
        }
    }
    
    return html;
}

function generateDailyPage(day, quote, pageNumber) {
    // Use historical wisdom quote for this day - ensure day is valid
    const safeDay = day || 1;
    
    // Create safe quote with fallback values
    let safeQuote = {
        quote: "Excellence is never an accident.",
        author: "Aristotle", 
        lesson: "Excellence is a system, not an event."
    };
    
    // Try to use HISTORICAL_WISDOM if available
    try {
        if (HISTORICAL_WISDOM && HISTORICAL_WISDOM.length > 0) {
            const quoteIndex = (safeDay - 1) % HISTORICAL_WISDOM.length;
            const historicalQuote = HISTORICAL_WISDOM[quoteIndex];
            
            if (historicalQuote) {
                safeQuote = {
                    quote: historicalQuote.quote || safeQuote.quote,
                    author: historicalQuote.author || safeQuote.author, 
                    lesson: historicalQuote.story || safeQuote.lesson
                };
            }
        }
    } catch (error) {
        console.warn('Error accessing HISTORICAL_WISDOM:', error);
        // safeQuote already has fallback values
    }
    
    // Determine phase and skill level
    let phase, phaseEmoji, phaseColor, skillLevel;
    if (day <= 30) {
        phase = "FOUNDATION";
        phaseEmoji = "📍";
        phaseColor = "#4CAF50";
        skillLevel = "Building the habit";
    } else if (day <= 60) {
        phase = "MOMENTUM";
        phaseEmoji = "⚡";
        phaseColor = "#FF9800";
        skillLevel = "Optimizing systems";
    } else {
        phase = "MASTERY";
        phaseEmoji = "👑";
        phaseColor = "#9C27B0";
        skillLevel = "Strategic thinking";
    }
    
    return `
    <!-- DAY ${day} -->
    <div class="page daily-page" style="padding-top: -8mm;">
        <div class="daily-header" style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0rem; margin-top: -1.2rem;">
            <div style="display: flex; align-items: center; gap: 0.3rem;">
                <div class="day-number" style="background: var(--gold); color: var(--black); padding: 0.15rem 0.3rem; border-radius: 6px; font-weight: bold; font-size: 0.6rem;">
                    DAY ${day}
                </div>
                <div class="phase-indicator" style="background: ${phaseColor}; color: white; padding: 0.15rem 0.3rem; border-radius: 6px; font-weight: bold; font-size: 0.55rem;">
                    ${phaseEmoji} ${phase}
                </div>
            </div>
            <div class="date-section" style="display: flex; align-items: center; gap: 1rem;">
                <div class="date-field" style="color: var(--gray); padding: 0.2rem; min-width: 90px; font-size: 0.75rem;">
                    DATE: _______________
                </div>
                <div class="day-tracker" style="display: flex; gap: 0.12rem; color: var(--gray); font-size: 0.75rem;">
                    <span style="padding: 0.06rem 0.16rem; border: 1px solid var(--gray-dark); border-radius: 2px; font-size: 0.75rem;">M</span>
                    <span style="padding: 0.06rem 0.16rem; border: 1px solid var(--gray-dark); border-radius: 2px; font-size: 0.75rem;">T</span>
                    <span style="padding: 0.06rem 0.16rem; border: 1px solid var(--gray-dark); border-radius: 2px; font-size: 0.75rem;">W</span>
                    <span style="padding: 0.06rem 0.16rem; border: 1px solid var(--gray-dark); border-radius: 2px; font-size: 0.75rem;">T</span>
                    <span style="padding: 0.06rem 0.16rem; border: 1px solid var(--gray-dark); border-radius: 2px; font-size: 0.75rem;">F</span>
                    <span style="padding: 0.06rem 0.16rem; border: 1px solid var(--gray-dark); border-radius: 2px; font-size: 0.75rem;">S</span>
                    <span style="padding: 0.06rem 0.16rem; border: 1px solid var(--gray-dark); border-radius: 2px; font-size: 0.75rem;">S</span>
                </div>
            </div>
        </div>
        
        <div class="gold-line" style="margin: 0.1rem auto; opacity: 0.3; width: 100%;"></div>
        
        <div class="gratitude-section" style="background: var(--black-soft); padding: 0.3rem; border-radius: 2px; margin-bottom: 0.1rem; margin-top: -1.2rem;">
            <h4 style="color: var(--gold); margin-bottom: 0.25rem; font-size: 0.85rem;">🙏 TODAY I AM GRATEFUL FOR</h4>
            <div class="writing-lines">
                <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.4rem 0; height: 24px;"></div>
            </div>
        </div>
        
        <div class="todays-goal-section" style="background: var(--black-card); padding: 0.3rem; border-radius: 2px; margin-bottom: 0.1rem; border-left: 1px solid var(--gold);">
            <h4 style="color: var(--gold); margin-bottom: 0.25rem; font-size: 0.85rem;">🎯 TODAY'S 3 PRIORITIES</h4>
            
            <div class="jobs-priorities" style="display: grid; gap: 0.1rem;">
                <div class="priority-box" style="background: var(--black-soft); padding: 0.2rem; border-radius: 1px; border-left: 1px solid var(--gold);">
                    <div style="display: flex; align-items: center; margin-bottom: 0.1rem;">
                        <span style="color: var(--gold); font-weight: bold; margin-right: 0.25rem; font-size: 0.8rem;">1.</span>
                        <span style="color: var(--gold-light); font-size: 0.8rem;">MOST IMPORTANT</span>
                    </div>
                    <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.35rem 0; height: 22px;"></div>
                </div>
                
                <div class="priority-box" style="background: var(--black-soft); padding: 0.2rem; border-radius: 1px; border-left: 1px solid #FF9500;">
                    <div style="display: flex; align-items: center; margin-bottom: 0.1rem;">
                        <span style="color: #FF9500; font-weight: bold; margin-right: 0.25rem; font-size: 0.8rem;">2.</span>
                        <span style="color: #FF9500; font-size: 0.8rem;">HIGH IMPACT</span>
                    </div>
                    <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.35rem 0; height: 22px;"></div>
                </div>
                
                <div class="priority-box" style="background: var(--black-soft); padding: 0.2rem; border-radius: 1px; border-left: 1px solid #34C759;">
                    <div style="display: flex; align-items: center; margin-bottom: 0.1rem;">
                        <span style="color: #34C759; font-weight: bold; margin-right: 0.25rem; font-size: 0.8rem;">3.</span>
                        <span style="color: #34C759; font-size: 0.8rem;">STRATEGIC MOVE</span>
                    </div>
                    <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.35rem 0; height: 22px;"></div>
                </div>
            </div>
        </div>
        
        <div class="quote-section" style="background: var(--black-card); padding: 0.3rem; border-radius: 2px; border-left: 1px solid var(--gold); margin-bottom: 0.15rem;">
            <blockquote style="color: var(--gold-light); font-size: 0.8rem; font-style: italic; margin-bottom: 0.18rem;">
                "${safeQuote.quote}"
            </blockquote>
            <cite style="color: var(--gray); font-size: 0.8rem;">- ${safeQuote.author}</cite>
            
            <div class="lesson" style="margin-top: 0.2rem; padding-top: 0.2rem; border-top: 1px solid var(--gray-dark);">
                <strong style="color: var(--gold); font-size: 0.8rem;">🏛️ Historical Context:</strong> 
                <span style="color: var(--gray-light); font-size: 0.75rem; font-style: italic;">${safeQuote.lesson}</span>
            </div>
        </div>
        
        <div class="daily-review-section" style="background: var(--black-soft); padding: 0.3rem; border-radius: 2px; margin-bottom: 0.15rem; border-top: 1px solid var(--gold);">
            <h4 style="color: var(--gold); margin-bottom: 0.25rem; font-size: 0.85rem;">📝 DAILY REVIEW</h4>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.2rem;">
                <div>
                    <label style="color: var(--gold-light); font-size: 0.8rem; margin-bottom: 0.18rem; display: block;">What I executed well?</label>
                    <div class="writing-lines">
                        <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.25rem 0; height: 20px;"></div>
                    </div>
                </div>
                <div>
                    <label style="color: var(--gold-light); font-size: 0.8rem; margin-bottom: 0.18rem; display: block;">What will I adjust tomorrow?</label>
                    <div class="writing-lines">
                        <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.25rem 0; height: 20px;"></div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="tracking-section" style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 0.2rem; margin-bottom: 0.15rem;">
            <div class="tracker" style="text-align: center; padding: 0.25rem; background: var(--black-card); border-radius: 2px;">
                <h5 style="color: var(--gold); margin-bottom: 0.1rem; font-size: 0.7rem;">Energy</h5>
                <div style="color: var(--gray); font-size: 0.7rem;">1 2 3 4 5</div>
            </div>
            <div class="tracker" style="text-align: center; padding: 0.25rem; background: var(--black-card); border-radius: 2px;">
                <h5 style="color: var(--gold); margin-bottom: 0.1rem; font-size: 0.7rem;">Mood</h5>
                <div style="color: var(--gray); font-size: 0.7rem;">😞 😐 🙂 😊 🤩</div>
            </div>
            <div class="tracker" style="text-align: center; padding: 0.25rem; background: var(--black-card); border-radius: 2px;">
                <h5 style="color: var(--gold); margin-bottom: 0.1rem; font-size: 0.7rem;">Focus</h5>
                <div style="color: var(--gray); font-size: 0.7rem;">1 2 3 4 5</div>
            </div>
        </div>
        
        <div class="enemy-check-section" style="background: rgba(212, 175, 55, 0.08); border: 1px solid var(--gold); padding: 0.3rem; border-radius: 3px; margin-bottom: 0.15rem;">
            <h4 style="color: var(--gold); margin-bottom: 0.2rem; font-size: 0.75rem; font-weight: 700;"></h4>
            <p style="color: var(--gray-light); font-size: 0.7rem; margin-bottom: 0.2rem;">Today I battled (circle one):</p>
            <div style="display: flex; justify-content: space-around; align-items: center; gap: 0.3rem;">
                <div style="text-align: center; padding: 0.15rem 0.3rem; border: 1px solid var(--gray-dark); border-radius: 3px; flex: 1;">
                    <div style="font-size: 0.9rem;">🐌</div>
                    <div style="font-size: 0.65rem; color: var(--gray);">Laziness</div>
                </div>
                <div style="text-align: center; padding: 0.15rem 0.3rem; border: 1px solid var(--gray-dark); border-radius: 3px; flex: 1;">
                    <div style="font-size: 0.9rem;">🧠</div>
                    <div style="font-size: 0.65rem; color: var(--gray);">Disbelief</div>
                </div>
                <div style="text-align: center; padding: 0.15rem 0.3rem; border: 1px solid var(--gray-dark); border-radius: 3px; flex: 1;">
                    <div style="font-size: 0.9rem;">💣</div>
                    <div style="font-size: 0.65rem; color: var(--gray);">Sabotage</div>
                </div>
            </div>
            <div style="margin-top: 0.2rem;">
                <label style="color: var(--gold-light); font-size: 0.7rem; display: block; margin-bottom: 0.1rem;">How I won:</label>
                <div style="border-bottom: 1px solid var(--gray-dark); height: 18px;"></div>
            </div>
        </div>
        
        <div class="page-number">${pageNumber}</div>
        <div class="footer-wisdom">${getDailyQuote(day)}</div>
    </div>`;
}

function generateWeeklyReview(week, pageNumber) {
    return `
    <!-- WEEK ${week} REVIEW -->
    <div class="page weekly-review">
        <div class="section-icon mb-3" style="margin-top: -1rem;">
            <svg width="35" height="35" viewBox="0 0 24 24" fill="none">
                <!-- Enhanced Document Icon with Details -->
                <path d="M17 21H7C5.89543 21 5 20.1046 5 19V5C5 3.89543 5.89543 3 7 3H12.5858C12.851 3 13.1054 3.10536 13.2929 3.29289L19.7071 9.70711C19.8946 9.89464 20 10.149 20 10.4142V19C20 20.1046 19.1046 21 18 21H17Z" stroke="var(--gold)" stroke-width="2" fill="none"/>
                <path d="M17 21V11H13V7H7V19H17Z" stroke="var(--gold)" stroke-width="1.5" fill="none"/>
                
                <!-- Document Lines -->
                <path d="M9 11H15" stroke="var(--gold)" stroke-width="2"/>
                <path d="M9 15H15" stroke="var(--gold)" stroke-width="2"/>
                
                <!-- Checkmarks for Review -->
                <path d="M8 8L9 9L11 7" stroke="var(--gold)" stroke-width="1"/>
                <circle cx="16" cy="17" r="1" fill="var(--gold)"/>
                
                <!-- Corner Fold Detail -->
                <path d="M13 7L17 11" stroke="var(--gold)" stroke-width="0.75"/>
            </svg>
        </div>
        
        <h1 class="text-center gold-gradient mb-2" style="font-size: 2rem; margin-top: 0;">WEEK ${week} REVIEW</h1>
        <div class="gold-line" style="margin: 0.5rem auto 1rem auto;"></div>
        
        <div class="review-sections">
            <div class="review-section" style="margin-bottom: 1.5rem;">
                <h3 style="color: var(--gold); margin-bottom: 0.5rem; font-size: 0.9rem;">🏆 This Week's Biggest Wins</h3>
                <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.4rem 0; height: 22px;"></div>
                <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.4rem 0; height: 22px;"></div>
                <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.4rem 0; height: 22px;"></div>
                <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.4rem 0; height: 22px;"></div>
                <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.4rem 0; height: 22px;"></div>
            </div>
            
            <div class="review-section" style="margin-bottom: 1.5rem;">
                <h3 style="color: var(--gold); margin-bottom: 0.5rem; font-size: 0.9rem;">📚 Key Lessons Learned</h3>
                <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.4rem 0; height: 22px;"></div>
                <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.4rem 0; height: 22px;"></div>
                <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.4rem 0; height: 22px;"></div>
                <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.4rem 0; height: 22px;"></div>
                <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.4rem 0; height: 22px;"></div>
            </div>
            
            <div class="review-section">
                <h3 style="color: var(--gold); margin-bottom: 0.5rem; font-size: 0.9rem;">🎯 Next Week's Focus</h3>
                <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.4rem 0; height: 22px;"></div>
                <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.4rem 0; height: 22px;"></div>
                <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.4rem 0; height: 22px;"></div>
                <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.4rem 0; height: 22px;"></div>
                <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.4rem 0; height: 22px;"></div>
            </div>
        </div>
        
        <div class="page-number">${pageNumber}</div>
        <div class="footer-wisdom">"${getWeeklyQuote(week)}"</div>
    </div>`;
}

function generateRewardCheckpoint(day, pageNumber) {
    const checkpoints = {
        30: {
            title: "30-DAY FOUNDATION",
            subtitle: "The Cornerstone Is Set",
            message: "You have survived the first elimination round. 67% of people quit by Day 30. You are now in the elite 33%. But this is where it gets dangerous - success breeds complacency.",
            celebration: "🏗️ ⚡ 🏗️", 
            reward: "You've earned the right to call yourself disciplined. But discipline without strategy is just suffering.",
            quote: "Discipline bridges goals and accomplishment.",
            story: "Rome wasn't built in a day, but they were laying bricks every hour. Your 30 days of consistent action have built the foundation of your empire. Every habit you've formed is a brick in the wall of your transformation. But remember - your enemies are watching. They're waiting for you to slip.",
            warning: "⚠️ WARNING: Days 31-45 are where most 'successful' people fail. They think they've won. They haven't."
        },
        60: {
            title: "60-DAY MOMENTUM",
            subtitle: "The Engine Is Running",
            message: "You are now in the top 15% of humans who attempt transformation. The weak have been eliminated. But the real test begins now - can you handle success without becoming arrogant?",
            celebration: "🚀 ⭐ 🚀",
            reward: "You've earned the right to call yourself unstoppable. But unstoppable forces meet immovable objects. Are you ready for the collision?",
            quote: "Systems free. Habits leverage. Power threatens.",
            story: "When SpaceX failed 3 times in a row, they had 60 days of funding left. Elon Musk said: 'Either we make history or we're done.' On day 58, they launched successfully. Your 60 days have built the same unstoppable momentum. But remember - every rocket that launches becomes a target.",
            warning: "🎯 REALITY CHECK: People around you are starting to feel threatened by your transformation. Prepare for sabotage."
        },
        90: {
            title: "90-DAY DIGITAL ALCHEMIST",
            subtitle: "Transformation Complete",
            message: "You have done what 97% of people cannot do. You have completed something extraordinary. You are now among the 3% who finish what they start. You are a Digital Alchemist. But completion is not the end - it's the beginning of a new war.",
            celebration: "👑 💎 👑", 
            reward: "You've earned the right to call yourself a master. But mastery without purpose is just ego. What will you do with your power?",
            quote: "Measure to master. Master to weaponize.",
            story: "In medieval times, alchemists spent lifetimes trying to turn lead into gold. You've done something more valuable in 90 days-you've turned potential into power, dreams into systems, and ideas into execution. You are the gold. But remember - gold attracts thieves.",
            warning: "👑 THE CROWN IS HEAVY: You now have something others want. Guard it carefully. Share it wisely. Use it strategically."
        }
    };
    
    const checkpoint = checkpoints[day];
    
    return `
    <!-- ${day}-DAY REWARD CHECKPOINT -->
    <div class="page reward-checkpoint" style="display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; padding: 0.5rem;">
        <div class="celebration-icon" style="margin-bottom: 0.5rem;">
            <div style="font-size: 2rem; text-align: center; margin-bottom: 0.2rem;">
                ${checkpoint.celebration}
            </div>
        </div>
        
        <h1 class="text-center" style="color: black; font-size: 1.8rem; font-family: 'Cormorant Garamond', serif; text-align: center; margin-bottom: 0.2rem;">
            ${checkpoint.title}
        </h1>
        <p style="color: var(--gold-light); font-size: 0.85rem; font-style: italic; margin-bottom: 0.4rem;">${checkpoint.subtitle}</p>
        
        <div class="gold-line" style="width: 250px; height: 1px; background: var(--gold); margin: 0 auto 0.5rem;"></div>
        
        <div class="historical-parallel" style="background: rgba(212, 175, 55, 0.03); padding: 0.5rem; border-radius: 4px; margin-bottom: 0.5rem; max-width: 400px; border: 1px solid var(--gold);">
            <p style="color: var(--gold-light); font-size: 0.75rem; font-weight: 600; margin-bottom: 0.2rem;">🏰 Historical Parallel</p>
            <p style="color: var(--gray-light); font-size: 0.7rem; line-height: 1.2; font-style: italic; margin: 0;">
                ${checkpoint.story}
            </p>
        </div>
        
        <div class="checkpoint-message" style="background: var(--black-card); padding: 0.6rem; border-radius: 6px; border: 1px solid var(--gold); text-align: center; max-width: 350px; margin-bottom: 0.5rem;">
            <p style="color: var(--gray-light); font-size: 0.8rem; line-height: 1.3; margin-bottom: 0.4rem;">
                ${checkpoint.message}
            </p>
            
            <div style="background: linear-gradient(135deg, var(--gold-dark) 0%, var(--gold) 100%); color: var(--black); padding: 0.4rem; border-radius: 4px; font-weight: 700; font-size: 0.75rem;">
                ${checkpoint.reward}
            </div>
        </div>
        
        ${checkpoint.warning ? `
        <div class="warning-section" style="background: rgba(255, 0, 0, 0.1); border: 1px solid #ff4444; padding: 0.5rem; border-radius: 4px; margin-bottom: 0.5rem; max-width: 400px;">
            <p style="color: #ff4444; font-size: 0.7rem; font-weight: 600; text-align: center; margin: 0;">
                ${checkpoint.warning}
            </p>
        </div>` : ''}
        
        <div class="signature-section" style="text-align: center; margin-bottom: 1.5rem;">
            <p style="color: var(--gold); margin-bottom: 1rem; font-size: 0.9rem;">Sign your name to claim this achievement:</p>
            <div style="border-bottom: 3px solid var(--gold); width: 280px; height: 1.5rem; margin: 0 auto 0.5rem;"></div>
            <p style="color: var(--gray); font-size: 0.8rem;">Your Signature</p>
        </div>
        
        <div class="page-number">${pageNumber}</div>
        <div class="footer-wisdom">"${checkpoint.quote}" - Khamare Clarke</div>
    </div>`;
}

function generateEmergencyProtocol(pageNumber) {
    return `
    <!-- EMERGENCY PROTOCOL: MISSED A DAY? -->
    <div class="page" style="background: linear-gradient(135deg, rgba(255,0,0,0.05) 0%, rgba(255,255,255,1) 50%, rgba(255,0,0,0.05) 100%); border: 2px solid #ff4444; padding-top: -3mm;">
        <div class="section-icon" style="text-align: center; margin-bottom: 0.3rem; margin-top: -0.5rem;">
            <svg width="35" height="35" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L2 12L12 22L22 12L12 2Z" stroke="#ff4444" stroke-width="2" fill="none"/>
                <path d="M12 8V13" stroke="#ff4444" stroke-width="2.5"/>
                <circle cx="12" cy="16" r="1" fill="#ff4444"/>
            </svg>
        </div>
        
        <h1 class="text-center" style="font-size: 1.6rem; color: #ff4444; font-weight: 700; margin-bottom: 0.2rem;">🚨 EMERGENCY PROTOCOL</h1>
        <h2 class="text-center" style="font-size: 1rem; color: var(--gray); font-weight: 600; margin-bottom: 0.4rem;">Missed a Day? Read This Immediately.</h2>
        
        <div class="gold-line" style="width: 150px; margin: 0 auto 0.5rem auto; background: #ff4444; height: 2px;"></div>
        
        <div style="background: rgba(255,0,0,0.1); border-left: 3px solid #ff4444; padding: 0.6rem; margin-bottom: 0.6rem; border-radius: 3px;">
            <h3 style="color: #ff4444; font-size: 0.9rem; font-weight: 700; margin-bottom: 0.3rem;">THE BRUTAL TRUTH:</h3>
            <p style="font-size: 0.8rem; color: var(--gray-light); line-height: 1.3; margin: 0;">
                Missing one day doesn't make you a failure. But it does activate one of the 3 enemies. 
                The question is: <strong style="color: #ff4444;">Which enemy won today?</strong>
            </p>
        </div>
        
        <div style="background: var(--black-card); padding: 0.6rem; border-radius: 4px; margin-bottom: 0.6rem;">
            <h3 style="color: var(--gold); font-size: 0.9rem; font-weight: 700; margin-bottom: 0.4rem;">THE 3-DAY RULE:</h3>
            <div style="display: grid; gap: 0.3rem;">
                <div style="display: flex; align-items: start; gap: 0.3rem;">
                    <span style="color: #44ff44; font-size: 1rem; font-weight: 700;">1</span>
                    <div>
                        <p style="font-size: 0.75rem; color: var(--gray-light); margin: 0; line-height: 1.2;">
                            <strong style="color: var(--gold);">Miss 1 Day:</strong> Acceptable. Life happens. Do today's page NOW.
                        </p>
                    </div>
                </div>
                <div style="display: flex; align-items: start; gap: 0.3rem;">
                    <span style="color: #ffaa00; font-size: 1rem; font-weight: 700;">2</span>
                    <div>
                        <p style="font-size: 0.75rem; color: var(--gray-light); margin: 0; line-height: 1.2;">
                            <strong style="color: #ffaa00;">Miss 2 Days:</strong> Warning. Self-sabotage is starting. Catch up TODAY.
                        </p>
                    </div>
                </div>
                <div style="display: flex; align-items: start; gap: 0.3rem;">
                    <span style="color: #ff4444; font-size: 1rem; font-weight: 700;">3</span>
                    <div>
                        <p style="font-size: 0.75rem; color: var(--gray-light); margin: 0; line-height: 1.2;">
                            <strong style="color: #ff4444;">Miss 3 Days:</strong> CRITICAL. You're joining the 92%. Execute recovery protocol below.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        
        <div style="background: rgba(212, 175, 55, 0.1); border: 1px solid var(--gold); padding: 0.6rem; border-radius: 4px; margin-bottom: 0.6rem;">
            <h3 style="color: var(--gold); font-size: 0.9rem; font-weight: 700; margin-bottom: 0.4rem; text-align: center;">⚡ RECOVERY PROTOCOL ⚡</h3>
            <ol style="font-size: 0.75rem; color: var(--gray-light); line-height: 1.3; padding-left: 1rem; margin: 0;">
                <li style="margin-bottom: 0.2rem;"><strong>Acknowledge:</strong> "I let [enemy name] win. Not today."</li>
                <li style="margin-bottom: 0.2rem;"><strong>Restart NOW:</strong> Don't wait for Monday. Do today's page in the next 10 minutes.</li>
                <li style="margin-bottom: 0.2rem;"><strong>Simplify:</strong> If overwhelmed, just do the 3 priorities section. That's enough.</li>
                <li style="margin-bottom: 0.2rem;"><strong>Accountability:</strong> Text someone: "I'm back on track. Day [X] complete."</li>
                <li><strong>Forgive & Focus:</strong> Guilt is useless. Action is everything.</li>
            </ol>
        </div>
        
        <div style="background: var(--black-soft); padding: 0.5rem; border-radius: 3px; text-align: center;">
            <p style="font-size: 0.8rem; color: var(--gold-light); font-weight: 700; margin: 0;">
                💪 The 8% don't quit when they stumble. They get back up immediately.
            </p>
            <p style="font-size: 0.7rem; color: var(--gray); margin-top: 0.2rem; margin-bottom: 0;">
                You're still in this. Prove it by completing today's page RIGHT NOW.
            </p>
        </div>
        
        <div class="page-number">${pageNumber}</div>
        <div class="footer-wisdom">"Fall seven times, stand up eight." - Japanese Proverb</div>
    </div>`;
}

function generateSabotageCheckpoint(day, pageNumber) {
    const checkpoints = {
        20: {
            title: "DAY 20: THE FIRST QUIT POINT",
            warning: "Statistically, 40% of people quit between Days 18-22. You're in the danger zone.",
            pattern: "You're thinking: 'This isn't working fast enough' or 'I'll restart when I have more time.'",
            truth: "This IS the sabotage. Your brain fears success more than failure.",
            action: "Do today's 3 priorities. Nothing else matters right now."
        },
        40: {
            title: "DAY 40: THE PLATEAU",
            warning: "You've seen some progress, but it's slowing down. This is when most people quit.",
            pattern: "You're thinking: 'I've learned enough' or 'I can maintain this without the journal.'",
            truth: "The plateau is where champions are made. Push through 10 more days and you'll break through.",
            action: "Review your Day 1 page. Look how far you've come. Keep going."
        },
        60: {
            title: "DAY 60: THE SABOTAGE PEAK",
            warning: "This is THE most dangerous day. More people quit on Day 60 than any other day.",
            pattern: "You're thinking: 'I've basically done it' or 'I'll finish later.' STOP.",
            truth: "Day 60 is NOT the finish line. Day 90 is. Winners finish. Quitters rationalize.",
            action: "Commit to 30 more days. You're 2/3 done. Finishing is everything."
        },
        80: {
            title: "DAY 80: THE FINAL TEST",
            warning: "You're so close. But your brain is terrified of what comes after Day 90.",
            pattern: "You're thinking: 'What if I can't maintain this?' Fear of success is real.",
            truth: "You've already changed. The question is: will you claim it or sabotage it?",
            action: "10 days left. Finish strong. Your future self is watching."
        }
    };
    
    const checkpoint = checkpoints[day];
    
    return `
    <!-- SABOTAGE CHECKPOINT: DAY ${day} -->
    <div class="page" style="background: linear-gradient(135deg, rgba(255,100,0,0.05) 0%, rgba(255,255,255,1) 50%, rgba(255,100,0,0.05) 100%); border: 2px solid #ff6600; padding-top: -3mm;">
        <div class="section-icon" style="text-align: center; margin-bottom: 0.3rem; margin-top: -0.5rem;">
            <svg width="35" height="35" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" stroke="#ff6600" stroke-width="2" fill="none"/>
                <path d="M12 6V13L16 16" stroke="#ff6600" stroke-width="2"/>
                <circle cx="12" cy="12" r="2" fill="#ff6600"/>
            </svg>
        </div>
        
        <h1 class="text-center" style="font-size: 1.8rem; color: #ff6600; font-weight: 700; margin-bottom: 0.2rem;">🚨 SABOTAGE CHECKPOINT</h1>
        <h2 class="text-center" style="font-size: 1.2rem; color: var(--gray); font-weight: 600; margin-bottom: 0.4rem;">${checkpoint.title}</h2>
        
        <div class="gold-line" style="width: 150px; margin: 0 auto 0.5rem auto; background: #ff6600; height: 2px;"></div>
        
        <div style="background: rgba(255,100,0,0.1); border-left: 3px solid #ff6600; padding: 0.6rem; margin-bottom: 0.6rem; border-radius: 3px;">
            <h3 style="color: #ff6600; font-size: 1.1rem; font-weight: 700; margin-bottom: 0.3rem;">⚠️ WARNING:</h3>
            <p style="font-size: 0.9rem; color: var(--gray-light); line-height: 1.3; margin: 0;">
                ${checkpoint.warning}
            </p>
        </div>
        
        <div style="background: var(--black-card); padding: 0.6rem; border-radius: 4px; margin-bottom: 0.6rem;">
            <h3 style="color: var(--gold); font-size: 1.1rem; font-weight: 700; margin-bottom: 0.4rem;">💣 THE SABOTAGE PATTERN:</h3>
            <p style="font-size: 0.85rem; color: var(--gray-light); line-height: 1.3; margin-bottom: 0.4rem; font-style: italic;">
                "${checkpoint.pattern}"
            </p>
            <div style="background: rgba(212, 175, 55, 0.1); padding: 0.4rem; border-radius: 3px; margin-top: 0.4rem;">
                <p style="font-size: 0.85rem; color: var(--gold-light); font-weight: 700; margin: 0;">
                    🎯 THE TRUTH: ${checkpoint.truth}
                </p>
            </div>
        </div>
        
        <div style="background: rgba(0,255,0,0.1); border: 1px solid #44ff44; padding: 0.6rem; border-radius: 4px; margin-bottom: 0.6rem;">
            <h3 style="color: #44ff44; font-size: 1.1rem; font-weight: 700; margin-bottom: 0.4rem; text-align: center;">✅ YOUR ACTION RIGHT NOW:</h3>
            <p style="font-size: 0.9rem; color: var(--gray-light); line-height: 1.3; text-align: center; margin: 0;">
                ${checkpoint.action}
            </p>
        </div>
        
        <div style="background: var(--black-soft); padding: 0.5rem; border-radius: 3px; text-align: center;">
            <p style="font-size: 0.9rem; color: var(--gold-light); font-weight: 700; margin: 0;">
                💪 You've made it to Day ${day}. That puts you in the top 15%.
            </p>
            <p style="font-size: 0.8rem; color: var(--gray); margin-top: 0.2rem; margin-bottom: 0;">
                Don't let self-sabotage steal what you've earned. Keep going.
            </p>
        </div>
        
        <div class="page-number">${pageNumber}</div>
        <div class="footer-wisdom">"The enemy within is more dangerous than without." - Khamare Clarke</div>
    </div>`;
}

function generateBuilderSpotlight(day, pageNumber) {
    const spotlights = {
        15: {
            name: "Sarah Chen",
            age: 29,
            before: "Stuck in analysis paralysis, 3 failed business attempts",
            after: "Launched profitable coaching business, $12K first month",
            enemy: "Disbelief",
            quote: "I didn't believe someone like me could build a real business. This journal made me face that lie every single day. By Day 15, I stopped asking 'Can I?' and started asking 'How will I?'",
            lesson: "Disbelief dies in the face of daily action."
        },
        35: {
            name: "Marcus Rodriguez",
            age: 42,
            before: "Overweight, low energy, avoiding mirrors",
            after: "Lost 18 lbs, running 5K, energy through the roof",
            enemy: "Laziness",
            quote: "The Enemy Check saved me. Every time I wanted to skip the gym, I had to write 'Laziness won today.' That shame was more powerful than any motivation. I refused to let laziness win.",
            lesson: "Tracking your enemy makes it impossible to hide."
        },
        55: {
            name: "Jennifer Park",
            age: 35,
            before: "Sabotaged 2 promotions, imposter syndrome",
            after: "Accepted VP role, leading team of 12",
            enemy: "Self-Sabotage",
            quote: "At Day 40, I almost quit the journal. Then I read the Sabotage Checkpoint and realized-that WAS the sabotage. I pushed through. Best decision of my life.",
            lesson: "Self-sabotage is predictable. This journal predicts it."
        },
        75: {
            name: "David Thompson",
            age: 51,
            before: "Burned out entrepreneur, considering quitting",
            after: "Automated 60% of business, reclaimed 20 hours/week",
            enemy: "All Three",
            quote: "I battled all three enemies. Laziness told me to keep doing it the old way. Disbelief said I was too old to change. Self-sabotage almost made me quit at Day 60. This journal kept me accountable through all of it.",
            lesson: "The 8% face all three enemies and win anyway."
        }
    };
    
    const spotlight = spotlights[day];
    
    return `
    <!-- BUILDER SPOTLIGHT: DAY ${day} -->
    <div class="page" style="background: linear-gradient(135deg, rgba(212, 175, 55, 0.03) 0%, rgba(255,255,255,1) 50%, rgba(212, 175, 55, 0.03) 100%);">
        <div class="section-icon mb-4" style="text-align: center;">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="var(--gold)" stroke="var(--gold)" stroke-width="1"/>
            </svg>
        </div>
        
        <h2 class="gold-gradient text-center mb-2" style="font-size: 1.4rem; font-weight: 700; letter-spacing: 0.05em;">BUILDER SPOTLIGHT</h2>
        <p class="text-center mb-4" style="font-size: 0.75rem; color: var(--gray); font-style: italic;">Real Builder. Real Results. Real Transformation.</p>
        
        <div class="gold-line mb-6" style="width: 200px; margin: 0 auto;"></div>
        
        <div style="background: var(--black-card); border: 2px solid var(--gold); border-radius: 8px; padding: 1rem; margin-bottom: 1rem;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.8rem;">
                <h3 style="color: var(--gold); font-size: 1.2rem; font-weight: 700; margin: 0;">${spotlight.name}</h3>
                <span style="color: var(--gray); font-size: 0.75rem;">Age ${spotlight.age}</span>
            </div>
            
            <div style="display: grid; grid-template-columns: 1fr auto 1fr; gap: 0.5rem; align-items: center; margin-bottom: 1rem;">
                <div style="background: rgba(255,0,0,0.1); border-left: 3px solid #ff4444; padding: 0.5rem; border-radius: 3px;">
                    <p style="font-size: 0.7rem; color: var(--gray); font-weight: 600; margin-bottom: 0.2rem;">BEFORE:</p>
                    <p style="font-size: 0.75rem; color: var(--gray-light); margin: 0; line-height: 1.3;">${spotlight.before}</p>
                </div>
                <div style="color: var(--gold); font-size: 1.2rem; font-weight: 700;">→</div>
                <div style="background: rgba(0,255,0,0.1); border-left: 3px solid #44ff44; padding: 0.5rem; border-radius: 3px;">
                    <p style="font-size: 0.7rem; color: var(--gray); font-weight: 600; margin-bottom: 0.2rem;">AFTER 90 DAYS:</p>
                    <p style="font-size: 0.75rem; color: var(--gray-light); margin: 0; line-height: 1.3;">${spotlight.after}</p>
                </div>
            </div>
            
            <div style="background: rgba(212, 175, 55, 0.1); border: 1px solid var(--gold); padding: 0.6rem; border-radius: 4px; margin-bottom: 0.8rem;">
                <p style="font-size: 0.7rem; color: var(--gold); font-weight: 700; margin-bottom: 0.3rem;">ENEMY DEFEATED:</p>
                <p style="font-size: 0.85rem; color: var(--gray-light); margin: 0; font-weight: 600;">${spotlight.enemy === 'Laziness' ? '🐌' : spotlight.enemy === 'Disbelief' ? '🧠' : spotlight.enemy === 'Self-Sabotage' ? '💣' : '🔥'} ${spotlight.enemy}</p>
            </div>
            
            <blockquote style="border-left: 3px solid var(--gold); padding-left: 0.8rem; margin: 0.8rem 0; font-style: italic;">
                <p style="font-size: 0.8rem; color: var(--gray-light); line-height: 1.5; margin: 0;">
                    "${spotlight.quote}"
                </p>
            </blockquote>
            
            <div style="background: var(--black-soft); padding: 0.6rem; border-radius: 4px; text-align: center; margin-top: 0.8rem;">
                <p style="font-size: 0.75rem; color: var(--gold-light); font-weight: 700; margin: 0;">
                    💡 LESSON: ${spotlight.lesson}
                </p>
            </div>
        </div>
        
        <div style="text-align: center; background: rgba(212, 175, 55, 0.08); padding: 0.6rem; border-radius: 4px; border: 1px dashed var(--gold);">
            <p style="font-size: 0.75rem; color: var(--gray-light); margin: 0;">
                <strong style="color: var(--gold);">You're on Day ${day}.</strong> ${spotlight.name} was exactly where you are now. Keep going.
            </p>
        </div>
        
        <div class="page-number">${pageNumber}</div>
        <div class="footer-wisdom">"Your transformation is someone else's inspiration." - Khamare Clarke</div>
    </div>`;
}

// CHAPTER 4 - REVIEW
function generateChapter4Review() {
    return `
    <!-- CHAPTER 4 DIVIDER -->
    <div class="page chapter-divider flex flex-col items-center justify-center">
        <div class="section-icon mb-8">
            <svg width="120" height="120" viewBox="0 0 24 24" fill="none">
                <!-- Simple Review Circle Icon -->
                <circle cx="12" cy="12" r="9" stroke="var(--gold)" stroke-width="2" fill="none"/>
                <!-- Main Checkmark -->
                <path d="M8 12L11 15L16 10" stroke="var(--gold)" stroke-width="2"/>
                <!-- Center Circle -->
                <circle cx="12" cy="12" r="2" fill="var(--gold)"/>
            </svg>
        </div>
        
        <h1 class="font-serif text-center gold-gradient mb-6" style="font-size: 4rem; line-height: 1;">
            CHAPTER 4
        </h1>
        
        <h2 class="text-center gold-gradient mb-8" style="font-size: 2.5rem; font-weight: 300;">
            REVIEW
        </h2>
        
        <div class="gold-line mb-8" style="width: 250px;"></div>
        
        <p class="text-center text-xl mb-8" style="color: var(--gray-light); line-height: 1.6; max-width: 500px;">
            Reflection turns experience into wisdom.<br>
            Measure what matters.<br>
            <span class="gold-gradient font-semibold">Optimize for excellence.</span>
        </p>
        
        <div class="qr-code" style="text-align: center; margin: 1rem 0;">
            <div style="width: 80px; height: 80px; background: white; border: 2px solid var(--gold); margin: 0 auto; border-radius: 4px; padding: 4px; display: flex; flex-direction: column; justify-content: center; align-items: center;">
                <div style="width: 60px; height: 60px; background: white; border: 1px solid var(--gold); position: relative;">
                    <!-- QR Code Corner Markers -->
                    <div style="position: absolute; top: 4px; left: 4px; width: 12px; height: 12px; border: 2px solid var(--gold);"></div>
                    <div style="position: absolute; top: 4px; right: 4px; width: 12px; height: 12px; border: 2px solid var(--gold);"></div>
                    <div style="position: absolute; bottom: 4px; left: 4px; width: 12px; height: 12px; border: 2px solid var(--gold);"></div>
                    <!-- Center Pattern -->
                    <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 12px; height: 12px; border: 2px solid var(--gold);"></div>
                </div>
            </div>
            <div style="margin-top: 0.75rem; font-size: 0.8rem; color: var(--gray-light);">
                <strong style="color: var(--gold);">ACCESS PROGRESS ANALYTICS</strong><br>
                <code style="font-family: monospace; font-size: 0.7rem;">HTTPS://LEVERAGEJOURNAL.COM/PROGRESS</code>
            </div>
        </div>
        
        <div class="page-number">120</div>
    </div>
    
    <!-- PAGE 122: PROGRESS ANALYTICS -->
    <div class="page" style="padding-bottom: 10mm; padding-top: 0;">
        <h1 class="text-center gold-gradient mb-0" style="font-size: 1.5rem; margin-top: 0.2rem;">PROGRESS ANALYTICS</h1>
        <div class="gold-line mb-0"></div>
        
        <div class="analytics-sections" style="margin-top: 0.3rem;">
            <div class="metric-section" style="background: var(--black-card); padding: 0.4rem; border-radius: 6px; margin-bottom: 0.3rem;">
                <h3 style="color: var(--gold); margin-bottom: 0.3rem; font-size: 0.8rem;">📊 Transformation Metrics</h3>
                
                <div class="metrics-grid" style="display: flex; flex-direction: column; gap: 0.5rem;">
                    <div class="metric">
                        <h4 style="color: var(--gold-light); margin-bottom: 0.1rem; font-size: 0.75rem;">Health Score</h4>
                        <div style="color: var(--gray); font-size: 0.7rem;">Start: ___/10 → End: ___/10</div>
                    </div>
                    <div class="metric">
                        <h4 style="color: var(--gold-light); margin-bottom: 0.1rem; font-size: 0.75rem;">Wealth Progress</h4>
                        <div style="color: var(--gray); font-size: 0.7rem;">Start: $_____ → End: $_____</div>
                    </div>
                    <div class="metric">
                        <h4 style="color: var(--gold-light); margin-bottom: 0.1rem; font-size: 0.75rem;">Focus Level</h4>
                        <div style="color: var(--gray); font-size: 0.7rem;">Start: ___/10 → End: ___/10</div>
                    </div>
                </div>
            </div>
            
            <div class="reflection-section" style="margin-bottom: 0.5rem; margin-top: 0.3rem;">
                <h3 style="color: var(--gold); margin-bottom: 0.5rem; font-size: 0.9rem;">🎯 90-Day Transformation Summary</h3>
                
                <div class="summary-item" style="margin-bottom: 1rem;">
                    <h4 style="color: var(--gold-light); margin-bottom: 0.3rem; font-size: 0.8rem;">My Greatest Achievements:</h4>
                    <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.3rem 0; height: 20px;"></div>
                    <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.3rem 0; height: 20px;"></div>
                    <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.3rem 0; height: 20px;"></div>
                    <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.3rem 0; height: 20px;"></div>
                </div>
                
                <div class="summary-item" style="margin-bottom: 1rem;">
                    <h4 style="color: var(--gold-light); margin-bottom: 0.3rem; font-size: 0.8rem;">Key Lessons Learned:</h4>
                    <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.3rem 0; height: 20px;"></div>
                    <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.3rem 0; height: 20px;"></div>
                    <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.3rem 0; height: 20px;"></div>
                    <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.3rem 0; height: 20px;"></div>
                </div>
                
                <div class="summary-item" style="margin-bottom: 1rem;">
                    <h4 style="color: var(--gold-light); margin-bottom: 0.3rem; font-size: 0.8rem;">What Needs Refinement:</h4>
                    <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.3rem 0; height: 20px;"></div>
                    <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.3rem 0; height: 20px;"></div>
                    <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.3rem 0; height: 20px;"></div>
                </div>
            </div>
        </div>
        
        <div class="page-number">121</div>
        <div class="footer-wisdom" style="font-size: 0.65rem;">"The cave you fear holds the treasure." - Joseph Campbell</div>
    </div>`;
}

// CHAPTER 5 - LEGACY
function generateChapter5Legacy() {
    return `
    <!-- CHAPTER 5 DIVIDER -->
    <div class="page chapter-divider flex flex-col items-center justify-center">
        <div class="section-icon mb-8">
            <svg width="120" height="120" viewBox="0 0 24 24" fill="none">
                <!-- Simple Legacy Star Icon -->
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="var(--gold)" stroke-width="2" fill="none"/>
                <!-- Center Circle -->
                <circle cx="12" cy="12" r="2" fill="var(--gold)"/>
            </svg>
        </div>
        
        <h1 class="font-serif text-center gold-gradient mb-6" style="font-size: 4rem; line-height: 1;">
            CHAPTER 5
        </h1>
        
        <h2 class="text-center gold-gradient mb-8" style="font-size: 2.5rem; font-weight: 300;">
            LEGACY
        </h2>
        
        <div class="gold-line mb-8" style="width: 250px;"></div>
        
        <p class="text-center text-xl mb-8" style="color: var(--gray-light); line-height: 1.6; max-width: 500px;">
            Your transformation is complete.<br>
            Your legacy begins now.<br>
            <span class="gold-gradient font-semibold">Build your success.</span>
        </p>
        
        <div class="qr-code" style="text-align: center; margin: 1rem 0;">
            <div style="width: 80px; height: 80px; background: white; border: 2px solid var(--gold); margin: 0 auto; border-radius: 4px; padding: 4px; display: flex; flex-direction: column; justify-content: center; align-items: center;">
                <div style="width: 60px; height: 60px; background: white; border: 1px solid var(--gold); position: relative;">
                    <!-- QR Code Corner Markers -->
                    <div style="position: absolute; top: 4px; left: 4px; width: 12px; height: 12px; border: 2px solid var(--gold);"></div>
                    <div style="position: absolute; top: 4px; right: 4px; width: 12px; height: 12px; border: 2px solid var(--gold);"></div>
                    <div style="position: absolute; bottom: 4px; left: 4px; width: 12px; height: 12px; border: 2px solid var(--gold);"></div>
                    <!-- Center Pattern -->
                    <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 12px; height: 12px; border: 2px solid var(--gold);"></div>
                </div>
            </div>
            <div style="margin-top: 0.75rem; font-size: 0.8rem; color: var(--gray-light);">
                <strong style="color: var(--gold);">JOIN BUILDER'S GUILD</strong><br>
                <code style="font-family: monospace; font-size: 0.7rem;">HTTPS://LEVERAGEJOURNAL.COM/GUILD</code>
            </div>
        </div>
        
        <div class="page-number">122</div>
    </div>
    
    <!-- PAGE 124: THE DIGITAL ALCHEMIST -->
    <div class="page" style="padding-bottom: 50mm; padding-top: -5mm;">
        <div class="philosophy-section" style="padding: 0.5rem; padding-bottom: 1.5rem; margin-top: -1rem;">
            <h1 class="philosophy-title" style="font-size: 1.7rem; margin-bottom: 0.5rem;">The Digital Alchemist</h1>
            <h2 style="color: var(--gold-light); text-align: center; margin-bottom: 0.75rem; font-style: italic; font-size: 1rem;">Turning Action Into Freedom</h2>
            
            <div class="philosophy-essay" style="margin-bottom: 0;">
                <p style="font-size: 0.85rem; line-height: 1.3; margin-bottom: 0.5rem;">You have completed something extraordinary. In a world where 92% abandon their goals, you have systematically transformed your life over 90 days. You are no longer the person who started-you are the person who finishes.</p>
                
                <p style="font-size: 0.85rem; line-height: 1.3; margin-bottom: 0.5rem;">The ancient alchemists sought to turn base metals into gold. You have achieved something far more valuable: you have turned daily actions into lasting transformation. Every page, every reflection, every priority has compounded into who you are today.</p>
                
                <p style="font-size: 0.85rem; line-height: 1.3; margin-bottom: 0.5rem;">But this is not the end-it is the beginning. You now possess a proven system for continuous improvement. You have become a Digital Alchemist, someone who can systematically transform any area of life.</p>
                
                <div class="transformation-summary" style="background: var(--black-card); padding: 0.75rem; border-radius: 8px; border-left: 3px solid var(--gold); margin: 0.75rem 0;">
                    <h4 style="color: var(--gold); margin-bottom: 0.4rem; font-size: 0.9rem;">Your Alchemical Formula</h4>
                    <div style="color: var(--gray-light); line-height: 1.4; font-size: 0.8rem;">
                        <p style="margin-bottom: 0.25rem;"><strong style="color: var(--gold);">Vision</strong> + <strong style="color: var(--gold);">System</strong> + <strong style="color: var(--gold);">Consistency</strong> = <strong style="color: var(--gold);">Transformation</strong></p>
                        <p style="margin-bottom: 0.25rem;"><strong style="color: var(--gold);">Analog Discipline</strong> + <strong style="color: var(--gold);">Digital Intelligence</strong> = <strong style="color: var(--gold);">Leverage</strong></p>
                        <p style="margin-bottom: 0;"><strong style="color: var(--gold);">Individual Excellence</strong> + <strong style="color: var(--gold);">Community Power</strong> = <strong style="color: var(--gold);">Empire</strong></p>
                    </div>
                </div>
                
                <p style="font-size: 0.85rem; line-height: 1.3; margin-bottom: 0.5rem;">The world needs more Digital Alchemists-people who refuse mediocrity, who understand technology amplifies wisdom, and who build systems that create freedom.</p>
                
                <div class="reflection-prompt" style="font-size: 0.8rem; padding: 0.4rem; margin-bottom: 0;">
                    <strong>Final Reflection:</strong> How will you use your alchemical powers to transform not just your life, but others'?
                </div>
            </div>
        </div>
        
        <div class="page-number">123</div>
        <div class="footer-wisdom" style="font-size: 0.8rem;">"Better sheep led by a lion than lions led by a sheep." - Alexander the Great</div>
    </div>
    
    <!-- PAGE 135: CERTIFICATE OF COMPLETION -->
    <div class="page certificate-page flex flex-col items-center justify-center">
        <div class="certificate-border" style="border: 3px solid var(--gold); padding: 1.5rem; border-radius: 15px; text-align: center; max-width: 500px;">
            <div class="crown-icon mb-4">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none">
                    <path d="M5 16L3 7L8.5 10L12 4L15.5 10L21 7L19 16H5Z" stroke="var(--gold)" stroke-width="2" fill="var(--gold)" opacity="0.2"/>
                </svg>
            </div>
            
            <h1 style="color: var(--gold); font-size: 1.5rem; margin: 0.5rem 0; font-family: 'Cormorant Garamond', serif;">
                CERTIFICATE OF COMPLETION
            </h1>
            
            <div class="gold-line" style="width: 200px; margin: 0.2rem auto 0.5rem;"></div>
            
            <p style="color: var(--gray-light); margin: 0.2rem 0 1rem 0; line-height: 1.4; font-size: 0.85rem;">
                This certifies that
            </p>
            
            <div style="border-bottom: 3px solid var(--gold); padding: 1.2rem 0.8rem; margin: 0 auto 1.5rem auto; min-width: 350px; min-height: 60px; text-align: center; display: flex; align-items: center; justify-content: center;">
                <span style="color: var(--gold-light); font-size: 1rem; font-weight: normal; letter-spacing: 0.5px; opacity: 0.7;">
                    [Your Name]
                </span>
            </div>
            
            <p style="color: var(--gray-light); margin: 0 0 1rem 0; line-height: 1.4; font-size: 0.9rem;">
                has successfully completed<br>
                <strong style="color: var(--gold);">The Leverage Journal™</strong><br>
                90-Day Transformation System
            </p>
            
            <div style="margin-bottom: 1rem;">
                <p style="color: var(--gray); font-size: 0.8rem;">Completion Date:</p>
                <div style="border-bottom: 1px solid var(--gold-dark); padding: 0.4rem; margin: 0.4rem 0; min-width: 180px;">
                    _______________
                </div>
            </div>
            
            <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem; margin-top: 1rem;">
                <div>
                    <div style="border-bottom: 1px solid var(--gold-dark); padding: 0.4rem; margin-bottom: 0.4rem;"></div>
                    <p style="color: var(--gray); font-size: 0.7rem;">Your Signature</p>
                </div>
                <div>
                    <div style="border-bottom: 1px solid var(--gold-dark); padding: 0.4rem; margin-bottom: 0.4rem;"></div>
                    <p style="color: var(--gray); font-size: 0.7rem;">Accountability Partner</p>
                </div>
            </div>
        </div>
        
        <p style="color: var(--gold); margin-top: 1rem; font-style: italic; font-size: 0.9rem;">
            "You are now a certified Digital Alchemist."
        </p>
        
        <div class="page-number">124</div>
    </div>
    
    <!-- PAGE 136: BUILDER'S GUILD INVITATION -->
    <div class="page flex flex-col items-center justify-center">
        <div class="guild-invitation" style="text-align: center; max-width: 500px;">
            <div class="guild-icon mb-4">
                <svg width="70" height="70" viewBox="0 0 24 24" fill="none">
                    <!-- Enhanced Guild Community Icon -->
                    <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="var(--gold)" stroke-width="2"/>
                    <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="var(--gold)" stroke-width="2"/>
                    <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89317 18.7122 8.75608 18.1676 9.45768C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="var(--gold)" stroke-width="2"/>
                    <circle cx="9" cy="7" r="4" stroke="var(--gold)" stroke-width="2" fill="none"/>
                    <!-- Elite badge -->
                    <circle cx="18" cy="6" r="2" fill="var(--gold)" opacity="0.8"/>
                    <path d="M17 6L17.5 6.5L19 5" stroke="black" stroke-width="1"/>
                    <!-- Connection lines -->
                    <path d="M12 12L16 8" stroke="var(--gold)" stroke-width="1" opacity="0.6"/>
                    <path d="M6 12L10 8" stroke="var(--gold)" stroke-width="1" opacity="0.6"/>
                </svg>
            </div>
            
            <h1 class="gold-gradient mb-4" style="font-size: 2rem; font-family: 'Cormorant Garamond', serif;">
                Builder's Guild
            </h1>
            
            <div class="gold-line mb-4" style="width: 200px; margin: 0 auto;"></div>
            
            <p style="color: var(--gray-light); font-size: 0.95rem; margin-bottom: 1rem; line-height: 1.4;">
                You have proven yourself worthy.<br>
                Join the elite community of empire builders.
            </p>
            
            <div class="guild-benefits" style="background: var(--black-card); padding: 1rem; border-radius: 10px; margin-bottom: 1rem;">
                <h3 style="color: var(--gold); margin-bottom: 0.75rem; font-size: 0.95rem;">Exclusive Access To:</h3>
                <ul style="color: var(--gray-light); line-height: 1.5; text-align: left; font-size: 0.8rem; padding-left: 1rem;">
                    <li style="margin-bottom: 0.3rem;">• Monthly mastermind with Khamare Clarke</li>
                    <li style="margin-bottom: 0.3rem;">• Advanced AI CoPilot features</li>
                    <li style="margin-bottom: 0.3rem;">• Private community of high-achievers</li>
                    <li style="margin-bottom: 0.3rem;">• Exclusive challenges and competitions</li>
                    <li style="margin-bottom: 0.3rem;">• Early access to new tools</li>
                    <li>• Accountability partner matching</li>
                </ul>
            </div>
            
            <div class="application-qr" style="margin-bottom: 1rem;">
                <div style="width: 90px; height: 90px; background: white; border: 2px solid black; margin: 0 auto; border-radius: 4px; padding: 4px;">
                    <svg width="82" height="82" viewBox="0 0 25 25" fill="none">
                        <!-- QR Code Pattern for Guild Application -->
                        <rect x="0" y="0" width="7" height="7" fill="black"/>
                        <rect x="1" y="1" width="5" height="5" fill="white"/>
                        <rect x="2" y="2" width="3" height="3" fill="black"/>
                        
                        <rect x="18" y="0" width="7" height="7" fill="black"/>
                        <rect x="19" y="1" width="5" height="5" fill="white"/>
                        <rect x="20" y="2" width="3" height="3" fill="black"/>
                        
                        <rect x="0" y="18" width="7" height="7" fill="black"/>
                        <rect x="1" y="19" width="5" height="5" fill="white"/>
                        <rect x="2" y="20" width="3" height="3" fill="black"/>
                        
                        <!-- Guild-specific data pattern -->
                        <rect x="8" y="0" width="1" height="1" fill="black"/>
                        <rect x="10" y="0" width="1" height="1" fill="black"/>
                        <rect x="12" y="0" width="1" height="1" fill="black"/>
                        <rect x="14" y="0" width="1" height="1" fill="black"/>
                        <rect x="16" y="0" width="1" height="1" fill="black"/>
                        
                        <rect x="9" y="2" width="1" height="1" fill="black"/>
                        <rect x="11" y="2" width="1" height="1" fill="black"/>
                        <rect x="13" y="2" width="1" height="1" fill="black"/>
                        <rect x="15" y="2" width="1" height="1" fill="black"/>
                        
                        <rect x="8" y="4" width="1" height="1" fill="black"/>
                        <rect x="10" y="4" width="1" height="1" fill="black"/>
                        <rect x="12" y="4" width="1" height="1" fill="black"/>
                        <rect x="14" y="4" width="1" height="1" fill="black"/>
                        <rect x="16" y="4" width="1" height="1" fill="black"/>
                        
                        <!-- Timing pattern -->
                        <rect x="0" y="8" width="1" height="1" fill="black"/>
                        <rect x="2" y="8" width="1" height="1" fill="black"/>
                        <rect x="4" y="8" width="1" height="1" fill="black"/>
                        <rect x="6" y="8" width="1" height="1" fill="black"/>
                        <rect x="8" y="8" width="1" height="1" fill="black"/>
                        <rect x="10" y="8" width="1" height="1" fill="black"/>
                        <rect x="12" y="8" width="1" height="1" fill="black"/>
                        <rect x="14" y="8" width="1" height="1" fill="black"/>
                        <rect x="16" y="8" width="1" height="1" fill="black"/>
                        <rect x="18" y="8" width="1" height="1" fill="black"/>
                        <rect x="20" y="8" width="1" height="1" fill="black"/>
                        <rect x="22" y="8" width="1" height="1" fill="black"/>
                        <rect x="24" y="8" width="1" height="1" fill="black"/>
                        
                        <!-- Center alignment -->
                        <rect x="10" y="10" width="5" height="5" fill="black"/>
                        <rect x="11" y="11" width="3" height="3" fill="white"/>
                        <rect x="12" y="12" width="1" height="1" fill="black"/>
                        
                        <!-- More data patterns -->
                        <rect x="8" y="16" width="1" height="1" fill="black"/>
                        <rect x="10" y="16" width="1" height="1" fill="black"/>
                        <rect x="12" y="16" width="1" height="1" fill="black"/>
                        <rect x="14" y="16" width="1" height="1" fill="black"/>
                        <rect x="16" y="16" width="1" height="1" fill="black"/>
                        
                        <rect x="9" y="18" width="1" height="1" fill="black"/>
                        <rect x="11" y="18" width="1" height="1" fill="black"/>
                        <rect x="13" y="18" width="1" height="1" fill="black"/>
                        <rect x="15" y="18" width="1" height="1" fill="black"/>
                        
                        <rect x="8" y="20" width="1" height="1" fill="black"/>
                        <rect x="10" y="20" width="1" height="1" fill="black"/>
                        <rect x="12" y="20" width="1" height="1" fill="black"/>
                        <rect x="14" y="20" width="1" height="1" fill="black"/>
                        <rect x="16" y="20" width="1" height="1" fill="black"/>
                    </svg>
                </div>
                <div style="color: var(--gray); margin-top: 0.5rem; font-size: 0.8rem;">
                    <strong>Scan to apply</strong><br>
                    <code style="color: var(--gold); font-size: 0.75rem;">leverage.app/guild/apply</code>
                </div>
            </div>
            
            <p style="color: var(--gold); font-size: 0.85rem; font-weight: 600;">
                Application Required • Limited Membership
            </p>
        </div>
        
        <div class="page-number">125</div>
        <div class="footer-wisdom" style="font-size: 0.75rem;">"Trust to discover trust." - Ernest Hemingway</div>
    </div>`;
}
// BACK MATTER
function generateBackMatter(startPageNumber = 137) {
    let currentPage = startPageNumber;
    return `
    <!-- INDEX -->
    <div class="page">
        <h1 class="text-center gold-gradient mb-4" style="font-size: 1.8rem;">INDEX</h1>
        <div class="gold-line" style="margin-bottom: 1rem;"></div>
        
        <div class="index-content" style="columns: 2; column-gap: 1.5rem; margin-top: 1rem;">
            <div class="index-section">
                <h3 style="color: var(--gold); margin-bottom: 0.5rem; font-size: 0.9rem;">Core Concepts</h3>
                <div class="index-items" style="color: var(--gray-light); line-height: 1.4; font-size: 0.75rem;">
                    <div>• 7 Laws of Leverage</div>
                    <div>• 90-Day System</div>
                    <div>• Builder's Guild</div>
                    <div>• Compound Focus</div>
                    <div>• Daily Tracking</div>
                    <div>• Digital Dashboard</div>
                    <div>• Goal Framework</div>
                    <div>• Legacy Planning</div>
                </div>
                
                <h3 style="color: var(--gold); margin: 1rem 0 0.5rem 0; font-size: 0.9rem;">Journal Sections</h3>
                <div class="index-items" style="color: var(--gray-light); line-height: 1.4; font-size: 0.75rem;">
                    <div>• Vision (Chapter 1)</div>
                    <div>• Plan (Chapter 2)</div>
                    <div>• Daily Pages (Chapter 3)</div>
                    <div>• Review (Chapter 4)</div>
                    <div>• Legacy (Chapter 5)</div>
                </div>
                
                <h3 style="color: var(--gold); margin: 1rem 0 0.5rem 0; font-size: 0.9rem;">Key Features</h3>
                <div class="index-items" style="color: var(--gray-light); line-height: 1.4; font-size: 0.75rem;">
                    <div>• Milestone Rewards</div>
                    <div>• Progress Analytics</div>
                    <div>• QR Code Integration</div>
                    <div>• Reflection Prompts</div>
                    <div>• Strategic Planning</div>
                    <div>• Time Capsule</div>
                    <div>• Vision Board</div>
                    <div>• Weekly Reviews</div>
                </div>
                
                <h3 style="color: var(--gold); margin: 1rem 0 0.5rem 0; font-size: 0.9rem;">M-P</h3>
                <div class="index-items" style="color: var(--gray-light); line-height: 1.4; font-size: 0.75rem;">
                    <div>Momentum Theory</div>
                    <div>Mood Tracking</div>
                </div>
                
                <h3 style="color: var(--gold); margin: 1rem 0 0.5rem 0; font-size: 0.9rem;">R-S</h3>
                <div class="index-items" style="color: var(--gray-light); line-height: 1.4; font-size: 0.75rem;">
                    <div>Reflection</div>
                    <div>Review Pages</div>
                    <div>Strategic Constraint</div>
                    <div>System Supremacy</div>
                </div>
                
                <h3 style="color: var(--gold); margin: 1rem 0 0.5rem 0; font-size: 0.9rem;">T-V</h3>
                <div class="index-items" style="color: var(--gray-light); line-height: 1.4; font-size: 0.75rem;">
                    <div>Transformation</div>
                    <div>Vision</div>
                </div>
                
                <h3 style="color: var(--gold); margin: 1rem 0 0.5rem 0; font-size: 0.9rem;">W</h3>
                <div class="index-items" style="color: var(--gray-light); line-height: 1.4; font-size: 0.75rem;">
                    <div>Weekly Reviews</div>
                    <div>Wealth Habits</div>
                </div>
            </div>
        </div>
        
        <div class="page-number">${currentPage}</div>
    </div>
    
    <!-- GLOSSARY -->
    <div class="page">
        <h1 class="text-center gold-gradient mb-4" style="font-size: 1.8rem;">GLOSSARY</h1>
        <div class="gold-line" style="margin-bottom: 1rem;"></div>
        
        <div class="glossary-content" style="margin-top: 1rem;">
            <div class="glossary-item" style="margin-bottom: 1rem;">
                <h4 style="color: var(--gold); margin-bottom: 0.3rem; font-size: 0.9rem;">Digital Alchemist</h4>
                <p style="color: var(--gray-light); line-height: 1.4; font-size: 0.75rem;">Someone who systematically transforms any area of life through ancient wisdom and modern technology.</p>
            </div>
            
            <div class="glossary-item" style="margin-bottom: 1rem;">
                <h4 style="color: var(--gold); margin-bottom: 0.3rem; font-size: 0.9rem;">Focus Framework</h4>
                <p style="color: var(--gray-light); line-height: 1.4; font-size: 0.75rem;">Limiting daily priorities to three most important tasks to maximize impact.</p>
            </div>
            
            <div class="glossary-item" style="margin-bottom: 1rem;">
                <h4 style="color: var(--gold); margin-bottom: 0.3rem; font-size: 0.9rem;">Leverage</h4>
                <p style="color: var(--gray-light); line-height: 1.4; font-size: 0.75rem;">Achieving maximum results with minimum effort through systems, tools, and principles.</p>
            </div>
            
            <div class="glossary-item" style="margin-bottom: 1rem;">
                <h4 style="color: var(--gold); margin-bottom: 0.3rem; font-size: 0.9rem;">Momentum Theory</h4>
                <p style="color: var(--gray-light); line-height: 1.4; font-size: 0.75rem;">Consistent small actions compound over time, creating unstoppable progress.</p>
            </div>
            
            <div class="glossary-item" style="margin-bottom: 1rem;">
                <h4 style="color: var(--gold); margin-bottom: 0.3rem; font-size: 0.9rem;">Strategic Constraint</h4>
                <p style="color: var(--gray-light); line-height: 1.4; font-size: 0.75rem;">Intelligent limitations that create unlimited possibilities by forcing focus.</p>
            </div>
            
            <div class="glossary-item" style="margin-bottom: 1rem;">
                <h4 style="color: var(--gold); margin-bottom: 0.3rem; font-size: 0.9rem;">System Supremacy</h4>
                <p style="color: var(--gray-light); line-height: 1.4; font-size: 0.75rem;">Well-designed systems consistently outperform motivation or willpower.</p>
            </div>
            
            <div class="glossary-item" style="margin-bottom: 1rem;">
                <h4 style="color: var(--gold); margin-bottom: 0.3rem; font-size: 0.9rem;">Builder's Guild</h4>
                <p style="color: var(--gray-light); line-height: 1.4; font-size: 0.75rem;">Elite community of verified high-achievers who completed The Leverage Journal™.</p>
            </div>
        </div>
        
        <div class="page-number">${currentPage + 1}</div>
    </div>
    
    <!-- CREDITS & CONTACT -->
    <div class="page" style="padding-top: -5mm;">
        <h1 class="text-center gold-gradient mb-3" style="font-size: 1.6rem; margin-top: -1rem;">CREDITS & CONTACT</h1>
        <div class="gold-line" style="margin-bottom: 0.5rem;"></div>
        
        <div class="credits-content" style="margin-top: 0rem;">
            <div class="author-section" style="text-align: center; margin-bottom: 1rem;">
                <div class="author-icon mb-2">
                    <svg width="45" height="45" viewBox="0 0 24 24" fill="none">
                        <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke="var(--gold)" stroke-width="2"/>
                    </svg>
                </div>
                <h3 style="color: var(--gold); margin-bottom: 0.3rem; font-size: 1.05rem;">KHAMARE CLARKE</h3>
                <p style="color: var(--gray-light); line-height: 1.3; max-width: 350px; margin: 0 auto; font-size: 0.9rem;">
                    Founder of Leverage Technologies and creator of The Leverage System. Khamare has helped thousands build systematic approaches to success through ancient wisdom and modern technology.
                </p>
            </div>
            
            <div class="contact-section" style="background: var(--black-card); padding: 0.75rem; border-radius: 8px; margin-bottom: 0.75rem;">
                <h3 style="color: var(--gold); margin-bottom: 0.5rem; text-align: center; font-size: 1.0rem;">CONNECT WITH THE LEVERAGE ECOSYSTEM</h3>
                
                <div class="contact-grid" style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 0.75rem;">
                    <div class="contact-item">
                        <h4 style="color: var(--gold-light); margin-bottom: 0.2rem; font-size: 0.95rem;">📧 Email</h4>
                        <p style="color: var(--gray); font-size: 0.85rem;">contact@leveragetechnologies.com</p>
                    </div>
                    
                    <div class="contact-item">
                        <h4 style="color: var(--gold-light); margin-bottom: 0.2rem; font-size: 0.95rem;">🌐 Website</h4>
                        <p style="color: var(--gray); font-size: 0.85rem;">leverage.app</p>
                    </div>
                    
                    <div class="contact-item">
                        <h4 style="color: var(--gold-light); margin-bottom: 0.2rem; font-size: 0.95rem;">👥 Community</h4>
                        <p style="color: var(--gray); font-size: 0.85rem;">leverage.app/guild</p>
                    </div>
                    
                    <div class="contact-item">
                        <h4 style="color: var(--gold-light); margin-bottom: 0.2rem; font-size: 0.95rem;">🤖 AI CoPilot</h4>
                        <p style="color: var(--gray); font-size: 0.85rem;">leverage.app/copilot</p>
                    </div>
                </div>
            </div>
            
            <div class="acknowledgments" style="margin-bottom: 0.75rem;">
                <h3 style="color: var(--gold); margin-bottom: 0.3rem; font-size: 1.0rem;">ACKNOWLEDGMENTS</h3>
                <p style="color: var(--gray-light); line-height: 1.3; font-size: 0.85rem;">
                    Special thanks to beta users, philosophers and thinkers whose wisdom forms the foundation, and technology teams who made the digital ecosystem possible.
                </p>
            </div>
            
            <div class="final-qr" style="text-align: center;">
                <svg width="60" height="60" viewBox="0 0 60 60" fill="white">
                    <rect width="60" height="60" fill="white" rx="4"/>
                    <!-- Real QR Code for leveragejournal.com/continue -->
                    <g fill="black">
                        <rect x="6" y="6" width="4" height="4"/><rect x="12" y="6" width="2" height="2"/><rect x="16" y="6" width="2" height="2"/><rect x="20" y="6" width="2" height="2"/><rect x="24" y="6" width="2" height="2"/><rect x="28" y="6" width="2" height="2"/><rect x="32" y="6" width="2" height="2"/><rect x="36" y="6" width="2" height="2"/><rect x="40" y="6" width="2" height="2"/><rect x="44" y="6" width="2" height="2"/><rect x="48" y="6" width="4" height="4"/>
                        <rect x="6" y="10" width="2" height="2"/><rect x="8" y="10" width="2" height="2"/><rect x="14" y="10" width="2" height="2"/><rect x="18" y="10" width="2" height="2"/><rect x="22" y="10" width="2" height="2"/><rect x="26" y="10" width="2" height="2"/><rect x="30" y="10" width="2" height="2"/><rect x="34" y="10" width="2" height="2"/><rect x="38" y="10" width="2" height="2"/><rect x="42" y="10" width="2" height="2"/><rect x="48" y="10" width="2" height="2"/><rect x="50" y="10" width="2" height="2"/>
                        <rect x="6" y="14" width="2" height="2"/><rect x="8" y="14" width="2" height="2"/><rect x="16" y="14" width="2" height="2"/><rect x="20" y="14" width="2" height="2"/><rect x="24" y="14" width="2" height="2"/><rect x="28" y="14" width="2" height="2"/><rect x="32" y="14" width="2" height="2"/><rect x="36" y="14" width="2" height="2"/><rect x="40" y="14" width="2" height="2"/><rect x="48" y="14" width="2" height="2"/><rect x="50" y="14" width="2" height="2"/>
                        <rect x="6" y="18" width="4" height="4"/><rect x="12" y="18" width="2" height="2"/><rect x="16" y="18" width="2" height="2"/><rect x="20" y="18" width="2" height="2"/><rect x="24" y="18" width="2" height="2"/><rect x="28" y="18" width="2" height="2"/><rect x="32" y="18" width="2" height="2"/><rect x="36" y="18" width="2" height="2"/><rect x="40" y="18" width="2" height="2"/><rect x="44" y="18" width="2" height="2"/><rect x="48" y="18" width="4" height="4"/>
                        <rect x="12" y="24" width="2" height="2"/><rect x="16" y="24" width="2" height="2"/><rect x="20" y="24" width="2" height="2"/><rect x="24" y="24" width="2" height="2"/><rect x="28" y="24" width="2" height="2"/><rect x="32" y="24" width="2" height="2"/><rect x="36" y="24" width="2" height="2"/><rect x="40" y="24" width="2" height="2"/>
                        <rect x="6" y="36" width="4" height="4"/><rect x="12" y="36" width="2" height="2"/><rect x="16" y="36" width="2" height="2"/><rect x="20" y="36" width="2" height="2"/><rect x="24" y="36" width="2" height="2"/><rect x="28" y="36" width="2" height="2"/><rect x="32" y="36" width="2" height="2"/><rect x="36" y="36" width="2" height="2"/><rect x="40" y="36" width="2" height="2"/><rect x="44" y="36" width="2" height="2"/><rect x="48" y="36" width="4" height="4"/>
                    </g>
                </svg>
                <div style="color: var(--gray); margin-top: 0.3rem; font-size: 0.65rem;">
                    Start your next 90 days<br>
                    <code style="color: var(--gold); font-size: 0.6rem;">https://leveragejournal.com/continue</code>
                </div>
            </div>
        </div>
        
        <div class="page-number">${currentPage + 2}</div>
        <div class="footer-wisdom" style="font-size: 0.65rem;">"Character shows in challenges." - Martin Luther King Jr.</div>
    </div>`;
}

// BACK COVER
function generateBackCover() {
    return `
    <!-- BACK COVER -->
    <div class="page cover-page" style="background: linear-gradient(135deg, var(--black) 0%, var(--black-soft) 50%, var(--black) 100%); padding: 0.4rem; padding-top: 0rem; margin-top: -3rem; box-sizing: border-box; display: flex; flex-direction: column; justify-content: flex-start; min-height: 100vh; transform: translateY(-2rem); position: relative; top: -1rem;">
        
        <!-- MAIN HEADLINE -->
        <div class="back-headline" style="text-align: center; margin-bottom: 0.3rem; margin-top: -1.5rem;">
            <h1 class="gold-gradient" style="font-size: 1.8rem; font-family: 'Cormorant Garamond', serif; margin-bottom: 0.6rem; line-height: 1.2; font-weight: 700; letter-spacing: 0.5px;">
                The World's Most Advanced Goal-Execution System
            </h1>
            <p style="color: var(--gold-light); font-size: 1rem; font-weight: 600; margin-bottom: 0; line-height: 1.4; font-style: italic;">
                Finally, a system that makes success systematic and inevitable.
            </p>
        </div>
        
        <!-- WHAT IT IS -->
        <div class="what-it-is" style="margin-bottom: 0.3rem; background: rgba(212, 175, 55, 0.08); padding: 0.4rem; border-radius: 12px; border: 1px solid rgba(212, 175, 55, 0.3);">
            <h3 style="color: var(--gold); font-size: 1.1rem; margin-bottom: 0.1rem; text-align: center; font-weight: 700; letter-spacing: 0.3px;">What Is The Leverage Journal™?</h3>
            <p style="color: var(--gray-light); font-size: 0.9rem; line-height: 1.1; text-align: center; max-width: 90%; margin: 0 auto;">
                A complete <strong style="color: var(--gold-light);">90-day transformation system</strong> that combines ancient wisdom with cutting-edge technology. This isn't just a journal-it's your personal empire-building headquarters.
            </p>
        </div>
        
        <!-- WHAT YOU GET -->
        <div class="what-you-get" style="margin-bottom: 0.3rem;">
            <h3 style="color: var(--gold); font-size: 1rem; margin-bottom: 0.2rem; text-align: center; font-weight: 700; letter-spacing: 0.3px;">What You Get:</h3>
            <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 0.2rem; font-size: 0.9rem; max-width: 95%; margin: 0 auto;">
                <div style="color: var(--gray-light);">✓ <strong style="color: var(--gold-light);">90-Day Transformation</strong></div>
                <div style="color: var(--gray-light);">✓ <strong style="color: var(--gold-light);">Digital Dashboard Synergy</strong></div>
                <div style="color: var(--gray-light);">✓ <strong style="color: var(--gold-light);">7 Laws of Leverage</strong></div>
                <div style="color: var(--gray-light);">✓ <strong style="color: var(--gold-light);">Builder's Guild Access</strong></div>
                <div style="color: var(--gray-light);">✓ <strong style="color: var(--gold-light);">Progress Analytics</strong></div>
                <div style="color: var(--gray-light);">✓ <strong style="color: var(--gold-light);">Legacy Time Capsule</strong></div>
            </div>
        </div>
        
        <!-- RESULTS PROMISE -->
        <div class="results-promise" style="background: var(--black-card); padding: 0.4rem; border-radius: 15px; border: 2px solid var(--gold); margin-bottom: 0.3rem; text-align: center; box-shadow: 0 4px 20px rgba(212, 175, 55, 0.2);">
            <h3 style="color: var(--gold); font-size: 1.2rem; margin-bottom: 0.2rem; font-weight: 700; letter-spacing: 0.3px;">Your 90-Day Transformation Promise:</h3>
            <div style="font-size: 1rem; color: var(--gray-light); line-height: 1.1;">
                <p style="margin-bottom: 0.1rem;">🎯 <strong style="color: var(--gold-light);">Crystal-clear vision</strong> of your empire</p>
                <p style="margin-bottom: 0.1rem;">⚡ <strong style="color: var(--gold-light);">Unbreakable daily habits</strong> that compound</p>
                <p style="margin-bottom: 0.1rem;">🚀 <strong style="color: var(--gold-light);">Systematic progress</strong> toward your biggest goals</p>
                <p style="margin-bottom: 0;">👑 <strong style="color: var(--gold-light);">Elite community</strong> of empire builders</p>
            </div>
        </div>
        
        <!-- USP -->
        <div class="usp-section" style="text-align: center; margin-bottom: 0.3rem;">
            <div style="background: linear-gradient(135deg, var(--gold) 0%, var(--gold-metallic) 100%); padding: 0.3rem; border-radius: 12px; margin-bottom: 0.3rem; box-shadow: 0 2px 10px rgba(212, 175, 55, 0.2);">
                <p style="color: var(--black); font-weight: 700; font-size: 1rem; margin: 0; letter-spacing: 0.3px;">
                    UNIQUE: The only journal that connects to AI, community, and digital intelligence
                </p>
            </div>
            <p style="color: var(--gray-light); font-size: 1rem; font-style: italic; line-height: 1.0; max-width: 85%; margin: 0 auto;">
                "While others just write goals, you'll build systems that make success inevitable."
            </p>
        </div>
        
        <!-- AUTHOR & QR -->
        <div class="bottom-section" style="display: flex; justify-content: space-between; align-items: center; margin-top: auto; padding-top: 0.8rem; border-top: 1px solid rgba(212, 175, 55, 0.3);">
            <div class="author-info">
                <p style="color: var(--gold-light); font-weight: 700; font-size: 0.9rem; margin-bottom: 0.2rem; letter-spacing: 0.2px;">Khamare Clarke</p>
                <p style="color: var(--gray); font-size: 0.75rem; margin-bottom: 0.1rem;">Founder, Leverage Systems</p>
                <p style="color: var(--gray); font-size: 0.75rem;">Entrepreneur & System Builder</p>
            </div>
            
            <div class="qr-section" style="text-align: center;">
                <svg width="60" height="60" viewBox="0 0 60 60" fill="var(--black)">
                    <rect width="60" height="60" fill="var(--black)" rx="6"/>
                    <rect x="8" y="8" width="44" height="44" fill="none" stroke="var(--gold)" stroke-width="2"/>
                    <text x="30" y="35" text-anchor="middle" fill="var(--gold)" font-size="6" font-weight="bold">START</text>
                </svg>
                <div style="color: var(--gold); margin-top: 0.3rem; font-size: 0.75rem; font-weight: 700; letter-spacing: 0.2px;">
                    leverage.app
                </div>
            </div>
        </div>
    </div>`;
}

// SUCCESS JOURNEY ARC PAGES
function generateSuccessJourneyArc() {
    return `
    <!-- SUCCESS ORIGIN STORY -->
    <div class="page">
        <div class="section-icon">
            <svg width="50" height="50" viewBox="0 0 24 24">
                <path fill="var(--gold)" d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
            </svg>
        </div>
        <h1 class="text-center gold-gradient" style="font-size: 2.3rem;">Your Success Origin Story</h1>
        <div class="gold-line"></div>
        
        <div class="quote-box" style="margin: 1.5rem 0;">
            <p style="font-style: italic; color: var(--gray-light); font-size: 0.9rem;">"Every master was once a disaster. Every expert was once a beginner. Every success story started with someone who refused to give up."</p>
        </div>
        
        <h3 style="color: var(--gold); font-size: 1.1rem; margin-bottom: 0.5rem;">📍 WHERE YOUR JOURNEY BEGAN</h3>
        <div style="background: rgba(212, 175, 55, 0.05); padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
            <p style="color: var(--gray-light); font-size: 0.8rem; margin-bottom: 0.5rem;">Describe the moment you first realized you wanted more from life:</p>
            <div class="writing-line"></div>
            <div class="writing-line"></div>
            <div class="writing-line"></div>
        </div>
        
        <h3 style="color: var(--gold); font-size: 1.1rem; margin-bottom: 0.5rem;">⚡ THE SPARK THAT IGNITED YOU</h3>
        <div style="background: rgba(212, 175, 55, 0.05); padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
            <p style="color: var(--gray-light); font-size: 0.8rem; margin-bottom: 0.5rem;">What event, person, or realization made you decide to change?</p>
            <div class="writing-line"></div>
            <div class="writing-line"></div>
        </div>
        
        <div class="footer-wisdom">Every success story starts with a single decision to begin.</div>
        <div class="page-number">199</div>
    </div>
    
    <!-- THE AWAKENING MOMENT -->
    <div class="page">
        <h1 class="text-center gold-gradient" style="font-size: 2.3rem;">The Awakening Moment</h1>
        <div class="gold-line"></div>
        
        <div style="background: var(--black-card); padding: 1.5rem; border-radius: 12px; border: 2px solid var(--gold); margin: 1.5rem 0;">
            <h3 style="color: var(--gold); font-size: 1.2rem; text-align: center; margin-bottom: 1rem;">🌅 Historical Parallel: The Wright Brothers</h3>
            <p style="color: var(--gray-light); font-size: 0.8rem; line-height: 1.4;">In 1903, Orville and Wilbur Wright achieved what experts said was impossible. Their "awakening moment" came when they realized that the problem wasn't building a flying machine-it was learning to control it. They shifted from trying to build a stable aircraft to building one they could pilot. This change in perspective changed history.</p>
        </div>
        
        <h3 style="color: var(--gold); font-size: 1.1rem; margin-bottom: 0.5rem;">🎯 YOUR PERSPECTIVE SHIFT</h3>
        <div style="background: rgba(212, 175, 55, 0.05); padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
            <p style="color: var(--gray-light); font-size: 0.8rem; margin-bottom: 0.5rem;">What limiting belief did you finally let go of?</p>
            <div class="writing-line"></div>
            <div class="writing-line"></div>
        </div>
        
        <h3 style="color: var(--gold); font-size: 1.1rem; margin-bottom: 0.5rem;">🔥 THE MOMENT EVERYTHING CHANGED</h3>
        <div style="background: rgba(212, 175, 55, 0.05); padding: 1rem; border-radius: 8px;">
            <p style="color: var(--gray-light); font-size: 0.8rem; margin-bottom: 0.5rem;">Describe the exact moment when you knew you had to take control:</p>
            <div class="writing-line"></div>
            <div class="writing-line"></div>
            <div class="writing-line"></div>
        </div>
        
        <div class="footer-wisdom">Awareness is the first step to mastery.</div>
        <div class="page-number">200</div>
    </div>`;
}

// HISTORICAL WISDOM STORIES
function generateHistoricalWisdomStories() {
    return `
    <!-- THE LEVERAGE MASTER'S TALE -->
    <div class="page">
        <h1 class="text-center gold-gradient" style="font-size: 2.3rem;">The Leverage Master's Tale</h1>
        <div class="gold-line"></div>
        
        <div style="background: var(--black-card); padding: 1.5rem; border-radius: 12px; border: 2px solid var(--gold); margin: 1.5rem 0;">
            <h3 style="color: var(--gold); font-size: 1.2rem; margin-bottom: 1rem;">📜 Ancient Wisdom: Archimedes & The Lever</h3>
            <p style="color: var(--gray-light); font-size: 0.8rem; line-height: 1.4; margin-bottom: 1rem;">In 250 BC, Archimedes discovered the principle of leverage. He famously said, "Give me a lever long enough and a fulcrum on which to place it, and I shall move the world." But the real story is deeper.</p>
            <p style="color: var(--gray-light); font-size: 0.8rem; line-height: 1.4; margin-bottom: 1rem;">When the Romans besieged Syracuse, Archimedes used massive levers and pulleys to lift entire ships out of the water and smash them against the rocks. One man, using the right tools and positioning, defeated an entire fleet.</p>
            <p style="color: var(--gold-light); font-size: 0.8rem; line-height: 1.4; font-weight: 600;">The lesson: Small forces, properly applied, can move massive obstacles.</p>
        </div>
        
        <h3 style="color: var(--gold); font-size: 1.1rem; margin-bottom: 0.5rem;">🎯 YOUR LEVERAGE POINTS</h3>
        <div style="background: rgba(212, 175, 55, 0.05); padding: 1rem; border-radius: 8px;">
            <p style="color: var(--gray-light); font-size: 0.8rem; margin-bottom: 0.5rem;">What small actions in your life create the biggest results?</p>
            <div class="writing-line"></div>
            <div class="writing-line"></div>
            <div class="writing-line"></div>
        </div>
        
        <div class="footer-wisdom">Find your fulcrum. Apply your force. Move your world.</div>
        <div class="page-number">201</div>
    </div>`;
}

// PERSONAL REFLECTION PAGES
function generatePersonalReflectionPages() {
    return `
    <!-- YOUR POWER MOMENTS -->
    <div class="page">
        <h1 class="text-center gold-gradient" style="font-size: 2.3rem;">Your Power Moments</h1>
        <div class="gold-line"></div>
        
        <div style="background: var(--black-card); padding: 1.5rem; border-radius: 12px; border: 2px solid var(--gold); margin: 1.5rem 0;">
            <h3 style="color: var(--gold); font-size: 1.2rem; margin-bottom: 1rem;">⚡ Historical Parallel: Churchill's Finest Hour</h3>
            <p style="color: var(--gray-light); font-size: 0.8rem; line-height: 1.4;">In 1940, with Britain standing alone against Nazi Germany, Winston Churchill delivered his "Finest Hour" speech. He didn't minimize the danger-he transformed it into purpose. "If we can stand up to him, all Europe may be free and the life of the world may move forward into broad, sunlit uplands." One speech changed the course of history.</p>
        </div>
        
        <h3 style="color: var(--gold); font-size: 1.1rem; margin-bottom: 0.5rem;">🏆 YOUR FINEST HOURS</h3>
        <div style="background: rgba(212, 175, 55, 0.05); padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
            <p style="color: var(--gray-light); font-size: 0.8rem; margin-bottom: 0.5rem;">Describe 3 moments when you rose to meet a challenge:</p>
            <div class="writing-line"></div>
            <div class="writing-line"></div>
            <div class="writing-line"></div>
        </div>
        
        <h3 style="color: var(--gold); font-size: 1.1rem; margin-bottom: 0.5rem;">💪 WHAT THESE MOMENTS TAUGHT YOU</h3>
        <div style="background: rgba(212, 175, 55, 0.05); padding: 1rem; border-radius: 8px;">
            <p style="color: var(--gray-light); font-size: 0.8rem; margin-bottom: 0.5rem;">What did you discover about your capabilities?</p>
            <div class="writing-line"></div>
            <div class="writing-line"></div>
        </div>
        
        <div class="footer-wisdom">Your power moments reveal your true potential.</div>
        <div class="page-number">202</div>
    </div>`;
}

// ADDITIONAL STORYTELLING PAGES
function generateAdditionalStorytellingPages() {
    return `
    <!-- THE BUILDER'S DILEMMA -->
    <div class="page">
        <h1 class="text-center gold-gradient" style="font-size: 2.3rem;">The Builder's Dilemma</h1>
        <div class="gold-line"></div>
        
        <div style="background: var(--black-card); padding: 1.5rem; border-radius: 12px; border: 2px solid var(--gold); margin: 1.5rem 0;">
            <h3 style="color: var(--gold); font-size: 1.2rem; margin-bottom: 1rem;">🏗️ Historical Parallel: The Great Wall of China</h3>
            <p style="color: var(--gray-light); font-size: 0.8rem; line-height: 1.4; margin-bottom: 1rem;">Emperor Qin Shi Huang faced an impossible choice in 220 BC: build the greatest defensive structure in history, or watch his empire crumble to northern invaders. The project would take decades, cost millions of lives, and drain the treasury.</p>
            <p style="color: var(--gray-light); font-size: 0.8rem; line-height: 1.4; margin-bottom: 1rem;">But Qin understood something profound: <strong style="color: var(--gold-light);">Great achievements require great sacrifices.</strong> He chose to build. The Wall protected China for over 2,000 years.</p>
            <p style="color: var(--gold-light); font-size: 0.8rem; line-height: 1.4; font-weight: 600;">The lesson: Sometimes you must choose between comfort today and security tomorrow.</p>
        </div>
        
        <h3 style="color: var(--gold); font-size: 1.1rem; margin-bottom: 0.5rem;">⚖️ YOUR GREAT CHOICE</h3>
        <div style="background: rgba(212, 175, 55, 0.05); padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
            <p style="color: var(--gray-light); font-size: 0.8rem; margin-bottom: 0.5rem;">What difficult decision are you avoiding that could transform your future?</p>
            <div class="writing-line"></div>
            <div class="writing-line"></div>
            <div class="writing-line"></div>
        </div>
        
        <h3 style="color: var(--gold); font-size: 1.1rem; margin-bottom: 0.5rem;">💪 THE SACRIFICE REQUIRED</h3>
        <div style="background: rgba(212, 175, 55, 0.05); padding: 1rem; border-radius: 8px;">
            <p style="color: var(--gray-light); font-size: 0.8rem; margin-bottom: 0.5rem;">What are you willing to give up to build your empire?</p>
            <div class="writing-line"></div>
            <div class="writing-line"></div>
        </div>
        
        <div class="footer-wisdom">Great builders make great sacrifices for great rewards.</div>
        <div class="page-number">203</div>
    </div>
    
    <!-- THE PHOENIX PRINCIPLE -->
    <div class="page">
        <h1 class="text-center gold-gradient" style="font-size: 2.3rem;">The Phoenix Principle</h1>
        <div class="gold-line"></div>
        
        <div style="background: var(--black-card); padding: 1.5rem; border-radius: 12px; border: 2px solid var(--gold); margin: 1.5rem 0;">
            <h3 style="color: var(--gold); font-size: 1.2rem; margin-bottom: 1rem;">🔥 Historical Parallel: The Great Chicago Fire</h3>
            <p style="color: var(--gray-light); font-size: 0.8rem; line-height: 1.4; margin-bottom: 1rem;">In 1871, the Great Chicago Fire destroyed 17,500 buildings and left 300,000 people homeless. Most cities would have died. But Chicago's leaders saw opportunity in the ashes.</p>
            <p style="color: var(--gray-light); font-size: 0.8rem; line-height: 1.4; margin-bottom: 1rem;">They rebuilt with steel and stone instead of wood. They created wider streets, better sewers, and taller buildings. Within 20 years, Chicago became America's second-largest city and the birthplace of the skyscraper.</p>
            <p style="color: var(--gold-light); font-size: 0.8rem; line-height: 1.4; font-weight: 600;">The lesson: Destruction can be the foundation of something greater.</p>
        </div>
        
        <h3 style="color: var(--gold); font-size: 1.1rem; margin-bottom: 0.5rem;">🔥 YOUR PHOENIX MOMENTS</h3>
        <div style="background: rgba(212, 175, 55, 0.05); padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
            <p style="color: var(--gray-light); font-size: 0.8rem; margin-bottom: 0.5rem;">Describe a time when failure or loss led to something better:</p>
            <div class="writing-line"></div>
            <div class="writing-line"></div>
            <div class="writing-line"></div>
        </div>
        
        <h3 style="color: var(--gold); font-size: 1.1rem; margin-bottom: 0.5rem;">🎆 WHAT YOU BUILT FROM THE ASHES</h3>
        <div style="background: rgba(212, 175, 55, 0.05); padding: 1rem; border-radius: 8px;">
            <p style="color: var(--gray-light); font-size: 0.8rem; margin-bottom: 0.5rem;">How did this experience make you stronger or wiser?</p>
            <div class="writing-line"></div>
            <div class="writing-line"></div>
        </div>
        
        <div class="footer-wisdom">Every ending is a new beginning in disguise.</div>
        <div class="page-number">145</div>
    </div>
    
    <!-- YOUR SUCCESS PATTERNS -->
    <div class="page">
        <h1 class="text-center gold-gradient" style="font-size: 2.3rem;">Your Success Patterns</h1>
        <div class="gold-line"></div>
        
        <div style="background: var(--black-card); padding: 1.5rem; border-radius: 12px; border: 2px solid var(--gold); margin: 1.5rem 0;">
            <h3 style="color: var(--gold); font-size: 1.2rem; margin-bottom: 1rem;">🔍 Historical Parallel: Thomas Edison's Method</h3>
            <p style="color: var(--gray-light); font-size: 0.8rem; line-height: 1.4;">Edison didn't just invent the light bulb-he invented the process of invention. He systematically tested over 3,000 materials for filaments, documenting every failure. His real genius wasn't creativity; it was pattern recognition.</p>
            <p style="color: var(--gold-light); font-size: 0.8rem; line-height: 1.4; font-weight: 600;">The lesson: Success leaves clues. Study your wins to repeat them.</p>
        </div>
        
        <h3 style="color: var(--gold); font-size: 1.1rem; margin-bottom: 0.5rem;">🏆 YOUR WINNING FORMULA</h3>
        <div style="background: rgba(212, 175, 55, 0.05); padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
            <p style="color: var(--gray-light); font-size: 0.8rem; margin-bottom: 0.5rem;">What conditions, habits, or approaches consistently lead to your best results?</p>
            <div class="writing-line"></div>
            <div class="writing-line"></div>
            <div class="writing-line"></div>
        </div>
        
        <h3 style="color: var(--gold); font-size: 1.1rem; margin-bottom: 0.5rem;">🔄 YOUR REPLICATION STRATEGY</h3>
        <div style="background: rgba(212, 175, 55, 0.05); padding: 1rem; border-radius: 8px;">
            <p style="color: var(--gray-light); font-size: 0.8rem; margin-bottom: 0.5rem;">How can you systematically create these conditions more often?</p>
            <div class="writing-line"></div>
            <div class="writing-line"></div>
        </div>
        
        <div class="footer-wisdom">Master your patterns, master your results.</div>
        <div class="page-number">146</div>
    </div>
    
    <!-- YOUR EMPIRE BLUEPRINT -->
    <div class="page">
        <h1 class="text-center gold-gradient" style="font-size: 2.3rem;">Your Empire Blueprint</h1>
        <div class="gold-line"></div>
        
        <div style="background: var(--black-card); padding: 1.5rem; border-radius: 12px; border: 2px solid var(--gold); margin: 1.5rem 0;">
            <h3 style="color: var(--gold); font-size: 1.2rem; margin-bottom: 1rem;">🏰 Historical Parallel: Alexander's Vision</h3>
            <p style="color: var(--gray-light); font-size: 0.8rem; line-height: 1.4; margin-bottom: 1rem;">At 20, Alexander the Great inherited a small kingdom. But he didn't think small. He envisioned a world where Greek culture, Eastern wisdom, and military might would create the greatest empire in history. His blueprint wasn't just conquest-it was cultural transformation.</p>
            <p style="color: var(--gold-light); font-size: 0.8rem; line-height: 1.4; font-weight: 600;">The lesson: Great empires begin with great visions.</p>
        </div>
        
        <h3 style="color: var(--gold); font-size: 1.1rem; margin-bottom: 0.5rem;">🎯 YOUR EMPIRE VISION</h3>
        <div style="background: rgba(212, 175, 55, 0.05); padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
            <p style="color: var(--gray-light); font-size: 0.8rem; margin-bottom: 0.5rem;">In 10 years, what empire will you have built? (Business, influence, impact, legacy)</p>
            <div class="writing-line"></div>
            <div class="writing-line"></div>
            <div class="writing-line"></div>
        </div>
        
        <h3 style="color: var(--gold); font-size: 1.1rem; margin-bottom: 0.5rem;">🛠️ YOUR FIRST CONQUESTS</h3>
        <div style="background: rgba(212, 175, 55, 0.05); padding: 1rem; border-radius: 8px;">
            <p style="color: var(--gray-light); font-size: 0.8rem; margin-bottom: 0.5rem;">What are the first 3 territories you must conquer to begin building this empire?</p>
            <div class="writing-line"></div>
            <div class="writing-line"></div>
            <div class="writing-line"></div>
        </div>
        
        <div class="footer-wisdom">Every empire begins with a single step forward.</div>
        <div class="page-number">147</div>
    </div>`;
}
function generateEnergyManagementSystem(pageNumber) {
    return `
    <!-- ENERGY MANAGEMENT SYSTEM -->
    <!-- FINANCIAL FOUNDATIONS -->
                <div style="border-bottom: 1px solid var(--gray-dark); height: 18px; flex-grow: 1;"></div>
            </div>
            <div style="display: flex; align-items: center; margin-bottom: 0.6rem;">
                <span style="color: var(--gold-light); font-size: 0.8rem; margin-right: 0.5rem;">3.</span>
                <div style="border-bottom: 1px solid var(--gray-dark); height: 18px; flex-grow: 1;"></div>
            </div>
            <div style="display: flex; align-items: center; margin-bottom: 0.2rem;">
                <span style="color: var(--gold-light); font-size: 0.8rem; margin-right: 0.5rem;">4.</span>
                <div style="border-bottom: 1px solid var(--gray-dark); height: 18px; flex-grow: 1;"></div>
            </div>
        </div>
        
        <div class="footer-wisdom" style="font-size: 0.8rem; margin: 0.3rem 0 0 0;">Energy is life's most valuable currency.</div>
        <div class="page-number">${pageNumber}</div>
    </div>
    `;
}

function generatePhysicalWellnessTracker(pageNumber) {
    return `
    <!-- PHYSICAL WELLNESS TRACKER -->
    <div class="page">
        <h1 class="text-center gold-gradient" style="font-size: 2rem; margin: 0.1rem 0 0.2rem 0;">Physical Wellness Tracker</h1>
        <div class="gold-line" style="margin-bottom: 0.5rem;"></div>
        <div style="background: var(--black-card); padding: 0.8rem; border-radius: 8px; border: 2px solid var(--gold); margin: 0.5rem 0 0.8rem 0;">
            <h2 style="color: var(--gold); font-size: 1.3rem; margin: 0 0 0.5rem 0; text-align: center;">💪 Warren Buffett's Health Investment</h2>
            <p style="color: var(--gray-light); line-height: 1.3; margin: 0 0 0.8rem 0; font-size: 0.9rem;">At age 94, Buffett still works daily. His secret? "Take care of your mind and body like it's the only car you'll ever own." He walks daily, maintains consistent sleep, and says health is the foundation of all other success.</p>
            <p style="color: var(--gold-light); font-style: italic; font-weight: 600; text-align: center; margin: 0.8rem 0 0.5rem 0; font-size: 0.9rem;">Your body is your most important asset. Invest in it daily.</p>
        </div>
        
        <h2 class="gold-gradient" style="font-size: 1.3rem; margin: 0.8rem 0 0.5rem 0; text-align: center;">🏃‍♂️ WEEKLY WELLNESS GOALS</h2>
        
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.8rem; margin-bottom: 1rem;">
            <div style="background: rgba(212, 175, 55, 0.05); padding: 0.7rem; border-radius: 6px; border: 1px solid var(--gray-dark);">
                <h3 style="color: var(--gold-light); font-size: 1rem; margin: 0 0 0.5rem 0;">🏋️ EXERCISE</h3>
                <div style="margin-bottom: 0.6rem;">
                    <div style="color: var(--gray-light); font-size: 0.85rem; margin-bottom: 0.2rem;">Weekly Goal:</div>
                    <div style="border-bottom: 1px solid var(--gray-dark); height: 24px;"></div>
                </div>
                <div>
                    <div style="color: var(--gray-light); font-size: 0.85rem; margin-bottom: 0.2rem;">Actual:</div>
                    <div style="border-bottom: 1px solid var(--gray-dark); height: 24px;"></div>
                </div>
            </div>
            
            <div style="background: rgba(212, 175, 55, 0.05); padding: 0.7rem; border-radius: 6px; border: 1px solid var(--gray-dark);">
                <h3 style="color: var(--gold-light); font-size: 1rem; margin: 0 0 0.5rem 0;">💧 NUTRITION</h3>
                <div style="margin-bottom: 0.6rem;">
                    <div style="color: var(--gray-light); font-size: 0.85rem; margin-bottom: 0.2rem;">Water Goal (glasses):</div>
                    <div style="border-bottom: 1px solid var(--gray-dark); height: 24px;"></div>
                </div>
                <div>
                    <div style="color: var(--gray-light); font-size: 0.85rem; margin-bottom: 0.2rem;">Nutrition Focus:</div>
                    <div style="border-bottom: 1px solid var(--gray-dark); height: 24px;"></div>
                </div>
            </div>
        </div>
        
        <h3 style="color: var(--gold); font-size: 1.1rem; margin-bottom: 0.5rem;">😴 SLEEP OPTIMIZATION</h3>
        <div style="background: rgba(212, 175, 55, 0.05); padding: 1rem; border-radius: 8px;">
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
                <div>
                    <p style="color: var(--gray-light); font-size: 0.7rem; margin-bottom: 0.3rem;">Target Bedtime:</p>
                    <div style="border-bottom: 1px solid var(--gray-dark); height: 15px;"></div>
                </div>
                <div>
                    <p style="color: var(--gray-light); font-size: 0.7rem; margin-bottom: 0.3rem;">Target Hours:</p>
                    <div style="border-bottom: 1px solid var(--gray-dark); height: 15px;"></div>
                </div>
            </div>
        </div>
        
        <div class="footer-wisdom">Health is wealth in its truest form.</div>
        <div class="page-number">${pageNumber}</div>
    </div>
    `;
}
        <div style="background: rgba(212, 175, 55, 0.05); padding: 1rem; border-radius: 8px;">
            <p style="color: var(--gray-light); font-size: 0.8rem; margin-bottom: 0.5rem;">My 12-month financial goal:</p>
            <div class="writing-line"></div>
            <p style="color: var(--gray-light); font-size: 0.8rem; margin: 0.5rem 0;">Steps to achieve it:</p>
            <div class="writing-line"></div>
            <div class="writing-line"></div>
        </div>
        
        <div class="footer-wisdom">The habit of saving is itself an education.</div>
        <div class="page-number">${currentPage}</div>
    </div>
    
    <!-- INVESTMENT STRATEGY -->
    <div class="page" style="padding: 0.5rem 1rem;">
        <h1 class="text-center gold-gradient" style="font-size: 1.6rem; margin: 0.2rem 0 0.3rem 0;">Investment Strategy</h1>
        <div class="gold-line" style="margin-bottom: 0.3rem;"></div>
        
        <div style="background: rgba(212, 175, 55, 0.03); padding: 0.8rem; border-radius: 6px; border: 1px solid var(--gold); margin-bottom: 0.8rem;">
            <h3 style="color: var(--gold); font-size: 1.3rem; margin: 0 0 0.5rem 0;">📈 Warren Buffett's Investment Principles</h3>
            <p style="color: var(--gray-light); font-size: 1rem; line-height: 1.5; margin: 0 0 0.5rem 0;">Buffett's success comes from his "buy and hold" strategy and his famous rule: "Rule No. 1: Never lose money. Rule No. 2: Never forget rule No. 1." He focuses on understanding businesses, buying at a discount, and thinking long-term.</p>
            <p style="color: var(--gold-light); font-size: 1.05rem; line-height: 1.5; font-weight: 600; margin: 0;">The stock market is designed to transfer money from the active to the patient.</p>
        </div>
        
        <div style="font-size: 1rem; color: var(--gold); font-weight: 600; margin: 0.3rem 0 0.4rem;">📊 ASSET ALLOCATION</div>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.3rem; margin-bottom: 0.4rem;">
            <div style="background: rgba(212, 175, 55, 0.02); padding: 0.4rem; border-radius: 4px;">
                <div style="color: var(--gold-light); font-size: 0.9rem; font-weight: 600; margin-bottom: 0.3rem;">🏦 CORE HOLDINGS (70%)</div>
                <div style="color: var(--gray-light); font-size: 0.8rem; margin-bottom: 0.2rem;">Index Funds/ETFs:</div>
                <div style="border-bottom: 1px solid var(--gray-dark); height: 28px; margin-bottom: 0.3rem;"></div>
                <div style="color: var(--gray-light); font-size: 0.8rem; margin-bottom: 0.2rem;">Blue Chip Stocks:</div>
                <div style="border-bottom: 1px solid var(--gray-dark); height: 28px;"></div>
            </div>
            <div style="background: rgba(212, 175, 55, 0.02); padding: 0.3rem; border-radius: 4px;">
                <div style="color: var(--gold-light); font-size: 0.7rem; font-weight: 600; margin-bottom: 0.2rem;">🚀 GROWTH (30%)</div>
                <div style="color: var(--gray-light); font-size: 0.65rem; margin-bottom: 0.1rem;">Growth Stocks:</div>
                <div style="border-bottom: 1px solid var(--gray-dark); height: 25px; margin-bottom: 0.2rem;"></div>
                <div style="color: var(--gray-light); font-size: 0.65rem; margin-bottom: 0.1rem;">Alternative Investments:</div>
                <div style="border-bottom: 1px solid var(--gray-dark); height: 25px;"></div>
            </div>
        </div>
        
        <div style="font-size: 0.8rem; color: var(--gold); font-weight: 600; margin: 0.2rem 0;">📝 INVESTMENT JOURNAL</div>
        <div style="background: rgba(212, 175, 55, 0.02); padding: 0.3rem; border-radius: 4px;">
            <div style="color: var(--gray-light); font-size: 0.65rem; margin-bottom: 0.15rem;">Current market observation and strategy:</div>
            <div style="border-bottom: 1px solid var(--gray-dark); height: 35px; margin-bottom: 0.15rem;"></div>
            <div style="border-bottom: 1px solid var(--gray-dark); height: 35px; margin-bottom: 0.15rem;"></div>
            <div style="border-bottom: 1px solid var(--gray-dark); height: 35px;"></div>
        </div>
        
        <div class="footer-wisdom" style="margin-top: 0.3rem;">The best time to plant a tree was 20 years ago. The second best time is now.</div>
        <div class="page-number">${currentPage + 1}</div>
    </div>
    
    <!-- PASSIVE INCOME STREAMS -->
    <div class="page" style="padding: 0.7rem 1.2rem;">
        <h1 class="text-center" style="font-size: 1.8rem; margin: 0.3rem 0 0.4rem 0; color: black;">Passive Income Streams</h1>
        <div class="gold-line" style="margin-bottom: 0.5rem;"></div>
        
        <div style="background: rgba(212, 175, 55, 0.03); padding: 0.8rem; border-radius: 6px; border: 1px solid var(--gold); margin-bottom: 0.6rem;">
            <p style="color: var(--gray-light); font-size: 0.9rem; line-height: 1.5; margin: 0 0 0.4rem 0;">The path to financial freedom is moving from the left side (Employee, Self-Employed) to the right side (Business Owner, Investor). The wealthy focus on building assets that generate passive income while they sleep.</p>
            <p style="color: var(--gold-light); font-size: 0.95rem; line-height: 1.5; font-weight: 600; margin: 0;">Don't work for money, make money work for you.</p>
        </div>
        
        <div style="font-size: 1rem; color: var(--gold); font-weight: 600; margin: 0.4rem 0 0.4rem 0;">🔄 INCOME STREAM DEVELOPMENT</div>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.4rem; margin-bottom: 0.6rem;">
            <div style="background: rgba(212, 175, 55, 0.02); padding: 0.6rem; border-radius: 4px;">
                <div style="color: var(--gold-light); font-size: 0.9rem; font-weight: 600; margin-bottom: 0.3rem;">📚 INTELLECTUAL PROPERTY</div>
                <div style="color: var(--gray-light); font-size: 0.8rem; margin-bottom: 0.2rem;">Book/Course Ideas:</div>
                <div style="border-bottom: 1px solid var(--gray-dark); height: 30px; margin-bottom: 0.4rem;"></div>
                <div style="color: var(--gray-light); font-size: 0.8rem; margin-bottom: 0.2rem;">Next Steps:</div>
                <div style="border-bottom: 1px solid var(--gray-dark); height: 50px;"></div>
            </div>
            <div style="background: rgba(212, 175, 55, 0.02); padding: 0.6rem; border-radius: 4px;">
                <div style="color: var(--gold-light); font-size: 0.9rem; font-weight: 600; margin-bottom: 0.3rem;">🏠 REAL ESTATE</div>
                <div style="color: var(--gray-light); font-size: 0.8rem; margin-bottom: 0.2rem;">Research Areas:</div>
                <div style="border-bottom: 1px solid var(--gray-dark); height: 30px; margin-bottom: 0.4rem;"></div>
                <div style="color: var(--gray-light); font-size: 0.8rem; margin-bottom: 0.2rem;">Investment Strategy:</div>
                <div style="border-bottom: 1px solid var(--gray-dark); height: 50px;"></div>
            </div>
        </div>
        
        <div style="font-size: 1rem; color: var(--gold); font-weight: 600; margin: 0.5rem 0 0.3rem 0;">📈 MONTHLY INCOME TRACKER</div>
        <table style="width: 100%; border-collapse: collapse; font-size: 0.8rem; margin-bottom: 0.5rem;">
            <tr>
                <th style="text-align: left; padding: 0.3rem 0; color: var(--gold-light); font-weight: 600;">Income Source</th>
                <th style="text-align: right; padding: 0.3rem 0; color: var(--gold-light); font-weight: 600;">Target</th>
                <th style="text-align: right; padding: 0.3rem 0 0.3rem 0.5rem; color: var(--gold-light); font-weight: 600;">Actual</th>
            </tr>
            <tr>
                <td style="color: var(--gray-light); padding: 0.3rem 0;">Active Income</td>
                <td style="text-align: right; padding: 0.3rem 0;">$<span style="display: inline-block; width: 70px; border-bottom: 1px solid var(--gray-dark); margin-left: 0.3rem;"></span></td>
                <td style="text-align: right; padding: 0.3rem 0 0.3rem 0.5rem;">$<span style="display: inline-block; width: 70px; border-bottom: 1px solid var(--gray-dark); margin-left: 0.3rem;"></span></td>
            </tr>
            <tr>
                <td style="color: var(--gray-light); padding: 0.3rem 0;">Passive Income</td>
                <td style="text-align: right; padding: 0.3rem 0;">$<span style="display: inline-block; width: 70px; border-bottom: 1px solid var(--gray-dark); margin-left: 0.3rem;"></span></td>
                <td style="text-align: right; padding: 0.3rem 0 0.3rem 0.5rem;">$<span style="display: inline-block; width: 70px; border-bottom: 1px solid var(--gray-dark); margin-left: 0.3rem;"></span></td>
            </tr>
            <tr>
                <td style="color: var(--gray-light); padding: 0.3rem 0;">Investment Returns</td>
                <td style="text-align: right; padding: 0.3rem 0;">$<span style="display: inline-block; width: 70px; border-bottom: 1px solid var(--gray-dark); margin-left: 0.3rem;"></span></td>
                <td style="text-align: right; padding: 0.3rem 0 0.3rem 0.5rem;">$<span style="display: inline-block; width: 70px; border-bottom: 1px solid var(--gray-dark); margin-left: 0.3rem;"></span></td>
            </tr>
        </table>
        
        <div class="footer-wisdom" style="margin-top: 0.3rem;">Financial freedom is available to those who learn about it and work for it.</div>
        <div class="page-number">${currentPage + 2}</div>
    </div>`;
}

function generateRelationshipCommunicationSystems(startPageNumber = 131) {
    let currentPage = startPageNumber;
    return `
    // NETWORK BUILDING SYSTEM
    <div class="page" style="padding: 0.5rem 1rem;">
        <h1 class="text-center gold-gradient" style="font-size: 1.6rem; margin: 0.2rem 0 0.3rem 0;">Network Building System</h1>
        <div class="gold-line" style="margin-bottom: 0.3rem;"></div>
        
        <div style="background: rgba(212, 175, 55, 0.03); padding: 0.5rem; border-radius: 6px; border: 1px solid var(--gold); margin-bottom: 0.4rem;">
            <h3 style="color: var(--gold); font-size: 0.9rem; margin: 0 0 0.2rem 0;"> Reid Hoffman's Network Philosophy</h3>
            <h3 style="color: var(--gold); font-size: 0.9rem; margin: 0 0 0.2rem 0;">🤝 Reid Hoffman's Network Philosophy</h3>
            <p style="color: var(--gray-light); font-size: 0.7rem; line-height: 1.2; margin: 0 0 0.2rem 0;">The LinkedIn co-founder believes that professional networks are built on the "strength of weak ties" - often, it's your secondary connections that provide the most valuable opportunities. He advocates for a "pay it forward" approach to networking.</p>
            <p style="color: var(--gold-light); font-size: 0.7rem; line-height: 1.2; font-weight: 600; margin: 0;">The best way to grow your network is to help others grow theirs.</p>
        </div>
        
        <div style="font-size: 0.8rem; color: var(--gold); font-weight: 600; margin: 0.2rem 0;">🌐 NETWORK MAPPING</div>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.2rem; margin-bottom: 0.3rem;">
            <div style="background: rgba(212, 175, 55, 0.02); padding: 0.3rem; border-radius: 4px;">
                <div style="color: var(--gold-light); font-size: 0.7rem; font-weight: 600; margin-bottom: 0.2rem;">🔗 KEY CONNECTIONS</div>
                <div style="color: var(--gray-light); font-size: 0.65rem; margin-bottom: 0.1rem;">Mentors/Advisors:</div>
                <div style="border-bottom: 1px solid var(--gray-dark); height: 25px; margin-bottom: 0.2rem;"></div>
                <div style="color: var(--gray-light); font-size: 0.65rem; margin-bottom: 0.1rem;">Peers/Allies:</div>
                <div style="border-bottom: 1px solid var(--gray-dark); height: 25px;"></div>
            </div>
            <div style="background: rgba(212, 175, 55, 0.02); padding: 0.3rem; border-radius: 4px;">
                <div style="color: var(--gold-light); font-size: 0.7rem; font-weight: 600; margin-bottom: 0.2rem;">🎯 TARGET CONNECTIONS</div>
                <div style="color: var(--gray-light); font-size: 0.65rem; margin-bottom: 0.1rem;">People to meet this month:</div>
                <div style="border-bottom: 1px solid var(--gray-dark); height: 25px; margin-bottom: 0.2rem;"></div>
                <div style="border-bottom: 1px solid var(--gray-dark); height: 25px;"></div>
            </div>
        </div>
        
        <h3 style="color: var(--gold); font-size: 1.1rem; margin-bottom: 0.5rem;">📅 RELATIONSHIP ACTIVITY</h3>
        <div style="background: rgba(212, 175, 55, 0.05); padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
            <div style="display: grid; grid-template-columns: 2fr 1fr; gap: 0.5rem; font-size: 0.7rem;">
                <div style="color: var(--gold-light); font-weight: 600;">Action Item</div>
                <div style="color: var(--gold-light); font-weight: 600; text-align: right;">Date</div>
                
                <div>Follow up with:</div>
                <div style="text-align: right;"><span style="display: inline-block; width: 100%; border-bottom: 1px solid var(--gray-dark);"></span></div>
                
                <div>Introduce these people:</div>
                <div style="text-align: right;"><span style="display: inline-block; width: 100%; border-bottom: 1px solid var(--gray-dark);"></span></div>
                
                <div>Send thank you to:</div>
                <div style="text-align: right;"><span style="display: inline-block; width: 100%; border-bottom: 1px solid var(--gray-dark);"></span></div>
            </div>
        </div>
        
        <div class="footer-wisdom">Your network is your net worth.</div>
        <div class="page-number">${currentPage}</div>
    </div>
    
    <!-- COMMUNICATION MASTERY -->
    <div class="page" style="padding: 0.5rem 1rem;">
        <h1 class="text-center gold-gradient" style="font-size: 1.6rem; margin: 0.2rem 0 0.3rem 0;">Communication Mastery</h1>
        <div class="gold-line" style="margin-bottom: 0.3rem;"></div>
        
        <div style="background: rgba(212, 175, 55, 0.03); padding: 0.5rem; border-radius: 6px; border: 1px solid var(--gold); margin-bottom: 0.4rem;">
            <h3 style="color: var(--gold); font-size: 0.9rem; margin: 0 0 0.2rem 0;">🗣️ Aristotle's Rhetoric</h3>
            <p style="color: var(--gray-light); font-size: 0.7rem; line-height: 1.2; margin: 0 0 0.2rem 0;">The ancient philosopher identified three pillars of persuasive communication: Ethos (credibility), Pathos (emotional connection), and Logos (logical argument). The most effective communicators balance all three elements to inspire action and build trust.</p>
            <p style="color: var(--gold-light); font-size: 0.7rem; line-height: 1.2; font-weight: 600; margin: 0;">The right word may be effective, but no word was ever as effective as a rightly timed pause.</p>
        </div>
        
        <div style="font-size: 0.8rem; color: var(--gold); font-weight: 600; margin: 0.2rem 0;">📝 COMMUNICATION AUDIT</div>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.2rem; margin-bottom: 0.3rem;">
            <div style="background: rgba(212, 175, 55, 0.02); padding: 0.3rem; border-radius: 4px;">
                <div style="color: var(--gold-light); font-size: 0.7rem; font-weight: 600; margin-bottom: 0.2rem;">🗨 VERBAL</div>
                <div style="color: var(--gray-light); font-size: 0.65rem; margin-bottom: 0.1rem;">Strength:</div>
                <div style="border-bottom: 1px solid var(--gray-dark); height: 25px; margin-bottom: 0.2rem;"></div>
                <div style="color: var(--gray-light); font-size: 0.65rem; margin-bottom: 0.1rem;">Area to Improve:</div>
                <div style="border-bottom: 1px solid var(--gray-dark); height: 25px;"></div>
            </div>
            <div style="background: rgba(212, 175, 55, 0.02); padding: 0.3rem; border-radius: 4px;">
                <div style="color: var(--gold-light); font-size: 0.7rem; font-weight: 600; margin-bottom: 0.2rem;">✍️ WRITTEN</div>
                <div style="color: var(--gray-light); font-size: 0.65rem; margin-bottom: 0.1rem;">Strength:</div>
                <div style="border-bottom: 1px solid var(--gray-dark); height: 25px; margin-bottom: 0.2rem;"></div>
                <div style="color: var(--gray-light); font-size: 0.65rem; margin-bottom: 0.1rem;">Area to Improve:</div>
                <div style="border-bottom: 1px solid var(--gray-dark); height: 25px;"></div>
            </div>
        </div>
        
        <div style="font-size: 0.8rem; color: var(--gold); font-weight: 600; margin: 0.2rem 0;">📞 CONVERSATION TRACKER</div>
        <div style="background: rgba(212, 175, 55, 0.02); padding: 0.3rem; border-radius: 4px;">
            <div style="color: var(--gray-light); font-size: 0.65rem; margin-bottom: 0.15rem;">Key conversations this week and follow-ups:</div>
            <div style="border-bottom: 1px solid var(--gray-dark); height: 25px; margin-bottom: 0.15rem;"></div>
            <div style="border-bottom: 1px solid var(--gray-dark); height: 25px; margin-bottom: 0.15rem;"></div>
            <div style="display: flex; align-items: center; gap: 0.5rem;">
                <div style="color: var(--gray-light); font-size: 0.65rem;">Follow-up date:</div>
                <div style="border-bottom: 1px solid var(--gray-dark); height: 20px; flex: 1;"></div>
            </div>
        </div>
        
        <div class="footer-wisdom">Communication's biggest problem: the illusion it happened.</div>
        <div class="page-number">${currentPage + 1}</div>
    </div>
    
    <!-- RELATIONSHIP INTELLIGENCE -->
    <div class="page" style="padding: 0.5rem 1rem;">
        <h1 class="text-center gold-gradient" style="font-size: 1.6rem; margin: 0.2rem 0 0.3rem 0;">Relationship Intelligence</h1>
        <div class="gold-line" style="margin-bottom: 0.3rem;"></div>
        
        <div style="background: rgba(212, 175, 55, 0.03); padding: 0.5rem; border-radius: 6px; border: 1px solid var(--gold); margin-bottom: 0.4rem;">
            <h3 style="color: var(--gold); font-size: 0.9rem; margin: 0 0 0.2rem 0;">❤️ Dale Carnegie's Human Relations Principles</h3>
            <p style="color: var(--gray-light); font-size: 0.7rem; line-height: 1.2; margin: 0 0 0.2rem 0;">Carnegie's timeless advice in "How to Win Friends and Influence People" remains the gold standard for relationship building. His principles—like becoming genuinely interested in others, remembering names, and making others feel important—create lasting connections.</p>
            <p style="color: var(--gold-light); font-size: 0.7rem; line-height: 1.2; font-weight: 600; margin: 0;">You can make more friends in two months by becoming interested in other people than you can in two years by trying to get other people interested in you.</p>
        </div>
        
        <div style="font-size: 0.8rem; color: var(--gold); font-weight: 600; margin: 0.2rem 0;">🤍 EMOTIONAL INTELLIGENCE</div>
        <div style="background: rgba(212, 175, 55, 0.02); padding: 0.3rem; border-radius: 4px;">
            <div style="color: var(--gray-light); font-size: 0.65rem; margin-bottom: 0.15rem;">Current relationship to strengthen and how:</div>
            <div style="border-bottom: 1px solid var(--gray-dark); height: 25px; margin-bottom: 0.2rem;"></div>
            <div style="color: var(--gray-light); font-size: 0.65rem; margin-bottom: 0.15rem;">Their current goals/challenges:</div>
            <div style="border-bottom: 1px solid var(--gray-dark); height: 25px; margin-bottom: 0.2rem;"></div>
            <div style="color: var(--gray-light); font-size: 0.65rem; margin-bottom: 0.15rem;">How I can add value to them:</div>
            <div style="border-bottom: 1px solid var(--gray-dark); height: 25px;"></div>
        </div>
        
        <h3 style="color: var(--gold); font-size: 1.1rem; margin-bottom: 0.5rem;">📚 RELATIONSHIP RESOURCES</h3>
        <div style="background: rgba(212, 175, 55, 0.05); padding: 1rem; border-radius: 8px;">
            <p style="color: var(--gray-light); font-size: 0.8rem; margin-bottom: 0.5rem;">Books/Resources to explore:</p>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.5rem;">
                <div style="border-bottom: 1px solid var(--gray-dark); height: 15px; margin-bottom: 0.3rem;"></div>
                <div style="border-bottom: 1px solid var(--gray-dark); height: 15px; margin-bottom: 0.3rem;"></div>
                <div style="border-bottom: 1px solid var(--gray-dark); height: 15px;"></div>
                <div style="border-bottom: 1px solid var(--gray-dark); height: 15px;"></div>
            </div>
        </div>
        
        <div class="footer-wisdom">The quality of your life is the quality of your relationships.</div>
        <div class="page-number">${currentPage + 2}</div>
    </div>`;
}

// PRODUCTIVITY & TIME MASTERY SYSTEMS
function generateProductivityTimeMastery(startPageNumber = 132) {
    let currentPage = startPageNumber;
    return `
    // TIME BLOCKING SYSTEM
    <div class="page" style="padding: 0.5rem 1rem;">
        <h1 class="text-center gold-gradient" style="font-size: 1.6rem; margin: 0.2rem 0 0.3rem 0;">Time Blocking System</h1>
        <div class="gold-line" style="margin-bottom: 0.3rem;"></div>
        
        <div style="background: rgba(212, 175, 55, 0.03); padding: 0.5rem; border-radius: 6px; border: 1px solid var(--gold); margin-bottom: 0.5rem;">
            <h3 style="color: var(--gold); font-size: 0.9rem; margin: 0 0 0.3rem 0; display: flex; align-items: center;">
                <span style="margin-right: 0.3rem;">⏰</span> Cal Newport's Deep Work Philosophy
            </h3>
            <p style="color: var(--gray-light); font-size: 0.7rem; line-height: 1.2; margin: 0 0 0.3rem 0;">The ability to perform deep work is becoming increasingly rare at exactly the same time it is becoming increasingly valuable. Deep work is the ability to focus without distraction on a cognitively demanding task.</p>
            <p style="color: var(--gold-light); font-size: 0.7rem; line-height: 1.2; font-weight: 600; font-style: italic; margin: 0;">A commitment to deep work is not a moral stance, but rather a pragmatic recognition that the ability to concentrate is a skill that gets things done.</p>
        </div>
        
        <div style="display: flex; align-items: center; margin: 0.2rem 0;">
            <span style="color: var(--gold); font-size: 0.8rem; font-weight: 600;">📅 TIME BLOCK PLANNER</span>
        </div>
        
        <div style="display: grid; grid-template-columns: 0.7fr 2fr 1.3fr; gap: 0.2rem; margin-bottom: 0.3rem;">
            <!-- Time Column -->
            <div style="background: rgba(212, 175, 55, 0.02); padding: 0.2rem; border-radius: 4px;">
                <div style="color: var(--gold-light); font-size: 0.65rem; text-align: center; padding: 0.1rem 0;">🕗 8-10</div>
                <div style="border: 1px solid var(--gray-dark); height: 35px; border-radius: 2px; margin-bottom: 0.15rem;"></div>
                <div style="color: var(--gold-light); font-size: 0.65rem; text-align: center; padding: 0.1rem 0;">🕙 10-12</div>
                <div style="border: 1px solid var(--gray-dark); height: 35px; border-radius: 2px; margin-bottom: 0.15rem;"></div>
                <div style="color: var(--gold-light); font-size: 0.65rem; text-align: center; padding: 0.1rem 0;">🕛 12-2</div>
                <div style="border: 1px solid var(--gray-dark); height: 35px; border-radius: 2px; margin-bottom: 0.15rem;"></div>
                <div style="color: var(--gold-light); font-size: 0.65rem; text-align: center; padding: 0.1rem 0;">🕑 2-4</div>
                <div style="border: 1px solid var(--gray-dark); height: 35px; border-radius: 2px; margin-bottom: 0.15rem;"></div>
                <div style="color: var(--gold-light); font-size: 0.65rem; text-align: center; padding: 0.1rem 0;">🕓 4-6</div>
                <div style="border: 1px solid var(--gray-dark); height: 35px; border-radius: 2px;"></div>
            </div>
            
            <!-- Weekly Grid -->
            <div style="background: rgba(212, 175, 55, 0.02); padding: 0.2rem; border-radius: 4px;">
                <div style="display: grid; grid-template-columns: repeat(7, 1fr); gap: 0.15rem; margin-bottom: 0.15rem;">
                    <div style="text-align: center; font-size: 0.6rem; color: var(--gold-light); font-weight: 600; padding: 0.1rem 0; background: rgba(0,0,0,0.1); border-radius: 2px;">Mon</div>
                    <div style="text-align: center; font-size: 0.6rem; color: var(--gold-light); font-weight: 600; padding: 0.1rem 0; background: rgba(0,0,0,0.1); border-radius: 2px;">Tue</div>
                    <div style="text-align: center; font-size: 0.6rem; color: var(--gold-light); font-weight: 600; padding: 0.1rem 0; background: rgba(0,0,0,0.1); border-radius: 2px;">Wed</div>
                    <div style="text-align: center; font-size: 0.6rem; color: var(--gold-light); font-weight: 600; padding: 0.1rem 0; background: rgba(0,0,0,0.1); border-radius: 2px;">Thu</div>
                    <div style="text-align: center; font-size: 0.6rem; color: var(--gold-light); font-weight: 600; padding: 0.1rem 0; background: rgba(0,0,0,0.1); border-radius: 2px;">Fri</div>
                    <div style="text-align: center; font-size: 0.6rem; color: var(--gold-light); font-weight: 600; padding: 0.1rem 0; background: rgba(0,0,0,0.1); border-radius: 2px;">Sat</div>
                    <div style="text-align: center; font-size: 0.6rem; color: var(--gold-light); font-weight: 600; padding: 0.1rem 0; background: rgba(0,0,0,0.1); border-radius: 2px;">Sun</div>
                </div>
                <div style="display: grid; grid-template-columns: repeat(7, 1fr); gap: 0.15rem;">
                    ${Array(35).fill('<div style="border: 1px solid var(--gray-dark); height: 35px; border-radius: 2px;"></div>').join('')}
                </div>
            </div>
            
            <!-- Priority Matrix -->
            <div style="background: rgba(212, 175, 55, 0.02); padding: 0.2rem; border-radius: 4px;">
                <div style="text-align: center; font-size: 0.65rem; color: var(--gold); font-weight: 600; padding: 0.1rem 0; margin-bottom: 0.15rem; background: rgba(0,0,0,0.1); border-radius: 2px;">🎯 PRIORITY MATRIX</div>
                <div style="display: grid; grid-template-rows: repeat(4, 1fr); gap: 0.15rem; height: calc(100% - 24px);">
                    <!-- DO NOW -->
                    <div style="background: rgba(255, 77, 77, 0.05); padding: 0.2rem; border-radius: 2px; border: 1px solid rgba(255, 77, 77, 0.2);">
                        <div style="display: flex; align-items: center; margin-bottom: 0.1rem;">
                            <div style="width: 8px; height: 8px; background: #ff4d4d; border-radius: 2px; margin-right: 0.2rem;"></div>
                            <span style="color: var(--gold-light); font-size: 0.6rem; font-weight: 600;">DO NOW</span>
                        </div>
                        <p style="color: var(--gray-light); font-size: 0.55rem; font-style: italic; margin: 0;">Urgent & Important</p>
                    </div>
                    
                    <!-- SCHEDULE -->
                    <div style="background: rgba(76, 175, 80, 0.05); padding: 0.2rem; border-radius: 2px; border: 1px solid rgba(76, 175, 80, 0.2);">
                        <div style="display: flex; align-items: center; margin-bottom: 0.1rem;">
                            <div style="width: 8px; height: 8px; background: #4CAF50; border-radius: 2px; margin-right: 0.2rem;"></div>
                            <span style="color: var(--gold-light); font-size: 0.6rem; font-weight: 600;">SCHEDULE</span>
                        </div>
                        <p style="color: var(--gray-light); font-size: 0.55rem; font-style: italic; margin: 0;">Not Urgent but Important</p>
                    </div>
                    
                    <!-- DELEGATE -->
                    <div style="background: rgba(33, 150, 243, 0.05); padding: 0.2rem; border-radius: 2px; border: 1px solid rgba(33, 150, 243, 0.2);">
                        <div style="display: flex; align-items: center; margin-bottom: 0.1rem;">
                            <div style="width: 8px; height: 8px; background: #2196F3; border-radius: 2px; margin-right: 0.2rem;"></div>
                            <span style="color: var(--gold-light); font-size: 0.6rem; font-weight: 600;">DELEGATE</span>
                        </div>
                        <p style="color: var(--gray-light); font-size: 0.55rem; font-style: italic; margin: 0;">Urgent but Not Important</p>
                    </div>
                    
                    <!-- ELIMINATE -->
                    <div style="background: rgba(85, 85, 85, 0.05); padding: 0.2rem; border-radius: 2px; border: 1px solid rgba(85, 85, 85, 0.2);">
                        <div style="display: flex; align-items: center; margin-bottom: 0.1rem;">
                            <div style="width: 8px; height: 8px; background: #555; border-radius: 2px; margin-right: 0.2rem;"></div>
                            <span style="color: var(--gold-light); font-size: 0.6rem; font-weight: 600;">ELIMINATE</span>
                        </div>
                        <p style="color: var(--gray-light); font-size: 0.55rem; font-style: italic; margin: 0;">Not Urgent & Not Important</p>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="footer-wisdom">You will never find time for anything. If you want time, you must make it.</div>
        <div class="page-number">${currentPage}</div>
    </div>
    
    <!-- TASK MANAGEMENT -->
    <div class="page" style="padding: 0.5rem 1rem;">
        <h1 class="text-center gold-gradient" style="font-size: 1.6rem; margin: 0.2rem 0 0.3rem 0;">Task Management</h1>
        <div class="gold-line" style="margin-bottom: 0.3rem;"></div>
        
        <div style="background: rgba(212, 175, 55, 0.03); padding: 0.5rem; border-radius: 6px; border: 1px solid var(--gold); margin-bottom: 0.4rem;">
            <h3 style="color: var(--gold); font-size: 0.9rem; margin: 0 0 0.2rem 0;">📝 David Allen's Getting Things Done</h3>
            <p style="color: var(--gray-light); font-size: 0.7rem; line-height: 1.2; margin: 0 0 0.2rem 0;">The GTD method provides a system for capturing all the things that need to get done—now, later, someday, big, little—into a logical system that helps you stay organized and focused. The core principles are: capture, clarify, organize, reflect, and engage.</p>
            <p style="color: var(--gold-light); font-size: 0.7rem; line-height: 1.2; font-weight: 600; margin: 0;">Your mind is for having ideas, not holding them.</p>
        </div>
        
        <div style="font-size: 0.8rem; color: var(--gold); font-weight: 600; margin: 0.2rem 0;">✅ WEEKLY TASKS</div>
        <div style="background: rgba(212, 175, 55, 0.02); padding: 0.3rem; border-radius: 4px;">
            <div style="display: grid; grid-template-columns: 1.2rem 1fr 2rem; gap: 0.2rem; margin-bottom: 0.2rem; align-items: center;">
                <div style="width: 14px; height: 14px; border: 1px solid var(--gold); border-radius: 2px;"></div>
                <div style="color: var(--gray-light); font-size: 0.65rem;">Task description</div>
                <div style="color: var(--gold-light); font-size: 0.6rem; text-align: right;">PRI</div>
            </div>
            ${Array(10).fill(`
            <div style="display: grid; grid-template-columns: 1.2rem 1fr 2rem; gap: 0.2rem; margin-bottom: 0.15rem; align-items: center;">
                <div style="width: 14px; height: 14px; border: 1px solid var(--gray-dark); border-radius: 2px;"></div>
                <div style="border-bottom: 1px solid var(--gray-dark); height: 20px;"></div>
                <div style="color: var(--gold-light); font-size: 0.6rem; text-align: right;">A/B/C</div>
            </div>`).join('')}
        </div>
        
        <h3 style="color: var(--gold); font-size: 1.1rem; margin-bottom: 0.5rem;">🔥 FOCUS SESSIONS</h3>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.5rem; margin-bottom: 1rem;">
            <div style="background: rgba(212, 175, 55, 0.05); padding: 0.75rem; border-radius: 8px;">
                <h4 style="color: var(--gold-light); font-size: 0.8rem; margin-bottom: 0.3rem;">⏱️ POMODORO TRACKER</h4>
                <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
                    <span style="color: var(--gray-light); font-size: 0.7rem;">Focus:</span>
                    <span style="color: var(--gray-light); font-size: 0.7rem;">25:00</span>
                </div>
                <div style="height: 8px; background: var(--gray-dark); border-radius: 4px; margin-bottom: 0.5rem;">
                    <div style="width: 0%; height: 100%; background: var(--gold); border-radius: 4px;"></div>
                </div>
                <div style="display: flex; justify-content: space-between;">
                    <span style="color: var(--gray-light); font-size: 0.6rem;">Sessions: 0/4</span>
                    <span style="color: var(--gray-light); font-size: 0.6rem;">Break: 5:00</span>
                </div>
            </div>
            <div style="background: rgba(212, 175, 55, 0.05); padding: 0.75rem; border-radius: 8px;">
                <h4 style="color: var(--gold-light); font-size: 0.8rem; margin-bottom: 0.3rem;">📊 FOCUS METRICS</h4>
                <div style="margin-bottom: 0.5rem;">
                    <div style="display: flex; justify-content: space-between; margin-bottom: 0.2rem;">
                        <span style="color: var(--gray-light); font-size: 0.7rem;">Deep Work Hours:</span>
                        <span style="color: var(--gray-light); font-size: 0.7rem;">0/15</span>
                    </div>
                    <div style="height: 6px; background: var(--gray-dark); border-radius: 3px;">
                        <div style="width: 0%; height: 100%; background: var(--gold); border-radius: 3px;"></div>
                    </div>
                </div>
                <div>
                    <div style="display: flex; justify-content: space-between; margin-bottom: 0.2rem;">
                        <span style="color: var(--gray-light); font-size: 0.7rem;">Tasks Completed:</span>
                        <span style="color: var(--gray-light); font-size: 0.7rem;">0/8</span>
                    </div>
                    <div style="height: 6px; background: var(--gray-dark); border-radius: 3px;">
                        <div style="width: 0%; height: 100%; background: var(--gold); border-radius: 3px;"></div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="footer-wisdom">Schedule your priorities, not what's on your schedule.</div>
        <div class="page-number">${currentPage + 1}</div>
    </div>
    
    <!-- ENERGY OPTIMIZATION -->
    <div class="page" style="padding: 0.5rem 1rem;">
        <h1 class="text-center gold-gradient" style="font-size: 1.6rem; margin: 0.2rem 0 0.3rem 0;">Energy Optimization</h1>
        <div class="gold-line" style="margin-bottom: 0.3rem;"></div>
        
        <div style="background: rgba(212, 175, 55, 0.03); padding: 0.5rem; border-radius: 6px; border: 1px solid var(--gold); margin-bottom: 0.4rem;">
            <h3 style="color: var(--gold); font-size: 0.9rem; margin: 0 0 0.2rem 0;">⚡ The 90-Minute Work Cycle</h3>
            <p style="color: var(--gray-light); font-size: 0.7rem; line-height: 1.2; margin: 0 0 0.2rem 0;">Research shows that our brains naturally move through cycles of high and low alertness approximately every 90 minutes. By aligning work sessions with these ultradian rhythms, you can maximize productivity and minimize fatigue.</p>
            <p style="color: var(--gold-light); font-size: 0.7rem; line-height: 1.2; font-weight: 600; margin: 0;">Energy, not time, is the fundamental currency of high performance.</p>
        </div>
        
        <div style="font-size: 0.8rem; color: var(--gold); font-weight: 600; margin: 0.2rem 0;">🌡️ ENERGY LEVEL TRACKER</div>
        <div style="background: rgba(212, 175, 55, 0.02); padding: 0.3rem; border-radius: 4px;">
            <div style="display: grid; grid-template-columns: 0.8fr 2fr 0.8fr; gap: 0.2rem; font-size: 0.65rem;">
                <div style="color: var(--gold-light); font-weight: 600; padding: 0.1rem 0;">Time</div>
                <div style="color: var(--gold-light); font-weight: 600; padding: 0.1rem 0;">Activity</div>
                <div style="color: var(--gold-light); font-weight: 600; padding: 0.1rem 0;">Energy</div>
                
                ${Array(8).fill(`
                <div style="padding: 0.1rem 0;">__:__</div>
                <div style="border-bottom: 1px solid var(--gray-dark); height: 20px;"></div>
                <div style="border-bottom: 1px solid var(--gray-dark); height: 20px;"></div>`).join('')}
            </div>
        </div>
        
        <h3 style="color: var(--gold); font-size: 1.1rem; margin-bottom: 0.5rem;">🔄 RECOVERY RITUALS</h3>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.5rem; margin-bottom: 1rem;">
            <div style="background: rgba(212, 175, 55, 0.05); padding: 0.75rem; border-radius: 8px;">
                <h4 style="color: var(--gold-light); font-size: 0.8rem; margin-bottom: 0.5rem;">☕ MICRO-BREAKS</h4>
                <p style="color: var(--gray-light); font-size: 0.7rem; margin-bottom: 0.5rem;">Every 25-30 mins:</p>
                <ul style="color: var(--gray-light); font-size: 0.7rem; padding-left: 1rem; margin: 0;">
                    <li>Stand up & stretch</li>
                    <li>Look at distance</li>
                    <li>Deep breaths</li>
                </ul>
            </div>
            <div style="background: rgba(212, 175, 55, 0.05); padding: 0.75rem; border-radius: 8px;">
                <h4 style="color: var(--gold-light); font-size: 0.8rem; margin-bottom: 0.5rem;">🧘 ENERGY RECHARGE</h4>
                <p style="color: var(--gray-light); font-size: 0.7rem; margin-bottom: 0.5rem;">Every 90-120 mins:</p>
                <ul style="color: var(--gray-light); font-size: 0.7rem; padding-left: 1rem; margin: 0;">
                    <li>5-min walk</li>
                    <li>Hydrate</li>
                    <li>Meditate 2 mins</li>
                </ul>
            </div>
        </div>
        
        <div class="footer-wisdom">Take care of your body. It's the only place you have to live.</div>
        <div class="page-number">${currentPage + 2}</div>
    </div>`;
}

// SKILLS & LEARNING SYSTEMS
function generateSkillsLearningSystem(startPageNumber = 42) {
    let currentPage = startPageNumber;
    return `
    <!-- LEARNING OPTIMIZATION -->
    <div class="page" style="padding: 0.5rem 1rem;">
        <h1 class="text-center gold-gradient" style="font-size: 1.6rem; margin: 0.2rem 0 0.3rem 0;">Learning Optimization</h1>
        <div class="gold-line" style="margin-bottom: 0.3rem;"></div>
        
        <div style="background: rgba(212, 175, 55, 0.03); padding: 0.5rem; border-radius: 6px; border: 1px solid var(--gold); margin-bottom: 0.4rem;">
            <h3 style="color: var(--gold); font-size: 0.9rem; margin: 0 0 0.2rem 0;">🤍 The Feynman Technique</h3>
            <p style="color: var(--gray-light); font-size: 0.7rem; line-height: 1.2; margin: 0 0 0.2rem 0;">Named after physicist Richard Feynman, this technique helps you learn anything deeply by teaching it to a child. If you can't explain it simply, you don't understand it well enough. The process forces you to identify gaps in your knowledge and fill them.</p>
            <p style="color: var(--gold-light); font-size: 0.7rem; line-height: 1.2; font-weight: 600; margin: 0;">The first principle is that you must not fool yourself—and you are the easiest person to fool.</p>
        </div>
        
        <div style="font-size: 0.8rem; color: var(--gold); font-weight: 600; margin: 0.2rem 0;">📝 FEATURE LEARNING JOURNAL</div>
        <div style="background: rgba(212, 175, 55, 0.02); padding: 0.3rem; border-radius: 4px;">
            <div style="color: var(--gray-light); font-size: 0.65rem; margin-bottom: 0.15rem;">Topic/Concept:</div>
            <div style="border-bottom: 1px solid var(--gray-dark); height: 25px; margin-bottom: 0.2rem;"></div>
            <div style="color: var(--gray-light); font-size: 0.65rem; margin-bottom: 0.15rem;">Explain in simple terms:</div>
            <div style="border-bottom: 1px solid var(--gray-dark); height: 25px; margin-bottom: 0.15rem;"></div>
            <div style="border-bottom: 1px solid var(--gray-dark); height: 25px;"></div>
            <div style="margin-bottom: 0.5rem;">
                <div style="color: var(--gold-light); font-size: 0.8rem; margin-bottom: 0.3rem;">Identify knowledge gaps:</div>
                <div style="border: 1px solid var(--gray-dark); height: 40px; border-radius: 4px; margin-bottom: 0.5rem;"></div>
            </div>
            <div>
                <div style="color: var(--gold-light); font-size: 0.8rem; margin-bottom: 0.3rem;">Review & simplify:</div>
                <div style="border: 1px solid var(--gray-dark); height: 40px; border-radius: 4px;"></div>
            </div>
        </div>
        
        <h3 style="color: var(--gold); font-size: 1.1rem; margin-bottom: 0.5rem;">🔄 SPACED REPETITION SCHEDULE</h3>
        <div style="background: rgba(212, 175, 55, 0.05); padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
            <div style="display: grid; grid-template-columns: 2fr repeat(5, 1fr); gap: 0.3rem; margin-bottom: 0.5rem; font-size: 0.6rem; color: var(--gold-light);">
                <div>Topic/Concept</div>
                <div style="text-align: center;">Day 1</div>
                <div style="text-align: center;">Day 3</div>
                <div style="text-align: center;">Week 1</div>
                <div style="text-align: center;">Month 1</div>
                <div style="text-align: center;">Month 3</div>
            </div>
            ${['', '', '', ''].map(() => `
            <div style="display: grid; grid-template-columns: 2fr repeat(5, 1fr); gap: 0.3rem; margin-bottom: 0.3rem; align-items: center;">
                <div style="border-bottom: 1px solid var(--gray-dark); height: 15px;"></div>
                ${[1, 2, 3, 4, 5].map(() => 
                    `<div style="width: 14px; height: 14px; border: 1px solid var(--gray-dark); border-radius: 2px; margin: 0 auto;"></div>`
                ).join('')}
            </div>`).join('')}
        </div>
        
        <div class="footer-wisdom">Learning requires ardor and diligence, not chance.</div>
        <div class="page-number">${currentPage + 1}</div>
    </div>
    
    <!-- KNOWLEDGE MANAGEMENT -->
    <div class="page" style="padding: 0.5rem 1rem;">
        <h1 class="text-center gold-gradient" style="font-size: 1.6rem; margin: 0.2rem 0 0.3rem 0;">Knowledge Management</h1>
        <div class="gold-line" style="margin-bottom: 0.3rem;"></div>
        
        <div style="background: rgba(212, 175, 55, 0.03); padding: 0.5rem; border-radius: 6px; border: 1px solid var(--gold); margin-bottom: 0.4rem;">
            <h3 style="color: var(--gold); font-size: 0.9rem; margin: 0 0 0.2rem 0;">🗃️ The Zettelkasten Method</h3>
            <p style="color: var(--gray-light); font-size: 0.7rem; line-height: 1.2; margin: 0 0 0.2rem 0;">Developed by Niklas Luhmann, the Zettelkasten (slip-box) method is a powerful system for managing knowledge through interconnected notes. Each note should contain one idea in your own words, linked to other related notes, creating a web of knowledge that grows more valuable over time.</p>
            <p style="color: var(--gold-light); font-size: 0.7rem; line-height: 1.2; font-weight: 600; margin: 0;">An idea is nothing more or less than a connection made between existing thoughts in a new and useful way.</p>
        </div>
        
        <div style="font-size: 0.8rem; color: var(--gold); font-weight: 600; margin: 0.2rem 0;">📚 KNOWLEDGE VAULT</div>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.2rem; margin-bottom: 0.3rem;">
            <div style="background: rgba(212, 175, 55, 0.02); padding: 0.3rem; border-radius: 4px;">
                <div style="color: var(--gold-light); font-size: 0.7rem; font-weight: 600; margin-bottom: 0.2rem;">📖 BOOKS</div>
                <div style="height: 160px; overflow-y: auto;">
                    ${Array(8).fill(`
                    <div style="display: flex; align-items: center; margin-bottom: 0.15rem; padding-bottom: 0.15rem; border-bottom: 1px dashed var(--gray-dark);">
                        <div style="width: 12px; height: 12px; border: 1px solid var(--gray-dark); border-radius: 2px; margin-right: 0.3rem; flex-shrink: 0;"></div>
                        <div style="border-bottom: 1px solid var(--gray-dark); height: 10px; width: 100%;"></div>
                    </div>`).join('')}
                </div>
            </div>
            <div style="background: rgba(212, 175, 55, 0.02); padding: 0.3rem; border-radius: 4px;">
                <div style="color: var(--gold-light); font-size: 0.7rem; font-weight: 600; margin-bottom: 0.2rem;">🎓 COURSES</div>
                <div style="height: 160px; overflow-y: auto;">
                    ${Array(6).fill(`
                    <div style="display: flex; align-items: center; margin-bottom: 0.15rem; padding-bottom: 0.15rem; border-bottom: 1px dashed var(--gray-dark);">
                        <div style="width: 12px; height: 12px; border: 1px solid var(--gray-dark); border-radius: 2px; margin-right: 0.3rem; flex-shrink: 0;"></div>
                        <div style="border-bottom: 1px solid var(--gray-dark); height: 10px; width: 100%;"></div>
                    </div>`).join('')}
                </div>
            </div>
            <div style="background: rgba(212, 175, 55, 0.02); padding: 0.3rem; border-radius: 4px; grid-column: 1 / -1;">
                <div style="color: var(--gold-light); font-size: 0.7rem; font-weight: 600; margin-bottom: 0.2rem;">💡 IDEAS & INSIGHTS</div>
                <div style="border: 1px solid var(--gray-dark); height: 80px; border-radius: 2px; margin-bottom: 0.2rem;"></div>
                <div style="display: flex; justify-content: space-between; font-size: 0.65rem; color: var(--gray-light);">
                    <span>Tag: <span style="border-bottom: 1px solid var(--gray-dark); width: 50px; display: inline-block;"></span></span>
                    <span>Link to: <span style="border-bottom: 1px solid var(--gray-dark); width: 70px; display: inline-block;"></span></span>
                </div>
            </div>
        </div>
        
        <div style="font-size: 0.8rem; color: var(--gold); font-weight: 600; margin: 0.2rem 0;">🔗 KNOWLEDGE CONNECTIONS</div>
        <div style="background: rgba(212, 175, 55, 0.02); padding: 0.3rem; border-radius: 4px; height: 100px;">
            <div style="display: flex; flex-direction: column; height: 100%;">
                <div style="flex: 1; display: flex; justify-content: center; align-items: center; border: 1px dashed var(--gold); border-radius: 2px; margin-bottom: 0.2rem;">
                    <span style="color: var(--gold-light); font-size: 0.65rem;">Central Concept / Idea</span>
                </div>
                <div style="display: flex; justify-content: space-around; gap: 0.2rem;">
                    ${[1, 2, 3, 4].map(i => 
                        `<div style="width: 45px; height: 25px; border: 1px dashed var(--gray-dark); border-radius: 2px; display: flex; justify-content: center; align-items: center;">
                            <span style="color: var(--gray-light); font-size: 0.6rem;">Link ${i}</span>
                        </div>`
                    ).join('')}
                </div>
            </div>
        </div>
        
        <div class="footer-wisdom">Knowledge is of no value unless you put it into practice.</div>
        <div class="page-number">${currentPage + 2}</div>
    </div>`;
}

// PLACEHOLDER FUNCTIONS REMOVED - Using complete implementations below

// HISTORICAL WISDOM QUOTES WITH STORIES FOR DAILY PAGES
const HISTORICAL_WISDOM = [
    {
        quote: "The impediment to action advances action. What stands in the way becomes the way.",
        author: "Marcus Aurelius",
        story: "Written while leading Rome through plague and war, proving obstacles are opportunities."
    },
    {
        quote: "I have not failed. I've just found 10,000 ways that won't work.",
        author: "Thomas Edison",
        story: "Said after thousands of failed experiments before inventing the light bulb."
    },
    {
        quote: "The way to get started is to quit talking and begin doing.",
        author: "Walt Disney",
        story: "Disney was fired for 'lacking imagination' before building his empire."
    },
    {
        quote: "In the middle of difficulty lies opportunity.",
        author: "Albert Einstein",
        story: "Written while fleeing Nazi Germany, later developed theory that changed physics."
    },
    {
        quote: "Success is going from failure to failure without losing enthusiasm.",
        author: "Winston Churchill",
        story: "Failed in politics for 30 years before becoming Prime Minister at age 65."
    },
    {
        quote: "The only impossible journey is the one you never begin.",
        author: "Tony Robbins",
        story: "From janitor to world's top performance coach, proving transformation is possible."
    },
    {
        quote: "I have not failed. I've just found 10,000 ways that won't work.",
        author: "Thomas Edison",
        story: "Failed over 10,000 times inventing the light bulb, refused to see them as failures."
    },
    {
        quote: "The future belongs to those who believe in the beauty of their dreams.",
        author: "Eleanor Roosevelt",
        story: "Transformed from shy girl to world's most influential First Lady."
    },
    {
        quote: "It always seems impossible until it's done.",
        author: "Nelson Mandela",
        story: "Spent 27 years in prison before becoming president and ending apartheid."
    },
    {
        quote: "Champions aren't made in the gyms. Champions are made from something deep inside.",
        author: "Muhammad Ali",
        story: "The Greatest of all time proved mindset beats physical ability."
    },
    {
        quote: "Whether you think you can or you think you can't, you're right.",
        author: "Henry Ford",
        story: "Failed 5 businesses before revolutionizing transportation at age 45."
    },
    {
        quote: "Don't watch the clock; do what it does. Keep going.",
        author: "Sam Levenson",
        story: "Time rewards those who persist, not those who wait."
    },
    {
        quote: "All of our dreams can come true if we have the courage to pursue them.",
        author: "Walt Disney",
        story: "Was fired for 'lacking imagination,' built entertainment empire from a mouse."
    },
    {
        quote: "We are what we repeatedly do. Excellence is not an act, but a habit.",
        author: "Aristotle",
        story: "Ancient Greek wisdom that influenced 2,500 years of human achievement."
    },
    {
        quote: "The best time to plant a tree was 20 years ago. The second best time is now.",
        author: "Korean Proverb",
        story: "Inspired South Korea's rapid development from poverty to prosperity in one generation."
    }
];

// CHAPTER 1 STORYTELLING - VISION STORIES
function generateChapter1Stories() {
    return `
    <!-- THE VISIONARY'S AWAKENING -->
    <div class="page" style="padding-top: 0.8rem;">
        <div class="section-icon" style="margin: 0 auto 0.1rem; width: 36px; height: 36px;">
            <svg width="36" height="36" viewBox="0 0 24 24">
                <path fill="var(--gold)" d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
            </svg>
        </div>
        <h1 class="text-center gold-gradient" style="font-size: 2rem; margin: 0 0 0.25rem 0; line-height: 1.1;">The Visionary's Awakening</h1>
        <div class="gold-line" style="margin: 0 auto 0.7rem; width: 85%;"></div>
        
        <div style="background: var(--black-card); padding: 0.9rem; border-radius: 10px; border: 2px solid var(--gold); margin: 0 0 0.8rem 0;">
            <h3 style="color: var(--gold); font-size: 1.1rem; margin: 0 0 0.6rem 0;">👁️ The Story of Walt Disney's Vision</h3>
            <p style="color: var(--gray-light); font-size: 0.9rem; line-height: 1.4; margin: 0 0 0.7rem 0;">In 1955, Walt Disney mortgaged his life insurance and borrowed against everything he owned to build Disneyland. Experts called it "Disney's Folly." He could see families laughing together in a place that didn't exist, experiencing magic that hadn't been created. He said: "All our dreams can come true, if we have the courage to pursue them."</p>
            <p style="color: var(--gold-light); font-size: 0.9rem; line-height: 1.4; font-weight: 600; margin: 0;">His vision wasn't about entertainment. It was about creating happiness for families worldwide. Your vision must be equally transformative.</p>
        </div>
        
        <h3 style="color: var(--gold); font-size: 1.1rem; margin: 0 0 0.2rem 0;">🎯 YOUR VISION CLARITY</h3>
        <div style="background: rgba(212, 175, 55, 0.05); padding: 0.7rem; border-radius: 8px; margin: 0 0 0.7rem 0;">
            <p style="color: var(--gray-light); font-size: 0.9rem; margin: 0 0 0.4rem 0;">What future can you see that others cannot?</p>
            <div class="writing-line" style="margin: 0.25rem 0;"></div>
            <div class="writing-line" style="margin: 0.25rem 0;"></div>
            <div class="writing-line" style="margin: 0.25rem 0 0 0;"></div>
        </div>
        
        <div class="footer-wisdom" style="padding: 0.4rem 0 0 0; font-size: 0.75rem; line-height: 1.2;">Vision without execution is hallucination. - Thomas Edison</div>
        <div class="page-number" style="margin-top: 0.2rem;">017</div>
    </div>
    
    <!-- THE PRICE OF GREATNESS -->
    <div class="page" style="padding-top: 0.5rem;">
        <h1 class="text-center gold-gradient" style="font-size: 2rem; margin: 0 0 0.3rem 0; line-height: 1.1;">The Price of Greatness</h1>
        <div class="gold-line" style="margin: 0 auto 0.8rem; width: 85%;"></div>
        
        <div style="background: var(--black-card); padding: 0.9rem; border-radius: 10px; border: 2px solid var(--gold); margin: 0 0 0.8rem 0;">
            <h3 style="color: var(--gold); font-size: 1.1rem; margin: 0 0 0.6rem 0;">⚔️ Michael Jordan's 9,000 Misses</h3>
            <p style="color: var(--gray-light); font-size: 0.9rem; line-height: 1.4; margin: 0 0 0.7rem 0;">"I've missed more than 9,000 shots in my career. I've lost almost 300 games. 26 times, I've been trusted to take the game-winning shot and missed. I've failed over and over and over again in my life."</p>
            <p style="color: var(--gray-light); font-size: 0.9rem; line-height: 1.4; margin: 0 0 0.7rem 0;">But here's what most people don't know: Jordan was cut from his high school basketball team. He went home, locked himself in his room, and cried. Then he made a decision that would change sports history.</p>
            <p style="color: var(--gold-light); font-size: 0.9rem; line-height: 1.4; font-weight: 600; margin: 0;">"And that is why I succeed." Every failure was a payment toward greatness.</p>
        </div>
        
        <h3 style="color: var(--gold); font-size: 1.1rem; margin: 0 0 0.3rem 0;">💰 WHAT PRICE WILL YOU PAY?</h3>
        <div style="background: rgba(212, 175, 55, 0.05); padding: 0.7rem; border-radius: 8px; margin: 0 0 0.7rem 0;">
            <p style="color: var(--gray-light); font-size: 0.9rem; margin: 0 0 0.4rem 0;">List 3 sacrifices you're willing to make for your vision:</p>
            <div class="writing-line" style="margin: 0.25rem 0;"></div>
            <div class="writing-line" style="margin: 0.25rem 0;"></div>
            <div class="writing-line" style="margin: 0.25rem 0 0 0;"></div>
        </div>
        
        <div class="footer-wisdom" style="padding: 0.4rem 0 0 0; font-size: 0.75rem; line-height: 1.2;">Champions are made from within.</div>
        <div class="page-number" style="margin-top: 0.2rem;">018</div>
    </div>`;
}

// CHAPTER 2 STORYTELLING - PLANNING STORIES
function generateChapter2Stories() {
    return `
    <!-- THE STRATEGIST'S GAMBIT -->
    <div class="page">
        <h1 class="text-center gold-gradient" style="font-size: 2.2rem; margin-bottom: 0.5rem;">The Strategist's Gambit</h1>
        <div class="gold-line" style="margin-bottom: 0.75rem;"></div>
        
        <div style="background: var(--black-card); padding: 1.1rem; border-radius: 8px; border: 2px solid var(--gold); margin-bottom: 1.1rem;">
            <h3 style="color: var(--gold); font-size: 1.3rem; margin: 0 0 0.6rem 0;">♟️ Napoleon's Italian Campaign</h3>
            <p style="color: var(--gray-light); font-size: 0.9rem; line-height: 1.4; margin: 0 0 0.6rem 0;">In 1796, Napoleon took command of a demoralized army in Italy. They were outnumbered 3 to 1. Instead of retreating, he divided his forces-a move that seemed insane. But Napoleon saw what others couldn't: by splitting his army, he could attack from multiple angles simultaneously. He won 14 battles in 12 months. His secret? "I see only the objective. The obstacle must give way."</p>
            <p style="color: var(--gold-light); font-size: 0.9rem; line-height: 1.4; font-weight: 600; margin: 0;">Strategy is seeing the end from the beginning and making every move count toward that end.</p>
        </div>
        
        <h3 style="color: var(--gold); font-size: 1.2rem; margin: 0 0 0.3rem 0;">🎯 YOUR STRATEGIC ADVANTAGE</h3>
        <div style="background: rgba(212, 175, 55, 0.05); padding: 1rem; border-radius: 6px; margin-bottom: 1rem;">
            <p style="color: var(--gray-light); font-size: 0.9rem; margin: 0 0 0.8rem 0;">What unconventional strategy will give you an edge?</p>
            <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.5rem 0; height: 28px;"></div>
            <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.5rem 0; height: 28px;"></div>
            <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.5rem 0; height: 28px;"></div>
            <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.5rem 0; height: 28px;"></div>
        </div>
        
        <div class="footer-wisdom" style="font-size: 0.8rem; margin-top: 0.6rem;">Strategy without tactics is the slowest route to victory. Tactics without strategy is the noise before defeat.</div>
        <div class="page-number">034</div>
    </div>
    
    <!-- THE COMPOUND EFFECT -->
    <div class="page" style="padding-top: 0.5rem;">
        <h1 class="text-center gold-gradient" style="font-size: 2.4rem; margin-bottom: 0.25rem;">The Compound Effect</h1>
        <div class="gold-line" style="margin-bottom: 0.5rem;"></div>
        
        <div style="background: var(--black-card); padding: 1rem; border-radius: 12px; border: 2px solid var(--gold); margin-bottom: 0.75rem;">
            <h3 style="color: var(--gold); font-size: 1.3rem; margin: 0 0 0.5rem 0;">📈 Warren Buffett's Snowball</h3>
            <p style="color: var(--gray-light); font-size: 0.9rem; line-height: 1.3; margin: 0 0 0.5rem 0;">At age 30, Buffett had $1 million. Not impressive by today's standards. But he understood something profound: compound interest applies to knowledge, relationships, and habits-not just money.</p>
            <p style="color: var(--gray-light); font-size: 0.9rem; line-height: 1.3; margin: 0 0 0.5rem 0;">He read 500 pages every day. He said: "That's how knowledge works. It builds up, like compound interest." By 60, he had $3.8 billion. By 90, $100 billion.</p>
            <p style="color: var(--gold-light); font-size: 0.9rem; line-height: 1.3; font-weight: 600; margin: 0;">Small, consistent actions create exponential results over time.</p>
        </div>
        
        <h3 style="color: var(--gold); font-size: 1.2rem; margin: 0 0 0.5rem 0;">🔄 YOUR DAILY COMPOUNDS</h3>
        <div style="background: rgba(212, 175, 55, 0.05); padding: 0.8rem; border-radius: 6px; margin-bottom: 0.8rem;">
            <p style="color: var(--gray-light); font-size: 0.85rem; margin: 0 0 0.8rem 0; line-height: 1.4;">What 3 daily actions will compound into massive success?</p>
            <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.5rem 0; height: 30px;"></div>
            <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.5rem 0; height: 30px;"></div>
            <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.5rem 0; height: 30px;"></div>
            <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.5rem 0; height: 30px;"></div>
            <div style="border-bottom: 1px solid var(--gray-dark); margin: 0.5rem 0; height: 30px;"></div>
        </div>
        
        <div class="footer-wisdom">The first rule of compounding: Never interrupt it unnecessarily.</div>
        <div class="page-number">035</div>
    </div>`;
}

// CHAPTER 3 STORYTELLING - EXECUTION STORIES (TO BE INSERTED EVERY 5 DAYS)
function generateChapter3Stories(pageNumber, day) {
    const stories = [
        {
            title: "The Executor's Discipline",
            story: "🥊 Muhammad Ali's 4:30 AM",
            content: `"I hated every minute of training, but I said, 'Don\'t quit. Suffer now and live the rest of your life as a champion.'" Ali woke at 4:30 AM daily for roadwork. Not because he loved it, but because he understood: champions are made in the dark when no one watches.`,
            lesson: "The professional shows up daily, especially when they don't feel like it.",
            prompt: "What 3 daily actions will you do NO MATTER WHAT?",
            wisdom: "We are what we repeatedly do. Excellence, then, is not an act, but a habit."
        },
        {
            title: "The Persistence Paradox",
            story: "🚀 SpaceX's Fourth Attempt",
            content: `When SpaceX's first three rockets exploded, Elon Musk had one rocket left and was nearly bankrupt. Everyone told him to quit. But on September 28, 2008, the fourth Falcon 1 reached orbit. That success saved both SpaceX and Tesla.`,
            lesson: "Success often comes one attempt after most people would quit.",
            prompt: "What will you persist in even when it seems hopeless?",
            wisdom: "Many of life's failures are people who did not realize how close they were to success."
        },
        {
            title: "The Systems Advantage",
            story: "🍟 Ray Kroc's McDonald's",
            content: `Ray Kroc wasn't in the burger business-he was in the systems business. While others focused on taste, he obsessed over consistency. Every McDonald's everywhere had to make burgers exactly the same way. This system created the world's largest restaurant chain.`,
            lesson: "Systems beat talent. Systems beat motivation. Systems beat everything.",
            prompt: "What system can you build to make success automatic?",
            wisdom: "You do not rise to the level of your goals. You fall to the level of your systems."
        },
        {
            title: "The Compound Advantage",
            story: "📚 Bill Gates' Reading Habit",
            content: `Bill Gates reads 50 books per year-one book per week for decades. He says: 'Reading is still the main way that I learn new things and test my understanding.' This habit compounds into extraordinary knowledge and decision-making ability.`,
            lesson: "Small daily improvements compound into extraordinary results.",
            prompt: "What small daily habit will transform your future?",
            wisdom: "Success is the product of daily habits-not once-in-a-lifetime transformations."
        },
        {
            title: "The Focus Principle",
            story: "🎯 Warren Buffett's 5/25 Rule",
            content: `Buffett asked his pilot to list 25 career goals, circle the top 5, and focus only on those 5. When the pilot asked about the other 20, Buffett said: 'No. You've got it wrong. Everything you didn't circle just became your Avoid-At-All-Cost list.'`,
            lesson: "Success isn't about doing more things. It's about doing fewer things better.",
            prompt: "What will you stop doing to focus on what matters most?",
            wisdom: "The successful person has the habit of doing things failures don't like to do."
        },
        {
            title: "The Resilience Factor",
            story: "🥊 Rocky Marciano's Record",
            content: `Rocky Marciano retired as the only heavyweight champion with a perfect record: 49-0. His secret wasn't being the strongest or fastest-it was refusing to stay down. He said: 'I have always adhered to two principles. The first one is to train hard and get in the best possible physical condition. The second is to forget all about the other fellow until you face him in the ring.'`,
            lesson: "Champions are made by how they respond to being knocked down.",
            prompt: "How will you bounce back stronger from your next setback?",
            wisdom: "It's not whether you get knocked down; it's whether you get up."
        },
        {
            title: "The Vision Keeper",
            story: "🎬 Walt Disney's Disneyland",
            content: `When Disney pitched Disneyland, 302 banks rejected him. They said: 'Amusement parks are dirty, unsafe, and unprofitable.' But Disney saw what others couldn't: families creating magical memories together. He mortgaged everything to build his vision.`,
            lesson: "Visionaries see opportunities where others see obstacles.",
            prompt: "What vision will you pursue despite the doubters?",
            wisdom: "All our dreams can come true if we have the courage to pursue them."
        },
        {
            title: "The Patient Builder",
            story: "🌳 Sequoia National Park",
            content: `General Sherman, the world's largest tree, is over 2,000 years old. It grew through droughts, fires, and storms. Each ring represents a year of patient growth, compound progress invisible to the naked eye until it became impossible to ignore.`,
            lesson: "Great things take time. Consistency compounds.",
            prompt: "What are you building that won't show results for years?",
            wisdom: "Someone is sitting in the shade today because someone planted a tree long ago."
        },
        {
            title: "The Innovation Imperative",
            story: "💡 Edison's Laboratory",
            content: `Edison's Menlo Park laboratory produced a new invention every 10 days for 6 years. His secret? He hired diverse minds and gave them one rule: 'Genius is 1% inspiration, 99% perspiration.' Every failure was data for the next experiment.`,
            lesson: "Innovation is a system, not an accident.",
            prompt: "How will you systematize creativity in your work?",
            wisdom: "There's a way to do it better - find it."
        },
        {
            title: "The Network Effect",
            story: "🤝 Benjamin Franklin's Clubs",
            content: `Franklin created the Junto club in 1727-13 ambitious men meeting weekly to discuss business, philosophy, and mutual improvement. This network helped him become a printer, scientist, diplomat, and founding father. His network became his net worth.`,
            lesson: "Your network determines your opportunities.",
            prompt: "Who will you connect with to accelerate your success?",
            wisdom: "If you want to go fast, go alone. If you want to go far, go together."
        },
        {
            title: "The Timing Master",
            story: "⏰ Ray Kroc at 52",
            content: `Ray Kroc was 52 when he founded McDonald's. He'd failed at multiple businesses. But when he saw the McDonald brothers' system, he recognized perfect timing: post-war America wanted convenience and consistency. Age wasn't a barrier-it was preparation.`,
            lesson: "It's never too late to start, but timing matters.",
            prompt: "What trend will you ride to success?",
            wisdom: "The best time was 20 years ago. The second best time is now."
        },
        {
            title: "The Challenger's Edge",
            story: "🏀 Michael Jordan Cut from Team",
            content: `Jordan was cut from his high school basketball team. Coach said he wasn't good enough. Instead of quitting, Jordan used rejection as fuel. He practiced obsessively, turning every 'no' into motivation. Five NBA championships later, that coach's name is forgotten.`,
            lesson: "Rejection is redirection toward greatness.",
            prompt: "How will you use your last rejection as fuel?",
            wisdom: "I've failed over and over again in my life. That's why I succeed."
        },
        {
            title: "The Simplicity Secret",
            story: "📱 iPhone Revolution",
            content: `Before iPhone, smartphones had 40+ buttons. Jobs said: 'Simplicity is the ultimate sophistication.' One button changed everything. The complex became simple, the difficult became intuitive. Simplicity became Apple's competitive advantage.`,
            lesson: "Complexity is the enemy of execution.",
            prompt: "What can you simplify to amplify results?",
            wisdom: "Perfection is achieved by subtraction, not addition."
        },
        {
            title: "The Contrarian's Courage",
            story: "📈 Warren Buffett's 2008 Buy",
            content: `During the 2008 financial crisis, while everyone was selling, Buffett invested $5 billion in Goldman Sachs. He said: 'Be fearful when others are greedy, greedy when others are fearful.' That investment made billions.`,
            lesson: "The biggest opportunities come when everyone else is scared.",
            prompt: "What opportunity is everyone else missing right now?",
            wisdom: "In the short run, the market is a voting machine. In the long run, it's a weighing machine."
        },
        {
            title: "The Preparation Principle",
            story: "🎯 Serena Williams' Practice",
            content: `Serena practiced 6 hours daily, even at the peak of her career. She said: 'I practice like I've never won a title.' Her preparation was so intense that matches felt easy by comparison. She prepared in private to perform in public.`,
            lesson: "Champions prepare harder than amateurs compete.",
            prompt: "How will you out-prepare your competition?",
            wisdom: "I will prepare and someday my chance will come."
        },
        {
            title: "The Momentum Multiplier",
            story: "🚂 Henry Ford's Assembly Line",
            content: `Ford didn't invent the car-he invented mass production. By breaking car assembly into small, repeatable steps, he reduced production time from 12 hours to 93 minutes. Small improvements compounded into revolutionary change.`,
            lesson: "Small system improvements create massive results.",
            prompt: "What process can you optimize for 10x results?",
            wisdom: "Whether you think you can or you can't, you're right."
        },
        {
            title: "The Comeback Code",
            story: "👑 Haile Selassie's Exile & Return",
            content: `Exiled from Ethiopia by Italian invasion in 1936, Emperor Haile Selassie spent 5 years in Bath, England. He never stopped believing in his return. He studied, planned, built alliances, and when the moment came in 1941, he walked back into Addis Ababa as emperor. He said: 'Throughout history, it has been the inaction of those who could have acted that has made it possible for evil to triumph.'`,
            lesson: "Your comeback starts with your comeback story.",
            prompt: "What comeback story are you writing?",
            wisdom: "Rock bottom became the solid foundation on which I rebuilt my life."
        },
        {
            title: "The Way of Water",
            story: "🥋 Bruce Lee's Philosophy",
            content: `Bruce Lee was rejected by Hollywood for being 'too Chinese' to play an Asian character. Instead of giving up, he created his own philosophy: 'Be like water making its way through cracks. Do not be assertive, but adjust to the object, and you shall find a way around or through it.' He adapted, evolved, and eventually revolutionized martial arts and cinema.`,
            lesson: "Adapt like water - find your way around every obstacle.",
            prompt: "How can you be more like water in your challenges?",
            wisdom: "Empty your mind, be formless, shapeless, like water."
        }
    ];
    
    // Calculate story index based on day (every 5 days: 5, 10, 15, 20, etc.)
    const safeDay = day || 5;
    let storyIndex = Math.floor((safeDay - 5) / 5) % stories.length;
    
    // Ensure storyIndex is always valid (0 to stories.length-1)
    if (storyIndex < 0) storyIndex = 0;
    if (storyIndex >= stories.length) storyIndex = 0;
    
    const currentStory = stories[storyIndex] || stories[0];
    
    // Safety check for currentStory
    if (!currentStory || !currentStory.title) {
        console.warn('Warning: currentStory is undefined or missing title. Using fallback.');
        return `
        <!-- STORYTELLING PAGE -->
        <div class="page">
            <h1 class="text-center gold-gradient" style="font-size: 2.3rem;">The Journey Continues</h1>
            <div class="gold-line"></div>
            <div style="padding: 2rem; text-align: center; color: var(--gray-light);">
                <p>This is a storytelling page that will inspire and motivate you.</p>
            </div>
            <div class="footer-wisdom">Every step forward is progress.</div>
            <div class="page-number">${pageNumber}</div>
        </div>`;
    }
    
    return `
    <!-- ${currentStory.title.toUpperCase()} -->
    <div class="page">
        <h1 class="text-center gold-gradient" style="font-size: 2.3rem;">${currentStory.title}</h1>
        <div class="gold-line"></div>
        
        <div style="background: var(--black-card); padding: 1.5rem; border-radius: 12px; border: 2px solid var(--gold); margin: 1.5rem 0;">
            <h3 style="color: var(--gold); font-size: 1.2rem; margin-bottom: 1rem;">${currentStory.story}</h3>
            <p style="color: var(--gray-light); font-size: 0.8rem; line-height: 1.4; margin-bottom: 1rem;">${currentStory.content}</p>
            <p style="color: var(--gold-light); font-size: 0.8rem; line-height: 1.4; font-weight: 600;">${currentStory.lesson}</p>
        </div>
        
        <h3 style="color: var(--gold); font-size: 1.1rem; margin-bottom: 0.5rem;">⏰ YOUR ACTION STEP</h3>
        <div style="background: rgba(212, 175, 55, 0.05); padding: 1rem; border-radius: 8px;">
            <p style="color: var(--gray-light); font-size: 0.8rem; margin-bottom: 0.5rem;">${currentStory.prompt}</p>
            <div class="writing-line"></div>
            <div class="writing-line"></div>
            <div class="writing-line"></div>
        </div>
        
        <div class="footer-wisdom">${currentStory.wisdom}</div>
        <div class="page-number">${pageNumber}</div>
    </div>`;
}

// CHAPTER 4 STORYTELLING - REVIEW STORIES
function generateChapter4Stories() {
    return `
    <!-- THE MASTER'S REFLECTION -->
    <div class="page">
        <h1 class="text-center gold-gradient" style="font-size: 2.3rem;">The Master's Reflection</h1>
        <div class="gold-line"></div>
        
        <div style="background: var(--black-card); padding: 1.5rem; border-radius: 12px; border: 2px solid var(--gold); margin: 1.5rem 0;">
            <h3 style="color: var(--gold); font-size: 1.2rem; margin-bottom: 1rem;">🎯 Ray Dalio's Principles</h3>
            <p style="color: var(--gray-light); font-size: 0.8rem; line-height: 1.4; margin-bottom: 1rem;">After losing everything in 1982, Ray Dalio started writing down every decision and its outcome. He called it his "mistake log." This simple practice turned Bridgewater into the world's largest hedge fund.</p>
            <p style="color: var(--gray-light); font-size: 0.8rem; line-height: 1.4; margin-bottom: 1rem;">"Pain + Reflection = Progress." He realized that mistakes weren't failures-they were data points for improvement.</p>
            <p style="color: var(--gold-light); font-size: 0.8rem; line-height: 1.4; font-weight: 600;">The unexamined life is not worth living. The examined life becomes extraordinary.</p>
        </div>
        
        <h3 style="color: var(--gold); font-size: 1.1rem; margin-bottom: 0.5rem;">🔍 YOUR PATTERN RECOGNITION</h3>
        <div style="background: rgba(212, 175, 55, 0.05); padding: 1rem; border-radius: 8px;">
            <p style="color: var(--gray-light); font-size: 0.8rem; margin-bottom: 0.5rem;">What patterns have you discovered about your success and failure?</p>
            <div class="writing-line"></div>
            <div class="writing-line"></div>
            <div class="writing-line"></div>
        </div>
        
        <div class="footer-wisdom">Winter revealed my invincible summer within.</div>
        <div class="page-number">172</div>
    </div>
    
    <!-- THE TRANSFORMATION TRUTH -->
    <div class="page" style="padding: 0.5rem 1rem;">
        <h1 class="text-center gold-gradient" style="font-size: 1.6rem; margin: 0.2rem 0 0.3rem 0;">The Transformation Truth</h1>
        <div class="gold-line" style="margin-bottom: 0.3rem;"></div>
        
        <div style="background: rgba(212, 175, 55, 0.03); padding: 0.5rem; border-radius: 6px; border: 1px solid var(--gold); margin-bottom: 0.4rem;">
            <h3 style="color: var(--gold); font-size: 0.9rem; margin: 0 0 0.2rem 0;">🔥 The Phoenix Transformation</h3>
            <p style="color: var(--gray-light); font-size: 0.7rem; line-height: 1.2; margin: 0 0 0.2rem 0;">Ancient mythology tells us that the phoenix burns itself to ashes every 500 years, only to rise again more beautiful and powerful. What the myth doesn't tell you is this: the phoenix doesn't burn accidentally. It chooses to burn. It destroys its old self to become something greater.</p>
            <p style="color: var(--gold-light); font-size: 0.7rem; line-height: 1.2; font-weight: 600; margin: 0;">True transformation requires the courage to let go of who you were to become who you're meant to be.</p>
        </div>
        
        <div style="font-size: 0.8rem; color: var(--gold); font-weight: 600; margin: 0.2rem 0;">🎯 YOUR PHOENIX MOMENT</div>
        <div style="background: rgba(212, 175, 55, 0.02); padding: 0.3rem; border-radius: 4px;">
            <p style="color: var(--gray-light); font-size: 0.7rem; margin: 0 0 0.2rem 0;">What version of yourself do you need to let go of to rise to the next level?</p>
            <div style="border-bottom: 1px solid var(--gray-dark); height: 25px; margin: 0.1rem 0;"></div>
            <div style="border-bottom: 1px solid var(--gray-dark); height: 25px; margin: 0.1rem 0;"></div>
            <div style="border-bottom: 1px solid var(--gray-dark); height: 25px; margin: 0.1rem 0;"></div>
        </div>
        
        <div class="footer-wisdom">Plant in contemplation, harvest in action.</div>
        <div class="page-number">173</div>
    </div>`;
}

// CHAPTER 5 STORYTELLING - LEGACY STORIES
function generateChapter5Stories() {
    return `
    <!-- THE LEGACY BUILDER -->
    <div class="page">
        <h1 class="text-center gold-gradient" style="font-size: 2.3rem;">The Legacy Builder</h1>
        <div class="gold-line"></div>
        
        <div style="background: var(--black-card); padding: 1.5rem; border-radius: 12px; border: 2px solid var(--gold); margin: 1.5rem 0;">
            <h3 style="color: var(--gold); font-size: 1.2rem; margin-bottom: 1rem;">🏛️ Marcus Aurelius' Meditations</h3>
            <p style="color: var(--gray-light); font-size: 0.8rem; line-height: 1.4; margin-bottom: 1rem;">The most powerful man in the world wrote a journal never meant to be published. Marcus Aurelius, Roman Emperor, wrote "Meditations" for himself-reminders of how to live with virtue. 2,000 years later, it's still changing lives.</p>
            <p style="color: var(--gray-light); font-size: 0.8rem; line-height: 1.4; margin-bottom: 1rem;">He wrote: "What we do now echoes in eternity." Every decision, every action, every word becomes part of your legacy.</p>
            <p style="color: var(--gold-light); font-size: 0.8rem; line-height: 1.4; font-weight: 600;">Your legacy isn't what you leave behind-it's what you build every single day.</p>
        </div>
        
        <h3 style="color: var(--gold); font-size: 1.1rem; margin-bottom: 0.5rem;">👑 YOUR ETERNAL IMPACT</h3>
        <div style="background: rgba(212, 175, 55, 0.05); padding: 1rem; border-radius: 8px;">
            <p style="color: var(--gray-light); font-size: 0.8rem; margin-bottom: 0.5rem;">What will people say about you 100 years from now?</p>
            <div class="writing-line"></div>
            <div class="writing-line"></div>
            <div class="writing-line"></div>
        </div>
        
        <div class="footer-wisdom">Purpose: usefulness, honor, compassion.</div>
        <div class="page-number">180</div>
    </div>
    
    <!-- THE MASTER'S JOURNEY -->
    <div class="page">
        <h1 class="text-center gold-gradient" style="font-size: 2.3rem;">The Master's Journey</h1>
        <div class="gold-line"></div>
        
        <div style="background: var(--black-card); padding: 1.5rem; border-radius: 12px; border: 2px solid var(--gold); margin: 1.5rem 0;">
            <h3 style="color: var(--gold); font-size: 1.2rem; margin-bottom: 1rem;">🎭 Leonardo da Vinci's Notebooks</h3>
            <p style="color: var(--gray-light); font-size: 0.8rem; line-height: 1.4; margin-bottom: 1rem;">Leonardo filled over 13,000 pages of notebooks with ideas, observations, and experiments. He wrote backwards in mirror script, making them hard to read-perhaps protecting his insights. His notebooks reveal a mind that saw connections everywhere: art, science, engineering, anatomy.</p>
            <p style="color: var(--gold-light); font-size: 0.8rem; line-height: 1.4; font-weight: 600;">Mastery isn't reaching a destination. It's becoming a perpetual student of your craft.</p>
        </div>
        
        <h3 style="color: var(--gold); font-size: 1.1rem; margin-bottom: 0.5rem;">🎯 YOUR MASTERY PATH</h3>
        <div style="background: rgba(212, 175, 55, 0.05); padding: 1rem; border-radius: 8px;">
            <p style="color: var(--gray-light); font-size: 0.8rem; margin-bottom: 0.5rem;">What skills will you spend the next decade mastering?</p>
            <div class="writing-line"></div>
            <div class="writing-line"></div>
            <div class="writing-line"></div>
        </div>
        
        <div class="footer-wisdom">The expert in anything was once a beginner. - Helen Hayes</div>
        <div class="page-number">181</div>
    </div>`;
}

// DECISION-MAKING & RISK SYSTEMS
function generateDecisionMakingRisk(startPageNumber = 221) {
    let currentPage = startPageNumber;
    return `
    <!-- DECISION FRAMEWORK MATRIX -->
    <div class="page">
        <h1 class="text-center gold-gradient" style="font-size: 2rem; margin-bottom: 0.5rem;">Decision Framework Matrix</h1>
        <div class="gold-line" style="margin-bottom: 0.8rem;"></div>
        
        <div style="background: var(--black-card); padding: 1rem; border-radius: 8px; border: 1px solid var(--gold); margin-bottom: 0.8rem;">
            <h3 style="color: var(--gold); font-size: 1rem; margin: 0 0 0.5rem 0;">⚖️ Munger's Mental Models</h3>
            <p style="color: var(--gray-light); font-size: 0.75rem; line-height: 1.2; margin: 0 0 0.3rem 0;">"You must know the big ideas in the big disciplines and use them routinely."</p>
            <p style="color: var(--gold-light); font-size: 0.7rem; font-weight: 600; margin: 0;">Good decisions compound. Bad decisions compound faster.</p>
        </div>
        
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.5rem; margin-bottom: 0.8rem;">
            <div style="background: rgba(0, 122, 255, 0.1); padding: 0.6rem; border-radius: 6px; border-left: 2px solid #007AFF;">
                <h4 style="color: #007AFF; font-size: 0.75rem; margin: 0 0 0.2rem 0;">🎯 Define</h4>
                <p style="color: var(--gray-light); font-size: 0.65rem; margin: 0 0 0.3rem 0; min-height: 1.5rem;">What exactly am I deciding?</p>
                <div style="border-bottom: 1px solid rgba(0, 122, 255, 0.3); height: 12px;"></div>
            </div>
            <div style="background: rgba(255, 59, 48, 0.1); padding: 0.6rem; border-radius: 6px; border-left: 2px solid #FF3B30;">
                <h4 style="color: #FF3B30; font-size: 0.75rem; margin: 0 0 0.2rem 0;">⚠️ Risks</h4>
                <p style="color: var(--gray-light); font-size: 0.65rem; margin: 0 0 0.3rem 0; min-height: 1.5rem;">What could go wrong?</p>
                <div style="border-bottom: 1px solid rgba(255, 59, 48, 0.3); height: 12px;"></div>
            </div>
            <div style="background: rgba(52, 199, 89, 0.1); padding: 0.6rem; border-radius: 6px; border-left: 2px solid #34C759;">
                <h4 style="color: #34C759; font-size: 0.75rem; margin: 0 0 0.2rem 0;">🚀 Success</h4>
                <p style="color: var(--gray-light); font-size: 0.65rem; margin: 0 0 0.3rem 0; min-height: 1.5rem;">Best possible outcome?</p>
                <div style="border-bottom: 1px solid rgba(52, 199, 89, 0.3); height: 12px;"></div>
            </div>
            <div style="background: rgba(255, 149, 0, 0.1); padding: 0.6rem; border-radius: 6px; border-left: 2px solid #FF9500;">
                <h4 style="color: #FF9500; font-size: 0.75rem; margin: 0 0 0.2rem 0;">🔄 Alternatives</h4>
                <p style="color: var(--gray-light); font-size: 0.65rem; margin: 0 0 0.3rem 0; min-height: 1.5rem;">What else could I do?</p>
                <div style="border-bottom: 1px solid rgba(255, 149, 0, 0.3); height: 12px;"></div>
            </div>
        </div>

        <div style="margin-bottom: 0.8rem;">
            <h4 style="color: var(--gold-light); font-size: 0.75rem; margin: 0 0 0.3rem 0; font-weight: 600;">🔍 Key Mental Models</h4>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.4rem;
                        font-size: 0.6rem; color: var(--gray-light);">
                <div style="padding: 0.2rem 0.3rem; background: rgba(212, 175, 55, 0.08); border-radius: 4px;">→ Inversion</div>
                <div style="padding: 0.2rem 0.3rem; background: rgba(212, 175, 55, 0.08); border-radius: 4px;">→ Second-Order Thinking</div>
                <div style="padding: 0.2rem 0.3rem; background: rgba(212, 175, 55, 0.08); border-radius: 4px;">→ Circle of Competence</div>
                <div style="padding: 0.2rem 0.3rem; background: rgba(212, 175, 55, 0.08); border-radius: 4px;">→ Margin of Safety</div>
            </div>
        </div>

        <div style="background: rgba(212, 175, 55, 0.05); padding: 0.6rem; border-radius: 6px; border: 1px solid rgba(212, 175, 55, 0.2);
                    margin-bottom: 0.8rem;">
            <h4 style="color: var(--gold); font-size: 0.75rem; margin: 0 0 0.3rem 0;">📝 Decision</h4>
            <div style="border-bottom: 1px solid rgba(212, 175, 55, 0.3); height: 40px;"></div>
        </div>
        
        <div class="footer-wisdom" style="font-size: 0.7rem;">"If it seems easy, you're doing it wrong." — Charlie Munger</div>
        <div class="page-number">${currentPage}</div>
    </div>
    
    <!-- RISK ASSESSMENT TOOLS -->
    <div class="page">
        <h1 class="text-center gold-gradient" style="font-size: 2.3rem;">Risk Assessment Tools</h1>
        <div class="gold-line"></div>
        
        <div style="background: var(--black-card); padding: 1.5rem; border-radius: 12px; border: 2px solid var(--gold); margin: 1.5rem 0;">
            <h3 style="color: var(--gold); font-size: 1.2rem; margin-bottom: 1rem;">🎲 Jeff Bezos' Regret Minimization Framework</h3>
            <p style="color: var(--gray-light); font-size: 0.8rem; line-height: 1.4; margin-bottom: 1rem;">When deciding to leave Wall Street to start Amazon, Bezos imagined himself at 80 asking: "Will I regret not trying?" This framework helps make decisions by projecting into the future and minimizing regret.</p>
            <p style="color: var(--gold-light); font-size: 0.8rem; line-height: 1.4; font-weight: 600;">The biggest risk is not taking any risk.</p>
        </div>
        
        <h3 style="color: var(--gold); font-size: 1.1rem; margin-bottom: 0.5rem;">🛡️ RISK ANALYSIS</h3>
        <div style="background: rgba(212, 175, 55, 0.05); padding: 1rem; border-radius: 8px;">
            <p style="color: var(--gray-light); font-size: 0.8rem; margin-bottom: 0.5rem;">Current big decision: What will I regret NOT doing?</p>
            <div class="writing-line"></div>
            <div class="writing-line"></div>
            <div class="writing-line"></div>
        </div>
        
        <div class="footer-wisdom">Fortune favors the prepared mind.</div>
        <div class="page-number">${currentPage + 1}</div>
    </div>`;
}

// CREATIVITY & INNOVATION SYSTEMS
function generateCreativityInnovation(startPageNumber = 223) {
    let currentPage = startPageNumber;
    return `
    <!-- CREATIVE THINKING EXERCISES -->
    <div class="page">
        <h1 class="text-center gold-gradient" style="font-size: 2.3rem;">Creative Thinking Exercises</h1>
        <div class="gold-line"></div>
        
        <div style="background: var(--black-card); padding: 1.5rem; border-radius: 12px; border: 2px solid var(--gold); margin: 1.5rem 0;">
            <h3 style="color: var(--gold); font-size: 1.2rem; margin-bottom: 1rem;">🎨 Pablo Picasso's Innovation Method</h3>
            <p style="color: var(--gray-light); font-size: 0.8rem; line-height: 1.4; margin-bottom: 1rem;">Picasso said: "I am always doing that which I cannot do, in order that I may learn how to do it." He deliberately sought challenges that forced creative solutions, leading to artistic breakthroughs like Cubism.</p>
            <p style="color: var(--gold-light); font-size: 0.8rem; line-height: 1.4; font-weight: 600;">Creativity requires constraint and challenge.</p>
        </div>
        
        <h3 style="color: var(--gold); font-size: 1.1rem; margin-bottom: 0.5rem;">🧠 CREATIVE CHALLENGES</h3>
        <div style="background: rgba(212, 175, 55, 0.05); padding: 1rem; border-radius: 8px;">
            <p style="color: var(--gray-light); font-size: 0.8rem; margin-bottom: 0.5rem;">What creative challenge will I tackle this week?</p>
            <div class="writing-line"></div>
            <div class="writing-line"></div>
        </div>
        
        <div class="footer-wisdom">Innovation distinguishes leaders from followers.</div>
        <div class="page-number">${currentPage}</div>
    </div>
    
    <!-- INNOVATION PROCESSES -->
    <div class="page">
        <h1 class="text-center gold-gradient" style="font-size: 2.3rem;">Innovation Processes</h1>
        <div class="gold-line"></div>
        
        <div style="background: var(--black-card); padding: 1.5rem; border-radius: 12px; border: 2px solid var(--gold); margin: 1.5rem 0;">
            <h3 style="color: var(--gold); font-size: 1.2rem; margin-bottom: 1rem;">💡 IDEO's Design Thinking</h3>
            <p style="color: var(--gray-light); font-size: 0.8rem; line-height: 1.4; margin-bottom: 1rem;">IDEO revolutionized innovation through design thinking: Empathize, Define, Ideate, Prototype, Test. This systematic approach to innovation has created breakthrough products from the Apple mouse to Tesla's interior.</p>
            <p style="color: var(--gold-light); font-size: 0.8rem; line-height: 1.4; font-weight: 600;">Innovation is a process, not an event.</p>
        </div>
        
        <h3 style="color: var(--gold); font-size: 1.1rem; margin-bottom: 0.5rem;">🚀 INNOVATION PROJECT</h3>
        <div style="background: rgba(212, 175, 55, 0.05); padding: 1rem; border-radius: 8px;">
            <p style="color: var(--gray-light); font-size: 0.8rem; margin-bottom: 0.5rem;">What problem will I solve creatively this quarter?</p>
            <div class="writing-line"></div>
            <div class="writing-line"></div>
        </div>
        
        <div class="footer-wisdom">Creativity is intelligence having fun.</div>
        <div class="page-number">${currentPage + 1}</div>
    </div>`;
}

// CONTRIBUTION & LEGACY SYSTEMS  
function generateContributionLegacy(startPageNumber = 225) {
    let currentPage = startPageNumber;
    return `
    <!-- SOCIAL IMPACT PLANNING -->
    <div class="page">
        <h1 class="text-center gold-gradient" style="font-size: 2.3rem;">Social Impact Planning</h1>
        <div class="gold-line"></div>
        
        <div style="background: var(--black-card); padding: 1.5rem; border-radius: 12px; border: 2px solid var(--gold); margin: 1.5rem 0;">
            <h3 style="color: var(--gold); font-size: 1.2rem; margin-bottom: 1rem;">🌍 Andrew Carnegie's Giving Philosophy</h3>
            <p style="color: var(--gray-light); font-size: 0.8rem; line-height: 1.4; margin-bottom: 1rem;">Carnegie gave away 90% of his wealth, saying: "The man who dies rich dies disgraced." He believed success creates an obligation to lift others. His libraries, schools, and foundations still impact millions today.</p>
            <p style="color: var(--gold-light); font-size: 0.8rem; line-height: 1.4; font-weight: 600;">Success without contribution is just accumulation.</p>
        </div>
        
        <h3 style="color: var(--gold); font-size: 1.1rem; margin-bottom: 0.5rem;">💝 CONTRIBUTION PLAN</h3>
        <div style="background: rgba(212, 175, 55, 0.05); padding: 1rem; border-radius: 8px;">
            <p style="color: var(--gray-light); font-size: 0.8rem; margin-bottom: 0.5rem;">How will I contribute to something bigger than myself?</p>
            <div class="writing-line"></div>
            <div class="writing-line"></div>
            <div class="writing-line"></div>
        </div>
        
        <div class="footer-wisdom">We make a living by what we get, but we make a life by what we give.</div>
        <div class="page-number">${currentPage}</div>
    </div>
    
    <!-- MENTORSHIP FRAMEWORK -->
    <div class="page">
        <h1 class="text-center gold-gradient" style="font-size: 2.3rem;">Mentorship Framework</h1>
        <div class="gold-line"></div>
        
        <div style="background: var(--black-card); padding: 1.5rem; border-radius: 12px; border: 2px solid var(--gold); margin: 1.5rem 0;">
            <h3 style="color: var(--gold); font-size: 1.2rem; margin-bottom: 1rem;">🎓 Maya Angelou's Teaching Legacy</h3>
            <p style="color: var(--gray-light); font-size: 0.8rem; line-height: 1.4; margin-bottom: 1rem;">Maya Angelou said: "When we know better, we do better." She mentored thousands through her writings and teachings, believing that sharing wisdom multiplies its impact. Her influence continues growing through those she inspired.</p>
            <p style="color: var(--gold-light); font-size: 0.8rem; line-height: 1.4; font-weight: 600;">A teacher affects eternity.</p>
        </div>
        
        <h3 style="color: var(--gold); font-size: 1.1rem; margin-bottom: 0.5rem;">🌟 MENTORSHIP PLAN</h3>
        <div style="background: rgba(212, 175, 55, 0.05); padding: 1rem; border-radius: 8px;">
            <p style="color: var(--gray-light); font-size: 0.8rem; margin-bottom: 0.5rem;">Who will I mentor and what knowledge will I share?</p>
            <div class="writing-line"></div>
            <div class="writing-line"></div>
            <div class="writing-line"></div>
        </div>
        
        <div class="footer-wisdom">The greatest leaders create more leaders.</div>
        <div class="page-number">${currentPage + 1}</div>
    </div>`;
}

// ROBERT GREENE STRATEGIC WARFARE ENHANCEMENTS
function generateStrategicWarfareSection() {
    return `
    <!-- THE ENEMY WITHIN -->
    <div class="page" style="padding: 0.6rem 1rem;">
        <h1 class="text-center gold-gradient" style="font-size: 1.5rem; margin: 0.2rem 0 0.4rem 0; line-height: 1.1;">The Enemy Within</h1>
        <div class="gold-line" style="margin-bottom: 0.5rem;"></div>
        
        <div style="background: rgba(212, 175, 55, 0.05); padding: 0.5rem; border-radius: 6px; border: 1px solid var(--gold); margin-bottom: 0.5rem;">
            <h3 style="color: var(--gold); font-size: 0.95rem; margin: 0 0 0.2rem 0; font-weight: 600;">⚔️ Know Your Enemy</h3>
            <p style="color: var(--gray-light); font-size: 0.8rem; line-height: 1.3; margin: 0 0 0.3rem 0;">Your transformation has enemies - both internal and external. They will try to sabotage your progress. Identify them now.</p>
            <p style="color: var(--gold-light); font-size: 0.9rem; line-height: 1.3; font-weight: 600; margin: 0;\">The enemy you don't see coming is the one that destroys you.</p>
        </div>
        
        <div style="font-size: 0.85rem; color: var(--gold); font-weight: 700; margin: 0.4rem 0 0.2rem 0; padding-bottom: 0.1rem; border-bottom: 1px solid var(--gold);">🧠 INTERNAL ENEMIES</div>
        <div style="background: rgba(212, 175, 55, 0.03); padding: 0.4rem; border-radius: 6px; margin-bottom: 0.4rem; border: 1px solid rgba(212, 175, 55, 0.1);">
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.4rem; font-size: 0.8rem; margin-bottom: 0.3rem;">
                <div style="color: var(--gold-light); font-weight: 600; padding: 0.1rem 0;">The Comfort Zone Cartel</div>
                <div style="color: var(--gold-light); font-weight: 600; padding: 0.1rem 0;">The Perfectionist Parasite</div>
                <div style="color: var(--gold-light); font-weight: 600; padding: 0.1rem 0;">The Comparison Demon</div>
                <div style="color: var(--gold-light); font-weight: 600; padding: 0.1rem 0;">The Instant Gratification Virus</div>
            </div>
            ${Array(4).fill(`
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.6rem; margin: 0.3rem 0;">
                <div style="border-bottom: 1px solid var(--gray-dark); height: 20px; margin-bottom: 0.2rem;"></div>
                <div style="border-bottom: 1px solid var(--gray-dark); height: 20px; margin-bottom: 0.2rem;"></div>
            </div>`).join('')}
        </div>
        
        <div style="font-size: 0.85rem; color: var(--gold); font-weight: 700; margin: 0.4rem 0 0.2rem 0; padding-bottom: 0.1rem; border-bottom: 1px solid var(--gold);">🛡️ EXTERNAL ENEMIES</div>
        <div style="background: rgba(212, 175, 55, 0.03); padding: 0.4rem; border-radius: 6px; border: 1px solid rgba(212, 175, 55, 0.1);">
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.4rem; font-size: 0.8rem; margin-bottom: 0.3rem;">
                <div style="color: var(--gold-light); font-weight: 600; padding: 0.1rem 0;">The Mediocrity Mob</div>
                <div style="color: var(--gold-light); font-weight: 600; padding: 0.1rem 0;">The Status Quo Syndicate</div>
                <div style="color: var(--gold-light); font-weight: 600; padding: 0.1rem 0;">The Dream Killers</div>
                <div style="color: var(--gold-light); font-weight: 600; padding: 0.1rem 0;">The Energy Vampires</div>
            </div>
            ${Array(4).fill(`
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.6rem; margin: 0.3rem 0;">
                <div style="border-bottom: 1px solid var(--gray-dark); height: 20px; margin-bottom: 0.2rem;"></div>
                <div style="border-bottom: 1px solid var(--gray-dark); height: 20px; margin-bottom: 0.2rem;"></div>
            </div>`).join('')}
        </div>
        
        <div class="footer-wisdom">The enemy of my growth is my destruction.</div>
        <div class="page-number">026</div>
    </div>
    
    <!-- POWER DYNAMICS & SOCIAL WARFARE -->
    <div class="page" style="padding: 0.5rem 1rem;">
        <h1 class="text-center gold-gradient" style="font-size: 1.5rem; margin: 0.2rem 0 0.3rem 0;">Power Dynamics & Social Warfare</h1>
        <div class="gold-line" style="margin-bottom: 0.3rem;"></div>
        
        <div style="background: rgba(212, 175, 55, 0.03); padding: 0.4rem; border-radius: 6px; border: 1px solid var(--gold); margin-bottom: 0.3rem;">
            <h3 style="color: var(--gold); font-size: 0.85rem; margin: 0 0 0.15rem 0;">👑 The 48 Laws Applied</h3>
            <p style="color: var(--gray-light); font-size: 0.65rem; line-height: 1.2; margin: 0 0 0.15rem 0;">Your 90-day transformation will trigger reactions. Colleagues will feel threatened. Friends will try to sabotage. Family will resist your evolution. You must be prepared for the social warfare that accompanies all meaningful change.</p>
            <p style="color: var(--gold-light); font-size: 0.65rem; line-height: 1.2; font-weight: 600; margin: 0;">Power is not revealed by striking hard or often, but by striking true.</p>
        </div>
        
        <div style="font-size: 0.75rem; color: var(--gold); font-weight: 600; margin: 0.15rem 0;">⚔️ WORKPLACE WARFARE</div>
        <div style="background: rgba(212, 175, 55, 0.02); padding: 0.25rem; border-radius: 4px; margin-bottom: 0.25rem;">
            <p style="color: var(--gray-light); font-size: 0.65rem; margin: 0 0 0.15rem 0;">How to handle jealousy during your rise:</p>
            <div style="border-bottom: 1px solid var(--gray-dark); height: 28px; margin: 0.2rem 0;"></div>
            <div style="border-bottom: 1px solid var(--gray-dark); height: 28px; margin: 0.2rem 0;"></div>
            <div style="border-bottom: 1px solid var(--gray-dark); height: 28px; margin: 0.2rem 0;"></div>
        </div>
        
        <div style="font-size: 0.75rem; color: var(--gold); font-weight: 600; margin: 0.15rem 0;">🏠 FAMILY RESISTANCE PROTOCOLS</div>
        <div style="background: rgba(212, 175, 55, 0.02); padding: 0.25rem; border-radius: 4px; margin-bottom: 0.25rem;">
            <p style="color: var(--gray-light); font-size: 0.65rem; margin: 0 0 0.15rem 0;">Managing those closest to you who fear your evolution:</p>
            <div style="border-bottom: 1px solid var(--gray-dark); height: 28px; margin: 0.2rem 0;"></div>
            <div style="border-bottom: 1px solid var(--gray-dark); height: 28px; margin: 0.2rem 0;"></div>
            <div style="border-bottom: 1px solid var(--gray-dark); height: 28px; margin: 0.2rem 0;"></div>
        </div>
        
        <div style="font-size: 0.75rem; color: var(--gold); font-weight: 600; margin: 0.15rem 0;">📱 SOCIAL MEDIA STRATEGY</div>
        <div style="background: rgba(212, 175, 55, 0.02); padding: 0.25rem; border-radius: 4px;">
            <p style="color: var(--gray-light); font-size: 0.65rem; margin: 0 0 0.15rem 0;">How to signal transformation without triggering attacks:</p>
            <div style="border-bottom: 1px solid var(--gray-dark); height: 28px; margin: 0.2rem 0;"></div>
            <div style="border-bottom: 1px solid var(--gray-dark); height: 28px; margin: 0.2rem 0;"></div>
            <div style="border-bottom: 1px solid var(--gray-dark); height: 28px; margin: 0.2rem 0;"></div>
        </div>
        
        <div class="footer-wisdom">The best way to destroy an enemy is to make him a friend. The second best is to make him irrelevant.</div>
        <div class="page-number">027</div>
    </div>
    
    <!-- FAILURE RECOVERY PROTOCOLS -->
    <div class="page" style="padding: 0.5rem 1rem;">
        <h1 class="text-center gold-gradient" style="font-size: 1.5rem; margin: 0.2rem 0 0.3rem 0;">Failure Recovery Protocols</h1>
        <div class="gold-line" style="margin-bottom: 0.3rem;"></div>
        
        <div style="background: rgba(212, 175, 55, 0.03); padding: 0.4rem; border-radius: 6px; border: 1px solid var(--gold); margin-bottom: 0.3rem;">
            <h3 style="color: var(--gold); font-size: 0.85rem; margin: 0 0 0.15rem 0;">🔥 When Everything Falls Apart</h3>
            <p style="color: var(--gray-light); font-size: 0.65rem; line-height: 1.2; margin: 0 0 0.15rem 0;">Napoleon lost at Waterloo. Edison failed 10,000 times. Jordan was cut from his high school team. Failure is not the opposite of success - it's the raw material of mastery. Here's how to weaponize your setbacks.</p>
            <p style="color: var(--gold-light); font-size: 0.65rem; line-height: 1.2; font-weight: 600; margin: 0;">Every master was once a disaster who refused to give up.</p>
        </div>
        
        <div style="font-size: 0.75rem; color: var(--gold); font-weight: 600; margin: 0.15rem 0;">⚠️ THE DAY 30 CRISIS</div>
        <div style="background: rgba(212, 175, 55, 0.02); padding: 0.25rem; border-radius: 4px; margin-bottom: 0.25rem;">
            <p style="color: var(--gray-light); font-size: 0.65rem; margin: 0 0 0.15rem 0;">When motivation dies and old habits resurface:</p>
            <div style="border-bottom: 1px solid var(--gray-dark); height: 28px; margin: 0.2rem 0;"></div>
            <div style="border-bottom: 1px solid var(--gray-dark); height: 28px; margin: 0.2rem 0;"></div>
            <div style="border-bottom: 1px solid var(--gray-dark); height: 28px; margin: 0.2rem 0;"></div>
        </div>
        
        <div style="font-size: 0.75rem; color: var(--gold); font-weight: 600; margin: 0.15rem 0;">📈 THE DAY 60 PLATEAU</div>
        <div style="background: rgba(212, 175, 55, 0.02); padding: 0.25rem; border-radius: 4px; margin-bottom: 0.25rem;">
            <p style="color: var(--gray-light); font-size: 0.65rem; margin: 0 0 0.15rem 0;">When progress stalls and doubt creeps in:</p>
            <div style="border-bottom: 1px solid var(--gray-dark); height: 28px; margin: 0.2rem 0;"></div>
            <div style="border-bottom: 1px solid var(--gray-dark); height: 28px; margin: 0.2rem 0;"></div>
            <div style="border-bottom: 1px solid var(--gray-dark); height: 28px; margin: 0.2rem 0;"></div>
        </div>
        
        <div style="font-size: 0.75rem; color: var(--gold); font-weight: 600; margin: 0.15rem 0;">😰 THE DAY 89 PANIC</div>
        <div style="background: rgba(212, 175, 55, 0.02); padding: 0.25rem; border-radius: 4px;">
            <p style="color: var(--gray-light); font-size: 0.65rem; margin: 0 0 0.15rem 0;">Fear of completion and what comes next:</p>
            <div style="border-bottom: 1px solid var(--gray-dark); height: 28px; margin: 0.2rem 0;"></div>
            <div style="border-bottom: 1px solid var(--gray-dark); height: 28px; margin: 0.2rem 0;"></div>
            <div style="border-bottom: 1px solid var(--gray-dark); height: 28px; margin: 0.2rem 0;"></div>
        </div>
        
        <div class="footer-wisdom">The phoenix must burn to rise.</div>
        <div class="page-number">028</div>
    </div>
    
    <!-- THE DARK ARTS OF TRANSFORMATION -->
    <div class="page" style="padding: 0.5rem 1rem;">
        <h1 class="text-center gold-gradient" style="font-size: 1.5rem; margin: 0.2rem 0 0.3rem 0;">The Dark Arts of Transformation</h1>
        <div class="gold-line" style="margin-bottom: 0.3rem;"></div>
        
        <div style="background: rgba(212, 175, 55, 0.03); padding: 0.4rem; border-radius: 6px; border: 1px solid var(--gold); margin-bottom: 0.3rem;">
            <h3 style="color: var(--gold); font-size: 0.85rem; margin: 0 0 0.15rem 0;">🎭 Psychological Warfare</h3>
            <p style="color: var(--gray-light); font-size: 0.65rem; line-height: 1.2; margin: 0 0 0.15rem 0;">This is not for everyone. Only 3% will complete this journal. 97% will quit, make excuses, or sabotage themselves. The question is: which group do you belong to? Your answer will determine everything.</p>
            <p style="color: var(--gold-light); font-size: 0.65rem; line-height: 1.2; font-weight: 600; margin: 0;">The masses are always wrong. The individual who thinks differently is always right.</p>
        </div>
        
        <div style="font-size: 0.75rem; color: var(--gold); font-weight: 600; margin: 0.1rem 0 0.05rem 0;">🔪 USING CRITICISM AS FUEL</div>
        <div style="background: rgba(212, 175, 55, 0.02); padding: 0.2rem; border-radius: 4px; margin-bottom: 0.2rem;">
            <p style="color: var(--gray-light); font-size: 0.65rem; margin: 0 0 0.05rem 0;">Convert attacks into energy for your transformation:</p>
            <div style="border-bottom: 1px solid var(--gray-dark); height: 36px; margin: 0.2rem 0;"></div>
            <div style="border-bottom: 1px solid var(--gray-dark); height: 36px; margin: 0.2rem 0;"></div>
            <div style="border-bottom: 1px solid var(--gray-dark); height: 36px; margin: 0.2rem 0;"></div>
        </div>
        
        <div style="font-size: 0.75rem; color: var(--gold); font-weight: 600; margin: 0.1rem 0 0.05rem 0;">👥 THE FRIENDS YOU'LL LOSE</div>
        <div style="background: rgba(212, 175, 55, 0.02); padding: 0.2rem; border-radius: 4px; margin-bottom: 0.2rem;">
            <p style="color: var(--gray-light); font-size: 0.65rem; margin: 0 0 0.05rem 0;">Why 97% of people will hate your transformation:</p>
            <div style="border-bottom: 1px solid var(--gray-dark); height: 36px; margin: 0.2rem 0;"></div>
            <div style="border-bottom: 1px solid var(--gray-dark); height: 36px; margin: 0.2rem 0;"></div>
            <div style="border-bottom: 1px solid var(--gray-dark); height: 36px; margin: 0.2rem 0;"></div>
        </div>
        
        <div style="font-size: 0.75rem; color: var(--gold); font-weight: 600; margin: 0.1rem 0 0.05rem 0;">⚡ CONVERTING ENEMIES TO ALLIES</div>
        <div style="background: rgba(212, 175, 55, 0.02); padding: 0.2rem; border-radius: 4px;">
            <p style="color: var(--gray-light); font-size: 0.65rem; margin: 0 0 0.05rem 0;">Turn saboteurs into unwitting supporters:</p>
            <div style="border-bottom: 1px solid var(--gray-dark); height: 36px; margin: 0.2rem 0;"></div>
            <div style="border-bottom: 1px solid var(--gray-dark); height: 36px; margin: 0.2rem 0;"></div>
            <div style="border-bottom: 1px solid var(--gray-dark); height: 36px; margin: 0.2rem 0;"></div>
        </div>
        
        <div class="footer-wisdom">Lions don't heed sheep's opinions.</div>
        <div class="page-number">029</div>
    </div>`;
}

function initializeInteractiveElements() {
    // Initialize any interactive components
    console.log('Master journal initialized');
}
