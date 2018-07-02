[![Build Status](https://travis-ci.org/pelevesque/hash-code.svg?branch=master)](https://travis-ci.org/pelevesque/hash-code)
[![Coverage Status](https://coveralls.io/repos/github/pelevesque/hash-code/badge.svg?branch=master)](https://coveralls.io/github/pelevesque/hash-code?branch=master)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

# hash-code

A JavaScript implementation of Java's hashCode method.

## Node Repository

[https://www.npmjs.com/package/@pelevesque/hash-code](https://www.npmjs.com/package/@pelevesque/hash-code)

## Installation

`npm install @pelevesque/hash-code`

## Tests

### Standard Style & Unit Tests

`npm test`

### Standard Style & Unit Tests & Coverage

`npm run cover`

## Usage

```js
const hashCode = require('@pelevesque/hash-code')
const hash = hashCode('rabbit')
// hash === -938645478
```
