module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
		'react/jsx-no-target-blank': 'off',
		'react/prop-types': 'off',
		'react/react-in-jsx-scope': 'off',
		semi: ['error', 'always'],
		'no-var': 'error',
		'prefer-const': 'error',
		'no-undef': 'error',
		'no-unused-vars': 'error',
		// "space-in-parens": ["error", "always"],
		'object-curly-spacing': ['error', 'always'],
		'array-bracket-spacing': ['error', 'always'],
		'space-unary-ops': 2,
		quotes: ['warn', 'single'],
		'jsx-quotes': ['warn', 'prefer-double'],
		eqeqeq: 2,
		indent: ['error', 2, { SwitchCase: 1 }],
		'arrow-spacing': ['error', { before: true, after: true }],
		'no-console': 'warn',
		'func-style': ['error', 'expression'],
		'prefer-arrow-callback': ['error', { allowNamedFunctions: false }],
		'arrow-body-style': ['error', 'as-needed'],
		'arrow-parens': ['error', 'always'],
		'space-infix-ops': ['error'],
		'space-before-function-paren': ['error', 'never'],
		'react-refresh/only-export-components': [
			'warn',
			{ allowConstantExport: true },
		],
	}
}
