#!/usr/bin/env node

const route = process.argv[2];
const mdLinks = require('../src/index.js');

mdLinks.saludar(route);