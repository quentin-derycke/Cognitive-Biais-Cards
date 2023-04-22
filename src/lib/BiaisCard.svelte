<script lang='ts'>
      export let name: string;
      export let description: string;
      export let id: number;
      export let categoryId: number;
    
      function getVariantColor(categoryId: number) {
        const categoryColor: { [key: number]: string } = {
          1: 'variant-ghost-surface',
          2: 'variant-ghost-primary',
          3: 'variant-ghost-secondary',
          4: 'variant-ghost-tertiary',
          5: 'variant-ghost-success',
        };
    
        return categoryColor[categoryId] || 'variant-ghost';
      }
    </script>
    
    <div class="block card card-hover p-4 m-8  {getVariantColor(categoryId)}">
      <header class="card-header"><h3>{name}</h3></header>
      <section class="p-4">{description}</section>
      <footer class="card-footer"><span class="badge variant-filled">{id}</span></footer>
    </div>
    