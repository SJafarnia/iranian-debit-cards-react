import { defineConfig } from 'tsup';

export default defineConfig({
    entry: {
        // Output filename: 'my-library.cjs.js'
        'index': 'src/index.ts',
        // Output filename: 'my-library.esm.js'
        'styles': 'src/components/DebitCard/styles.css',
    },
    format: ['cjs', 'esm'],
    dts: true,
});
