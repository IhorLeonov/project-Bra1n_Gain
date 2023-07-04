import axios from "axios";

const instance = axios.create({
  baseURL: 'https://bra1n-gain-backend.onrender.com/api/reviews',
});

export const fetchAllReviews = async () =>{
      const response = await instance.get();

      const reviewsNewArray = response.data.map(e => ({
        ...e,
        name: e.owner.name,
        avatarUrl: e.owner.avatarUrl,
        owner: e.owner._id
      }))

      return reviewsNewArray;

  }