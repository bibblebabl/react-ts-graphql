module.exports = {
  parser: "@typescript-eslint/parser", 
  extends: [
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint", 
    "plugin:prettier/recommended" 
  ],
  "rules": {
    "semi": [2, "never"],
    "prettier/prettier": [
      "error",
      {
        "trailingComma": "none",
        "singleQuote": true,
        "printWidth": 120,
        "semi": false
      }
    ],
  }
}
