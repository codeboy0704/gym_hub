
import axios from "axios";
export const options = {
    method: 'GET',
    params: { limit: 10 },
    headers: {
        'X-RapidAPI-Key': '4d74dc5ad5msh231f1ce46632112p19c28ejsn776e2c425e6d',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
};


export async function fetchData(url, options) {
    try {
        const response = await axios.request(url, options);
        const data = await response.data
        return data
    } catch (e) {

    }
}