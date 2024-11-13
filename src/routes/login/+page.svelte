<script lang="ts">
	import { supabase } from '../../supabase';

	let email = '';
	let password = '';
	let error: string | null = null;

	const handleLogin = async () => {
		error = null;

		const { error: loginError } = await supabase.auth.signInWithPassword({
			email,
			password
		});

		if (loginError) {
			error = loginError.message;
		} else {
			// Redirect to the homepage after successful login
			window.location.href = '/';
		}
	};
</script>

<!-- Container for the login form -->
<div class="flex min-h-screen items-center justify-center bg-gray-100">
	<!-- Form Card -->
	<div class="w-full max-w-md rounded-lg bg-white p-8 shadow-md">
		<h1 class="mb-6 text-center text-2xl font-bold text-gray-700">Login</h1>

		<!-- Form -->
		<form on:submit|preventDefault={handleLogin}>
			<div class="mb-4">
				<label for="email" class="mb-2 block font-semibold text-gray-700">Email</label>
				<input
					id="email"
					type="email"
					bind:value={email}
					required
					class="w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
				/>
			</div>

			<div class="mb-6">
				<label for="password" class="mb-2 block font-semibold text-gray-700">Password</label>
				<input
					id="password"
					type="password"
					bind:value={password}
					required
					class="w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
				/>
			</div>

			<!-- Error message -->
			{#if error}
				<p class="mb-4 text-sm text-red-500">{error}</p>
			{/if}

			<!-- Submit Button -->
			<button
				type="submit"
				class="w-full rounded-md bg-indigo-600 py-2 font-semibold text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
			>
				Login
			</button>
		</form>

		<!-- Optionally, add a link to register or forgot password -->
		<div class="mt-4 text-center">
			<p class="text-sm text-gray-600">
				Don't have an account? <a href="/register" class="text-indigo-600 hover:text-indigo-700"
					>Register</a
				>
			</p>
		</div>
	</div>
</div>
