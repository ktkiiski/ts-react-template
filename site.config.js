/**
 * Configuration for all the HTML web pages
 * that will be generated.
 */
module.exports = {
    /**
     * The name of the web app. Should include only
     * letters, number, and dashes.
     */
    appName: 'broilerplate',
    /**
     * The AWS region to which the web app will be deployed.
     */
    region: 'us-east-1',
    /**
     * The folder containing all the source files for your app.
     */
    sourceDir: 'src',
    /**
     * Icon file for your app that is used to generate favicons and mobile-compatible
     * icons. The path is relative to the source directory.
     */
    iconFile: 'images/broilerplate.png',
    // Available stages and their configuration
    stages: {
        /**
         * The primary public production version of the app.
         */
        'prod': {
            // Domain where the HTML pages are hosted
            siteDomain: 'broilerplate.kii.ski',
            // Domain where all the indefinitely-cached static assets are hosted
            assetsDomain: 'broilerplate.static.kii.ski',
        },
        /**
         * The development version of the app.
         */
        'dev': {
            // Domain where the HTML pages are hosted
            siteDomain: 'broilerplate-dev.kii.ski',
            // Domain where all the indefinitely-cached static assets are hosted
            assetsDomain: 'broilerplate-dev.static.kii.ski',
        }
    },
    // Web page configuration
    pages: [{
        title: 'Broilerplate',
        file: 'index.pug',
        scripts: ['index.ts'],
    }, {
        title: 'Page not found!',
        file: 'error.pug',
        scripts: ['index.ts'],
    }],
};
