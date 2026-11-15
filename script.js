/* ===== AGRANDISSEMENT DES IMAGES ===== */

const lightbox = document.querySelector('#lightbox');
const lightboxImage = lightbox.querySelector('img');

document.querySelectorAll('.artwork-frame').forEach(frame => {
  frame.addEventListener('click', () => {
    const image = frame.querySelector('img');
    lightboxImage.src = frame.dataset.full || image.src;
    lightboxImage.alt = image.alt;
    lightbox.classList.add('is-open');
    lightbox.setAttribute('aria-hidden', 'false');
  });
});

lightbox.addEventListener('click', () => {
  lightbox.classList.remove('is-open');
  lightbox.setAttribute('aria-hidden', 'true');
  lightboxImage.src = '';
});

document.addEventListener('keydown', event => {
  if (event.key === 'Escape') lightbox.click();
});


/* ===== CARROUSEL ===== */

const carouselWindow = document.querySelector('.carousel-window');

document.querySelector('.carousel-arrow.next').addEventListener('click', () => {
  carouselWindow.scrollBy({ left: carouselWindow.clientWidth * 0.72, behavior: 'smooth' });
});

document.querySelector('.carousel-arrow.previous').addEventListener('click', () => {
  carouselWindow.scrollBy({ left: -carouselWindow.clientWidth * 0.72, behavior: 'smooth' });
});


/* ===== TRADUCTIONS ===== */

const translations = {

  fr: {
    nav_discover: "Découvrir", nav_explore: "Explorer", nav_about: "À propos", nav_contact: "Contact",
    hero_title: "Ère de la culture",
    hero_text: "Explorez notre galerie interactive et découvrez l'art des peintures à l'huile durant la mouvance expressionniste, à travers des informations, des anecdotes et des œuvres emblématiques.",
    featured_title: "AFFICHES VEDETTES", expo_title: "LES EXPOSITIONS",
    about_title: "À propos de nous", contact_title: "Contact",
    about_p1: "Fondée en 1996, Dedal des Couleurs est une galerie d'art expressionniste dédiée à la peinture à l'huile.",
    about_p2: "Notre mission est de mettre en lumière nos artistes, de leur offrir une nouvelle visibilité et de faire découvrir au public des univers artistiques et des cultures variés. À travers les nombreuses œuvres exposées dans notre galerie, nous souhaitons offrir une véritable invitation à la découverte et à l'immersion. La plupart de nos œuvres sont également disponibles à la vente.",
    about_p3: "Chaque mercredi, nous organisons des expositions mettant à l'honneur des peintures et des affiches réalisées par nos collaborateurs et par des artistes indépendants.",
    about_p4: "Que vous souhaitiez découvrir nos artistes, acquérir une œuvre ou envisager une collaboration, nous sommes à votre écoute. Pour toute demande ou renseignement, n'hésitez pas à nous contacter via notre formulaire en cliquant sur l'onglet « Contact ».",
    label_firstname: "Prénom", label_lastname: "Nom", label_email: "Adresse mail", label_message: "Message",
    ph_message: "Entrer votre question ou message", newsletter: "Souscrire à la newsletter", send: "Envoyer",
    hours: "Lundi : Fermé<br>Mardi : 10h00-18h00<br>Mercredi : 10h00-19h30<br>Jeudi : 10h00-18h00<br>Vendredi : 10h00-18h00<br>Samedi : 10h00-19h00<br>Dimanche : 10h00-19h00",
    err_email_required: "Veuillez saisir votre adresse mail.",
    err_email: "Adresse mail invalide : elle doit contenir un @ (ex. nom@domaine.fr).",
    err_message: "Veuillez écrire un message.",
    sending: "Envoi…",
    success: "Merci ! Votre message a bien été envoyé."
  },

  en: {
    nav_discover: "Discover", nav_explore: "Explore", nav_about: "About", nav_contact: "Contact",
    hero_title: "The Age of Culture",
    hero_text: "Explore our interactive gallery and discover the art of oil painting during the Expressionist movement, through information, anecdotes and emblematic works.",
    featured_title: "FEATURED POSTERS", expo_title: "THE EXHIBITIONS",
    about_title: "About us", contact_title: "Contact",
    about_p1: "Founded in 1996, Dedal des Couleurs is an expressionist art gallery dedicated to oil painting.",
    about_p2: "Our mission is to showcase our artists, give them new visibility and introduce the public to a variety of artistic worlds and cultures. Through the many works displayed in our gallery, we hope to offer a true invitation to discovery and immersion. Most of our works are also available for sale.",
    about_p3: "Every Wednesday, we host exhibitions celebrating paintings and posters created by our collaborators and by independent artists.",
    about_p4: "Whether you would like to discover our artists, acquire a work or consider a collaboration, we are here for you. For any request or information, feel free to contact us through our form by clicking on the “Contact” tab.",
    label_firstname: "First name", label_lastname: "Last name", label_email: "Email address", label_message: "Message",
    ph_message: "Enter your question or message", newsletter: "Subscribe to the newsletter", send: "Send",
    hours: "Monday: Closed<br>Tuesday: 10:00-18:00<br>Wednesday: 10:00-19:30<br>Thursday: 10:00-18:00<br>Friday: 10:00-18:00<br>Saturday: 10:00-19:00<br>Sunday: 10:00-19:00",
    err_email_required: "Please enter your email address.",
    err_email: "Invalid email address: it must contain an @ (e.g. name@domain.com).",
    err_message: "Please write a message.",
    sending: "Sending…",
    success: "Thank you! Your message has been sent."
  },

  es: {
    nav_discover: "Descubrir", nav_explore: "Explorar", nav_about: "Acerca de", nav_contact: "Contacto",
    hero_title: "La era de la cultura",
    hero_text: "Explora nuestra galería interactiva y descubre el arte de la pintura al óleo durante el movimiento expresionista, a través de información, anécdotas y obras emblemáticas.",
    featured_title: "CARTELES DESTACADOS", expo_title: "LAS EXPOSICIONES",
    about_title: "Sobre nosotros", contact_title: "Contacto",
    about_p1: "Fundada en 1996, Dedal des Couleurs es una galería de arte expresionista dedicada a la pintura al óleo.",
    about_p2: "Nuestra misión es dar a conocer a nuestros artistas, ofrecerles una nueva visibilidad y mostrar al público universos artísticos y culturas diversas. A través de las numerosas obras expuestas en nuestra galería, queremos ofrecer una auténtica invitación al descubrimiento y a la inmersión. La mayoría de nuestras obras también están a la venta.",
    about_p3: "Todos los miércoles organizamos exposiciones que rinden homenaje a pinturas y carteles realizados por nuestros colaboradores y por artistas independientes.",
    about_p4: "Si desea descubrir a nuestros artistas, adquirir una obra o plantear una colaboración, estamos a su disposición. Para cualquier consulta o información, no dude en contactarnos a través de nuestro formulario haciendo clic en la pestaña «Contacto».",
    label_firstname: "Nombre", label_lastname: "Apellido", label_email: "Correo electrónico", label_message: "Mensaje",
    ph_message: "Escriba su pregunta o mensaje", newsletter: "Suscribirse al boletín", send: "Enviar",
    hours: "Lunes: Cerrado<br>Martes: 10:00-18:00<br>Miércoles: 10:00-19:30<br>Jueves: 10:00-18:00<br>Viernes: 10:00-18:00<br>Sábado: 10:00-19:00<br>Domingo: 10:00-19:00",
    err_email_required: "Introduzca su correo electrónico.",
    err_email: "Correo electrónico no válido: debe contener una @ (p. ej. nombre@dominio.es).",
    err_message: "Escriba un mensaje.",
    sending: "Enviando…",
    success: "¡Gracias! Su mensaje ha sido enviado."
  },

  de: {
    nav_discover: "Entdecken", nav_explore: "Erkunden", nav_about: "Über uns", nav_contact: "Kontakt",
    hero_title: "Das Zeitalter der Kultur",
    hero_text: "Entdecken Sie unsere interaktive Galerie und erleben Sie die Kunst der Ölmalerei während der expressionistischen Bewegung – mit Informationen, Anekdoten und emblematischen Werken.",
    featured_title: "AUSGEWÄHLTE PLAKATE", expo_title: "DIE AUSSTELLUNGEN",
    about_title: "Über uns", contact_title: "Kontakt",
    about_p1: "Dedal des Couleurs wurde 1996 gegründet und ist eine expressionistische Kunstgalerie, die der Ölmalerei gewidmet ist.",
    about_p2: "Unsere Mission ist es, unsere Künstlerinnen und Künstler ins Licht zu rücken, ihnen neue Sichtbarkeit zu verleihen und dem Publikum vielfältige künstlerische Welten und Kulturen näherzubringen. Mit den zahlreichen Werken in unserer Galerie möchten wir eine echte Einladung zum Entdecken und Eintauchen schaffen. Die meisten unserer Werke sind auch käuflich zu erwerben.",
    about_p3: "Jeden Mittwoch veranstalten wir Ausstellungen, die Gemälde und Plakate unserer Mitarbeitenden und unabhängiger Künstler würdigen.",
    about_p4: "Ob Sie unsere Künstler entdecken, ein Werk erwerben oder eine Zusammenarbeit anregen möchten – wir stehen Ihnen gern zur Verfügung. Bei Fragen oder für weitere Informationen nutzen Sie bitte unser Formular über den Reiter „Kontakt“.",
    label_firstname: "Vorname", label_lastname: "Nachname", label_email: "E-Mail-Adresse", label_message: "Nachricht",
    ph_message: "Geben Sie Ihre Frage oder Nachricht ein", newsletter: "Newsletter abonnieren", send: "Senden",
    hours: "Montag: Geschlossen<br>Dienstag: 10:00-18:00<br>Mittwoch: 10:00-19:30<br>Donnerstag: 10:00-18:00<br>Freitag: 10:00-18:00<br>Samstag: 10:00-19:00<br>Sonntag: 10:00-19:00",
    err_email_required: "Bitte geben Sie Ihre E-Mail-Adresse ein.",
    err_email: "Ungültige E-Mail-Adresse: Sie muss ein @ enthalten (z. B. name@domain.de).",
    err_message: "Bitte schreiben Sie eine Nachricht.",
    sending: "Wird gesendet…",
    success: "Vielen Dank! Ihre Nachricht wurde gesendet."
  }

};


/* ===== LANGUES ===== */

const languageBox = document.querySelector('.language');
const languageToggle = document.querySelector('.language-toggle');
let lang = 'fr';

function t(key) {
  return translations[lang][key];
}

function setLanguage(newLang) {
  if (!translations[newLang]) return;
  lang = newLang;
  document.documentElement.lang = newLang;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    if (t(el.dataset.i18n) !== undefined) el.textContent = t(el.dataset.i18n);
  });

  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    if (t(el.dataset.i18nHtml) !== undefined) el.innerHTML = t(el.dataset.i18nHtml);
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    if (t(el.dataset.i18nPlaceholder) !== undefined) el.placeholder = t(el.dataset.i18nPlaceholder);
  });

  document.querySelector('#current-lang').textContent = newLang.toUpperCase();

  document.querySelectorAll('.language-menu button').forEach(btn => {
    btn.setAttribute('aria-current', btn.dataset.lang === newLang);
  });

  try { localStorage.setItem('lang', newLang); } catch (e) {}
}

languageToggle.addEventListener('click', event => {
  event.stopPropagation();
  const open = languageBox.classList.toggle('is-open');
  languageToggle.setAttribute('aria-expanded', open);
});

document.addEventListener('click', () => {
  languageBox.classList.remove('is-open');
  languageToggle.setAttribute('aria-expanded', 'false');
});

document.querySelectorAll('.language-menu button').forEach(btn => {
  btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
});


/* ===== FORMULAIRE DE CONTACT (envoi simulé) ===== */

const form = document.querySelector('.contact-form');
const sendButton = form.querySelector('.send-button');
const statusBox = form.querySelector('.form-status');
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function showError(name, key) {
  const box = form.querySelector('[data-error-for="' + name + '"]');
  if (key) {
    box.dataset.i18n = key;
    box.textContent = t(key);
  } else {
    delete box.dataset.i18n;
    box.textContent = '';
  }
  form.elements[name].classList.toggle('invalid', Boolean(key));
}

form.elements.email.addEventListener('input', () => showError('email', ''));
form.elements.message.addEventListener('input', () => showError('message', ''));

form.addEventListener('submit', event => {
  event.preventDefault();

  const email = form.elements.email.value.trim();
  const message = form.elements.message.value.trim();
  let valid = true;

  if (!email) {
    showError('email', 'err_email_required');
    valid = false;
  } else if (!emailPattern.test(email)) {
    showError('email', 'err_email');
    valid = false;
  } else {
    showError('email', '');
  }

  if (!message) {
    showError('message', 'err_message');
    valid = false;
  } else {
    showError('message', '');
  }

  delete statusBox.dataset.i18n;
  statusBox.textContent = '';
  if (!valid) return;

  // Faux envoi : rien n'est transmis ni enregistré
  sendButton.disabled = true;
  sendButton.dataset.i18n = 'sending';
  sendButton.textContent = t('sending');

  setTimeout(() => {
    form.reset();
    sendButton.disabled = false;
    sendButton.dataset.i18n = 'send';
    sendButton.textContent = t('send');
    statusBox.dataset.i18n = 'success';
    statusBox.textContent = t('success');
    setTimeout(() => {
      delete statusBox.dataset.i18n;
      statusBox.textContent = '';
    }, 6000);
  }, 1000);
});


/* ===== LANGUE MÉMORISÉE AU CHARGEMENT ===== */

let savedLang = 'fr';
try { savedLang = localStorage.getItem('lang') || 'fr'; } catch (e) {}
setLanguage(savedLang);