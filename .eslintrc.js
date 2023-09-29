// eslint-disable-next-line no-undef
module.exports = {
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  "overrides": [],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "plugins": [
    "react",
    "@typescript-eslint"
  ],
  "rules": {
    '@typescript-eslint/prefer-includes': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/consistent-type-assertions': 'off',
    '@typescript-eslint/strict-boolean-expressions': 0,
    'react/react-in-jsx-scope': 0,
    'max-len': [2, {
      code: 120,
      ignoreComments: true
    }],
  },
  "settings": {
    "import/resolver": {
      "node": {
        "paths": ["src"]
      }
    }
  }
}
