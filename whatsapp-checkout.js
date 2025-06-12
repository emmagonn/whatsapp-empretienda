(function () {
  const observer = new MutationObserver(() => {
    const title = Array.from(document.querySelectorAll("h3, h2, strong")).find(el =>
      el.textContent.trim().toLowerCase().startsWith("datos para transferencia")
    );

    if (title && !title.innerHTML.includes("wa.me")) {
      title.innerHTML = 'Datos para transferencia - <a href="https://wa.me/5491123872258" target="_blank" style="color:#007bff;text-decoration:underline;">Whatsapp</a>';
      observer.disconnect();
    }
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
})();
