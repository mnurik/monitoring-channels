module.exports = {
    "parser": "babel-eslint",
    "env": {
        "browser": true,
        "es6": true,
        "jest": true
    },
    "extends": ["eslint:recommended"],
    "parserOptions": {
        "sourceType": "module"
    },
    "rules": {
        "indent": 0,
        "no-mixed-spaces-and-tabs": 0,
        "no-extra-boolean-cast": 0,
        "no-extra-semi": 0,
        "no-unused-vars": 0,
        "no-irregular-whitespace": 0,
        "no-eval": "error",
        "no-unused-vars": 1,
        "semi": 1,
        "linebreak-style": 0
    }
};