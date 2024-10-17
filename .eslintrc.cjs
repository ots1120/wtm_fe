module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:prettier/recommended',
    'plugin:vue/essential',
    'eslint:recommended',
    'prettier',
    'prettier/prettier',
  ],
  parserOptions: {
    parser: '@babel/eslint-parser',
    ecmaVersion: 2020,
    sourceType: 'module',
    requireConfigFile: false, // 개별 Babel 설정 파일 없이도 작동하도록 설정
  },
  rules: {
    'import/prefer-default-export': 'off',
    'linebreak-style': 0, // 운영체제마다 개행차이로 생기는 오류
    'no-console': 'off',
    // 'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    // 'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        semi: true,
        useTabs: false,
        tabWidth: 2,
        trailingComma: 'es5',
        printWidth: 80,
        bracketSpacing: true,
        arrowParens: 'always',
        endOfLine: 'lf',
        insertFinalNewline: false, // 파일 끝에 새로운 줄을 강제하지 않음
      },
    ],
    'prefer-arrow-callback': 'off', // eslint-plugin-prettier과 충돌이 일어나는 ESLint core 의 규칙을 비활성화한다.
    'eol-last': 'off', // ESLint에서 마지막 줄바꿈 비활성화
  },
};
