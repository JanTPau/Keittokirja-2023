const dropdown = document.getElementById('recipe-dropdown');
const recipeContent = document.getElementById('recipe-section');

dropdown.addEventListener('change', function() {
    const selectedValue = dropdown.value;
    const recipeDivs = document.querySelectorAll('.recipe-content');
    recipeDivs.forEach(function(div) {
        div.style.display = 'none';
    });

    const selectedRecipe = document.getElementById(selectedValue);
    selectedRecipe.style.display = 'block';
});

const initialRecipe = document.getElementById('ingredients');
initialRecipe.style.display = 'block';