import plugin from 'tailwindcss/plugin';

const trumpPlugin = plugin(({ theme, addVariant }) => {
  const trumpName = theme<string>('trumpName') || 'trump';

  addVariant(trumpName, '&&');
});

export default trumpPlugin;
