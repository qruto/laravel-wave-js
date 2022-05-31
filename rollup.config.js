import babel from '@rollup/plugin-babel';
import typescript from 'rollup-plugin-typescript2';

export default {
    input: './src/wave.ts',
    output: [
        { file: './dist/wave.js', format: 'esm' },
        { file: './dist/wave.common.js', format: 'cjs' },
        { file: './dist/wave.iife.js', format: 'iife', name: 'Echo' },
    ],
    plugins: [
        typescript(),
        babel({
            babelHelpers: 'bundled',
            exclude: 'node_modules/**',
            extensions: ['.ts'],
            presets: ['@babel/preset-env'],
            plugins: [
                ['@babel/plugin-proposal-decorators', { legacy: true }],
                '@babel/plugin-proposal-function-sent',
                '@babel/plugin-proposal-export-namespace-from',
                '@babel/plugin-proposal-numeric-separator',
                '@babel/plugin-proposal-throw-expressions',
                '@babel/plugin-transform-object-assign',
            ],
        }),
    ],
    external: ['laravel-echo'],
};
