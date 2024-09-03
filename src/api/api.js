import axios from "axios";

export const getCountries = async () => { 
    try {
        const API_ENDPOINT = "https://xcountries-backend.azurewebsites.net/all";
        const response = await axios.get(API_ENDPOINT, {
            headers: {
                "Content-Type": "application/json",
            }
        });
        return response;
    }
    catch(error){
        console.error("Error fetching countries:", error);
        throw error;
    }
}