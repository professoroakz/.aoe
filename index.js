#!/usr/bin/env node

/**
 * .aoe - All oktays projects and things
 * Entry point for the aoe package
 */

const fs = require('fs');
const path = require('path');

function readAoeConfig() {
  const aoeFile = path.join(__dirname, '.aoe');
  if (fs.existsSync(aoeFile)) {
    return fs.readFileSync(aoeFile, 'utf8');
  }
  return null;
}

function main() {
  console.log('.aoe - All oktays projects and things');
  const config = readAoeConfig();
  if (config) {
    console.log('Config:', config.trim());
  }
}

module.exports = { readAoeConfig, main };

if (require.main === module) {
  main();
}
