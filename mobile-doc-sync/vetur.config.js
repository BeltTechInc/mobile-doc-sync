// vetur.config.js

module.exports = {

    settings: {
        "vetur.useWorkspaceDependencies": true,
        "vetur.experimental.templateInterpolationService": true
    },

    projects: [
        './mobile-doc-sync/mobile-doc-sync', // shorthand for only root.
        {

            root: './',

            package: './package.json',

            // tsconfig: './tsconfig.json',

            // snippetFolder: './.vscode/vetur/snippets',

            // globalComponents: [
            //    './src/components/**/*.vue'
            //]
        }
    ]
}