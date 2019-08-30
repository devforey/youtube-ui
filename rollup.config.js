import postcss from 'rollup-plugin-postcss';
import copy from 'rollup-plugin-copy';

module.exports = [{
    input: 'src/index.js',
    output: {
        file: 'dist/index.js',
        format: 'umd',
        name: 'youtube'
    },
    plugins: [
        copy({
            targets: [{
                src: 'dist/index.js', dest: 'docs', rename: 'youtube.js'
            }]
        })
    ]
}, {
    input: 'src/index.scss',
    output: {
        file: 'dist/index.css',
        format: 'es',
    },
    plugins: [
        postcss({
            extract: true
        }),
        copy({
            targets: [{
                src: 'dist/index.css', dest: 'docs', rename: 'youtube.css'
            }]
        })
    ]
}];