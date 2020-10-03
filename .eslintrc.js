module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: "detect",
    },
    "import/resolver": {
      node: {
        paths: ["src"],
        extensions: [".ts", ".tsx"],
      },
    },
  },
  extends: [
    "airbnb",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended",
  ],
  env: {
    node: true,
    browser: true,
    jest: true,
  },
  rules: {
    "react/jsx-filename-extension": ["error", { extensions: [".tsx"] }],
    "react/jsx-props-no-spreading": "off",
    "react/prop-types": "off",
    "no-use-before-define": "off",
    "import/prefer-default-export": "off",
    "@typescript-eslint/no-use-before-define": ["error"],
    "no-shadow": "off",
    "@typescript-eslint/no-shadow": "error",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "never",
        ts: "never",
        tsx: "never",
      },
    ],
  },
};
