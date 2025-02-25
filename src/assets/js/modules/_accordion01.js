// 必要最小限でシンプル
export const accordion01 = () => {
  const accordion = document.querySelectorAll('.js-accordion');

  accordion.forEach((selected) => {
    selected.addEventListener('click', () => {
      const header = selected.parentElement;
      const content = header.nextElementSibling;
      header.classList.toggle('is-active');
      content.classList.toggle('is-show');
    });
  });
};
