import { sum, kebabCase } from 'npm:lodash';
import { addTax } from './checkout';

console.log(kebabCase('Hey It Works'));
console.log(addTax(24, 1.2));