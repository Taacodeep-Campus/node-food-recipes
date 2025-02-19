const recipeService = require('../services/recipesService');

exports.getAllRecipes = (req, res) => {
    res.status(200).json(recipeService.getAllRecipes())
};

exports.getRecipeById = (req, res) => {
    const recipe = recipeService.getRecipeById(req.params.id);
    recipe ? res.status(200).json(recipe): res.status(404).json({ message: "Recipe not found" });
};

exports.addRecipe = (req, res) => {
    const newRecipe = recipeService.addRecipe(req.body);
    res.status(201).json(newRecipe);
};

exports.updateRecipe = (req, res) => {
    const updatedRecipe = recipeService.updateRecipe(req.params.id, req.body);
    updatedRecipe ? res.status(200).json(updatedRecipe) : res.status(404).json({ message: "Recipe not found" });
}

exports.deleteRecipe = (req, res) => {
    recipeService.deleteRecipe(req.params.id)
        ? res.status(200).json({ message: "Recipe Deleted Successfully!" })
        : res.status(404).json({ message: "Recipe not found" });
}
