const { readData, writeData } = require('../utils/fileHandler');

function getAllRecipes() {
    return readData();
}

function getRecipeById(id) {
    const recipes = readData();
    return recipes.find(recipe => recipe.id == id);
}

function addRecipe(newRecipe) {
    const recipes = readData();
    newRecipe.id = recipes.length ? recipes[recipes.length - 1].id + 1 : 1;
    recipes.push(newRecipe);
    writeData(recipes)
    return newRecipe;
}

function updateRecipe(id, updatedData) {
    const recipes = readData();

    const idx = recipes.findIndex(recipe => recipe.id == id);
    if(idx === -1) return null;
    recipes[idx] = { ...recipes[idx], ...updatedData };
    writeData(recipes);
    return recipes[idx];
}

function deleteRecipe(id) {
    let recipes = readData();
    const newRecipes = recipes.filter(recipe => recipe.id != id);
    if(recipes.length === newRecipes.length) return false;
    writeData(newRecipes);
    return true
}

module.exports = {
    getAllRecipes,
    getRecipeById,
    addRecipe,
    updateRecipe,
    deleteRecipe
};