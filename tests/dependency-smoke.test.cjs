const { test } = require('node:test');
const assert = require('node:assert/strict');
const postcss = require('postcss');
const tailwind = require('tailwindcss');

test('Tailwind 3 still generates utilities with the patched CSS parser', async () => {
  const result = await postcss([tailwind({
    content: [{ raw: '<div class="flex text-red-500 hover:bg-blue-500 md:grid-cols-2 [&>span]:font-bold"></div>', extension: 'html' }],
    corePlugins: { preflight: false },
  })]).process('@tailwind utilities;', { from: undefined });
  for (const declaration of ['display: flex', 'color:', 'background-color:', 'grid-template-columns:', 'font-weight: 700']) {
    assert.ok(result.css.includes(declaration), declaration);
  }
});
