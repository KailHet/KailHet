document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar-vertical');
    const mainContent = document.querySelector('main');
    
    if (!navbar || !mainContent) return;

    const burger = document.createElement('div');
    burger.className = 'mobile-burger d-lg-none';
    burger.innerHTML = '<i class="bi bi-list"></i>';
    document.body.appendChild(burger);

    const toggleMenu = (e) => {
        e.stopPropagation();
        navbar.classList.toggle('active');
        document.body.classList.toggle('no-scroll');
    };

    burger.addEventListener('click', toggleMenu);

    document.addEventListener('click', (e) => {
        if (navbar.classList.contains('active') && 
            !navbar.contains(e.target) && 
            !burger.contains(e.target)) {
            navbar.classList.remove('active');
            document.body.classList.remove('no-scroll');
        }
    });

    const adjustHeight = () => {
        mainContent.style.minHeight = `${window.innerHeight}px`;
    };

    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(adjustHeight, 250);
    });

    adjustHeight();
});
