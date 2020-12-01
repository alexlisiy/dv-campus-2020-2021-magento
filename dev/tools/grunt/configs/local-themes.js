/**
 *  grunt exec:oleksandrlysyi_lumanew_en_us && grunt less:oleksandrlysyi_lumanew_en_us && grunt watch
 */
module.exports = {
    oleksandrlysyi_lumanew_en_us: {
        area: 'frontend',
        name: 'OleksandrLysyi/lumanew',
        locale: 'en_US',
        files: [
            'css/styles-m',
            'css/styles-l'
        ],
        dsl: 'less'
    }
};
