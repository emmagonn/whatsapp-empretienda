(function () {
  const observer = new MutationObserver(() => {
    const el = document.querySelector('.checkout_payment-result-item-info-description');
    if (el && el.textContent.includes("Whatsapp")) {
      el.innerHTML = 'Mandar comprobante a <a href="https://wa.me/5491123872258" target="_blank">WhatsApp</a>, con Número de Compra y dirección del Correo Argentino.';
      observer.disconnect();
    }
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
})();
