const express = require('express');
const recipesRoutes = require('./src/routes/recipeRoutes');

const app = express();
const PORT = 4000;

app.use(express.json());
app.use('/api/v1', recipesRoutes);

app.get('/', (req, res) => {
    res.json({
        status: "Available",
        message: "Welcome to our Recipe Api",
        port: PORT
    })
})

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

