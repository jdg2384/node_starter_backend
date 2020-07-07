require('dotenv').config();

const server = require('../server.js')
const { expect } = require('chai');
const request = require('supertest');

global.expect = expect;
global.request = request;
global.server = server;