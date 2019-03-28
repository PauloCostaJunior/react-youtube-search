import axios from 'axios';

const KEY = 'your_key_here';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',    
    params: {
        part:'snippet',
        maxResults: 5,
        key: KEY
    }
});