<script lang='ts'>
// Your selected Skeleton theme:
import '@skeletonlabs/skeleton/themes/theme-modern.css';
// This contains the bulk of Skeletons required styles:
import '@skeletonlabs/skeleton/styles/all.css';
// Finally, your application's global stylesheet (sometimes labeled 'app.css')
import '../app.postcss'
import { AppShell } from '@skeletonlabs/skeleton';
import { AppBar } from '@skeletonlabs/skeleton';
import { LightSwitch } from '@skeletonlabs/skeleton';

import Navigation from '$lib/Navigation/Navigation.svelte';
import { Drawer, drawerStore } from '@skeletonlabs/skeleton';
import { page } from '$app/stores';

// Selectively Disable the Sidebar cf https://www.skeleton.dev/blog/how-to-implement-a-responsive-sidebar-drawer
$: classesSidebar = $page.url.pathname === '/about' ? 'w-0' : 'w-0 md:w-64';


function drawerOpen(): void {
	drawerStore.open({});
}

</script>

<Drawer><h2 class="p-4">Navigation</h2>
	<hr /><Navigation /></Drawer>

<AppShell slotSidebarLeft="bg-surface-500/5 {classesSidebar}" slotPageContent="p-4">

	<svelte:fragment slot="header">
    <AppBar >
    <svelte:fragment slot="lead">
    <div class="flex items-center">
        <button class="md:hidden btn btn-sm mr-4" on:click={drawerOpen}>
            <span>
                <svg viewBox="0 0 100 80" class="fill-token w-4 h-4">
                    <rect width="100" height="20" />
                    <rect y="30" width="100" height="20" />
                    <rect y="60" width="100" height="20" />
                </svg>
            </span>
        </button>
        <strong class="text-xl uppercase">Biais</strong> 
    </div>
</svelte:fragment>
<svelte:fragment slot="trail">
  <LightSwitch />
</svelte:fragment>
</AppBar>
  </svelte:fragment>

	<svelte:fragment slot="sidebarLeft">
</svelte:fragment>

	<!-- Router Slot -->
	<slot />
	<!-- ---- / ---- -->
	<svelte:fragment slot="pageFooter"> Page Footer
  </svelte:fragment>

</AppShell>


<slot />
