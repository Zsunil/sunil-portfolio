/**
 * Sunil Kumar S — Portfolio Interactive Scripts
 * Stack: Modern Vanilla JavaScript (ES6+), Native Dialog API, IntersectionObserver
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Dynamic Year
  const yearEl = document.getElementById('currentYear');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // 2. Mobile Navigation Toggle
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
      navToggle.innerHTML = isOpen 
        ? '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"/></svg>'
        : '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 6h16M4 12h16M4 18h16"/></svg>';
    });

    // Close mobile nav on click outside or link click
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
        navToggle.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 6h16M4 12h16M4 18h16"/></svg>';
      });
    });
  }

  // 3. Active Nav Link on Scroll
  const sections = document.querySelectorAll('section[id], header[id]');
  const navItems = document.querySelectorAll('.nav-link');

  const navObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navItems.forEach((link) => {
            if (link.getAttribute('href') === `#${id}`) {
              link.classList.add('active');
            } else {
              link.classList.remove('active');
            }
          });
        }
      });
    },
    {
      rootMargin: '-20% 0px -70% 0px',
    }
  );

  sections.forEach((sec) => navObserver.observe(sec));

  // 4. Reveal-on-Scroll Animations with Fail-Safe Visibility
  const revealElements = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px 80px 0px', threshold: 0.05 }
    );

    revealElements.forEach((el) => revealObserver.observe(el));

    // Fail-safe: ensure all elements are visible after 1.2s regardless of scroll
    setTimeout(() => {
      revealElements.forEach((el) => el.classList.add('visible'));
    }, 1200);
  } else {
    // Fallback for browsers without IntersectionObserver
    revealElements.forEach((el) => el.classList.add('visible'));
  }

  // 5. Skills Category Filter Tabs
  const tabBtns = document.querySelectorAll('.tab-btn');
  const skillCards = document.querySelectorAll('.skill-category-card');

  tabBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      tabBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;

      skillCards.forEach((card) => {
        if (filter === 'all' || card.dataset.category === filter) {
          card.style.display = 'block';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 10);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(10px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 200);
        }
      });
    });
  });

  // 6. Toast Notification Manager
  const toast = document.getElementById('toast');
  const toastMsg = document.getElementById('toastMsg');
  let toastTimeout;

  function showToast(message) {
    if (!toast || !toastMsg) return;
    toastMsg.textContent = message;
    toast.classList.add('show');
    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
      toast.classList.remove('show');
    }, 3500);
  }

  // 7. Copy Email to Clipboard
  const copyEmailBtns = document.querySelectorAll('.btn-copy-email');
  copyEmailBtns.forEach((btn) => {
    btn.addEventListener('click', async (e) => {
      e.preventDefault();
      const email = btn.dataset.email || 'sunilram26042003@gmail.com';
      try {
        await navigator.clipboard.writeText(email);
        showToast('✓ Email address copied to clipboard!');
      } catch (err) {
        // Fallback for older browsers
        const textarea = document.createElement('textarea');
        textarea.value = email;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        showToast('✓ Email address copied to clipboard!');
      }
    });
  });

  // 8. Native Dialog Modal for Private Repo Request
  const requestModal = document.getElementById('requestModal');
  const modalProjectName = document.getElementById('modalProjectName');
  const modalSubjectInput = document.getElementById('modalSubjectInput');
  const modalCloseBtn = document.getElementById('closeModalBtn');
  const requestBtns = document.querySelectorAll('.btn-request-access');

  if (requestModal) {
    requestBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        const projectName = btn.dataset.project || 'Project';
        if (modalProjectName) modalProjectName.textContent = projectName;
        if (modalSubjectInput) {
          modalSubjectInput.value = `Access Request & Case Study Inquiry: ${projectName}`;
        }
        requestModal.showModal();
        document.body.style.overflow = 'hidden';
      });
    });

    const closeModal = () => {
      requestModal.close();
      document.body.style.overflow = '';
    };

    if (modalCloseBtn) {
      modalCloseBtn.addEventListener('click', closeModal);
    }

    // Light dismiss (click backdrop)
    requestModal.addEventListener('click', (e) => {
      const dialogDimensions = requestModal.getBoundingClientRect();
      if (
        e.clientX < dialogDimensions.left ||
        e.clientX > dialogDimensions.right ||
        e.clientY < dialogDimensions.top ||
        e.clientY > dialogDimensions.bottom
      ) {
        closeModal();
      }
    });

    requestModal.addEventListener('cancel', () => {
      document.body.style.overflow = '';
    });
  }

  // 9. Interactive Contact Form -> Mailto Dispatcher
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('senderName')?.value.trim();
      const email = document.getElementById('senderEmail')?.value.trim();
      const subject = document.getElementById('senderSubject')?.value.trim() || 'Portfolio Inquiry';
      const message = document.getElementById('senderMessage')?.value.trim();

      if (!name || !email || !message) {
        showToast('⚠️ Please fill in all required fields.');
        return;
      }

      const bodyText = `Hi Sunil,\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}\n\nSent from your portfolio website.`;
      const mailtoUrl = `mailto:sunilram26042003@gmail.com?subject=${encodeURIComponent(
        `[Portfolio] ${subject}`
      )}&body=${encodeURIComponent(bodyText)}`;

      // Feedback toast
      showToast('🚀 Opening your email client to send message...');

      setTimeout(() => {
        window.location.href = mailtoUrl;
      }, 400);
    });
  }

  // 10. Modal Form Dispatcher
  const modalForm = document.getElementById('modalRequestForm');
  if (modalForm) {
    modalForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('modalName')?.value.trim();
      const email = document.getElementById('modalEmail')?.value.trim();
      const project = modalProjectName?.textContent || 'Selected Project';
      const notes = document.getElementById('modalNotes')?.value.trim() || '';

      if (!name || !email) {
        showToast('⚠️ Please enter your name and email.');
        return;
      }

      const mailtoUrl = `mailto:sunilram26042003@gmail.com?subject=${encodeURIComponent(
        `[Private Repo Request] ${project} — from ${name}`
      )}&body=${encodeURIComponent(
        `Hi Sunil,\n\nI would like to request access / discuss the case study for ${project}.\n\nRequester: ${name}\nEmail: ${email}\n\nAdditional Notes:\n${notes}\n`
      )}`;

      showToast('🚀 Launching email to send request...');
      if (requestModal) {
        requestModal.close();
        document.body.style.overflow = '';
      }
      setTimeout(() => {
        window.location.href = mailtoUrl;
      }, 400);
    });
  }
});
