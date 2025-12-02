// Animações ativadas por scroll
document.addEventListener('DOMContentLoaded', function() {
    // Função para verificar se um elemento está visível na viewport
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Função para verificar se um elemento está parcialmente visível
    function isElementPartiallyInViewport(el) {
        const rect = el.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        const windowWidth = window.innerWidth || document.documentElement.clientWidth;
        
        return (
            rect.bottom >= 0 &&
            rect.right >= 0 &&
            rect.top <= windowHeight &&
            rect.left <= windowWidth
        );
    }

    // Função para animar elementos quando entram na viewport
    function animateOnScroll() {
        const animatedElements = document.querySelectorAll('.animate-fade-in-up');
        
        animatedElements.forEach(function(element) {
            if (isElementPartiallyInViewport(element) && !element.classList.contains('animated')) {
                element.classList.add('animated');
                element.style.animationPlayState = 'running';
            }
        });
    }

    // Inicialmente, pausar todas as animações exceto as do hero
    const animatedElements = document.querySelectorAll('.animate-fade-in-up');
    animatedElements.forEach(function(element) {
        // Verificar se o elemento está na secção hero
        const heroSection = element.closest('.hero');
        if (!heroSection) {
            element.style.animationPlayState = 'paused';
            element.style.opacity = '0';
        }
    });

    // Executar animação inicial
    animateOnScroll();

    // Adicionar listener para o evento de scroll
    window.addEventListener('scroll', animateOnScroll);
    
    // Adicionar listener para redimensionamento da janela
    window.addEventListener('resize', animateOnScroll);
});

// Função para adicionar efeito de hover suave nos cartões
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.feature-card, .testimonial-card, .step-card');
    
    cards.forEach(function(card) {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
            this.style.transition = 'all 0.3s ease';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
});

// Função para animar contadores nas estatísticas
document.addEventListener('DOMContentLoaded', function() {
    function animateCounters() {
        const counters = document.querySelectorAll('.stat-item h3');
        
        counters.forEach(function(counter) {
            if (isElementPartiallyInViewport(counter) && !counter.classList.contains('counted')) {
                counter.classList.add('counted');
                const target = parseInt(counter.textContent.replace(/\D/g, ''));
                const suffix = counter.textContent.replace(/\d/g, '');
                let current = 0;
                const increment = target / 50;
                
                const timer = setInterval(function() {
                    current += increment;
                    if (current >= target) {
                        current = target;
                        clearInterval(timer);
                    }
                    counter.textContent = Math.floor(current) + suffix;
                }, 30);
            }
        });
    }

    function isElementPartiallyInViewport(el) {
        const rect = el.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        
        return (
            rect.bottom >= 0 &&
            rect.top <= windowHeight
        );
    }

    window.addEventListener('scroll', animateCounters);
    animateCounters(); // Executar uma vez no carregamento
});

