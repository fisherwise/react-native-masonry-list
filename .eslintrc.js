module.exports = {
    "env": {
        "es6": true,
        "react-native/react-native": true
    },
    "extends": [
        "airbnb",
        "eslint:recommended",
        "anf"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    'parser': 'babel-eslint',
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "react-native"
    ],
    "rules": {
        "react/forbid-prop-types": [0, { "forbid": ["any", "array", "object"] }],
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "react/prop-types": 0,
        "no-use-before-define": ["error", { "variables": false }] // Temporarily disable this. See https://github.com/Intellicode/eslint-plugin-react-native/issues/22
    }
};