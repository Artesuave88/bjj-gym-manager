<script lang="ts">
	import { handleLogout } from '$lib/authStore.svelte';
	import { Button } from '$lib/components/ui/button';
</script>

<nav class="flex items-center justify-end bg-gray-800 p-4 text-white">
	<Button on:click={handleLogout} class="bg-blue-800 text-white hover:bg-blue-400">Logout</Button>
</nav>
