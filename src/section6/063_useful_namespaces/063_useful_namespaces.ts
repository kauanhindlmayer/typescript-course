import _ from './module';

const array = [100, 200, 300, 400, 500];

console.log(global.MYGLOBAL);

console.log('sum', _.sum(array));
console.log('min', _.min(array));
console.log('max', _.max(array));
console.log('mean', _.mean(array));
console.log('mul', _.mul(array));
