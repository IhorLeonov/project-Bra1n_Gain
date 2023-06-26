import axios from 'axios';

axios.defaults.baseURL = 'https://bra1n-gain-backend.onrender.com';

export const fetchReviews = async () => {
  try {
    const response = await axios.get('/api/reviews');
    const reviews = response.data; // Припустимо, що дані відповіді містяться в ключі "data" об'єкта відповіді
    console.log(reviews);
  } catch (error) {
    console.error(error);
  }
};
