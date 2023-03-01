const describeCity = (city: string, country: string = "Pakitan"): void => {
    console.log(`${city} is the City of ${country}`);
}
describeCity("Lahore");
describeCity("Karachi");
describeCity("Delhi", "India");
