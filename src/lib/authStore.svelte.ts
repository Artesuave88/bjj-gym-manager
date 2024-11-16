import { supabase } from '../supabase';

interface User {
	id: string;
	email: string;
}

// Function to check authentication status
class AuthState {
	user = $state<User | null>(null);
}
export const authState = new AuthState();

export const checkAuth = async () => {
	const {
		data: { session }
	} = await supabase.auth.getSession();
	authState.user = session ? (session.user as User) : null;
};

// Function to log out
export const handleLogout = async () => {
	await supabase.auth.signOut();
	authState.user = null;
	window.location.href = '/login';
};
