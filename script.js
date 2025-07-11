// Pattachitra Portfolio - JavaScript with Enhanced Animations

document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle mobile menu
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        
        // Animate hamburger bars
        const bars = hamburger.querySelectorAll('.bar');
        if (hamburger.classList.contains('active')) {
            bars[0].style.transform = 'rotate(-45deg) translate(-5px, 6px)';
            bars[1].style.opacity = '0';
            bars[2].style.transform = 'rotate(45deg) translate(-5px, -6px)';
        } else {
            bars[0].style.transform = 'none';
            bars[1].style.opacity = '1';
            bars[2].style.transform = 'none';
        }
    });

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            
            // Reset hamburger bars
            const bars = hamburger.querySelectorAll('.bar');
            bars[0].style.transform = 'none';
            bars[1].style.opacity = '1';
            bars[2].style.transform = 'none';
        });
    });

    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Navbar background change on scroll
    const navbar = document.querySelector('.navbar');
    let lastScrollTop = 0;

    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Add/remove background opacity based on scroll position
        if (scrollTop > 100) {
            navbar.style.background = 'linear-gradient(135deg, rgba(212, 175, 55, 0.95), rgba(204, 119, 34, 0.95))';
            navbar.style.backdropFilter = 'blur(10px)';
        } else {
            navbar.style.background = 'linear-gradient(135deg, var(--primary-gold), var(--primary-ochre))';
            navbar.style.backdropFilter = 'none';
        }

        // Hide/show navbar on scroll
        if (scrollTop > lastScrollTop && scrollTop > 300) {
            navbar.style.transform = 'translateY(-100%)';
        } else {
            navbar.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop;
    });

    // ====== ENHANCED FEATURE 1: ANIMATED BACKGROUND WITH TREES AND HOUSES ======
    
    function createAnimatedBackground() {
        // Create background container
        const backgroundContainer = document.createElement('div');
        backgroundContainer.className = 'animated-background';
        backgroundContainer.innerHTML = `
            <!-- Plain field background -->
            <div class="field-background"></div>
            
            <!-- Houses in the background -->
            <!-- Note: Add house images in images/background/ folder in Pattachitra style -->
            <!-- Recommended size: 150x100px for small houses, PNG with transparent background -->
            <div class="houses-container">
                <div class="house house-1">
                    <img src="images/background/house1.png" alt="Traditional House 1" />
                </div>
                <div class="house house-2">
                    <img src="images/background/house2.png" alt="Traditional House 2" />
                </div>
                <div class="house house-3">
                    <img src="images/background/house3.png" alt="Traditional House 3" />
                </div>
            </div>
            
            <!-- Animated trees -->
            <!-- Note: Add tree images in images/background/ folder in Pattachitra style -->
            <!-- Recommended size: 200x300px for trees, PNG with transparent background -->
            <!-- Trees should have detailed branches and leaves for wind animation effect -->
            <div class="trees-container">
                <div class="tree tree-left">
                    <img src="images/background/tree-left.png" alt="Left Tree" class="tree-trunk" />
                    <div class="tree-leaves">
                        <img src="images/background/tree-leaves-left.png" alt="Tree Leaves" />
                    </div>
                </div>
                <div class="tree tree-right">
                    <img src="images/background/tree-right.png" alt="Right Tree" class="tree-trunk" />
                    <div class="tree-leaves">
                        <img src="images/background/tree-leaves-right.png" alt="Tree Leaves" />
                    </div>
                </div>
            </div>
            
            <!-- Wind effect particles -->
            <div class="wind-particles">
                <div class="particle"></div>
                <div class="particle"></div>
                <div class="particle"></div>
                <div class="particle"></div>
                <div class="particle"></div>
            </div>
        `;
        
        // Insert background behind hero section
        const hero = document.querySelector('.hero');
        hero.insertBefore(backgroundContainer, hero.firstChild);
        
        // Start wind animation
        startWindAnimation();
    }
    
    function startWindAnimation() {
        // Wind intensity (changes over time)
        let windStrength = 0;
        let windDirection = 1;
        
        function animateWind() {
            windStrength += (Math.random() - 0.5) * 0.1;
            windStrength = Math.max(-1, Math.min(1, windStrength));
            
            // Animate tree leaves
            const leftLeaves = document.querySelector('.tree-left .tree-leaves');
            const rightLeaves = document.querySelector('.tree-right .tree-leaves');
            
            if (leftLeaves && rightLeaves) {
                const leftRotation = windStrength * 8;
                const rightRotation = windStrength * 6;
                
                leftLeaves.style.transform = `rotate(${leftRotation}deg) translateX(${windStrength * 3}px)`;
                rightLeaves.style.transform = `rotate(${rightRotation}deg) translateX(${windStrength * -2}px)`;
            }
            
            // Animate wind particles
            const particles = document.querySelectorAll('.particle');
            particles.forEach((particle, index) => {
                const speed = (windStrength + 1) * (2 + index * 0.5);
                particle.style.animationDuration = `${5 - speed}s`;
            });
            
            requestAnimationFrame(animateWind);
        }
        
        animateWind();
    }

    // ====== ENHANCED FEATURE 2: EXPANDABLE PROJECT CARDS ======
    
    function setupProjectExpansion() {
        const projectCards = document.querySelectorAll('.project-card');
        
        projectCards.forEach(card => {
            card.addEventListener('click', function(e) {
                // Prevent default if clicking on tech tags
                if (e.target.classList.contains('tech-tag')) return;
                
                expandProject(this);
            });
        });
    }
    
    function expandProject(card) {
        // Check if already expanded
        if (document.querySelector('.project-expanded')) return;
        
        // Create expanded project overlay
        const expandedProject = document.createElement('div');
        expandedProject.className = 'project-expanded';
        
        // Get project data
        const title = card.querySelector('.project-title').textContent;
        const description = card.querySelector('.project-description').textContent;
        const techTags = Array.from(card.querySelectorAll('.tech-tag')).map(tag => tag.textContent);
        const imageSrc = card.querySelector('.project-image img').src;
        
        expandedProject.innerHTML = `
            <div class="expanded-content">
                <button class="close-btn">&times;</button>
                <div class="expanded-layout">
                    <div class="expanded-image">
                        <img src="${imageSrc}" alt="${title}" />
                        <!-- Note: Add project gallery images in images/projects/ folder -->
                        <!-- Recommended: 3-5 additional images showing different aspects of the project -->
                        <div class="image-gallery">
                            <div class="gallery-thumbnails">
                                <img src="images/projects/project1-gallery1.jpg" alt="Gallery 1" class="gallery-thumb" />
                                <img src="images/projects/project1-gallery2.jpg" alt="Gallery 2" class="gallery-thumb" />
                                <img src="images/projects/project1-gallery3.jpg" alt="Gallery 3" class="gallery-thumb" />
                            </div>
                        </div>
                    </div>
                    <div class="expanded-details">
                        <h2 class="expanded-title">${title}</h2>
                        <div class="expanded-description">
                            <p>${description}</p>
                            <p>This project showcases the beautiful integration of traditional Pattachitra art style with modern web development techniques. The design incorporates vibrant golden and ochre color palettes reminiscent of ancient Indian manuscripts.</p>
                            <h3>Key Features:</h3>
                            <ul>
                                <li>Responsive design with Pattachitra-inspired patterns</li>
                                <li>Interactive animations and smooth transitions</li>
                                <li>Traditional color scheme with modern functionality</li>
                                <li>Cross-browser compatibility and optimization</li>
                            </ul>
                            <h3>Technical Implementation:</h3>
                            <p>The project was built using modern web technologies while maintaining the aesthetic appeal of traditional Indian art. Special attention was given to color harmony and decorative elements that reflect the Pattachitra art form.</p>
                        </div>
                        <div class="expanded-tech">
                            <h3>Technologies Used:</h3>
                            <div class="tech-list">
                                ${techTags.map(tech => `<span class="tech-tag-expanded">${tech}</span>`).join('')}
                            </div>
                        </div>
                        <div class="project-links">
                            <a href="#" class="btn btn-primary">View Live Demo</a>
                            <a href="#" class="btn btn-secondary">View Source Code</a>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        document.body.appendChild(expandedProject);
        
        // Animate expansion
        setTimeout(() => {
            expandedProject.classList.add('active');
        }, 10);
        
        // Close functionality
        const closeBtn = expandedProject.querySelector('.close-btn');
        closeBtn.addEventListener('click', closeExpandedProject);
        
        // Close on overlay click
        expandedProject.addEventListener('click', function(e) {
            if (e.target === this) {
                closeExpandedProject();
            }
        });
        
        // Close on Escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                closeExpandedProject();
            }
        });
        
        // Gallery functionality
        setupImageGallery(expandedProject);
        
        // Prevent body scroll
        document.body.style.overflow = 'hidden';
    }
    
    function closeExpandedProject() {
        const expandedProject = document.querySelector('.project-expanded');
        if (expandedProject) {
            expandedProject.classList.remove('active');
            setTimeout(() => {
                expandedProject.remove();
                document.body.style.overflow = 'auto';
            }, 300);
        }
    }
    
    function setupImageGallery(expandedProject) {
        const mainImage = expandedProject.querySelector('.expanded-image img');
        const thumbnails = expandedProject.querySelectorAll('.gallery-thumb');
        
        thumbnails.forEach(thumb => {
            thumb.addEventListener('click', function() {
                // Remove active class from all thumbnails
                thumbnails.forEach(t => t.classList.remove('active'));
                
                // Add active class to clicked thumbnail
                this.classList.add('active');
                
                // Change main image
                mainImage.src = this.src;
                mainImage.alt = this.alt;
                
                // Add fade effect
                mainImage.style.opacity = '0';
                setTimeout(() => {
                    mainImage.style.opacity = '1';
                }, 150);
            });
        });
        
        // Set first thumbnail as active
        if (thumbnails.length > 0) {
            thumbnails[0].classList.add('active');
        }
    }

    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                
                // Animate skill bars
                if (entry.target.classList.contains('skills')) {
                    animateSkillBars();
                }
                
                // Animate stats counters
                if (entry.target.classList.contains('about')) {
                    animateCounters();
                }
            }
        });
    }, observerOptions);

    // Observe sections for animations
    const sectionsToObserve = document.querySelectorAll('.section-frame, .hero-frame, .project-card');
    sectionsToObserve.forEach(section => {
        observer.observe(section);
    });

    // Skill bars animation
    function animateSkillBars() {
        const skillBars = document.querySelectorAll('.skill-progress');
        
        skillBars.forEach(bar => {
            const width = bar.getAttribute('data-width');
            bar.style.setProperty('--width', width);
            bar.style.width = width;
            bar.classList.add('animate');
        });
    }

    // Counter animation for stats
    function animateCounters() {
        const counters = document.querySelectorAll('.stat-number');
        
        counters.forEach(counter => {
            const target = parseInt(counter.textContent);
            const increment = target / 100;
            let current = 0;
            
            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    current = target;
                    clearInterval(timer);
                }
                counter.textContent = Math.ceil(current) + '+';
            }, 20);
        });
    }

    // Contact form handling
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const name = formData.get('name');
            const email = formData.get('email');
            const message = formData.get('message');
            
            // Basic validation
            if (!name || !email || !message) {
                showNotification('Please fill in all fields.', 'error');
                return;
            }
            
            if (!isValidEmail(email)) {
                showNotification('Please enter a valid email address.', 'error');
                return;
            }
            
            // Simulate form submission (replace with actual form handling)
            showNotification('Thank you for your message! I\'ll get back to you soon.', 'success');
            this.reset();
        });
    }

    // Email validation helper
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Notification system
    function showNotification(message, type = 'info') {
        // Remove existing notification
        const existingNotification = document.querySelector('.notification');
        if (existingNotification) {
            existingNotification.remove();
        }
        
        // Create new notification
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <span class="notification-message">${message}</span>
                <button class="notification-close">&times;</button>
            </div>
        `;
        
        // Add styles
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            background: ${type === 'success' ? 'var(--gradient-primary)' : 'var(--gradient-secondary)'};
            color: var(--text-dark);
            padding: 1rem 1.5rem;
            border-radius: 10px;
            border: 2px solid var(--border-color);
            box-shadow: 0 8px 25px rgba(0,0,0,0.2);
            z-index: 10000;
            max-width: 300px;
            animation: slideIn 0.3s ease-out;
        `;
        
        // Add to page
        document.body.appendChild(notification);
        
        // Close button functionality
        const closeBtn = notification.querySelector('.notification-close');
        closeBtn.addEventListener('click', () => notification.remove());
        
        // Auto remove after 5 seconds
        setTimeout(() => {
            if (notification.parentNode) {
                notification.style.animation = 'slideOut 0.3s ease-in';
                setTimeout(() => notification.remove(), 300);
            }
        }, 5000);
    }

    // Add scroll-to-top button
    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.innerHTML = '↑';
    scrollToTopBtn.className = 'scroll-to-top';
    scrollToTopBtn.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        background: var(--gradient-primary);
        border: 2px solid var(--border-color);
        border-radius: 50%;
        color: var(--text-dark);
        font-size: 1.5rem;
        font-weight: bold;
        cursor: pointer;
        z-index: 1000;
        opacity: 0;
        transform: translateY(100px);
        transition: all 0.3s ease;
        box-shadow: 0 4px 15px rgba(0,0,0,0.2);
    `;
    
    document.body.appendChild(scrollToTopBtn);

    // Show/hide scroll-to-top button
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.style.opacity = '1';
            scrollToTopBtn.style.transform = 'translateY(0)';
        } else {
            scrollToTopBtn.style.opacity = '0';
            scrollToTopBtn.style.transform = 'translateY(100px)';
        }
    });

    // Scroll to top functionality
    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Initialize all enhanced features
    createAnimatedBackground();
    setupProjectExpansion();
    
    console.log('Enhanced Pattachitra Portfolio loaded successfully! 🎨🌳');
});
