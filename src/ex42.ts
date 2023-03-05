interface CarDetails {
    model_name: string,
    manufacturer: string,
    price: number
    color?: string,
}
const carDetails = (model_name: string, manufacturer: string, price: number, color: string = "No Color given"): CarDetails => {
    const details: CarDetails = {
        model_name,
        manufacturer,
        price,
        color
    }
    return details
}
console.log(carDetails("VXR2021", "TOYOTA", 5500000, "White"))
console.log(carDetails("RMX2023", "SUZUKI", 190000))
console.log(carDetails("NMP2022", "AUDI", 15000000, "BLACK"))