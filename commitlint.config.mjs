export default {
	extends: ['@commitlint/config-conventional'],
	rules: {
		'subject-case': [
			2,
			'never',
			['sentence-case', 'start-case', 'pascal-case', 'upper-case'],
		],
		'type-enum': [
			2,
			'always',
			[
				'feat', // new feature
				'fix', // bug fix
				'docs', // documentation changes
				'style', // formatting, missing semi-colons, etc
				'refactor', // code change that neither fixes a bug nor adds a feature
				'perf', // performance improvements
				'test', // adding or updating tests
				'chore', // build process or auxiliary tool changes
			],
		],
	},
}
// export default Configuration;
