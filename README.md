[![Build Status](https://travis-ci.org/pelevesque/hash-code.svg?branch=master)](https://travis-ci.org/pelevesque/hash-code)
[![Coverage Status](https://coveralls.io/repos/github/pelevesque/hash-code/badge.svg?branch=master)](https://coveralls.io/github/pelevesque/hash-code?branch=master)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

# hash-code

A JavaScript implementation of Java's hashCode method.

## Node Repository

https://www.npmjs.com/package/@pelevesque/hash-code

## Installation

`npm install @pelevesque/hash-code`

## Tests

Command                      | Description
---------------------------- | ------------
`npm test` or `npm run test` | All Tests Below
`npm run cover`              | Standard Style
`npm run standard`           | Coverage
`npm run unit`               | Unit Tests

## Usage

```js
const hashCode = require('@pelevesque/hash-code')
```

```js
const result = hashCode('rabbit')
// result === -938645478
```
