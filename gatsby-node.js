/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// https://www.gatsbyjs.org/docs/debugging-html-builds/#fixing-third-party-modules

const path = require("path");

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
    if (stage === "build-html") {
        actions.setWebpackConfig({
            module: {
                rules: [
                    {
                        test: /scrollreveal/,
                        use: loaders.null()
                    },
                    {
                        test: /animejs/,
                        use: loaders.null()
                    }
                ]
            }
        });
    }

    actions.setWebpackConfig({
        resolve: {
            alias: {
                "@components": path.resolve(__dirname, "src/components"),
                "@pages": path.resolve(__dirname, "src/pages")
            }
        }
    });
};
