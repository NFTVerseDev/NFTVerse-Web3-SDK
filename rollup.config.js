import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import json from '@rollup/plugin-json';

export default {
    input: './src/index.ts',
    output: {
        file: './dist/index.js',
        format: 'esm',
        sourcemap: true,
    },
    external: ['react', 'react-dom'],
    plugins: [
        commonjs({
            include: /node_modules/,
            requireReturnsDefault: 'auto',
        }),
        typescript({}),
        nodeResolve(),
        json(),
    ],
};
