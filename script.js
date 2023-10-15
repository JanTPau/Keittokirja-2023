document.addEventListener("DOMContentLoaded", function() {
    const dropdown = document.getElementById("recipe-dropdown");
    const recipeSection = document.getElementById("recipe-section");

    dropdown.addEventListener("change", function() {
        const selectedOption = dropdown.value;
        const recipeText = getRecipeText(selectedOption);
        recipeSection.innerHTML = recipeText;
    });

    function getRecipeText(section) {
        switch (section) {
            case "ingredients":
                return "Ainesosat: (ohjeen määristä tulee noin 3 annosta)";
            case "käristys":
                return "Käristys:\nLeikkaa liha ohuiksi siivuiksi ja paista pienissä erissä keskikovalla lämmöllä padan pohjalla.";
            case "perunamuusi":
                return "Perunamuusi:\nKuori ja pese perunat\nKeitä kypsiksi runsaasti suolatussa vedessä.";
            case "valmistus":
                return "Valmistus:\nLeikkaa liha ohuiksi siivuiksi ja paista pienissä erissä keskikovalla lämmöllä padan pohjalla.";
            default:
                return "";
        }
    }
});