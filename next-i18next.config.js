const path = require('path');

module.exports = {
    react: {
        useSuspense: false
    },
    i18n: {
        defaultLocale: 'en',
        locales: ['en', 'es'],
    },
    localePath: path.resolve('./public/locales'),
}