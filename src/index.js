import fruits from './foods';
import { choice, remove } from './helpers';

let food = choice(fruits);
console.log(`I'd like one ${food}, please.`);
console.log(`Here you go: ${food}.`);
console.log(`Delicious!  May I have another?`);

let remaining = remove(fruits, food);
console.log(`I'm sorry, we're all out.  We have ${remaining.length} other foods left.`);