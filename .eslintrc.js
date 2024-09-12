module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
        'prettier',
        'plugin:@typescript-eslint/recommended',
        'plugin:import/typescript',
        'next/core-web-vitals'
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: 'module',
    },
    plugins: [
        'react',
        '@typescript-eslint',
        'no-relative-import-paths',
        'import',
    ],
    globals: {
        JSX: true,
    },
    ignorePatterns: ['assets/**/*'],
    rules: {
        'import/extensions': [
            'error',
            'ignorePackages',
            {
                js: 'never',
                jsx: 'never',
                ts: 'never',
                tsx: 'never',
            },
        ],
        'react/jsx-indent': [0],
        'react/react-in-jsx-scope': 0,
        'react/jsx-key': 2,
        'react/jsx-props-no-spreading': 'off',
        'react/jsx-filename-extension': [
            1,
            {extensions: ['.js', '.jsx', '.ts', '.tsx']},
        ],
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': ['error'],
        'class-methods-use-this': 0,
        'max-classes-per-file': ['error', {ignoreExpressions: true, max: 7}],
        'react/display-name': 0,
        'react/button-has-type': 0,
        'react/prop-types': 0,
        '@typescript-eslint/explicit-function-return-type': 0,
        '@typescript-eslint/explicit-member-accessibility': 0,
        '@typescript-eslint/indent': 0,
        '@typescript-eslint/member-delimiter-style': 0,
        '@typescript-eslint/no-explicit-any': 0,
        '@typescript-eslint/no-var-requires': 0,
        '@typescript-eslint/no-unused-vars': [
            'warn',
            {argsIgnorePattern: '^_'},
        ],
        'no-console': ['error'],
        'import/prefer-default-export': 0,
        'import/no-extraneous-dependencies': 0,
        'global-require': 0,
        'no-shadow': 'off',
        '@typescript-eslint/no-shadow': ['error'],
        'prefer-const': 1,
        'prefer-spread': 1,
        'no-unused-expressions': [
            'error',
            {
                allowShortCircuit: true,
                allowTernary: true,
            },
        ],
        'no-return-assign': 'off',
        'no-underscore-dangle': 'off',
        'react/require-default-props': [
            2,
            {
                ignoreFunctionalComponents: true,
            },
        ],
        'no-param-reassign': [
            'error',
            {
                props: true,
                ignorePropertyModificationsFor: ['state'],
            },
        ],
        'import/order': [
            'error',
            {
                alphabetize: {order: 'asc'},
                groups: ['builtin', 'external', 'internal'],
                pathGroupsExcludedImportTypes: ['react'],
                pathGroups: [
                    {
                        pattern: 'react{-dom,}',
                        group: 'external',
                        position: 'before',
                    },
                    {
                        pattern: 'service/**',
                        group: 'internal',
                        position: 'before',
                    },
                    {
                        pattern: 'views/**',
                        group: 'internal',
                        position: 'before',
                    },
                    {
                        pattern: 'components{/**,*}',
                        group: 'internal',
                        position: 'before',
                    },
                    {
                        pattern: 'context{s,}/**',
                        group: 'internal',
                        position: 'before',
                    },
                    {
                        pattern: './**',
                        group: 'internal',
                        position: 'before',
                    },
                ],
                'newlines-between': 'always',
            },
        ],
        'no-relative-import-paths/no-relative-import-paths': [
            'warn',
            {
                allowSameFolder: true,
                rootDir: 'src',
            },
        ],
    },
    settings: {
        'import/resolver': {
            node: {
                paths: ["."],
                alias: {
                    "@o3": "./"
                },
                extensions: ['.js', '.jsx', '.ts', '.tsx'],
                moduleDirectory: ['node_modules', 'src/'],
            },
        },
    },
};
