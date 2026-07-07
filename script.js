/**
 * Jacopo & Paolo Trasporti - Main Script
 */

document.addEventListener('DOMContentLoaded', () => {
  // --- GESTIONE MODALE CTA PRINCIPALE ---
  const modalOverlay = document.getElementById('cta-modal');
  const openModalButtons = document.querySelectorAll('.js-open-modal');
  const closeModalButton = document.getElementById('js-close-modal');
  
  // Elementi per Focus Trapping nella modale (Accessibilità)
  const focusableElementsString = 'button, a, [tabindex="0"]';
  let focusableElements = [];
  let firstFocusableElement = null;
  let lastFocusableElement = null;

  function updateFocusableElements() {
    if (!modalOverlay) return;
    focusableElements = Array.from(modalOverlay.querySelectorAll(focusableElementsString))
      .filter(el => !el.hasAttribute('disabled') && el.getAttribute('tabindex') !== '-1');
    
    if (focusableElements.length > 0) {
      firstFocusableElement = focusableElements[0];
      lastFocusableElement = focusableElements[focusableElements.length - 1];
    }
  }

  function openModal(e) {
    if (e) e.preventDefault();
    if (!modalOverlay) return;
    
    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden'; // Blocca scroll della pagina sotto
    updateFocusableElements();
    
    // Sposta il focus sul primo elemento della modale
    if (firstFocusableElement) {
      setTimeout(() => firstFocusableElement.focus(), 50);
    }

    // Aggiunge event listener per tastiera (ESC e Tab)
    document.addEventListener('keydown', handleKeyDown);
  }

  function closeModal() {
    if (!modalOverlay) return;
    
    modalOverlay.classList.remove('active');
    document.body.style.overflow = ''; // Ripristina scroll
    
    // Rimuove event listener per tastiera
    document.remove('keydown', handleKeyDown);

    // Riporta il focus sul bottone che ha aperto la modale (se possibile)
    const triggerBtn = document.querySelector('.js-open-modal');
    if (triggerBtn) triggerBtn.focus();
  }

  function handleKeyDown(e) {
    // Chiudi con tasto ESC
    if (e.key === 'Escape') {
      closeModal();
      return;
    }

    // Gestione del Tab (Focus Trapping)
    if (e.key === 'Tab') {
      if (e.shiftKey) { // Shift + Tab (indietro)
        if (document.activeElement === firstFocusableElement) {
          lastFocusableElement.focus();
          e.preventDefault();
        }
      } else { // Tab (avanti)
        if (document.activeElement === lastFocusableElement) {
          firstFocusableElement.focus();
          e.preventDefault();
        }
      }
    }
  }

  // Event Listeners per Apertura Modale
  openModalButtons.forEach(btn => {
    btn.addEventListener('click', openModal);
  });

  // Event Listeners per Chiusura Modale
  if (closeModalButton) {
    closeModalButton.addEventListener('click', closeModal);
  }

  if (modalOverlay) {
    // Chiudi cliccando fuori dalla modale
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) {
        closeModal();
      }
    });
  }


  // --- GESTIONE FORM CONTATTI CON FALLBACK MAILTO ---
  const contactForm = document.getElementById('contact-form');
  
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      const actionAttr = contactForm.getAttribute('action');
      
      // Controlla se l'action è ancora impostata sul valore predefinito o è vuota
      // In tal caso, eseguiamo il fallback mailto per evitare che l'invio fallisca
      if (!actionAttr || actionAttr === '#' || actionAttr.includes('YOUR_FORMSPREE_ID_HERE')) {
        e.preventDefault(); // Blocca l'invio standard del form
        
        // Estrai i valori compilati dall'utente
        const nome = document.getElementById('form-name').value;
        const telefono = document.getElementById('form-phone').value;
        const email = document.getElementById('form-email').value;
        const comune = document.getElementById('form-location').value;
        const servizio = document.getElementById('form-service').value;
        const messaggio = document.getElementById('form-message').value;
        
        // Costruisci il corpo dell'email
        const subject = encodeURIComponent(`Richiesta di Sopralluogo/Preventivo - ${nome}`);
        const body = encodeURIComponent(
          `Dati Cliente:\n` +
          `- Nome: ${nome}\n` +
          `- Telefono: ${telefono}\n` +
          `- Email: ${email}\n` +
          `- Comune/Zona: ${comune}\n` +
          `- Servizio Richiesto: ${servizio}\n\n` +
          `Dettaglio Richiesta:\n${messaggio}\n\n` +
          `---\nRichiesta inviata dal sito web Jacopo & Paolo Trasporti`
        );
        
        // Destinatario fisso
        const emailDest = 'JacPaoTrasporti@gmail.com';
        
        // Crea il link mailto e reindirizza
        const mailtoUrl = `mailto:${emailDest}?subject=${subject}&body=${body}`;
        
        // Mostra un avviso visivo all'utente
        alert("Grazie per aver compilato i dati! Ora si aprirà il tuo programma di posta elettronica per confermare l'invio a JacPaoTrasporti@gmail.com.");
        
        window.location.href = mailtoUrl;
      }
      // Se l'action contiene un URL valido (es. Formspree), lascia che il browser gestisca l'invio AJAX/POST nativo
    });
  }


  // --- DETECTOR SCROLL E ANIMAZIONE SOTTILI ---
  // Aggiunge una classe al body quando l'utente scrolla (utile per dare effetti all'header)
  const header = document.querySelector('.header-main');
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        header.style.boxShadow = 'var(--shadow-md)';
        header.style.padding = '0.5rem 0';
      } else {
        header.style.boxShadow = 'var(--shadow-sm)';
        header.style.padding = '0.85rem 0';
      }
    });
  }
});
