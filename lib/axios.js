import Axios from 'axios';

const headers = {
  // 'X-RapidAPI-Key': process.env.RAPID_API_KEY,
  'X-RapidAPI-Key': '30f7809e87msh26e2a091ca5776cp1b94bfjsn6357b40580ec',
  'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
};

export const axios = Axios.create({
  baseURL: 'https://bayut.p.rapidapi.com',
  headers: headers,
});
