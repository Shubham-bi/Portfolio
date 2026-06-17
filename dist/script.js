document.addEventListener('DOMContentLoaded', () => {
    // -------------------------------------------------------------
    // INITIALIZE LUCIDE ICONS
    // -------------------------------------------------------------
    const initIcons = () => {
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
    };
    initIcons();

    // -------------------------------------------------------------
    // DATABASE-FREE VISUAL EDITOR (ADMIN PORTAL)
    // -------------------------------------------------------------
    const adminLockBtn = document.getElementById('btn-admin-login');
    const loginModal = document.getElementById('admin-login-modal');
    const closeLoginModalBtn = document.getElementById('btn-close-login-modal');
    const loginForm = document.getElementById('admin-login-form');
    const loginErrorMsg = document.getElementById('admin-login-error');
    
    const editorDashboard = document.getElementById('editor-dashboard');
    const saveBtn = document.getElementById('editor-save-btn');
    const exportBtn = document.getElementById('editor-export-btn');
    const resetBtn = document.getElementById('editor-reset-btn');
    const logoutBtn = document.getElementById('editor-logout-btn');

    // Load persisted edits from LocalStorage
    const loadEditedContent = () => {
        const savedData = localStorage.getItem('portfolio-edited-data');
        if (savedData) {
            try {
                const data = JSON.parse(savedData);
                Object.keys(data).forEach(key => {
                    const el = document.querySelector(`[data-edit-key="${key}"]`);
                    if (el) {
                        el.innerText = data[key];
                    }
                });
            } catch (e) {
                console.error("Failed to parse loaded portfolio-edited-data", e);
            }
        }
    };
    loadEditedContent(); // Execute immediately on load

    // Enter visual editing mode
    const enterEditorMode = () => {
        document.body.classList.add('editing-active');
        const editableElements = document.querySelectorAll('[data-edit-key]');
        editableElements.forEach(el => {
            el.setAttribute('contenteditable', 'true');
        });
        sessionStorage.setItem('admin-logged-in', 'true');

        // Smoothly scroll to the top of the page (hero section) to show the edit outlines
        setTimeout(() => {
            const heroSection = document.getElementById('hero');
            if (heroSection) {
                heroSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            } else {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        }, 300);
    };


    // Exit visual editing mode
    const exitEditorMode = () => {
        document.body.classList.remove('editing-active');
        const editableElements = document.querySelectorAll('[data-edit-key]');
        editableElements.forEach(el => {
            el.removeAttribute('contenteditable');
        });
        sessionStorage.removeItem('admin-logged-in');
    };

    // Check session persistence
    if (sessionStorage.getItem('admin-logged-in') === 'true') {
        enterEditorMode();
    }

    // Modal Triggers
    if (adminLockBtn) {
        adminLockBtn.addEventListener('click', () => {
            if (document.body.classList.contains('editing-active')) {
                // If already logged in, clicking the lock exits editor
                exitEditorMode();
            } else {
                loginModal.classList.add('modal-active');
                loginErrorMsg.classList.remove('error-active');
                loginForm.reset();
            }
        });
    }

    if (closeLoginModalBtn) {
        closeLoginModalBtn.addEventListener('click', () => {
            loginModal.classList.remove('modal-active');
        });
    }

    // Modal Close on Outer Overlay Click
    if (loginModal) {
        loginModal.addEventListener('click', (e) => {
            if (e.target === loginModal) {
                loginModal.classList.remove('modal-active');
            }
        });
    }

    // Admin Credentials Authentication
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const usernameInput = document.getElementById('admin-username').value.trim();
            const passwordInput = document.getElementById('admin-password').value.trim();

            // Hardcoded Verification (No DB)
            if (usernameInput === 'admin' && passwordInput === 'shubham-qa-editor') {
                loginModal.classList.remove('modal-active');
                enterEditorMode();
            } else {
                loginErrorMsg.classList.add('error-active');
                loginForm.classList.add('shake-animation');
                setTimeout(() => {
                    loginForm.classList.remove('shake-animation');
                }, 400);
            }
        });
    }

    // Action: Save Changes to LocalStorage
    if (saveBtn) {
        saveBtn.addEventListener('click', () => {
            const dataObj = {};
            const editableElements = document.querySelectorAll('[data-edit-key]');
            
            editableElements.forEach(el => {
                const key = el.getAttribute('data-edit-key');
                dataObj[key] = el.innerText.trim();
            });

            localStorage.setItem('portfolio-edited-data', JSON.stringify(dataObj));

            // Save Visual Feedback
            const origText = saveBtn.innerHTML;
            saveBtn.innerHTML = `<i data-lucide="check"></i> <span>Saved!</span>`;
            initIcons();
            saveBtn.disabled = true;

            setTimeout(() => {
                saveBtn.innerHTML = origText;
                initIcons();
                saveBtn.disabled = false;
            }, 2000);
        });
    }

    // Action: Export config.json file
    if (exportBtn) {
        exportBtn.addEventListener('click', () => {
            const dataObj = {};
            const editableElements = document.querySelectorAll('[data-edit-key]');
            
            editableElements.forEach(el => {
                const key = el.getAttribute('data-edit-key');
                dataObj[key] = el.innerText.trim();
            });

            const jsonString = JSON.stringify(dataObj, null, 2);
            const blob = new Blob([jsonString], { type: 'application/json' });
            const url = URL.createObjectURL(blob);
            
            const link = document.createElement('a');
            link.href = url;
            link.download = 'portfolio-config.json';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(url);
        });
    }

    // Action: Reset defaults (Clear LocalStorage)
    if (resetBtn) {
        resetBtn.addEventListener('click', () => {
            if (confirm("Are you sure you want to revert all changes to the site's default template? This cannot be undone.")) {
                localStorage.removeItem('portfolio-edited-data');
                window.location.reload();
            }
        });
    }

    // Action: Logout / Exit Editor
    if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
            exitEditorMode();
        });
    }


    // -------------------------------------------------------------
    // CUSTOM CURSOR
    // -------------------------------------------------------------
    const cursorDot = document.getElementById('custom-cursor-dot');
    const cursorRing = document.getElementById('custom-cursor-ring');
    
    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    
    const hasHover = window.matchMedia('(hover: hover)').matches;

    if (hasHover && cursorDot && cursorRing) {
        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            
            cursorDot.style.left = `${mouseX}px`;
            cursorDot.style.top = `${mouseY}px`;
        });

        const animateRing = () => {
            const lerpFactor = 0.15;
            
            ringX += (mouseX - ringX) * lerpFactor;
            ringY += (mouseY - ringY) * lerpFactor;
            
            cursorRing.style.left = `${ringX}px`;
            cursorRing.style.top = `${ringY}px`;
            
            requestAnimationFrame(animateRing);
        };
        animateRing();

        const interactiveSelectors = 'a, button, input, textarea, .skill-tab-btn, .filter-btn, .lab-tab-btn, .bug-card, .project-card, [data-edit-key]';
        const addHoverClass = () => document.body.classList.add('cursor-hover');
        const removeHoverClass = () => document.body.classList.remove('cursor-hover');

        const updateInteractiveListeners = () => {
            const elements = document.querySelectorAll(interactiveSelectors);
            elements.forEach(el => {
                el.removeEventListener('mouseenter', addHoverClass);
                el.removeEventListener('mouseleave', removeHoverClass);
                el.addEventListener('mouseenter', addHoverClass);
                el.addEventListener('mouseleave', removeHoverClass);
            });
        };
        
        updateInteractiveListeners();
        document.addEventListener('click', () => setTimeout(updateInteractiveListeners, 200));

        document.addEventListener('mouseleave', () => {
            cursorDot.style.opacity = '0';
            cursorRing.style.opacity = '0';
        });
        
        document.addEventListener('mouseenter', () => {
            cursorDot.style.opacity = '1';
            cursorRing.style.opacity = '1';
        });
    }

    // -------------------------------------------------------------
    // TYPING ANIMATION (HERO)
    // -------------------------------------------------------------
    const typedTextEl = document.getElementById('typed-text');
    if (typedTextEl) {
        const phrases = [
            'Playwright Automation',
            'RAG & Agentic AI Testing',
            'API & Database Verification',
            'Quality Assurance'
        ];
        
        let phraseIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let typingSpeed = 100;
        
        const typeEffect = () => {
            const currentPhrase = phrases[phraseIndex];
            
            if (isDeleting) {
                typingSpeed = 50;
                typedTextEl.textContent = currentPhrase.substring(0, charIndex - 1);
                charIndex--;
            } else {
                typingSpeed = 100;
                typedTextEl.textContent = currentPhrase.substring(0, charIndex + 1);
                charIndex++;
            }
            
            if (!isDeleting && charIndex === currentPhrase.length) {
                typingSpeed = 2000;
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                phraseIndex = (phraseIndex + 1) % phrases.length;
                typingSpeed = 500;
            }
            
            setTimeout(typeEffect, typingSpeed);
        };
        
        setTimeout(typeEffect, 1000);
    }

    // -------------------------------------------------------------
    // SCROLL-ACTIVE HEADER & SCROLL-SPY NAVIGATION
    // -------------------------------------------------------------
    const header = document.getElementById('main-header');
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    const handleScroll = () => {
        const scrollPos = window.scrollY;

        if (scrollPos > 20) {
            header.classList.add('scroll-active');
        } else {
            header.classList.remove('scroll-active');
        }

        let currentSectionId = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 150;
            const sectionHeight = section.offsetHeight;
            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                currentSectionId = section.getAttribute('id');
            }
        });

        if (currentSectionId) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${currentSectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    // -------------------------------------------------------------
    // MOBILE NAVIGATION
    // -------------------------------------------------------------
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            document.body.classList.toggle('mobile-nav-active');
        });
    }

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            document.body.classList.remove('mobile-nav-active');
        });
    });

    // -------------------------------------------------------------
    // REVEAL ON SCROLL ANIMATIONS (INTERSECTION OBSERVER)
    // -------------------------------------------------------------
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));

    // -------------------------------------------------------------
    // STATS COUNT-UP ANIMATION
    // -------------------------------------------------------------
    const statBoxes = document.querySelectorAll('.stat-box');
    let animatedStats = false;

    const animateStats = () => {
        statBoxes.forEach(box => {
            const numEl = box.querySelector('.stat-number');
            const targetVal = parseInt(numEl.id === 'stat-years' ? '4' : (numEl.id === 'stat-projects' ? '50' : '100'));
            let currentVal = 0;
            const duration = 1500;
            const steps = 40;
            const increment = targetVal / steps;
            const stepTime = duration / steps;
            
            const timer = setInterval(() => {
                currentVal += increment;
                if (currentVal >= targetVal) {
                    currentVal = targetVal;
                    clearInterval(timer);
                }
                
                if (numEl.id === 'stat-coverage') {
                    numEl.textContent = Math.floor(currentVal) + '%';
                } else {
                    numEl.textContent = Math.floor(currentVal) + '+';
                }
            }, stepTime);
        });
    };

    const aboutSection = document.getElementById('about');
    if (aboutSection) {
        const statsObserver = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && !animatedStats) {
                animatedStats = true;
                animateStats();
            }
        }, { threshold: 0.2 });
        statsObserver.observe(aboutSection);
    }

    // -------------------------------------------------------------
    // SKILLS SECTION CATEGORY TABS
    // -------------------------------------------------------------
    const skillTabs = document.querySelectorAll('.skill-tab-btn');
    const skillPanes = document.querySelectorAll('.skills-tab-pane');

    skillTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            skillTabs.forEach(t => t.classList.remove('active'));
            skillPanes.forEach(p => p.classList.remove('active'));

            tab.classList.add('active');
            
            const selectedTabId = tab.getAttribute('data-tab');
            const targetPane = document.getElementById(`pane-${selectedTabId}`);
            
            if (targetPane) {
                targetPane.classList.add('active');
            }
        });
    });

    // -------------------------------------------------------------
    // PROJECT FILTERING
    // -------------------------------------------------------------
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            projectCards.forEach(card => {
                const categories = card.getAttribute('data-category').split(' ');
                
                card.style.transform = 'scale(0.95)';
                card.style.opacity = '0';
                
                setTimeout(() => {
                    if (filterValue === 'all' || categories.includes(filterValue)) {
                        card.style.display = 'block';
                        card.offsetHeight; 
                        card.style.transform = 'scale(1)';
                        card.style.opacity = '1';
                    } else {
                        card.style.display = 'none';
                    }
                }, 300);
            });
        });
    });

    // -------------------------------------------------------------
    // AI TESTING LAB WIDGET TABS
    // -------------------------------------------------------------
    const labTabs = document.querySelectorAll('.lab-tab-btn');
    const labPanes = document.querySelectorAll('.lab-pane');

    labTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            labTabs.forEach(t => t.classList.remove('active'));
            labPanes.forEach(p => p.classList.remove('active'));

            tab.classList.add('active');
            
            const selectedPaneId = tab.getAttribute('data-lab-tab');
            const targetPane = document.getElementById(`lab-pane-${selectedPaneId}`);
            
            if (targetPane) {
                targetPane.classList.add('active');
            }
        });
    });

    // -------------------------------------------------------------
    // EXPANDABLE BUG CARDS ACCORDION
    // -------------------------------------------------------------
    const bugCards = document.querySelectorAll('.bug-card');

    bugCards.forEach(card => {
        card.addEventListener('click', (e) => {
            // Do not expand/collapse if visual editor is active
            if (document.body.classList.contains('editing-active')) {
                return;
            }

            bugCards.forEach(c => {
                if (c !== card) {
                    c.classList.remove('expanded');
                }
            });

            card.classList.toggle('expanded');
        });
    });

    // -------------------------------------------------------------
    // THEME TOGGLE (DARK / LIGHT MODE)
    // -------------------------------------------------------------
    const themeToggleBtn = document.getElementById('theme-toggle');
    const savedTheme = localStorage.getItem('portfolio-theme') || 'dark';

    if (savedTheme === 'light') {
        document.body.classList.remove('dark-theme');
        document.body.classList.add('light-theme');
    } else {
        document.body.classList.remove('light-theme');
        document.body.classList.add('dark-theme');
    }

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            if (document.body.classList.contains('dark-theme')) {
                document.body.classList.remove('dark-theme');
                document.body.classList.add('light-theme');
                localStorage.setItem('portfolio-theme', 'light');
            } else {
                document.body.classList.remove('light-theme');
                document.body.classList.add('dark-theme');
                localStorage.setItem('portfolio-theme', 'dark');
            }
        });
    }

    // -------------------------------------------------------------
    // CONTACT FORM VALIDATION & FICTITIOUS STATE HANDLING
    // -------------------------------------------------------------
    const contactForm = document.getElementById('portfolio-contact-form');
    const successScreen = document.getElementById('contact-success-screen');
    const resetFormBtn = document.getElementById('success-reset-btn');
    const submitBtn = document.getElementById('contact-submit-btn');

    const inputs = contactForm ? contactForm.querySelectorAll('.form-input') : [];

    inputs.forEach(input => {
        input.addEventListener('input', () => {
            const formGroup = input.parentElement;
            formGroup.classList.remove('has-error');
        });
    });

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            let hasErrors = false;
            
            inputs.forEach(input => {
                const formGroup = input.parentElement;
                const value = input.value.trim();
                
                if (input.required && !value) {
                    formGroup.classList.add('has-error');
                    hasErrors = true;
                } else if (input.type === 'email') {
                    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    if (!emailRegex.test(value)) {
                        formGroup.classList.add('has-error');
                        hasErrors = true;
                    }
                } else {
                    formGroup.classList.remove('has-error');
                }
            });

            if (hasErrors) {
                contactForm.classList.add('shake-animation');
                setTimeout(() => {
                    contactForm.classList.remove('shake-animation');
                }, 400);
                return;
            }

            const origBtnText = submitBtn.innerHTML;
            submitBtn.disabled = true;
            submitBtn.innerHTML = `<span>Sending...</span><i data-lucide="loader-2" class="spin-icon"></i>`;
            initIcons();

            setTimeout(() => {
                submitBtn.disabled = false;
                submitBtn.innerHTML = origBtnText;
                initIcons();
                
                successScreen.classList.add('success-active');
                contactForm.style.opacity = '0';
                contactForm.style.transform = 'scale(0.95)';
                contactForm.style.pointerEvents = 'none';
                
                contactForm.reset();
            }, 1500);
        });
    }

    if (resetFormBtn) {
        resetFormBtn.addEventListener('click', () => {
            successScreen.classList.remove('success-active');
            contactForm.style.opacity = '1';
            contactForm.style.transform = 'scale(1)';
            contactForm.style.pointerEvents = 'auto';
        });
    }
});
