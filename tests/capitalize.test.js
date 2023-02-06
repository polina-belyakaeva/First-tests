import { capitalize } from "../src/capitalize.js";
import { strict as assert } from 'node:assert';

assert(capitalize('') === '');

assert(capitalize('hello') === 'Hello');
  
console.log('Все тесты пройдены!');
