// vetur.config.js

module.exports = {
    settings: {
        "vetur.useWorkspaceDependencies": true,
        "vetur.experimental.templateInterpolationService": true,
    },

    projects: [
        "
        // shorthand for only root.
        {
            root: ".",

            package: "./package.json",

            // tsconfig: './tsconfig.json',

            // snippetFolder: './.vscode/vetur/snippets',

            // globalComponents: [
            //    './src/components/**/*.vue'
            //]
        },
    ],
};