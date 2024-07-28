import { CarProps } from "@/types";

const url = 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '8b8eab352dmsh5248902bf137155p1ad9fdjsn84c68940f800',
		'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com'
	}
};



export async function fetchCars(){
    const headers = {
		'x-rapidapi-key': '8b8eab352dmsh5248902bf137155p1ad9fdjsn84c68940f800',
		'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com'
	}
    const url = 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=carrera';
    const response = await fetch(url,{headers: headers})
    const result = await response.json();
    return result;
}


export const generateCarImageURL = (car: CarProps, angle?:string) => {
    
}


export const calculateCarRent = (city_mpg:number, year:number) => {
    const basePricePerDay = 50;
    const mileageFactor = 0.1;
    const ageFactor = 0.05;
    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;
    const rentalRateDate = basePricePerDay + mileageRate + ageRate
    return rentalRateDate.toFixed(0)
}