import postcss from 'rollup-plugin-postcss';

module.exports = [{
    input: 'src/index.js',
    output: {
        file: 'dist/index.js',
        format: 'umd',
        name: 'youtube'
    }
}, {
    input: 'src/index.scss',
    output: {
        file: 'dist/index.css',
        format: 'es',
    },
    plugins: [
        postcss({
            extract: true
        })
    ]
}
];