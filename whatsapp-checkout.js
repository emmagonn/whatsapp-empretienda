(function () {
  const observer = new MutationObserver(() => {
    const el = document.querySelector('h4.order_card-info-title');
    if (el && !el.innerHTML.includes("wa.me")) {
      el.innerHTML = 'Datos para transferencia - <a href="https://wa.me/5491123872258" target="_blank" style="color:#007bff;text-decoration:underline;">Whatsapp</a>';
      observer.disconnect();
    }
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
})();
