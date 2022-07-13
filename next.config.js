/** @type {import('next').NextConfig} */
const path = require('path');

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  reactStrictMode: true,
  i18n: {
    locales: ["en", "de"],
    defaultLocale: "de",
  },
  optimizeFonts: true, //
};
