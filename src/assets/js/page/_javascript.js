export const javascript = async () => {
  if (document.body.classList.contains('accordion01')) {
    const { accordion01 } = await import('../modules/_accordion01');
    accordion01();
  }
  if (document.body.classList.contains('accordion02')) {
    const { accordion02 } = await import('../modules/_accordion02');
    accordion02();
  }
  if (document.body.classList.contains('accordion03')) {
    const { accordion03 } = await import('../modules/_accordion03');
    accordion03();
  }
  if (document.body.classList.contains('tab01')) {
    const { tab01 } = await import('../modules/_tab01');
    tab01();
  }
  if (document.body.classList.contains('tab02')) {
    const { tab02 } = await import('../modules/_tab02');
    tab02();
  }
  if (document.body.classList.contains('tab02-2')) {
    const { tab022 } = await import('../modules/_tab02-2');
    tab022();
  }
};
