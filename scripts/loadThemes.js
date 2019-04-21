'use strict';

const fs = require('fs');
const fsp = require('./fsp');
const { loadYAML } = require('./yaml');

/**
 * On dev mode, sometimes when we read the file the return value of readFile
 * is an empty string. In those cases we need to read the file again
 */
async function readFileRetrying(yamlFilePath) {
    const standardThemeYAML = await fsp.readFile(yamlFilePath, 'utf8');
    if (!standardThemeYAML) {
        return readFileRetrying(yamlFilePath);
    }
    return standardThemeYAML;
}

async function loadTheme(yamlFilePath) {
    const standardThemeYAML = await readFileRetrying(yamlFilePath);
    const standardTheme = await loadYAML(standardThemeYAML);

    const b50ThemeYAML = getb50ThemeYAML(standardThemeYAML, standardTheme);
    const b50Theme = await loadYAML(b50ThemeYAML);

    const b50c25ThemeYAML = getb50c25ThemeYAML(standardThemeYAML, standardTheme);
    const b50c25Theme = await loadYAML(b50c25ThemeYAML);

    return { standardTheme, b50Theme, b50c25Theme };
}

function getb50ThemeYAML(fileContent, standardTheme) {
    const BG = standardTheme.dracula.base[0];
    const b50 = standardTheme.dracula.other[8];
    const regex = new RegExp(BG, 'g');

    return fileContent.replace(regex, b50);
}

function getb50c25ThemeYAML(fileContent, standardTheme) {
    const BG = standardTheme.dracula.base[0];
    const b50c25 = standardTheme.dracula.other[9];
    const regex = new RegExp(BG, 'g');

    return fileContent.replace(regex, b50c25);
}

module.exports = loadTheme;
