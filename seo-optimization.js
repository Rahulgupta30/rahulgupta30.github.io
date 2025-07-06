// SEO Performance Optimization Script
document.addEventListener('DOMContentLoaded', function() {
    // Add loading attribute to images for better performance
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        if (!img.hasAttribute('loading')) {
            // First image should be eager loaded, others lazy
            if (img.src.includes('Picture.jpeg')) {
                img.setAttribute('loading', 'eager');
            } else {
                img.setAttribute('loading', 'lazy');
            }
        }
    });

    // Add rel="noopener noreferrer" to external links
    const externalLinks = document.querySelectorAll('a[href^="http"]:not([href*="rahulgupta.dev"])');
    externalLinks.forEach(link => {
        if (!link.hasAttribute('rel')) {
            link.setAttribute('rel', 'noopener noreferrer');
        }
    });

    // Add breadcrumb navigation for better SEO
    const breadcrumb = document.createElement('nav');
    breadcrumb.setAttribute('aria-label', 'breadcrumb');
    breadcrumb.innerHTML = `
        <ol itemscope itemtype="https://schema.org/BreadcrumbList" class="sr-only">
            <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
                <a itemprop="item" href="https://rahulgupta.dev">
                    <span itemprop="name">Home</span>
                </a>
                <meta itemprop="position" content="1" />
            </li>
        </ol>
    `;
    document.body.appendChild(breadcrumb);

    // Add scroll event for section tracking
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('nav a[href^="#"]');

    function updateActiveSection() {
        const scrollY = window.pageYOffset;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', updateActiveSection);
    updateActiveSection(); // Initial call

    // Add structured data for skills
    const skillsData = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Python Programming"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Django Framework"
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": "Flutter Development"
            },
            {
                "@type": "ListItem",
                "position": 4,
                "name": "Java Programming"
            },
            {
                "@type": "ListItem",
                "position": 5,
                "name": "MySQL Database"
            }
        ]
    };

    const skillsScript = document.createElement('script');
    skillsScript.type = 'application/ld+json';
    skillsScript.textContent = JSON.stringify(skillsData);
    document.head.appendChild(skillsScript);
});
