function calculateHeights() {
    const header = document.querySelector('header');
    const image = document.querySelector('.main-photo');
    const text = document.querySelector('.main-about-me');
    
    const headerHeight = header.offsetHeight;
    const textHeight = text.offsetHeight;
    
    const windowHeight = window.innerHeight;
    const imageHeight = windowHeight - headerHeight - textHeight;
    
    image.style.height = `${imageHeight}px`;
    
}

window.addEventListener('load', calculateHeights);
window.addEventListener('resize', calculateHeights);