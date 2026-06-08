function loadComponents() {
  document.querySelectorAll('[data-include]').forEach(async element => {
    const src = element.getAttribute('data-include');
    if (!src) return;

    try {
      const response = await fetch(src);
      if (!response.ok) throw new Error(`Unable to load component: ${src}`);
      element.innerHTML = await response.text();
    } catch (error) {
      console.error(error);
      element.innerHTML = `<div class="component-error">ไม่สามารถโหลดส่วนประกอบ <strong>${src}</strong> ได้</div>`;
    }
  });
}

window.addEventListener('DOMContentLoaded', loadComponents);
