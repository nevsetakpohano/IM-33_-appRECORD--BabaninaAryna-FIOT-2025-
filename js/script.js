document.addEventListener('DOMContentLoaded', function() {
    
    const navLinks = document.querySelectorAll('.sidebar-menu a');
    const labSections = document.querySelectorAll('.lab-section');
    
    if (navLinks.length > 0 && labSections.length > 0) {
        function showSection(sectionId) {
            labSections.forEach(section => {
                section.classList.remove('active');
            });
            
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            
            const activeSection = document.getElementById(sectionId);
            if (activeSection) {
                activeSection.classList.add('active');
                
                const activeLink = document.querySelector(`.sidebar-menu a[href="#${sectionId}"]`);
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        }
        
        navLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const sectionId = this.getAttribute('href').substring(1);
                showSection(sectionId);
            });
        });
        
        const firstSection = navLinks[0].getAttribute('href').substring(1);
        showSection(firstSection);
    }
    
    const codeBlocks = document.querySelectorAll('.code-block');
    codeBlocks.forEach(block => {
        block.addEventListener('click', function() {
            const text = this.textContent;
            navigator.clipboard.writeText(text).then(() => {
                alert('Код скопійовано!');
            }).catch(err => {
                console.log('Помилка копіювання:', err);
            });
        });
    });
});