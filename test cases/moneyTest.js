import {formatCurrency} from '../scripts/utils/money.js';

console.log('test suite:formatCurrency')
console.log('convert cents into dollers')

if (formatCurrency(20000)==='200.00'){
    console.log('passed')
}else(console.log('failed'))

console.log('works with zeors')

if(formatCurrency(0.0)==='0.00'){
    console.log('passed')}
else(console.log('failed'))  

console.log('works with zeors')

if(formatCurrency(0)==='0.00'){
    console.log('passed')}
else(console.log('failed'))  

console.log('Math round works?')
    
if(formatCurrency(2000.5)==='20.01'){
    console.log('passed')}
else(console.log('failed'))  
if(formatCurrency(2000.4)==='20.01'){
    console.log('passed')}
else(console.log('failed'))  
    


