document.addEventListener('DOMContentLoaded', function() {
        const burgerMenu = document.querySelector('.burger-menu');
        const navLinks = document.querySelector('.nav-links');
        const menuOverlay = document.querySelector('.menu-overlay');
        const body = document.body;

        // Открытие/закрытие меню
        burgerMenu.addEventListener('click', function() {
            const isExpanded = this.getAttribute('aria-expanded') === 'true';
            this.setAttribute('aria-expanded', !isExpanded);
            this.classList.toggle('open');
            navLinks.classList.toggle('active');
            menuOverlay.classList.toggle('active');
            body.classList.toggle('no-scroll');
        });

        // Закрытие меню по клику на оверлей
        menuOverlay.addEventListener('click', function() {
            burgerMenu.setAttribute('aria-expanded', 'false');
            burgerMenu.classList.remove('open');
            navLinks.classList.remove('active');
            this.classList.remove('active');
            body.classList.remove('no-scroll');
        });

        // Плавная прокрутка
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                e.preventDefault();
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });

                    // Закрываем меню на мобильных
                    if (window.innerWidth <= 768) {
                        burgerMenu.setAttribute('aria-expanded', 'false');
                        burgerMenu.classList.remove('open');
                        navLinks.classList.remove('active');
                        menuOverlay.classList.remove('active');
                        body.classList.remove('no-scroll');
                    }
                }
            });
        });

        // Анимация пунктов меню
        const navItems = document.querySelectorAll('.nav-links li');
        navItems.forEach((item, index) => {
            item.style.transitionDelay = `${index * 0.1}s`;
        });
    });


    document.querySelector('.burger-menu').addEventListener('click', function() {
  this.classList.toggle('open');
  document.querySelector('.nav-links').classList.toggle('active');
  document.body.classList.toggle('no-scroll');
});


// Плавная прокрутка для кнопки
document.querySelector('.cta-button').addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    window.scrollTo({
        top: target.offsetTop - 80,
        behavior: 'smooth'
    });
});

// Параллакс-эффект для декоративных элементов
window.addEventListener('mousemove', (e) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    document.querySelector('.photo-decoration').style.transform = `translate(-50%, -50%) translate(${x * 20}px, ${y * 20}px)`;
});

//для плавного скролла
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


document.querySelector('.burger-menu').addEventListener('click', function() {
    this.classList.toggle('open');
    document.querySelector('.nav-links').classList.toggle('active');
    document.querySelector('.menu-overlay').classList.toggle('active');
    document.body.classList.toggle('no-scroll');
});

// Закрытие меню по клику на overlay
document.querySelector('.menu-overlay').addEventListener('click', function() {
    this.classList.remove('active');
    document.querySelector('.burger-menu').classList.remove('open');
    document.querySelector('.nav-links').classList.remove('active');
    document.body.classList.remove('no-scroll');
});






document.addEventListener('DOMContentLoaded', function() {
    // Слайдер изображений
    const images = document.querySelectorAll('.image-slider img');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.slider-prev');
    const nextBtn = document.querySelector('.slider-next');
    let currentIndex = 0;
    let slideInterval;

    function showImage(index) {
        images.forEach(img => img.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        images[index].classList.add('active');
        dots[index].classList.add('active');
        currentIndex = index;
    }

    function startSlider() {
        slideInterval = setInterval(() => {
            currentIndex = (currentIndex + 1) % images.length;
            showImage(currentIndex);
        }, 5000);
    }

    function stopSlider() {
        clearInterval(slideInterval);
    }

    dots.forEach(dot => {
        dot.addEventListener('click', function() {
            stopSlider();
            showImage(parseInt(this.getAttribute('data-index')));
            startSlider();
        });
    });

    prevBtn.addEventListener('click', function() {
        stopSlider();
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(currentIndex);
        startSlider();
    });

    nextBtn.addEventListener('click', function() {
        stopSlider();
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
        startSlider();
    });

    // Инициализация слайдера
    showImage(0);
    startSlider();

    // Остановка при наведении
    document.querySelector('.image-slider').addEventListener('mouseenter', stopSlider);
    document.querySelector('.image-slider').addEventListener('mouseleave', startSlider);

    // Для мобильных устройств - остановка при касании
    document.querySelector('.image-slider').addEventListener('touchstart', stopSlider);
    document.querySelector('.image-slider').addEventListener('touchend', startSlider);

    // Модальные окна
    document.querySelectorAll('.diploma-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const diplomaId = this.getAttribute('data-diploma');
            document.getElementById(diplomaId).style.display = 'block';
            document.body.style.overflow = 'hidden';
        });
    });

    document.querySelectorAll('.close').forEach(closeBtn => {
        closeBtn.addEventListener('click', function() {
            this.closest('.modal').style.display = 'none';
            document.body.style.overflow = 'auto';
        });
    });

    window.addEventListener('click', function(event) {
        if (event.target.classList.contains('modal')) {
            event.target.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    // Закрытие модального окна по ESC
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            document.querySelectorAll('.modal').forEach(modal => {
                modal.style.display = 'none';
            });
            document.body.style.overflow = 'auto';
        }
    });
});





document.querySelectorAll('.diploma-btn').forEach(btn => {
      btn.addEventListener('click', function () {
        const diplomaId = this.getAttribute('data-diploma');
        openModal(diplomaId);
      });
    });

    // Функция открытия модального окна
    function openModal(id) {
      document.getElementById(id).style.display = 'block';
      document.body.style.overflow = 'hidden';
    }

    // Функция закрытия
    function closeModal(id) {
      document.getElementById(id).style.display = 'none';
      document.body.style.overflow = 'auto';
    }

    // Закрытие по клику на крестик
    document.querySelectorAll('.close').forEach(closeBtn => {
      closeBtn.addEventListener('click', function () {
        const modal = this.closest('.modal');
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
      });
    });

    // Закрытие по клику вне окна
    window.addEventListener('click', function (event) {
      if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
        document.body.style.overflow = 'auto';
      }
    });








document.addEventListener('DOMContentLoaded', function() {
    const config = {
        depth: 120,
        modifier: 1.2,
        rotate: 45,
        centerScale: 1.1,
        sideScale: 0.8,
        slideShadows: true,
        stretch: '20%',
        animationDuration: 600,
        maxVisible: 5
    };

    const coverflow = document.querySelector('.coverflow');
    const prevBtn = document.querySelector('.coverflow-prev');
    const nextBtn = document.querySelector('.coverflow-next');
    const dotsContainer = document.querySelector('.coverflow-dots');
    const zoomOverlay = document.querySelector('.coverflow-zoom-overlay');
    const zoomImage = document.querySelector('.zoom-image');
    const clientName = document.querySelector('.client-name');
    const reviewDate = document.querySelector('.review-date');
    const closeZoom = document.querySelector('.close-zoom');

    const reviewsData = Array.from({length: 18}, (_, i) => ({
        id: i + 1,
        image: `images/review/отзыв${i + 1}.jpeg`,
        name: `Клиент ${i + 1}`,
        date: new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000).toLocaleDateString('ru-RU'),
        alt: `Отзыв клиента ${i + 1}`
    }));

    let currentIndex = 1; // Старт с 2-го отзыва
    let items = [];
    let dots = [];
    let isAnimating = false;

    function initCoverflow() {
        reviewsData.forEach((review, index) => {
            const item = document.createElement('div');
            item.className = 'review-item';
            item.dataset.index = index;
            item.innerHTML = `<img src="${review.image}" alt="${review.alt}">`;

            if (config.slideShadows) {
                item.style.boxShadow = '0 15px 35px rgba(0,0,0,0.2)';
            }

            item.addEventListener('click', () => openZoomViewer(index));
            coverflow.appendChild(item);
            items.push(item);
        });

        reviewsData.forEach((_, index) => {
            const dot = document.createElement('div');
            dot.className = 'coverflow-dot';
            if (index === currentIndex) dot.classList.add('active');
            dot.addEventListener('click', () => goToIndex(index));
            dotsContainer.appendChild(dot);
            dots.push(dot);
        });

        arrangeCoverflow();
    }

    function arrangeCoverflow() {
        if (isAnimating) return;
        isAnimating = true;

        const halfVisible = Math.floor(config.maxVisible / 2);

        items.forEach((item, index) => {
            const distance = index - currentIndex;
            const absDistance = Math.abs(distance);

            if (absDistance <= halfVisible) {
                const angle = distance * config.rotate;
                const zOffset = -absDistance * config.depth;
                const xOffset = distance * (220 + parseStretch(config.stretch));
                const scale = index === currentIndex ? config.centerScale : Math.max(config.sideScale, 1 - (absDistance * 0.15));
                const opacity = 1 - (absDistance * 0.2);

                item.style.display = 'block';
                item.style.transition = `transform ${config.animationDuration}ms cubic-bezier(0.25, 0.46, 0.45, 0.94)`;
                item.style.transform = `
                    translateX(${xOffset}px) 
                    translateZ(${zOffset}px) 
                    rotateY(${angle}deg)
                    scale(${scale})
                `;
                item.style.opacity = opacity;
                item.style.zIndex = config.maxVisible - absDistance;
                item.style.filter = index === currentIndex ? 'none' : 'brightness(0.9)';
            } else {
                item.style.display = 'none';
            }
        });

        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });

        setTimeout(() => {
            isAnimating = false;
        }, config.animationDuration);
    }

    function parseStretch(value) {
        if (typeof value === 'number') return value;
        if (typeof value === 'string' && value.includes('%')) {
            return parseInt(value) * 2.5;
        }
        return 0;
    }

    function goToIndex(index) {
        if (index < 0) index = items.length - 1;
        if (index >= items.length) index = 0;

        currentIndex = index;
        arrangeCoverflow();
    }

    function openZoomViewer(index) {
        const review = reviewsData[index];
        zoomImage.src = review.image;
        zoomImage.alt = review.alt;
        clientName.textContent = review.name;
        reviewDate.textContent = review.date;
        zoomOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeZoomViewer() {
        zoomOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    prevBtn.addEventListener('click', () => goToIndex(currentIndex - 1));
    nextBtn.addEventListener('click', () => goToIndex(currentIndex + 1));
    closeZoom.addEventListener('click', closeZoomViewer);

    document.addEventListener('keydown', function(e) {
        if (zoomOverlay.classList.contains('active')) {
            if (e.key === 'Escape') closeZoomViewer();
        } else {
            if (e.key === 'ArrowLeft') goToIndex(currentIndex - 1);
            if (e.key === 'ArrowRight') goToIndex(currentIndex + 1);
        }
    });

    let touchStartX = 0;
    let touchEndX = 0;

    coverflow.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    }, {passive: true});

    coverflow.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    }, {passive: true});

    function handleSwipe() {
        const threshold = 50;
        const diff = touchStartX - touchEndX;

        if (diff > threshold) {
            goToIndex(currentIndex + 1);
        } else if (diff < -threshold) {
            goToIndex(currentIndex - 1);
        }
    }

    initCoverflow();
});

