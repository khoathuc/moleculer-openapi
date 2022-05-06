const navSlide = () => { 
    const burger = document.querySelector('.burger-bar');
    const nav = document.querySelector('.nav-links');
    const container = document.querySelector('.container');
    burger.addEventListener('click', () => {
        container.classList.toggle('fade-active');
        nav.classList.toggle('nav-active');
        
    });
}

navSlide();