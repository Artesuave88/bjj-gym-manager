<script lang="ts">
	import { handleLogout } from '$lib/authStore.svelte';
	import { Button } from '$lib/components/ui/button';

	export let links: { name: string; href: string; icon?: string }[] = [];
</script>

<div class="flex h-screen w-64 flex-col bg-indigo-600 text-white">
	<div class="p-6 text-2xl font-bold">Admin Panel</div>
	<nav class="flex-grow">
		{#each links as { name, href, icon }}
			<a {href} class="block items-center space-x-2 px-6 py-3 hover:bg-indigo-500">
				{#if icon}
					<span class="material-icons">{icon}</span>
				{/if}
				<span>{name}</span>
			</a>
		{/each}
	</nav>
	<div class="mx-auto flex w-full items-center justify-center p-6">
		<Button on:click={handleLogout} class="hover:bg-gray-400p bg-gray-800 text-white">Logout</Button
		>
	</div>
</div>
