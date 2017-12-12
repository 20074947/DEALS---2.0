module.exports = {
    "env": {
        "node": true,
        "mocha": true,
        "browser": true
    },
    "extends": "eslint:recommended",
    "rules": {
        "no-console": "off",
        "indent": [
            "error",
            "tab"
        ],
            "plugins": [
        "json"
    ],
    "globals": {
   "angular": true
},
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "double"
        ],
        "semi": [
            "error",
            "always"
        ]
    }
};