package.json return 

  "husky": {
    "hooks": {
      "pre-commit": "tsc --noEmit && eslint '*/**/*.{js,ts,tsx}' --quiet"
    }
  },
  "lint-staged": {
    "*.{js,jsx,ts,tsx}": [
      "eslint --fix",
      "git add"
    ]
  },