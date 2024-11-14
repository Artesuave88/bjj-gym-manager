<script lang="ts">
	import { supabase } from '../supabase';
	import { onMount } from 'svelte';

	interface User {
		id: string;
		email: string;
	}

	let user: User | null = null;

	// Function to check authentication status
	const checkAuth = async () => {
		const {
			data: { session }
		} = await supabase.auth.getSession();
		if (!session) {
			// Redirect to login page if not authenticated
			onMount(() => {
				window.location.href = '/login';
			});
		} else {
			user = session.user as User; // Set user if authenticated
		}
	};

	// Function to log out
	const handleLogout = async () => {
		await supabase.auth.signOut();
		window.location.href = '/login'; // Redirect to login after logout
	};

	// Run the authentication check on page load
	checkAuth();
</script>

<h1>Welcome to the Home Page</h1>

{#if user}
	<p>Welcome back, {user.email}!</p>
	<!-- Logout Button -->
	<button on:click={handleLogout} class="rounded bg-red-500 px-4 py-2 text-white hover:bg-red-600">
		Logout
	</button>
{:else}
	<button on:click={handleLogout} class="rounded bg-red-500 px-4 py-2 text-white hover:bg-red-600">
		Logout
	</button>
	<p>Loading...</p>
{/if}
