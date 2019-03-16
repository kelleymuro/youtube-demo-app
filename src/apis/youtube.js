import axios from 'axios';


const KEY = 'AIzaSyAfoYGoqrwKimq8B_c3g820jOo6nlGm-i8';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});
