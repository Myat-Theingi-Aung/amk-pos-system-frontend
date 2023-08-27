import { createContext, useContext, useState } from 'react';
import axios from '../axios';

const AuthContent = createContext({
	user: null,
	setUser: () => {},
	csrfToken: () => {}
});

export const AuthProvider = ({ children }) => {
	const [user, _setUser] = useState(
		JSON.parse(localStorage.getItem('user')) || null
	);

	// set user to local storage
	const setUser = (user) => {
		console.log(user)
		console.log('setuser fio')
		if (user) {
			localStorage.setItem('user', JSON.stringify(user));
		} else {
			localStorage.removeItem('user');
		}
		_setUser(user);
	};

	// csrf token generation for guest methods
	const csrfToken = async () => {
		try {
			const response = await axios.get('http://localhost:8000/sanctum/csrf-cookie');
			return response.data.csrf_token; // Make sure to use the correct key for the CSRF token
		} catch (error) {
			console.error('Error fetching CSRF token:', error);
			return null;
		}
	};

	return (
		<AuthContent.Provider value={{ user, setUser, csrfToken }}>
			{children}
		</AuthContent.Provider>
	);
};

export const useAuth = () => {
	return useContext(AuthContent);
};
