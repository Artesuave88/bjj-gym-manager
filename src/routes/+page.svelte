<script lang="ts">
	import { user, handleLogout } from '$lib/authStore';
</script>

<h1>Welcome to the Home Page</h1>

{#if $user}
	<p>Welcome back, {$user.email}!</p>
	<button on:click={handleLogout} class="rounded bg-red-500 px-4 py-2 text-white hover:bg-red-600">
		Logout
	</button>
{:else}
	<p>Loading...</p>
{/if}
