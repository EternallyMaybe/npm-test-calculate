module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    // "extends": "airbnb-base",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "rules": {
        "eqeqeq": 0,
        "guard-for-in": 2,
        "indent": ["error", "tab"],
        "no-console": 0,
        "no-tabs": 0,
        "no-caller": 2,
        // "no-undef": 2,
        "no-unused-vars": 2,
        "no-shadow": 2,
        "no-eval": 2,
        "comma-style": [
          2,
          "last"
        ],
        "semi": 0,
        "prefer-arrow-callback": 2,
        "arrow-spacing": 2,
        "object-shorthand": 0,
        "prefer-destructuring": 2,
        "no-eq-null": 0,
        "no-unused-expressions": 0,
        "no-loop-func": 2,
        "dot-notation": 0,
        "no-trailing-spaces": 2,
        "valid-jsdoc": ["error", {
            "requireReturn": false,
            "requireReturnDescription": false,
            "requireReturnType": false
        }]
    }
};