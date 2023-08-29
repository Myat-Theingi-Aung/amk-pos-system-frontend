import Axios from 'axios';

const token = await Axios.get('http://localhost:8000/sanctum/csrf-cookie');
const axios = Axios.create({
	baseURL: "http://localhost:8000/api",
	withCredentials: true,
	headers: {
		"Content-Type": "application/json",
		"Accept": "application/json",
		"Authorization": token,
	},
});

export default axios;
