import axios from 'axios'

export default axios.create({
  baseURL:'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID pCFBplzvvLfvB2NYJE7wdjjbY6oh7-0oGxuzAebrtR0'
  }
});

