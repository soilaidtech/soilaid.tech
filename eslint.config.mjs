import { dirname } from 'path'
import { fileURLToPath } from 'url'
import { FlatCompat } from '@eslint/eslintrc'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'
import reactPlugin from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
// import jsxA11y from 'eslint-plugin-jsx-a11y';
import globals from 'globals'

// @ts-check

import eslint from '@eslint/js'
// import tseslint from 'typescript-eslint';

const filename = fileURLToPath(import.meta.url)
const baseDirname = dirname(filename)

const compat = new FlatCompat({
	baseDirectory: baseDirname,
})

const eslintConfig = [
	...compat.extends(
		'next/core-web-vitals',
		'next/typescript',
		'plugin:storybook/recommended',
		'airbnb-base',
		'plugin:react/recommended',
		'prettier'
	),
	eslint.configs.recommended,
	{
		ignores: ['!.storybook'],
		rules: {
			indent: 'error',
			'import/no-extraneous-dependencies': [
				'error',
				{
					devDependencies: true,
					optionalDependencies: false,
					peerDependencies: false,
				},
			],
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
			'import/no-named-as-default': 'off',
		},
	},
	{
		files: ['**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}'],
		...reactPlugin.configs.flat.recommended,
		rules: {
			...reactPlugin.configs.flat.recommended.rules,
			'react/jsx-curly-brace-presence': [
				'error',
				{ props: 'never', children: 'never' },
			],
			'react/jsx-props-no-spreading': 'off',
			'react/boolean-prop-naming': 'error',
			'react/no-unknown-property': ['error', { ignore: ['jsx'] }],
			'react/jsx-child-element-spacing': 'error',
			'react/jsx-closing-bracket-location': 'error',
			'react/jsx-max-depth': ['error', { max: 5 }],
			'react/jsx-no-bind': [
				'warn',
				{
					ignoreDOMComponents: false,
					ignoreRefs: false,
					allowArrowFunctions: false,
					allowFunctions: false,
					allowBind: false,
				},
			],
			'react/jsx-no-constructed-context-values': 'error',
			'react/jsx-no-useless-fragment': 'error',
			'react/jsx-pascal-case': 'error',
			'react/sort-prop-types': [
				'warn',
				{
					callbacksLast: true,
					ignoreCase: true,
					requiredFirst: true,
					sortShapeProp: true,
					noSortAlphabetically: false,
					checkTypes: true,
				},
			],
			'react/void-dom-elements-no-children': 'error',
			'react/react-in-jsx-scope': 'off',
		},
		languageOptions: {
			...reactPlugin.configs.flat.recommended.languageOptions,
			globals: {
				...globals.serviceworker,
				...globals.browser,
			},
		},
	},
	{
		files: ['**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}'],
		plugins: { 'react-hooks': reactHooks },
		rules: {
			'react-hooks/rules-of-hooks': 'error',
			'react-hooks/exhaustive-deps': 'warn',
		},
	},
	// {
	//   files: ['**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}'],
	//   ...jsxA11y.flatConfigs.recommended,
	//   languageOptions: {
	//     ...jsxA11y.flatConfigs.recommended.languageOptions,
	//     globals: {
	//       ...globals.serviceworker,
	//       ...globals.browser,
	//     },
	//   },
	// },
	eslintPluginPrettierRecommended,
]

export default eslintConfig
