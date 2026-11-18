// Mobile Navigation Toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});

// Toast Notification Helper
const toast = document.getElementById('toast');
let toastTimeout;

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
}

// Add to Bag Button Feedback
document.querySelectorAll('.order-btn').forEach(button => {
  button.addEventListener('click', () => {
    const productName = button.getAttribute('data-product');
    showToast(`☕ Added "${productName}" to your bag!`);
  });
});

// Contact / Newsletter Form Submission
const contactForm = document.getElementById('contact-form');
const formFeedback = document.getElementById('form-feedback');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  formFeedback.textContent = `Thanks, ${name}! Check your inbox for your 15% welcome code: BREWLY15.`;
  showToast('🎉 Welcome code BREWLY15 unlocked!');
  contactForm.reset();
});
