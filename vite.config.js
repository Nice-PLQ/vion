import { resolve } from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import Markdown from 'vite-plugin-md';
import hljs from 'highlight.js';

const reg = /<code class="hljs (?:html|css|js|less|json)">([\s\S]*)<\/code>/;
const lineNumber = (md) => {
  const { fence } = md.renderer.rules;
  md.renderer.rules.fence = (...args) => {
    const rawCode = fence(...args);

    const code = reg.exec(rawCode);
    if (!code) return rawCode;

    const lines = code[1].split('\n');
    const lineNumbersCode = [...Array(lines.length - 1)]
      .map((line, index) => `<span class="line-number">${index + 1}</span><br>`).join('');

    const finalCode =
      `<div class="code-wrapper">
        <div class="line-numbers-wrapper">
          ${lineNumbersCode}
        </div>
        ${rawCode}
      </div>`;

    return finalCode;
  };
};

export default defineConfig({
  base: './',
  root: './site',
  server: {
    host: '127.0.0.1',
    port: 8898,
    open: '/docs.html#button',
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '@docs': resolve(__dirname, './docs'),
    },
  },
  build: {
    outDir: '../dist',
    cssTarget: 'chrome61',
    rollupOptions: {
      input: {
        demo: resolve(__dirname, './site/demo.html'),
        docs: resolve(__dirname, './site/docs.html'),
      }
    }
  },
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/],
    }),
    Markdown({
      markdownItOptions: {
        highlight (str, lang) {
          if (lang && hljs.getLanguage(lang)) {
            try {
              return `<pre><code class="hljs ${lang}">${
                hljs.highlight(lang, str, true).value
                }</code></pre>`;
            } catch (e) { }
          }
          return `<pre class="hljs"><code>${str}</code></pre>`;
        }
      },
      markdownItSetup(md) {
        md.use(lineNumber);
      },
    }),
  ],
});
