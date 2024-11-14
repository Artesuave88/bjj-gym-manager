<script lang="ts">
	import '../app.css';

	import { onMount } from 'svelte';
	import { checkAuth } from '$lib/authStore';

	// Run the authentication check once on app load
	onMount(() => {
		checkAuth();
	});
</script>

<slot />
