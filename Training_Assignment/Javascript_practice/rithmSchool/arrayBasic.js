let favouriteFood = ['panipuri', 'samosa', 'noodles', 'biryani'];
console.log(favouriteFood[2]);
favouriteFood[3] = 'Tandoor';
console.log(favouriteFood)
favouriteFood.shift();
console.log(favouriteFood);
formerFavouriteFood = ['bread'];
formerFavouriteFood.unshift('panipuri');
console.log(formerFavouriteFood);
console.log(favouriteFood.push('panipuri'));
favouriteFood.push('pavbhaji');
console.log(favouriteFood);
favouriteFood.unshift('khichadi');
console.log(favouriteFood);

food = [];
console.log(food.pop());

number = [2, 3, 4, 5];
number.splice(1, 1);
console.log(number);

sign = ['alpha', 'delta', 'gamma'];
sign.splice(1, 0, 'beta');
console.log(sign);