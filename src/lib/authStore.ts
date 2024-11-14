import { writable } from 'svelte/store';
import { supabase } from '../supabase';

interface User {
	id: string;
	email: string;
}

export const user = writable<User | null>(null);

// Function to check authentication status
export const checkAuth = async () => {
	const {
		data: { session }
	} = await supabase.auth.getSession();
	user.set(session ? (session.user as User) : null);
};

// Function to log out
export const handleLogout = async () => {
	await supabase.auth.signOut();
	user.set(null);
	window.location.href = '/login';
};
