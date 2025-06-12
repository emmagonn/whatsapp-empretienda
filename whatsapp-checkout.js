(function () {
  const observer = new MutationObserver(() => {
    // Título de sección
    const title = document.querySelectorAll('h4.order__card-info-title')[0];
    if (title && !title.innerHTML.includes("wa.me")) {
      title.innerHTML = 'Datos para transferencia - <a href="https://wa.me/5491123872258" target="_blank" style="color:#007bff;text-decoration:underline;">Whatsapp</a>';
    }

    // Link clickeable al final del párrafo
    document.querySelectorAll('p.order__card-info-text').forEach(p => {
      if (p.textContent.includes('https://wa.me/5491123872258') && !p.innerHTML.includes('<a')) {
        p.innerHTML = '👉 <a href="https://wa.me/5491123872258" target="_blank" style="color:#007bff;text-decoration:underline;">https://wa.me/5491123872258</a>';
      }
    });
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
})();
