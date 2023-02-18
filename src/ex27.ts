let favorite_fruits: string[] = ["Banana", "Apple", "Mango", "Strawberries", "Orange"];
favorite_fruits.map((fruit: string): void => {
    if (fruit.toLowerCase() === 'apple') {
        console.log(`You Really Like ${fruit}`);
    }
    if (fruit.toLowerCase() === 'banana') {
        console.log(`You Really Like ${fruit}`);
    }
    if (fruit.toLowerCase() === 'mango') {
        console.log(`You Really Like ${fruit}`);
    }
    if (fruit.toLowerCase() === 'strawberries') {
        console.log(`You Really Like ${fruit}`);
    }
    if (fruit.toLowerCase() === 'orange') {
        console.log(`You Really Like ${fruit}`);
    }
})

