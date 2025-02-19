# Recipes App

A simple **Recipes App** built with **Node.js** and **Express.js**, using a JSON file as a database to store recipes.

## Features
- Add new recipes
- View all recipes
- Search for recipes
- Update existing recipes
- Delete recipes

## Technologies Used
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework for Node.js
- **JSON File** - Used as a lightweight database

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/Taacodeep-Campus/node-food-recipes.git
   cd node-food-recipes
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the server:
   ```sh
   npm start
   ```

## API Endpoints

### **Get All Recipes**
```http
GET /recipes
```
Returns a list of all recipes.

### **Get a Single Recipe**
```http
GET /recipes/:id
```
Returns details of a specific recipe.

### **Add a New Recipe**
```http
POST /recipes
```
Request Body Example:
```json
{
  "name": "Spaghetti Bolognese",
  "ingredients": ["spaghetti", "ground beef", "tomato sauce"],
  "instructions": "Cook spaghetti and mix with sauce."
}
```

### **Update a Recipe**
```http
PUT /recipes/:id
```
Updates an existing recipe.

### **Delete a Recipe**
```http
DELETE /recipes/:id
```
Deletes a recipe.

## JSON File Structure (Database Example)
```json
[
  {
    "id": 1,
    "name": "Pancakes",
    "ingredients": ["flour", "milk", "eggs", "sugar"],
    "instructions": "Mix ingredients and fry on a pan."
  }
]
```

## Contributing
Feel free to submit issues or pull requests for improvements.

## License
This project is licensed under the ISC License.

