<script lang="ts">
  import BiaisCard from "$lib/BiaisCard.svelte";
  import { writable } from "svelte/store";


  export let data;

  const categories = data.body
  const currentCategory = writable(null);
  function selectCategory(categoryId: number | null) {
    currentCategory.set(categoryId);
  }

</script>
<div class="gap-2 m-4 ">
  <h1>
Liste Des Biais cognitifs</h1>


<hr class="m-4"/>
<p class="p-4">
  Les biais cognitifs représentent des processus de pensée qui conduisent l'esprit humain à aboutir à des conclusions inexactes.
   Présentée ici, une liste de 52 biais répartis en 5 catégories. 
  Le but de ces différentes cartes sont d'aider les équipes de conception à reconnaître leurs propres biais et les différentes inclinaisons qu'ils peuvent produire,
   volontairement ou non, chez les utilisateurs et utilisatrices.
  </p>
</div>
<div class="gap-2 m-4">
  <!-- Add a button to show all categories -->
  <button class="btn variant-filled-primary" on:click={() => selectCategory(null)}>Show All</button>
  {#each categories as category }
  <button class="badge variant-filled" on:click={() => selectCategory(category.id)}>{category.label}</button>
  {/each}
</div>

{#each categories as category }
<div class="p-4 m-4">  
<h2>{category.label}</h2>
  <p>{category.description}</p>
</div> 
{#each category.biais as biais }
{#if $currentCategory === null || $currentCategory === category.id}

    <BiaisCard name={biais.name} categoryId={category.id} id={biais.id} description={biais.description}/>
 {/if}
    {/each}
 
{/each}
