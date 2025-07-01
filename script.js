// Portfolio JavaScript - Complete functionality
document.addEventListener('DOMContentLoaded', function() {
    
    // ===================================
    // 1. CORE INITIALIZATION
    // ===================================
    
    // Initialize mobile viewport height
    function setVH() {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    }
    
    setVH();
    window.addEventListener('resize', setVH);
    
    // Initialize AOS (Animate On Scroll)
    AOS.init({
        duration: 1000,
        easing: 'ease-in-out',
        once: true,
        offset: 100,
        delay: 100
    });
    
    // ===================================
    // 2. PARTICLES.JS INITIALIZATION
    // ===================================
    
    function initParticles() {
        if (typeof particlesJS !== 'undefined') {
            particlesJS('particles-js', {
                particles: {
                    number: {
                        value: 80,
                        density: { enable: true, value_area: 800 }
                    },
                    color: { value: ['#2563eb', '#7c3aed', '#06b6d4'] },
                    shape: {
                        type: 'circle',
                        stroke: { width: 0, color: '#000000' }
                    },
                    opacity: {
                        value: 0.5,
                        random: false,
                        anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }
                    },
                    size: {
                        value: 3,
                        random: true,
                        anim: { enable: false, speed: 40, size_min: 0.1, sync: false }
                    },
                    line_linked: {
                        enable: true,
                        distance: 150,
                        color: '#2563eb',
                        opacity: 0.4,
                        width: 1
                    },
                    move: {
                        enable: true,
                        speed: 6,
                        direction: 'none',
                        random: false,
                        straight: false,
                        out_mode: 'out',
                        bounce: false,
                        attract: { enable: false, rotateX: 600, rotateY: 1200 }
                    }
                },
                interactivity: {
                    detect_on: 'canvas',
                    events: {
                        onhover: { enable: true, mode: 'repulse' },
                        onclick: { enable: true, mode: 'push' },
                        resize: true
                    },
                    modes: {
                        grab: { distance: 400, line_linked: { opacity: 1 } },
                        bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
                        repulse: { distance: 200, duration: 0.4 },
                        push: { particles_nb: 4 },
                        remove: { particles_nb: 2 }
                    }
                },
                retina_detect: true
            });
            
            // Monitor particles and ensure it stays active
            const particlesContainer = document.getElementById('particles-js');
            if (particlesContainer) {
                particlesContainer.style.position = 'fixed';
                particlesContainer.style.top = '0';
                particlesContainer.style.left = '0';
                particlesContainer.style.width = '100%';
                particlesContainer.style.height = '100%';
                particlesContainer.style.zIndex = '0';
                particlesContainer.style.pointerEvents = 'none';
            }
        }
    }
    
    // Initialize particles with fallback
    setTimeout(initParticles, 100);
    
    // ===================================
    // 3. THEME TOGGLE FUNCTIONALITY
    // ===================================
    
    const themeToggle = document.getElementById('theme-toggle');
    const universalThemeToggle = document.getElementById('universal-theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const universalThemeIcon = document.getElementById('universal-theme-icon');
    const html = document.documentElement;
    
    // Get saved theme or default to light
    const savedTheme = localStorage.getItem('theme') || 'light';
    
    // Apply saved theme
    function applyTheme(theme) {
        if (theme === 'dark') {
            html.classList.add('dark');
            if (themeIcon) {
                themeIcon.classList.remove('fa-moon');
                themeIcon.classList.add('fa-sun');
            }
            if (universalThemeIcon) {
                universalThemeIcon.classList.remove('fa-moon');
                universalThemeIcon.classList.add('fa-sun');
            }
        } else {
            html.classList.remove('dark');
            if (themeIcon) {
                themeIcon.classList.remove('fa-sun');
                themeIcon.classList.add('fa-moon');
            }
            if (universalThemeIcon) {
                universalThemeIcon.classList.remove('fa-sun');
                universalThemeIcon.classList.add('fa-moon');
            }
        }
        localStorage.setItem('theme', theme);
    }
    
    // Apply saved theme on load
    applyTheme(savedTheme);
    
    // Toggle theme function
    function toggleTheme() {
        const currentTheme = html.classList.contains('dark') ? 'dark' : 'light';
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        applyTheme(newTheme);
        
        // Add animation effect
        const toggleBtn = event.target.closest('button');
        if (toggleBtn) {
            toggleBtn.style.transform = 'scale(0.9)';
            setTimeout(() => {
                toggleBtn.style.transform = 'scale(1)';
            }, 150);
        }
    }
    
    // Add event listeners for both theme toggles
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }
    if (universalThemeToggle) {
        universalThemeToggle.addEventListener('click', toggleTheme);
    }
    
    // ===================================
    // 4. MOBILE MENU FUNCTIONALITY (SIMPLE & RELIABLE)
    // ===================================
    
    // Wait for DOM to be fully loaded
    setTimeout(() => {
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        
        if (!mobileMenuBtn || !mobileMenu) {
            console.error('Mobile menu elements not found');
            return;
        }
        
        let isMenuOpen = false;
        
        // Simple toggle function
        function toggleMenu() {
            const icon = mobileMenuBtn.querySelector('i');
            
            if (isMenuOpen) {
                // Close menu
                mobileMenu.classList.add('hidden');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
                document.body.style.overflow = '';
                isMenuOpen = false;
                console.log('Mobile menu closed');
            } else {
                // Open menu
                mobileMenu.classList.remove('hidden');
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
                document.body.style.overflow = 'hidden';
                isMenuOpen = true;
                console.log('Mobile menu opened');
                
                // Immediately clean any unwanted styling on menu items
                setTimeout(() => {
                    const mobileLinks = document.querySelectorAll('#mobile-menu .mobile-nav-link');
                    mobileLinks.forEach((link, index) => {
                        console.log(`Cleaning mobile link ${index + 1}: ${link.textContent.trim()}`);
                        link.classList.remove('active', 'text-primary', 'dark:text-accent');
                        link.style.background = 'transparent';
                        if (document.documentElement.classList.contains('dark')) {
                            link.style.color = '#d1d5db';
                        } else {
                            link.style.color = '#374151';
                        }
                    });
                }, 10);
            }
        }
        
        // Add click event to button
        mobileMenuBtn.onclick = function(e) {
            e.preventDefault();
            e.stopPropagation();
            toggleMenu();
        };
        
        // Close menu when clicking navigation links
        const navLinks = mobileMenu.querySelectorAll('.mobile-nav-link');
        navLinks.forEach(link => {
            link.onclick = function() {
                if (isMenuOpen) {
                    setTimeout(() => {
                        toggleMenu();
                    }, 100);
                }
            };
            
            // Ensure mobile nav links never get active styling
            link.addEventListener('focus', function() {
                this.blur();
            });
            
            // Remove any accidentally applied active classes
            link.classList.remove('active', 'text-primary', 'dark:text-accent');
        });
        
        // Close menu when clicking outside
        document.onclick = function(e) {
            if (isMenuOpen && 
                !mobileMenu.contains(e.target) && 
                !mobileMenuBtn.contains(e.target)) {
                toggleMenu();
            }
        };
        
        // Close menu on window resize
        window.addEventListener('resize', function() {
            if (window.innerWidth >= 1024 && isMenuOpen) {
                toggleMenu();
            }
        });
        
        console.log('Mobile menu initialized successfully');
        
        // Periodic cleanup of mobile menu styling (prevents any unwanted highlighting)
        setInterval(() => {
            const mobileLinks = document.querySelectorAll('#mobile-menu .mobile-nav-link');
            mobileLinks.forEach(link => {
                // Remove any classes that might cause highlighting
                link.classList.remove('active', 'text-primary', 'dark:text-accent', 'bg-gradient-to-r', 'from-primary', 'to-secondary');
                
                // Ensure base styling is maintained
                if (!link.matches(':hover') && !link.matches(':active')) {
                    link.style.background = 'transparent';
                    if (document.documentElement.classList.contains('dark')) {
                        link.style.color = '#d1d5db';
                    } else {
                        link.style.color = '#374151';
                    }
                }
            });
        }, 1000);
        
    }, 500); // Small delay to ensure DOM is ready
    
    // ===================================
    // 5. SMOOTH SCROLLING NAVIGATION
    // ===================================
    
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 100; // Account for taller fixed navbar
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
                
                // Update active nav link
                updateActiveNavLink(targetId);
            }
        });
    });
    
    // Update active navigation link based on scroll position
    function updateActiveNavLink(activeId = null) {
        const sections = document.querySelectorAll('section[id]');
        // Only target desktop navigation links, not mobile menu links
        const navLinks = document.querySelectorAll('.nav-link:not(.mobile-nav-link)');
        
        if (activeId) {
            // Manually set active link (desktop only)
            navLinks.forEach(link => {
                link.classList.remove('text-primary', 'dark:text-accent');
                if (link.getAttribute('href') === `#${activeId}`) {
                    link.classList.add('text-primary', 'dark:text-accent');
                }
            });
        } else {
            // Auto-detect based on scroll position (desktop only)
            const scrollPosition = window.scrollY + 100;
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                const sectionId = section.getAttribute('id');
                
                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    navLinks.forEach(link => {
                        link.classList.remove('text-primary', 'dark:text-accent');
                        if (link.getAttribute('href') === `#${sectionId}`) {
                            link.classList.add('text-primary', 'dark:text-accent');
                        }
                    });
                }
            });
        }
    }
    
    // Update active nav link on scroll
    window.addEventListener('scroll', () => updateActiveNavLink());
    
    // ===================================
    // 6. SKILL BARS ANIMATION
    // ===================================
    
    function animateSkillBars() {
        const skillBars = document.querySelectorAll('.skill-progress');
        
        skillBars.forEach(bar => {
            const progress = bar.getAttribute('data-progress') || '0';
            const progressBar = bar.querySelector('.skill-progress-bar');
            
            if (progressBar) {
                // Reset and animate
                progressBar.style.width = '0%';
                setTimeout(() => {
                    progressBar.style.width = progress + '%';
                }, 200);
            }
        });
    }
    
    // Trigger skill animation when skills section is in view
    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateSkillBars();
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        observer.observe(skillsSection);
    }
    
    // ===================================
    // 7. CONTACT FORM FUNCTIONALITY
    // ===================================
    
    // Initialize EmailJS
    (function() {
        // Note: Replace 'YOUR_PUBLIC_KEY' with your actual EmailJS public key
        // emailjs.init("YOUR_PUBLIC_KEY");
    })();
    
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const name = formData.get('name');
            const email = formData.get('email');
            const subject = formData.get('subject');
            const message = formData.get('message');
            
            // Basic validation
            if (!name || !email || !subject || !message) {
                showNotification('Please fill in all required fields.', 'error');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                showNotification('Please enter a valid email address.', 'error');
                return;
            }
            
            // Update submit button
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Sending...';
            submitBtn.disabled = true;
            
            // For now, we'll use mailto as the primary method
            // To use EmailJS, you would need to:
            // 1. Create an account at emailjs.com
            // 2. Set up a service and template
            // 3. Replace the placeholder values below
            
            setTimeout(() => {
                // Create a properly structured email message
                const emailBody = `
Hello Rahul,

I hope this message finds you well. I'm reaching out to you through your portfolio website.

-----------------------------------
CONTACT DETAILS:
-----------------------------------
Name: ${name}
Email: ${email}
Subject: ${subject}

-----------------------------------
MESSAGE:
-----------------------------------
${message}

-----------------------------------

Best regards,
${name}

---

This message was sent from your portfolio website contact form.
Date: ${new Date().toLocaleDateString('en-US', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
})}
Time: ${new Date().toLocaleTimeString('en-US')}
                `.trim();
                
                // Create mailto link with structured message
                const mailtoLink = `mailto:rahul.gupta300903@gmail.com?subject=${encodeURIComponent(`Portfolio Contact: ${subject}`)}&body=${encodeURIComponent(emailBody)}`;
                
                try {
                    window.open(mailtoLink, '_blank');
                    showNotification('Opening your email client...', 'success');
                    this.reset();
                } catch (error) {
                    showNotification('Please email me directly at rahul.gupta300903@gmail.com', 'info');
                    // Create a temporary link to copy email to clipboard
                    navigator.clipboard?.writeText('rahul.gupta300903@gmail.com').then(() => {
                        showNotification('Email address copied to clipboard!', 'success');
                    });
                }
                
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
            }, 1000);
        });
    }
    
    // ===================================
    // 8. NOTIFICATION SYSTEM
    // ===================================
    
    function showNotification(message, type = 'info') {
        const container = document.getElementById('notification-container');
        if (!container) return;
        
        const notification = document.createElement('div');
        notification.className = `notification ${type} transform translate-x-full opacity-0 transition-all duration-300`;
        
        const icons = {
            success: 'fa-check-circle',
            error: 'fa-exclamation-circle',
            warning: 'fa-exclamation-triangle',
            info: 'fa-info-circle'
        };
        
        const colors = {
            success: 'bg-green-500 text-white',
            error: 'bg-red-500 text-white',
            warning: 'bg-yellow-500 text-black',
            info: 'bg-blue-500 text-white'
        };
        
        notification.innerHTML = `
            <div class="flex items-center p-4 rounded-lg shadow-lg ${colors[type]} min-w-64 max-w-sm">
                <i class="fas ${icons[type]} mr-3"></i>
                <span class="flex-1">${message}</span>
                <button class="ml-3 hover:opacity-70" onclick="this.parentElement.parentElement.remove()">
                    <i class="fas fa-times"></i>
                </button>
            </div>
        `;
        
        container.appendChild(notification);
        
        // Animate in
        setTimeout(() => {
            notification.classList.remove('translate-x-full', 'opacity-0');
        }, 100);
        
        // Auto remove after 5 seconds
        setTimeout(() => {
            notification.classList.add('translate-x-full', 'opacity-0');
            setTimeout(() => {
                notification.remove();
            }, 300);
        }, 5000);
    }
    
    // ===================================
    // 9. RESUME DOWNLOAD FUNCTIONALITY
    // ===================================
    
    const downloadButtons = document.querySelectorAll('#download-resume, #mobile-download-resume, #hero-download-resume');
    
    downloadButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Add loading state
            const originalContent = this.innerHTML;
            this.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Preparing...';
            this.style.pointerEvents = 'none';
            
            // Simulate resume preparation and download
            setTimeout(() => {
                // Create download link
                const link = document.createElement('a');
                link.href = 'Rahul Gupta Resume.pdf';
                link.download = 'Rahul_Gupta_Resume.pdf';
                link.style.display = 'none';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                
                showNotification('Resume download started! Please check your downloads folder.', 'success');
                
                // Reset button
                this.innerHTML = originalContent;
                this.style.pointerEvents = 'auto';
            }, 1500);
        });
    });
    
    // ===================================
    // 10. GSAP ANIMATIONS
    // ===================================
    
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);
        
        // Hero section animations
        gsap.timeline()
            .from(".hero-buttons > *", {
                duration: 0.8,
                y: 50,
                opacity: 0,
                stagger: 0.2,
                ease: "power2.out",
                delay: 1
            });
        
        // Card animations
        gsap.utils.toArray('.enhanced-card').forEach(card => {
            gsap.from(card, {
                duration: 0.8,
                y: 50,
                opacity: 0,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: card,
                    start: "top 80%",
                    once: true
                }
            });
        });
        
        // Timeline animations for experience
        gsap.utils.toArray('.timeline-item').forEach((item, index) => {
            gsap.from(item, {
                duration: 0.6,
                x: index % 2 === 0 ? -50 : 50,
                opacity: 0,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: item,
                    start: "top 85%",
                    once: true
                }
            });
        });
    }
    
    // ===================================
    // 11. ENHANCED USER INTERACTIONS
    // ===================================
    
    // Add hover effects to cards
    const cards = document.querySelectorAll('.enhanced-card, .timeline-item, .project-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
            this.style.boxShadow = '0 20px 40px rgba(0,0,0,0.1)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = '';
        });
    });
    
    // ===================================
    // 12. PERFORMANCE OPTIMIZATIONS
    // ===================================
    
    // Lazy load images
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('opacity-0');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
    
    // Debounced scroll handler
    let scrollTimeout;
    function handleScroll() {
        if (scrollTimeout) {
            clearTimeout(scrollTimeout);
        }
        scrollTimeout = setTimeout(() => {
            updateActiveNavLink();
        }, 10);
    }
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // ===================================
    // 13. FINAL SETUP
    // ===================================
    
    // Initialize everything
    console.log('Portfolio initialized successfully!');
    
    // Refresh AOS on dynamic content changes
    const refreshAOS = () => {
        AOS.refresh();
    };
    
    // Expose refresh function globally if needed
    window.refreshPortfolio = refreshAOS;
    
    // Handle visibility changes (for when user switches tabs)
    document.addEventListener('visibilitychange', function() {
        if (!document.hidden) {
            // Refresh animations when user returns to tab
            refreshAOS();
        }
    });
    
    // Final check to ensure particles are running
    setTimeout(() => {
        const particlesCanvas = document.querySelector('#particles-js canvas');
        if (!particlesCanvas) {
            console.log('Retrying particles initialization...');
            initParticles();
        }
    }, 2000);
    
});

// ===================================
// UTILITY FUNCTIONS (Global Scope)
// ===================================

// Function to manually trigger skill bar animation
function triggerSkillAnimation() {
    const skillBars = document.querySelectorAll('.skill-progress');
    skillBars.forEach(bar => {
        const progress = bar.getAttribute('data-progress') || '0';
        const progressBar = bar.querySelector('.skill-progress-bar');
        if (progressBar) {
            progressBar.style.width = '0%';
            setTimeout(() => {
                progressBar.style.width = progress + '%';
            }, 100);
        }
    });
}

// Function to smooth scroll to any element
function scrollToElement(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        const offsetTop = element.offsetTop - 100;
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
}

// Function to check if element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// ===================================
// RESUME DOWNLOAD FUNCTIONALITY (REMOVED - HANDLED IN MAIN CODE)
// ===================================

// Resume download is now handled in section 9 within the DOMContentLoaded event
