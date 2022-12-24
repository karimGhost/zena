const API_KEY = "94044cd2f55546cc9a5703814c9ca1a6";
const date = new Date().toISOString().slice(0, 10);

const requests  ={
    fetchTrending:  `/everything?q=news&from=${date}&sortBy=popularity&apiKey=${API_KEY}`,
    fetchTechnology:  '/everything?' + 'q=Technology&' + `from=${date}+&` + 'sortBy=popularity&' + `apiKey=${API_KEY}`,
    fetchEntertainment:  '/everything?' + 'q=Entertainment&' + `from=${date}+&` + 'sortBy=popularity&' + `apiKey=${API_KEY}`,
    fetchSport: '/everything?' + 'q=Sport&' + `from=${date}+&` + 'sortBy=popularity&' + `apiKey=${API_KEY}`,
    fetchBuisness:  '/everything?' + 'q=Business&' + `from=${date}+&` + 'sortBy=popularity&' + `apiKey=${API_KEY}`,

}

export default requests;

