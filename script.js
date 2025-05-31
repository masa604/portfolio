document.addEventListener('DOMContentLoaded', function() {
    // Hamburger Menu
    const hamburger = document.getElementById('hamburger');
    const navbarLinks = document.getElementById('navbarLinks');
    
    hamburger.addEventListener('click', function() {
        navbarLinks.classList.toggle('active');
    });
    
    // Theme Switcher
    const themeToggle = document.getElementById('themeToggle');
    const icon = themeToggle.querySelector('i');
    
    // Verifica o tema salvo ou preferência do sistema
    const savedTheme = localStorage.getItem('theme') || 
                      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    
    // Aplica o tema salvo
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        icon.classList.replace('fa-moon', 'fa-sun');
    }
    
    themeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        
        // Alterna o ícone e salva a preferência
        if (document.body.classList.contains('dark-mode')) {
            icon.classList.replace('fa-moon', 'fa-sun');
            localStorage.setItem('theme', 'dark');
        } else {
            icon.classList.replace('fa-sun', 'fa-moon');
            localStorage.setItem('theme', 'light');
        }
    });      // Fecha o menu quando um link é clicado (para mobile)
    document.querySelectorAll('.navbar-links a').forEach(link => {
        link.addEventListener('click', (e) => {
            navbarLinks.classList.remove('active');
            
            // Melhoria na navegação para links de âncora
            if(link.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                const targetId = link.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 100, // Ajusta o scroll para considerar o header fixo
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // Garantir que os links acadêmicos funcionem corretamente
    document.querySelectorAll('.academic-link').forEach(link => {
        link.addEventListener('click', (e) => {
            window.location.href = link.getAttribute('href');
        });
    });
});