'use strict';

const path = require('path');
const fsp = require('./fsp');
const loadThemes = require('./loadThemes');

const THEME_DIR = path.join(__dirname, '..', 'theme');
const THEME_YAML_FILE = path.join(__dirname, '..', 'src', 'dracula.yml');

function toJSON(theme) {
    return JSON.stringify(theme, null, 4);
}

async function build() {
    if (!(await fsp.exists(THEME_DIR))) {
        await fsp.mkdir(THEME_DIR);
    }

    const { standardTheme, b50Theme } = await loadThemes(THEME_YAML_FILE);
    const standardThemePath = path.join(THEME_DIR, 'dracula.json');
    const b50ThemePath = path.join(THEME_DIR, 'dracula-soft.json');

    await Promise.all([
        fsp.writeFile(standardThemePath, toJSON(standardTheme)),
        fsp.writeFile(b50ThemePath, toJSON(b50Theme)),
    ]);
}

module.exports = {
    build,
};

build();
