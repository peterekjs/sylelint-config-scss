module.exports = {
    extends: 'stylelint-config-standard',
    plugins: [
        'stylelint-scss',
        'stylelint-selector-bem-pattern'
    ],
    rules: {
        'indentation': 4,
        'at-rule-empty-line-before': null,
        'at-rule-no-unknown': null,
        'block-closing-brace-newline-after': 'always',
        'function-url-quotes': 'always',
        'string-quotes': 'single'
    }
}
