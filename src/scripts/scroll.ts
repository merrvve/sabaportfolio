// src/scripts/scroll.ts

document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.section');
    const options = {
      threshold: 0.1
    };
  
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          handleImageScaling(entry.target);
        } else {
          entry.target.classList.remove('visible');
        }
      });
    }, options);
  
    sections.forEach(section => {
      observer.observe(section);
    });
  
    function handleImageScaling(section: Element) {
      const img = section.querySelector('img');
      if (img) {
        section.classList.add('scaled');
        img.addEventListener('transitionend', () => {
          section.classList.remove('scaled');
        }, { once: true });
      }
    }
  });
  