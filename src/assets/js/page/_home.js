export const home = async () => {
  const { foo } = await import('../modules/_foo');
  foo();
};
