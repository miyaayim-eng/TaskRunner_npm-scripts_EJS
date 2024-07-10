export const about = async () => {
  const { bar } = await import('../modules/_bar');
  bar();
};
