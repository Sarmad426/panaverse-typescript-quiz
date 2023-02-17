let favorite_fruits: string[] = ["Banana", "Apple", "Mango"];
for (let fruit in favorite_fruits) {
    if (fruit.toLowerCase() === 'apple') {
        console.log(`You Really Like ${fruit}`);
    }
    if (fruit.toLowerCase() === 'banana') {
        console.log(`You Really Like ${fruit}`);
    }
    if (fruit.toLowerCase() === 'mango') {
        console.log(`You Really Like ${fruit}`);
    }
}