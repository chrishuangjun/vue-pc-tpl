// https://eslint.org/docs/user-guide/configuring

module.exports = {
    root: true,
    parserOptions: {
        parser: 'babel-eslint',
    },
    env: {
        browser: true,
    },
    extends: [
        // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
        // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
        'plugin:vue/essential',
        // https://github.com/standard/standard/blob/master/docs/RULES-en.md
        'standard'
    ],
    // required to lint *.vue files
    plugins: ['vue'],
    // add your custom rules here
    rules: {
        'no-throw-literal': 0,   // 允许用字面量{}抛出异常
        'arrow-parens': 0,
        'semi': [2, 'always'],  // 语句强制分号结尾
        'indent': [2, 4, {      // 缩进风格
            'SwitchCase': 1
        }],
        // allow async-await
        'generator-star-spacing': 0,
        // allow debugger during development
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
        'space-before-function-paren': 0,
        'one-var': 0,
        'no-undef': 0,
        'no-control-regex': 'off',
        'no-useless-escape': 'off'
    },
};
