/* =========================================================
   MOBILE MENU
========================================================= */

const menuButton = document.querySelector('.menu-button');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileLinks = document.querySelectorAll('.mobile-menu a');

function setMenu(open) {
  if (!mobileMenu || !menuButton) return;

  mobileMenu.classList.toggle('open', open);

  menuButton.setAttribute(
    'aria-expanded',
    String(open)
  );

  mobileMenu.setAttribute(
    'aria-hidden',
    String(!open)
  );

  document.body.classList.toggle(
    'menu-open',
    open
  );
}

menuButton?.addEventListener('click', () => {
  setMenu(
    !mobileMenu.classList.contains('open')
  );
});

mobileLinks.forEach(link => {
  link.addEventListener('click', () => {
    setMenu(false);
  });
});


/* =========================================================
   ACTIVE DESKTOP NAVIGATION
========================================================= */

const sections = [
  ...document.querySelectorAll('main section[id]')
];

const desktopLinks = [
  ...document.querySelectorAll(
    '.desktop-nav a[data-section]'
  )
];

const observer = new IntersectionObserver(
  (entries) => {

    entries.forEach(entry => {

      if (!entry.isIntersecting) return;

      desktopLinks.forEach(link => {

        link.classList.toggle(
          'active',
          link.dataset.section === entry.target.id
        );

      });

    });

  },
  {
    rootMargin: '-35% 0px -55% 0px',
    threshold: 0
  }
);

sections.forEach(section => {
  observer.observe(section);
});


/* =========================================================
   CONTACT FORM
========================================================= */

const contactForm =
  document.getElementById('contactForm');

const formNote =
  document.getElementById('formNote');

contactForm?.addEventListener(
  'submit',
  (event) => {

    event.preventDefault();

    const data =
      new FormData(contactForm);

    const name =
      data.get('name')
        ?.toString()
        .trim() || 'there';

    if (formNote) {

      formNote.textContent =
        `Thanks, ${name} ✦ The form is ready to connect to your email service.`;

    }

    contactForm.reset();

  }
);
