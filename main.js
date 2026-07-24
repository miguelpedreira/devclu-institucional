// ============================================
// INICIALIZAÇÃO DA BIBLIOTECA AOS (ANIMATE ON SCROLL)
// ============================================
// AOS é uma biblioteca que permite animar elementos quando eles entram na viewport
AOS.init({
    duration: 1000,           // Duração das animações em milissegundos
    easing: 'ease-out-cubic', // Tipo de easing para suavização
    once: true,              // Animação acontece apenas uma vez
    offset: 100              // Offset antes da animação começar
});

// ============================================
// FUNCIONALIDADE DO MENU HAMBURGUER
// ============================================
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

// Toggle do menu quando clicar no hamburger
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Fechar menu quando clicar em um link
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// Fechar menu quando clicar fora do menu
document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    }
});

// ============================================
// CRIAÇÃO DE PARTÍCULAS NO FUNDO
// ============================================
// Esta função cria partículas animadas que flutuam no fundo da página
// para dar um efeito futurístico e dinâmico
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 50; // Número de partículas

    // Loop para criar múltiplas partículas
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        // Posição aleatória horizontal
        particle.style.left = Math.random() * 100 + '%';
        
        // Tamanho aleatório entre 2px e 6px
        const size = Math.random() * 4 + 2;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        
        // Duração da animação aleatória para variedade
        particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
        
        // Delay aleatório para que as partículas não comecem todas juntas
        particle.style.animationDelay = Math.random() * 5 + 's';
        
        // Cor aleatória entre ciano e magenta
        const colors = ['#00f5ff', '#ff00ff', '#8b5cf6'];
        particle.style.background = colors[Math.floor(Math.random() * colors.length)];
        
        particlesContainer.appendChild(particle);
    }
}

// ============================================
// EFEITO DE SCROLL NA NAVBAR
// ============================================
// Adiciona uma classe à navbar quando a página é rolada para baixo
// para dar um efeito de glassmorphism mais intenso
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ============================================
// ANIMAÇÃO DE CONTAGEM DE NÚMEROS
// ============================================
// Esta função anima os números de estatísticas de 0 até o valor final
function animateCounters() {
    const counters = document.querySelectorAll('[data-count]');
    
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-count'));
        const duration = 2000; // Duração da animação em ms
        const step = target / (duration / 16); // Incremento por frame (60fps)
        let current = 0;
        
        const updateCounter = () => {
            current += step;
            if (current < target) {
                counter.textContent = Math.floor(current).toLocaleString();
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target.toLocaleString();
            }
        };
        
        updateCounter();
    });
}

// ============================================
// OBSERVER PARA INICIAR ANIMAÇÃO DE CONTADORES
// ============================================
// Usa IntersectionObserver para detectar quando a seção de estatísticas
// entra na viewport e inicia a animação
const statsSection = document.getElementById('stats');
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounters();
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

statsObserver.observe(statsSection);

// ============================================
// FUNCIONALIDADE DO MODAL DE SUPORTE
// ============================================
const supportBtn = document.getElementById('supportBtn');
const supportModal = document.getElementById('supportModal');
const modalClose = document.getElementById('modalClose');
const supportForm = document.getElementById('supportForm');

// Abre o modal quando o botão é clicado
supportBtn.addEventListener('click', () => {
    supportModal.classList.add('active');
});

// Fecha o modal quando o botão de fechar é clicado
modalClose.addEventListener('click', () => {
    supportModal.classList.remove('active');
});

// Fecha o modal quando clicar fora do conteúdo
supportModal.addEventListener('click', (e) => {
    if (e.target === supportModal) {
        supportModal.classList.remove('active');
    }
});

// Submete o formulário (simulação)
supportForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
    supportModal.classList.remove('active');
    supportForm.reset();
});

// ============================================
// SMOOTH SCROLL PARA LINKS DE NAVEGAÇÃO
// ============================================
// Adiciona smooth scroll aos links da navbar
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ============================================
// EFEITO PARALLAX NO HERO SECTION
// ============================================
// Adiciona um efeito de paralaxe ao fazer scroll na hero section
window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
});

// ============================================
// INICIALIZAÇÃO
// ============================================
// Chama a função de criar partículas quando a página carrega
document.addEventListener('DOMContentLoaded', () => {
    createParticles();
});
