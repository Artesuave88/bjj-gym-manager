<script lang="ts">
	import { authState, handleLogout } from '$lib/authStore.svelte';
	import { Button } from '$lib/components/ui/button';
	import { Card } from '$lib/components/ui/card';
	import NavBar from '../components/NavBar.svelte';

	let name: string | null = null;
	let inputName: string = '';

	const addName = () => {
		name = inputName;
	};
</script>

<NavBar />
<div class="flex min-h-screen items-center justify-center bg-gray-100 p-6">
	<div class="flex min-h-screen flex-col bg-gray-100">
		<Card class="rounded-lg bg-white p-6 shadow-lg">
			<h1 class="text-2xl font-semibold text-gray-700">Welcome, {name || 'Admin'}</h1>
			<p class="mt-2 text-gray-500">This is the admin dashboard.</p>
		</Card>
	</div>
	<!-- Main Content Section -->
	<div class="container mx-auto grid grid-cols-1 gap-6 p-6 md:grid-cols-2 lg:grid-cols-3">
		<!-- Admin Task Cards (example placeholders) -->
		<Card class="rounded-lg bg-white p-6 shadow-lg">
			<h3 class="text-lg font-semibold text-gray-700">User Management</h3>
			<p class="mb-4 text-gray-500">Manage your platform's users and their roles.</p>
			<Button class="w-full">View Users</Button>
		</Card>

		<Card class="rounded-lg bg-white p-6 shadow-lg">
			<h3 class="text-lg font-semibold text-gray-700">Reports</h3>
			<p class="mb-4 text-gray-500">View detailed analytics and performance reports.</p>
			<Button class="w-full">View Reports</Button>
		</Card>

		<Card class="rounded-lg bg-white p-6 shadow-lg">
			<h3 class="text-lg font-semibold text-gray-700">System Settings</h3>
			<p class="mb-4 text-gray-500">Adjust the settings of your platform.</p>
			<Button class="w-full">Configure Settings</Button>
		</Card>
	</div>
</div>
