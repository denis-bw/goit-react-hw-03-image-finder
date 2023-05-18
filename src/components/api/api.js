import axios from 'axios';

export const api = async (value, page=1) => {

        const searchParams = new URLSearchParams({
            "key": "34967967-988d5eee0052f5ca84597e552",
            "q": value,
            "image_type": 'photo',
            "orientation": 'horizontal',
            "safesearch": true,
            "per_page": 12,
            'page': page,
        })
        
        const url = `https://pixabay.com/api/?${searchParams}`;

        return await axios.get(url).then(response => {
            return response.data;
        })
        .catch(error => {
            throw new Error(error);
        })

     }