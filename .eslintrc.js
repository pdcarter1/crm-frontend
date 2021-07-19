module.exports = {
    "env": {
        "browser": true,
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2015,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],    
    "rules": {
        "indent":[
            "error",
            2
        ],
        "linebreak-style":[
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ]
    }
};