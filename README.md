# gatsby-plugin-html-minifier

A Gatsby plugin to easily minify HTML file

## Installation

With npm:

```bash
npm install --save gatsby-plugin-html-minifier html-minifier
```

Or with Yarn:

```bash
yarn add gatsby-plugin-html-minifier html-minifier
```

## Usage

In your `gatsby-config.js` file, load in the plugin along with an object of any `<html>` attributes you want to add. Example:

```javascript
module.exports = {
    plugins: [
        {
            resolve: 'gatsby-plugin-html-minifier',
            options: {
                caseSensitive: false,
                collapseBooleanAttributes: false,
                useShortDoctype: false
            }
        }
    ]
};
```
