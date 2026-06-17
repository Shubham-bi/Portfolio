document.addEventListener('DOMContentLoaded', () => {
    // -------------------------------------------------------------
    // DEFAULT CONFIGURATION DATA (FALLBACK)
    // -------------------------------------------------------------
    const DEFAULT_PORTFOLIO_CONFIG = {
        hero: {
            badge: "ISTQB CTFL Certified QA Engineer",
            titlePrefix: "Building Resilient",
            phrases: [
                "Playwright Automation",
                "RAG & Agentic AI Testing",
                "API & Database Verification",
                "Quality Assurance"
            ],
            description: "I specialize in Playwright (TypeScript) and Selenium WebDriver (Java) POM automation frameworks, API validation via Postman, and AI-assisted test development.",
            github: "https://github.com/Shubham-bi",
            linkedin: "https://linkedin.com/in/shubham-kharche",
            email: "shubhamkharche38@gmail.com"
        },
        about: {
            title: "QA Automation Engineer with 4 Years of Web Enterprise Testing",
            bioHighlight: "Quality is not only about finding defects. It is about validating business requirements, protecting user trust, ensuring data integrity, and verifying that both traditional software and AI systems behave reliably.",
            bioText: "QA Automation Engineer with 4 years of experience in manual and automation testing of web-based enterprise applications.",
            summaryPoints: [
                "<strong>Automation Frameworks:</strong> Hands-on expertise in Playwright (TypeScript) and Selenium WebDriver (Java) using POM architecture.",
                "<strong>Testing Domain:</strong> Functional, Regression, API, Database, SIT, UAT, and Production Validation.",
                "<strong>CI/CD & Monitoring:</strong> Integrated automated test runs with GitHub Actions and Grafana metrics dashboards.",
                "<strong>AI & GenAI Tools:</strong> Highly skilled in AI-assisted testing using Claude Code, GitHub Copilot, and LLMs.",
                "<strong>Certifications:</strong> ISTQB Certified Tester Foundation Level (CTFL 4.0)."
            ],
            years: 4,
            projects: 50,
            coverage: 100,
            learningList: [
                "Advanced Playwright Orchestration",
                "AI Observability & Testing Agents",
                "Model Context Protocol (MCP) Servers",
                "Grafana Failure Analysis Dashboards",
                "Multi-Agent Orchestration with LangGraph"
            ]
        },
        skills: {
            automation: [
                { title: "Playwright (TS)", desc: "Automating fast UI regressions, custom fixtures, page fixtures, hooks, and browser context management.", icon: "play" },
                { title: "Selenium WebDriver", desc: "Building Java Page Object Models, TestNG execution XML setups, Maven structures, and dynamic waits.", icon: "cpu" },
                { title: "Frameworks & POM", desc: "Page Object Model (POM), Hybrid frameworks, and Data-Driven automation architectures.", icon: "layers" },
                { title: "Languages", desc: "Writing clean test logic using TypeScript, JavaScript, and Java programming languages.", icon: "code-2" },
                { title: "Git & CI/CD", desc: "Managing version control in GitHub and automating workflows in GitHub Actions pipelines.", icon: "git-merge" }
            ],
            "ai-gen": [
                { title: "Claude Code & Copilot", desc: "Accelerating test script generation, writing test data setups, and optimizing page locators.", icon: "bot" },
                { title: "LLMs & LangChain", desc: "Validating prompt completions, testing RAG/agent workflows, and diagnosing output compliance.", icon: "brain-circuit" },
                { title: "MCP Servers", desc: "Creating and testing tools for Model Context Protocol systems and testing custom server endpoints.", icon: "server" },
                { title: "AI-Assisted Testing", desc: "Designing verification rigs for multi-agent workflows, prompt chains, and automated agents.", icon: "sparkles" }
            ],
            "api-db": [
                { title: "Postman & Swagger", desc: "Asserting REST APIs endpoints, running test collections, verifying response structures and variables.", icon: "radio" },
                { title: "APIs & JSON Validation", desc: "Verifying JSON schemas, response status codes, header details, and checking payload formats.", icon: "braces" },
                { title: "SQL Database Audits", desc: "Executing backend verification on MySQL, PostgreSQL, and MS SQL Server database engines.", icon: "database" }
            ],
            manual: [
                { title: "Functional & Regression", desc: "Designing detailed test designs, smoke scenarios, sanity audits, and executing E2E checks.", icon: "search" },
                { title: "SIT & UAT Validation", desc: "Executing System Integration, User Acceptance, and final Production readiness validation checks.", icon: "check-square" },
                { title: "Cross-Browser Parallel", desc: "Orchestrating test suites across Chrome, Firefox, and Safari concurrently to improve speed.", icon: "activity" },
                { title: "Mobile Testing", desc: "Validating responsiveness and mobile application user flows on Android and iOS devices.", icon: "smartphone" }
            ],
            "mgmt-platforms": [
                { title: "Grafana Dashboards", desc: "Building and monitoring dashboards for test run metrics, execution trends, and failure analysis.", icon: "bar-chart-2" },
                { title: "Agile & Management", desc: "Collaborating in Agile Scrum environments using JIRA and MantisBT for defect tracking and sprint validation.", icon: "kanban" },
                { title: "Platforms & OS", desc: "Testing and deploying automation scripts across Windows and Ubuntu environments.", icon: "monitor" }
            ]
        },
        timeline: [
            {
                date: "Jul 2022 - Present",
                role: "Software Tester / QA Automation Engineer",
                company: "Shaurya Technosoft Pvt. Ltd., Pune",
                bullets: [
                    "Working on Playwright automation using TypeScript with Page Object Model (POM) architecture for enterprise web applications.",
                    "Automated regression, functional, end-to-end, and integration test scenarios across multiple business modules.",
                    "Developed reusable fixtures, hooks, utility functions, and browser context management to improve framework maintainability.",
                    "Optimized regression execution time through parallel and cross-browser test execution.",
                    "Performed API testing using Postman and validated backend data using MySQL, PostgreSQL, and MS SQL Server.",
                    "Integrated automation suites with GitHub Actions for scheduled and release-based execution.",
                    "Built Grafana dashboards to monitor automation runs, execution trends, and failure analysis.",
                    "Investigated failed test executions using logs, screenshots, and execution reports for faster root-cause analysis.",
                    "Collaborated closely with developers, QA teams, and business analysts throughout sprint cycles and release activities."
                ]
            },
            {
                date: "2019",
                role: "Bachelor of Engineering (Mechanical Engineering)",
                company: "Savitribai Phule Pune University, Pune, Maharashtra",
                bullets: [
                    "Completed graduation in Mechanical Engineering. Developed strong analytical skills, structured troubleshooting capabilities, and logical process design thinking."
                ]
            }
        ],
        projects: [
            {
                title: "Project 1: ERP System & E-Commerce Platform",
                category: "playwright",
                domain: "Dairy Management & ERP Solutions",
                desc: "Platform covering inventory, order processing, customer billing, logistics, and reports. Automated critical workflows using Playwright, TypeScript, and POM architecture.",
                bullets: [
                    "Reduced regression run-time via parallel test execution.",
                    "Improved framework stability using optimized locators.",
                    "Integrated pipelines via GitHub Actions and Grafana reports."
                ],
                tech: ["Playwright", "TypeScript", "POM Architecture", "GitHub Copilot", "Grafana", "Postman"],
                image: "assets/project1.png"
            },
            {
                title: "Project 2: Fleet Management System",
                category: "selenium",
                domain: "Logistics & Transportation",
                desc: "Fleet management tracking application used for vehicle monitoring, trip schedules, maintenance, and operational logs. Built using Selenium WebDriver and Java.",
                bullets: [
                    "Expanded test coverage using modular, reusable Selenium POM files.",
                    "Reduced repetitive manual testing of logistics flows.",
                    "Implemented cross-browser tests to verify web layout consistency."
                ],
                tech: ["Selenium", "Java", "Postman", "TestNG", "CI/CD", "Cross-Browser"],
                image: "assets/project2.png"
            }
        ],
        certifications: [
            { title: "ISTQB CTFL 4.0", org: "Certified Tester Foundation Level", icon: "award" },
            { title: "Hackathon 2025 Winner", org: "Team Leader & 1st Prize Winner", icon: "trophy" },
            { title: "Building Applications with GitHub Copilot Agent Mode", org: "Microsoft Learn Certification", icon: "brain-circuit" },
            { title: "Introduction to DevOps", org: "Microsoft Learn Certification", icon: "git-branch" },
            { title: "Introduction to Generative AI and Agents", org: "Microsoft Learn Certification", icon: "sparkles" }
        ],
        contact: {
            email: "shubhamkharche38@gmail.com",
            phone: "+91 75591 62322",
            location: "Pune, Maharashtra, India"
        }
    };

    // Active Config State
    let activeConfig = JSON.parse(localStorage.getItem('portfolio-config-data')) || JSON.parse(JSON.stringify(DEFAULT_PORTFOLIO_CONFIG));

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
    // DYNAMIC RENDERING ENGINES
    // -------------------------------------------------------------
    const renderHero = (config) => {
        const badge = document.querySelector('[data-edit-key="hero-badge"]');
        const prefix = document.querySelector('[data-edit-key="hero-title-prefix"]');
        const desc = document.querySelector('[data-edit-key="hero-desc"]');
        const githubLink = document.getElementById('hero-github');
        const linkedinLink = document.getElementById('hero-linkedin');
        const emailLink = document.getElementById('hero-email');

        if (badge) badge.innerText = config.hero.badge;
        if (prefix) prefix.innerText = config.hero.titlePrefix;
        if (desc) desc.innerText = config.hero.description;
        
        if (githubLink) githubLink.href = config.hero.github;
        if (linkedinLink) linkedinLink.href = config.hero.linkedin;
        if (emailLink) emailLink.href = `mailto:${config.hero.email}`;
    };

    const renderAbout = (config) => {
        const title = document.querySelector('[data-edit-key="about-title"]');
        const highlight = document.querySelector('[data-edit-key="about-bio-highlight"]');
        const bio1 = document.querySelector('[data-edit-key="about-bio-1"]');
        const summaryList = document.getElementById('about-summary-list-container');
        const learningList = document.getElementById('learning-list-container');

        if (title) title.innerText = config.about.title;
        if (highlight) highlight.innerText = config.about.bioHighlight;
        if (bio1) bio1.innerText = config.about.bioText;

        if (summaryList) {
            summaryList.innerHTML = config.about.summaryPoints.map(point => `
                <li><i data-lucide="check-circle-2" class="summary-icon"></i> <span>${point}</span></li>
            `).join('');
        }

        if (learningList) {
            learningList.innerHTML = config.about.learningList.map(item => `
                <li><i data-lucide="chevron-right"></i> ${item}</li>
            `).join('');
        }

        // Stats
        const yearsEl = document.getElementById('stat-years');
        const projectsEl = document.getElementById('stat-projects');
        const coverageEl = document.getElementById('stat-coverage');

        if (yearsEl) yearsEl.innerText = `${config.about.years}+`;
        if (projectsEl) projectsEl.innerText = `${config.about.projects}+`;
        if (coverageEl) coverageEl.innerText = `${config.about.coverage}%`;
    };

    const renderSkills = (config) => {
        const categories = ['automation', 'ai-gen', 'api-db', 'manual', 'mgmt-platforms'];
        categories.forEach(cat => {
            const pane = document.getElementById(`pane-${cat}`);
            if (pane) {
                const grid = pane.querySelector('.skills-grid-layout');
                if (grid) {
                    const items = config.skills[cat] || [];
                    grid.innerHTML = items.map(item => `
                        <div class="skill-item">
                            <div class="skill-item-header">
                                <i data-lucide="${item.icon || 'play'}" class="${cat === 'automation' ? 'neon-emerald' : 'neon-cyan'}"></i>
                                <span class="font-outfit">${item.title}</span>
                            </div>
                            <p class="font-jakarta">${item.desc}</p>
                        </div>
                    `).join('');
                }
            }
        });
    };

    const renderTimeline = (config) => {
        const container = document.getElementById('timeline-container');
        if (container) {
            container.innerHTML = config.timeline.map((item) => `
                <div class="timeline-item reveal">
                    <div class="timeline-dot"></div>
                    <div class="timeline-date font-outfit">${item.date}</div>
                    <div class="timeline-content glass-card">
                        <span class="timeline-role font-outfit">${item.role}</span>
                        <span class="timeline-company font-jakarta">${item.company}</span>
                        ${item.bullets && item.bullets.length > 0 ? `
                            <ul class="timeline-bullets font-jakarta text-secondary">
                                ${item.bullets.map(bullet => `
                                    <li><i data-lucide="check" class="bullet-icon"></i> ${bullet}</li>
                                `).join('')}
                            </ul>
                        ` : `
                            <p class="timeline-desc font-jakarta">${item.desc || ''}</p>
                        `}
                    </div>
                </div>
            `).join('');
        }
    };

    const renderProjects = (config) => {
        const grid = document.getElementById('portfolio-grid');
        if (grid) {
            grid.innerHTML = config.projects.map(project => `
                <article class="project-card reveal" data-category="${project.category}">
                    <div class="project-image-container">
                        <img src="${project.image || 'assets/project1.png'}" alt="${project.title}" class="project-img">
                        <div class="project-overlay">
                            <div class="project-links">
                                <span class="project-badge font-outfit">${project.tech.slice(0, 3).join(' / ')}</span>
                            </div>
                        </div>
                    </div>
                    <div class="project-details">
                        <span class="project-category font-outfit text-gradient">${project.category === 'playwright' ? 'Playwright &amp; AI-Assisted' : 'Selenium Automation'}</span>
                        <h3 class="project-title font-outfit">${project.title}</h3>
                        <p class="project-description font-jakarta">
                            <strong>Domain:</strong> ${project.domain}. <br>
                            ${project.desc}
                        </p>
                        ${project.bullets && project.bullets.length > 0 ? `
                            <ul class="project-bullets font-jakarta text-secondary">
                                ${project.bullets.map(bullet => `
                                    <li><i data-lucide="check"></i> ${bullet}</li>
                                `).join('')}
                            </ul>
                        ` : ''}
                        <div class="project-tech-tags font-jakarta">
                            ${project.tech.map(t => `<span>${t}</span>`).join('')}
                        </div>
                    </div>
                </article>
            `).join('');
        }
    };

    const renderCertifications = (config) => {
        const container = document.getElementById('certifications-container');
        if (container) {
            container.innerHTML = config.certifications.map((cert, idx) => `
                <div class="cert-card glass-card reveal ${idx % 3 === 1 ? 'delay-1' : (idx % 3 === 2 ? 'delay-2' : '')}">
                    <div class="cert-icon-wrapper">
                        <i data-lucide="${cert.icon || 'award'}" class="${idx % 2 === 0 ? 'neon-emerald' : 'neon-cyan'}"></i>
                    </div>
                    <h4 class="cert-title font-outfit">${cert.title}</h4>
                    <p class="cert-org font-jakarta text-secondary">${cert.org}</p>
                </div>
            `).join('');
        }
    };

    const renderContact = (config) => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            const emailLink = contactSection.querySelector('a[href^="mailto:"]');
            const phoneLink = contactSection.querySelector('a[href^="tel:"]');
            const locationSpan = contactSection.querySelector('.info-item:nth-child(3) .info-text span:nth-child(2)');
            const contactGithub = document.getElementById('contact-github');
            const contactLinkedin = document.getElementById('contact-linkedin');

            if (emailLink && config.contact.email) {
                emailLink.href = `mailto:${config.contact.email}`;
                emailLink.innerText = config.contact.email;
            }
            if (phoneLink && config.contact.phone) {
                phoneLink.href = `tel:${config.contact.phone.replace(/\s+/g, '')}`;
                phoneLink.innerText = config.contact.phone;
            }
            if (locationSpan && config.contact.location) {
                locationSpan.innerText = config.contact.location;
            }
            if (contactGithub && config.hero.github) {
                contactGithub.href = config.hero.github;
            }
            if (contactLinkedin && config.hero.linkedin) {
                contactLinkedin.href = config.hero.linkedin;
            }
        }
    };

    const renderPortfolio = (config) => {
        renderHero(config);
        renderAbout(config);
        renderSkills(config);
        renderTimeline(config);
        renderProjects(config);
        renderCertifications(config);
        renderContact(config);
        
        // Hydrate Lucide Icons
        initIcons();

        // Refresh interactive cursors
        if (typeof updateInteractiveListeners === 'function') {
            updateInteractiveListeners();
        }
    };

    // Hydrate Site immediately
    renderPortfolio(activeConfig);

    // -------------------------------------------------------------
    // ADMIN DASHBOARD PORTAL
    // -------------------------------------------------------------
    const adminLockBtn = document.getElementById('btn-admin-login');
    const loginModal = document.getElementById('admin-login-modal');
    const closeLoginModalBtn = document.getElementById('btn-close-login-modal');
    const loginForm = document.getElementById('admin-login-form');
    const loginErrorMsg = document.getElementById('admin-login-error');
    
    const adminDashboard = document.getElementById('admin-dashboard');
    const closeDashboardBtn = document.getElementById('btn-close-dashboard');
    const cancelDashboardBtn = document.getElementById('btn-cancel-dashboard');
    const applyConfigBtn = document.getElementById('btn-apply-config');
    const exportConfigBtn = document.getElementById('btn-export-config');
    const importConfigBtn = document.getElementById('btn-import-config');
    const resetConfigBtn = document.getElementById('btn-reset-config');
    const inputImportFile = document.getElementById('input-import-file');

    // Sidebar navigation switching
    const sidebarTabBtns = document.querySelectorAll('.sidebar-tab-btn');
    const adminFormPanels = document.querySelectorAll('.admin-form-panel');

    sidebarTabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            sidebarTabBtns.forEach(b => b.classList.remove('active'));
            adminFormPanels.forEach(p => p.classList.remove('active'));

            btn.classList.add('active');
            const targetFormId = btn.getAttribute('data-form-tab');
            const targetPanel = document.getElementById(`form-${targetFormId}`);
            if (targetPanel) {
                targetPanel.classList.add('active');
            }
        });
    });

    // Toggle skills list categories
    const selectSkillsCategory = document.getElementById('sel-skills-category');
    if (selectSkillsCategory) {
        selectSkillsCategory.addEventListener('change', () => {
            renderSkillsEditor();
        });
    }

    // Modal Triggers
    if (adminLockBtn) {
        adminLockBtn.addEventListener('click', () => {
            if (adminDashboard.classList.contains('dashboard-active')) {
                adminDashboard.classList.remove('dashboard-active');
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

    // Authenticate Login Form
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const usernameInput = document.getElementById('admin-username').value.trim();
            const passwordInput = document.getElementById('admin-password').value.trim();

            if (usernameInput === 'admin' && passwordInput === 'shubham-qa-editor') {
                loginModal.classList.remove('modal-active');
                loadConfigToForms();
                adminDashboard.classList.add('dashboard-active');

                // Smoothly scroll top
                setTimeout(() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }, 300);
            } else {
                loginErrorMsg.classList.add('error-active');
                loginForm.classList.add('shake-animation');
                setTimeout(() => {
                    loginForm.classList.remove('shake-animation');
                }, 400);
            }
        });
    }

    // Load configurations into Dashboard Form Fields
    const loadConfigToForms = () => {
        // General
        document.getElementById('inp-hero-badge').value = activeConfig.hero.badge || '';
        document.getElementById('inp-hero-title-prefix').value = activeConfig.hero.titlePrefix || '';
        document.getElementById('inp-hero-desc').value = activeConfig.hero.description || '';
        document.getElementById('inp-hero-phrases').value = (activeConfig.hero.phrases || []).join('\n');
        document.getElementById('inp-social-github').value = activeConfig.hero.github || '';
        document.getElementById('inp-social-linkedin').value = activeConfig.hero.linkedin || '';
        document.getElementById('inp-social-email').value = activeConfig.hero.email || '';
        document.getElementById('inp-contact-phone').value = activeConfig.contact.phone || '';
        document.getElementById('inp-contact-location').value = activeConfig.contact.location || '';

        // About
        document.getElementById('inp-about-title').value = activeConfig.about.title || '';
        document.getElementById('inp-about-bio-highlight').value = activeConfig.about.bioHighlight || '';
        document.getElementById('inp-about-bio-text').value = activeConfig.about.bioText || '';
        document.getElementById('inp-about-summary-points').value = (activeConfig.about.summaryPoints || []).join('\n');
        document.getElementById('inp-stats-years').value = activeConfig.about.years || 0;
        document.getElementById('inp-stats-projects').value = activeConfig.about.projects || 0;
        document.getElementById('inp-stats-coverage').value = activeConfig.about.coverage || 0;
        document.getElementById('inp-about-learning').value = (activeConfig.about.learningList || []).join('\n');

        // Dynamic Lists
        renderSkillsEditor();
        renderTimelineEditor();
        renderProjectsEditor();
        renderCertsEditor();
    };

    // Serialize Form Fields into configuration state
    const saveFormsToConfig = () => {
        // General
        activeConfig.hero.badge = document.getElementById('inp-hero-badge').value.trim();
        activeConfig.hero.titlePrefix = document.getElementById('inp-hero-title-prefix').value.trim();
        activeConfig.hero.description = document.getElementById('inp-hero-desc').value.trim();
        activeConfig.hero.phrases = document.getElementById('inp-hero-phrases').value.split('\n').map(p => p.trim()).filter(p => p);
        activeConfig.hero.github = document.getElementById('inp-social-github').value.trim();
        activeConfig.hero.linkedin = document.getElementById('inp-social-linkedin').value.trim();
        activeConfig.hero.email = document.getElementById('inp-social-email').value.trim();
        activeConfig.contact.phone = document.getElementById('inp-contact-phone').value.trim();
        activeConfig.contact.location = document.getElementById('inp-contact-location').value.trim();

        // About
        activeConfig.about.title = document.getElementById('inp-about-title').value.trim();
        activeConfig.about.bioHighlight = document.getElementById('inp-about-bio-highlight').value.trim();
        activeConfig.about.bioText = document.getElementById('inp-about-bio-text').value.trim();
        activeConfig.about.summaryPoints = document.getElementById('inp-about-summary-points').value.split('\n').map(p => p.trim()).filter(p => p);
        activeConfig.about.years = parseInt(document.getElementById('inp-stats-years').value) || 0;
        activeConfig.about.projects = parseInt(document.getElementById('inp-stats-projects').value) || 0;
        activeConfig.about.coverage = parseInt(document.getElementById('inp-stats-coverage').value) || 0;
        activeConfig.about.learningList = document.getElementById('inp-about-learning').value.split('\n').map(l => l.trim()).filter(l => l);
    };

    // -------------------------------------------------------------
    // DYNAMIC LISTS EDIT PANEL GENERATION
    // -------------------------------------------------------------
    const renderSkillsEditor = () => {
        const cat = selectSkillsCategory.value;
        const container = document.getElementById('skills-items-editor');
        container.innerHTML = '';

        const items = activeConfig.skills[cat] || [];
        items.forEach((item, index) => {
            const card = document.createElement('div');
            card.className = 'admin-editor-item-card';
            card.innerHTML = `
                <div class="item-card-header">
                    <span>Skill #${index + 1}</span>
                    <button type="button" class="btn-remove-item" data-action="remove-skill" data-category="${cat}" data-index="${index}">
                        <i data-lucide="trash-2"></i>
                    </button>
                </div>
                <div class="form-grid">
                    <div class="form-group">
                        <label>Skill Title</label>
                        <input type="text" class="admin-input skill-title-input" value="${item.title || ''}" data-index="${index}">
                    </div>
                    <div class="form-group">
                        <label>Icon Keyword</label>
                        <input type="text" class="admin-input skill-icon-input" value="${item.icon || 'play'}" data-index="${index}">
                    </div>
                </div>
                <div class="form-group">
                    <label>Description</label>
                    <textarea class="admin-textarea skill-desc-input" data-index="${index}">${item.desc || ''}</textarea>
                </div>
            `;
            container.appendChild(card);
        });
        initIcons();
    };

    const renderTimelineEditor = () => {
        const container = document.getElementById('timeline-items-editor');
        container.innerHTML = '';

        const items = activeConfig.timeline || [];
        items.forEach((item, index) => {
            const card = document.createElement('div');
            card.className = 'admin-editor-item-card';
            card.innerHTML = `
                <div class="item-card-header">
                    <span>Timeline Item #${index + 1}</span>
                    <button type="button" class="btn-remove-item" data-action="remove-timeline" data-index="${index}">
                        <i data-lucide="trash-2"></i>
                    </button>
                </div>
                <div class="form-grid">
                    <div class="form-group">
                        <label>Date Range / Year</label>
                        <input type="text" class="admin-input timeline-date-input" value="${item.date || ''}" data-index="${index}">
                    </div>
                    <div class="form-group">
                        <label>Role / Degree</label>
                        <input type="text" class="admin-input timeline-role-input" value="${item.role || ''}" data-index="${index}">
                    </div>
                </div>
                <div class="form-group">
                    <label>Company / School</label>
                    <input type="text" class="admin-input timeline-company-input" value="${item.company || ''}" data-index="${index}">
                </div>
                <div class="form-group">
                    <label>Bullets List (One per line)</label>
                    <textarea class="admin-textarea timeline-bullets-input" data-index="${index}">${(item.bullets || []).join('\n')}</textarea>
                </div>
                <div class="form-group">
                    <label>Alternative Paragraph Description</label>
                    <textarea class="admin-textarea timeline-desc-input" data-index="${index}">${item.desc || ''}</textarea>
                </div>
            `;
            container.appendChild(card);
        });
        initIcons();
    };

    const renderProjectsEditor = () => {
        const container = document.getElementById('projects-items-editor');
        container.innerHTML = '';

        const items = activeConfig.projects || [];
        items.forEach((project, index) => {
            const card = document.createElement('div');
            card.className = 'admin-editor-item-card';
            card.innerHTML = `
                <div class="item-card-header">
                    <span>Project Card #${index + 1}</span>
                    <button type="button" class="btn-remove-item" data-action="remove-project" data-index="${index}">
                        <i data-lucide="trash-2"></i>
                    </button>
                </div>
                <div class="form-grid">
                    <div class="form-group">
                        <label>Project Title</label>
                        <input type="text" class="admin-input project-title-input" value="${project.title || ''}" data-index="${index}">
                    </div>
                    <div class="form-group">
                        <label>Category</label>
                        <select class="admin-select project-category-input" data-index="${index}">
                            <option value="playwright" ${project.category === 'playwright' ? 'selected' : ''}>Playwright</option>
                            <option value="selenium" ${project.category === 'selenium' ? 'selected' : ''}>Selenium</option>
                        </select>
                    </div>
                </div>
                <div class="form-grid">
                    <div class="form-group">
                        <label>Domain</label>
                        <input type="text" class="admin-input project-domain-input" value="${project.domain || ''}" data-index="${index}">
                    </div>
                    <div class="form-group">
                        <label>Image Source Path</label>
                        <input type="text" class="admin-input project-image-input" value="${project.image || ''}" data-index="${index}">
                    </div>
                </div>
                <div class="form-group">
                    <label>Overview</label>
                    <textarea class="admin-textarea project-desc-input" data-index="${index}">${project.desc || ''}</textarea>
                </div>
                <div class="form-group">
                    <label>Achievements (One per line)</label>
                    <textarea class="admin-textarea project-bullets-input" data-index="${index}">${(project.bullets || []).join('\n')}</textarea>
                </div>
                <div class="form-group">
                    <label>Tech Tags (Comma separated)</label>
                    <input type="text" class="admin-input project-tech-input" value="${(project.tech || []).join(', ')}" data-index="${index}">
                </div>
            `;
            container.appendChild(card);
        });
        initIcons();
    };

    const renderCertsEditor = () => {
        const container = document.getElementById('certs-items-editor');
        container.innerHTML = '';

        const items = activeConfig.certifications || [];
        items.forEach((cert, index) => {
            const card = document.createElement('div');
            card.className = 'admin-editor-item-card';
            card.innerHTML = `
                <div class="item-card-header">
                    <span>Credential #${index + 1}</span>
                    <button type="button" class="btn-remove-item" data-action="remove-cert" data-index="${index}">
                        <i data-lucide="trash-2"></i>
                    </button>
                </div>
                <div class="form-grid">
                    <div class="form-group">
                        <label>Title</label>
                        <input type="text" class="admin-input cert-title-input" value="${cert.title || ''}" data-index="${index}">
                    </div>
                    <div class="form-group">
                        <label>Icon</label>
                        <input type="text" class="admin-input cert-icon-input" value="${cert.icon || 'award'}" data-index="${index}">
                    </div>
                </div>
                <div class="form-group">
                    <label>Organization</label>
                    <input type="text" class="admin-input cert-org-input" value="${cert.org || ''}" data-index="${index}">
                </div>
            `;
            container.appendChild(card);
        });
        initIcons();
    };

    // -------------------------------------------------------------
    // DYNAMIC INPUT LISTENER FOR ITEM CARDS SERIALIZATION
    // -------------------------------------------------------------
    document.addEventListener('input', (e) => {
        const target = e.target;
        const index = parseInt(target.getAttribute('data-index'));
        if (isNaN(index)) return;

        // Skills Matrix
        if (target.classList.contains('skill-title-input')) {
            const cat = selectSkillsCategory.value;
            activeConfig.skills[cat][index].title = target.value;
        }
        if (target.classList.contains('skill-icon-input')) {
            const cat = selectSkillsCategory.value;
            activeConfig.skills[cat][index].icon = target.value;
        }
        if (target.classList.contains('skill-desc-input')) {
            const cat = selectSkillsCategory.value;
            activeConfig.skills[cat][index].desc = target.value;
        }

        // Journey
        if (target.classList.contains('timeline-date-input')) activeConfig.timeline[index].date = target.value;
        if (target.classList.contains('timeline-role-input')) activeConfig.timeline[index].role = target.value;
        if (target.classList.contains('timeline-company-input')) activeConfig.timeline[index].company = target.value;
        if (target.classList.contains('timeline-bullets-input')) {
            activeConfig.timeline[index].bullets = target.value.split('\n').map(b => b.trim()).filter(b => b);
        }
        if (target.classList.contains('timeline-desc-input')) activeConfig.timeline[index].desc = target.value;

        // Projects
        if (target.classList.contains('project-title-input')) activeConfig.projects[index].title = target.value;
        if (target.classList.contains('project-category-input')) activeConfig.projects[index].category = target.value;
        if (target.classList.contains('project-domain-input')) activeConfig.projects[index].domain = target.value;
        if (target.classList.contains('project-image-input')) activeConfig.projects[index].image = target.value;
        if (target.classList.contains('project-desc-input')) activeConfig.projects[index].desc = target.value;
        if (target.classList.contains('project-bullets-input')) {
            activeConfig.projects[index].bullets = target.value.split('\n').map(b => b.trim()).filter(b => b);
        }
        if (target.classList.contains('project-tech-input')) {
            activeConfig.projects[index].tech = target.value.split(',').map(t => t.trim()).filter(t => t);
        }

        // Certs
        if (target.classList.contains('cert-title-input')) activeConfig.certifications[index].title = target.value;
        if (target.classList.contains('cert-icon-input')) activeConfig.certifications[index].icon = target.value;
        if (target.classList.contains('cert-org-input')) activeConfig.certifications[index].org = target.value;
    });

    // -------------------------------------------------------------
    // DYNAMIC ADD ITEMS LISTENERS
    // -------------------------------------------------------------
    const addSkillItemBtn = document.getElementById('btn-add-skill-item');
    if (addSkillItemBtn) {
        addSkillItemBtn.addEventListener('click', () => {
            const cat = selectSkillsCategory.value;
            activeConfig.skills[cat].push({ title: 'New Skill Card', desc: 'Detailed skill description...', icon: 'play' });
            renderSkillsEditor();
        });
    }

    const addTimelineItemBtn = document.getElementById('btn-add-timeline-item');
    if (addTimelineItemBtn) {
        addTimelineItemBtn.addEventListener('click', () => {
            activeConfig.timeline.push({ date: 'Date / Year', role: 'Role Name', company: 'Company or Institution', bullets: [] });
            renderTimelineEditor();
        });
    }

    const addProjectItemBtn = document.getElementById('btn-add-project-item');
    if (addProjectItemBtn) {
        addProjectItemBtn.addEventListener('click', () => {
            activeConfig.projects.push({ title: 'New Project Name', category: 'playwright', domain: 'Industry Domain', desc: 'Project overview...', bullets: [], tech: ['Playwright'], image: 'assets/project1.png' });
            renderProjectsEditor();
        });
    }

    const addCertItemBtn = document.getElementById('btn-add-cert-item');
    if (addCertItemBtn) {
        addCertItemBtn.addEventListener('click', () => {
            activeConfig.certifications.push({ title: 'New Credential Name', org: 'Issuing Organisation', icon: 'award' });
            renderCertsEditor();
        });
    }

    // -------------------------------------------------------------
    // EVENT DELEGATION FOR REMOVING ITEMS
    // -------------------------------------------------------------
    document.addEventListener('click', (e) => {
        const btn = e.target.closest('.btn-remove-item');
        if (!btn) return;

        const action = btn.getAttribute('data-action');
        const idx = parseInt(btn.getAttribute('data-index'));

        if (action === 'remove-skill') {
            const cat = btn.getAttribute('data-category');
            activeConfig.skills[cat].splice(idx, 1);
            renderSkillsEditor();
        }
        if (action === 'remove-timeline') {
            activeConfig.timeline.splice(idx, 1);
            renderTimelineEditor();
        }
        if (action === 'remove-project') {
            activeConfig.projects.splice(idx, 1);
            renderProjectsEditor();
        }
        if (action === 'remove-cert') {
            activeConfig.certifications.splice(idx, 1);
            renderCertsEditor();
        }
    });

    // -------------------------------------------------------------
    // DOCK ACTIONS (APPLY, EXPORT, IMPORT, RESET, CANCEL)
    // -------------------------------------------------------------
    if (closeDashboardBtn) {
        closeDashboardBtn.addEventListener('click', () => {
            adminDashboard.classList.remove('dashboard-active');
        });
    }

    if (cancelDashboardBtn) {
        cancelDashboardBtn.addEventListener('click', () => {
            adminDashboard.classList.remove('dashboard-active');
        });
    }

    // Save & Reload Config
    if (applyConfigBtn) {
        applyConfigBtn.addEventListener('click', () => {
            saveFormsToConfig();
            localStorage.setItem('portfolio-config-data', JSON.stringify(activeConfig));
            
            // Reload page to reflect updates smoothly and restart animations
            window.location.reload();
        });
    }

    // Export config JSON file
    if (exportConfigBtn) {
        exportConfigBtn.addEventListener('click', () => {
            saveFormsToConfig();
            const jsonString = JSON.stringify(activeConfig, null, 2);
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

    // Trigger Import File Select
    if (importConfigBtn) {
        importConfigBtn.addEventListener('click', () => {
            inputImportFile.click();
        });
    }

    // Handle Config File Import Load
    if (inputImportFile) {
        inputImportFile.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (!file) return;

            const reader = new FileReader();
            reader.onload = (evt) => {
                try {
                    const parsed = JSON.parse(evt.target.result);
                    // Simple schema check
                    if (parsed.hero && parsed.about && parsed.skills) {
                        activeConfig = parsed;
                        loadConfigToForms();
                        alert("Configuration file loaded successfully! Click 'Apply & Refresh Site' to save these changes.");
                    } else {
                        alert("Invalid configuration file schema. Please upload a valid portfolio-config.json file.");
                    }
                } catch (err) {
                    alert("Error parsing JSON config file: " + err.message);
                }
            };
            reader.readAsText(file);
        });
    }

    // Revert Defaults (Restore DEFAULT_PORTFOLIO_CONFIG)
    if (resetConfigBtn) {
        resetConfigBtn.addEventListener('click', () => {
            if (confirm("Are you sure you want to restore the default template? This will clear all your custom edits.")) {
                localStorage.removeItem('portfolio-config-data');
                window.location.reload();
            }
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

        const interactiveSelectors = 'a, button, input, textarea, select, .skill-tab-btn, .filter-btn, .lab-tab-btn, .bug-card, .project-card';
        const addHoverClass = () => document.body.classList.add('cursor-hover');
        const removeHoverClass = () => document.body.classList.remove('cursor-hover');

        window.updateInteractiveListeners = () => {
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
        const phrases = activeConfig.hero.phrases && activeConfig.hero.phrases.length > 0
            ? activeConfig.hero.phrases
            : DEFAULT_PORTFOLIO_CONFIG.hero.phrases;
        
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
            const targetVal = parseInt(numEl.id === 'stat-years' ? activeConfig.about.years : (numEl.id === 'stat-projects' ? activeConfig.about.projects : activeConfig.about.coverage));
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
        card.addEventListener('click', () => {
            // Do not expand/collapse if admin panel is open
            if (adminDashboard.classList.contains('dashboard-active')) {
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
