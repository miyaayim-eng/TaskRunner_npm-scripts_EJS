export const hoge = () => {
  const target = document.querySelector('.js-test-js-hoge');
  if (target === null) return;
  target.style.color = 'blue';
};
