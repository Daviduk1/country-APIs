const url = 'https://restcountries.com/v2/all'

export const getAllCountries = async () => {
    try {
        let response = await fetch(url); 
        return response.json()
    } catch (error) {
        console.log(error)
    }
}