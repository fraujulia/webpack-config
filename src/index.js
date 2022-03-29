import consoleLogger from './lib';
import './index.scss';

console.log('Hello!');

alert('Hello all!');
consoleLogger();

async function check() {
    await fetch('https://google.com');
}

check().then(() =>{
console.log('success');
}).catch(() =>{
    console.log('error');
})