<script lang="ts">
  import BiaisCard from "$lib/BiaisCard.svelte";
  export let data;

  const categoriesList = data.body;

   let idToFilter: number | null = null;
// https://upload.wikimedia.org/wikipedia/commons/1/16/The_Cognitive_Bias_Codex_%28French%29_-_John_Manoogian_III_%28jm3%29.svg?uselang=fr

$: filteredCategories = idToFilter ? categoriesList.filter((category) => category.id === idToFilter) : categoriesList


  function getVariantColor(categoryId: number) {
    const categoryColor: { [key: number]: string } = {
      1: "text-surface-600-300-token",
      2: "text-primary-600-300-token",
      3: "text-secondary-600-300-token",
      4: "text-tertiary-600-300-token",
      5: "text-success-600-300-token",
    };

    return categoryColor[categoryId] || "text-surface-600-300-token";
  }


</script>

<div class="page-container">
 
    <section
      class="card border-8 border-surface-900-50-token p-4 mx-auto space-y-4 rounded-none max-w-4xl gap-2 m-2 flex-auto "
    >
      <h1 class="p-2  font-bold">Liste Des Biais cognitifs</h1>

      <p class="p-4 lg:!text-2xl !text-sm md:!text-lg ">
        Les biais cognitifs représentent des processus de pensée qui conduisent
        l'esprit humain à aboutir à des conclusions inexactes.
      </p>
      <p class="p-4 lg:!text-xl !text-sm md:!text-lg ">
        Présentée ici, une liste de 52 biais répartis en 5 catégories. Le but de
        ces différentes cartes sont d'aider les équipes de conception à
        reconnaître leurs propres biais et les différentes inclinaisons qu'ils
        peuvent produire, volontairement ou non, chez les utilisateurs et
        utilisatrices.
      </p>
    </section>

  <section class="gap-2 m-4 grid justify-center">
    <!-- Add a button to show all categories -->
    <button
      class="btn variant-filled-primary md:btn-lg"
      on:click={() => idToFilter = null}>Show All</button
    >
    <div class="grid  lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
      {#each categoriesList as  category}
        <button
          class="btn btn-md md:btn-lg lg:btn-lg sm:btn-xl sm:text-md lg:text-md variant-filled m-2"
          on:click={() => idToFilter = category.id}>{category.label}</button
        >
      {/each}
    </div>
  </section>

  {#each filteredCategories as category (category.id)}
    <div class="p-4 m-4">
      <h2 class={getVariantColor(category.id)}>{category.label}</h2>
      <p>{category.description}</p>
    </div>
    <div class="grid lg:grid-cols-2  md:grid-cols-2 sm:grid-cols-1">
      {#each category.biais as biais}
        <BiaisCard
          name={biais.name}
          categoryId={category.id}
          id={biais.id}
          description={biais.description}
        />
      {/each}
    </div>
  {/each}
</div>

<style>
  .page-container {
    max-width: 100%;
    margin-left: auto;
    margin-right: auto;

  }

  @media (min-width: 768px) {
    .page-container {
    
      max-width: 100%;
    }
  }
  @media (min-width: 1280px) {
    .page-container {
      max-width: 100%;
    }
  }
  @media (min-width: 1024px) {
    .page-container {
      max-width: 1024px;
    }
  }
</style>
