const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const bars = entry.target.querySelectorAll('.skill-fill-front, .skill-fill-back');

      bars.forEach(bar => {
        const finalWidth = bar.getAttribute('data-width');
        bar.style.width = finalWidth;
      });

      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.4 });

observer.observe(document.querySelector('.skill-section'));

const fullname = document.querySelector('.textSpan');

fullname.textContent = '</ Pedro Silva >'