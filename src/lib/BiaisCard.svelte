<script lang='ts'>
      export let name: string;
      export let description: string;
      export let id: number;
      export let categoryId: number;
    
      function getVariantColor(categoryId: number) {
        const categoryColor: { [key: number]: string } = {
          1: 'variant-glass-surface',
          2: 'variant-glass-primary',
          3: 'variant-glass-secondary',
          4: 'variant-glass-tertiary',
          5: 'variant-glass-success',
        };
        
    
        return categoryColor[categoryId] || 'variant-ghost';
      }
      function getVariantTextColor(categoryId: number) {
        const categoryColor: { [key: number]: string } = {
          1: 'text-surface-900-50-token',
          2: 'text-primary-900-50-token',
          3: 'text-secondary-900-50-token',
          4: 'text-tertiary-900-50-token',
          5: 'text-success-900-50-token',
        };
        return categoryColor[categoryId] || 'variant-ghost'; 
      }
    </script>
    
    <div class="block card card-hover p-4 m-8  {getVariantColor(categoryId)}">
      <header class="card-header"><h3 class=" font-bold {getVariantTextColor(categoryId)}">{name}</h3></header>
      <section class="p-4">{description}</section>
      <footer class="card-footer"><span class="badge variant-filled">{id}</span></footer>
    </div>
    