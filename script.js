// Smooth page transitions (fade-out on navigation for multi-page)
document.addEventListener('DOMContentLoaded', () => {
    const links = Array.from(document.querySelectorAll('a[href]')).filter(a => {
        const href = a.getAttribute('href');
        if (!href) return false;
        const isHash = href.startsWith('#');
        const isExternal = /^https?:\/\//i.test(href) || href.startsWith('mailto:');
        return !isHash && !isExternal;
    });

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (!href) return;
            e.preventDefault();
            document.body.style.transition = 'opacity 250ms ease';
            document.body.style.opacity = '0';
            setTimeout(() => {
                window.location.href = href;
            }, 200);
        });
    });

    // Intersection Observer for fade-in animations
    const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.project-card, .about-text, .contact-card');
    animatedElements.forEach(el => observer.observe(el));
});

// Subtle parallax effect for hero
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero-content');
    if (hero && scrolled < window.innerHeight) {
        hero.style.transform = `translateY(${scrolled * 0.3}px)`;
        hero.style.opacity = String(1 - (scrolled / 600));
    }
});

// Navbar style on scroll
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    if (!navbar) return;
    if (currentScroll > 50) {
        navbar.style.backgroundColor = 'rgba(14, 23, 38, 0.92)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.35)';
    } else {
        navbar.style.backgroundColor = 'rgba(14, 23, 38, 0.85)';
        navbar.style.boxShadow = 'none';
    }
});
