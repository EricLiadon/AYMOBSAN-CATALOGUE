const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
app.use(cors());

// Define the folder where the images are stored (public/images)
const imageFolder = path.join(__dirname, 'public/images');

// Route to get all image files from the folder
app.get('/images', (req, res) => {
    const categories = {};

    fs.readdir(imageFolder, (err, folders) => {
        if (err) {
            return res.status(500).send('Error reading folder.');
        }

        folders.forEach((folder) => {
            const folderPath = path.join(imageFolder, folder);
            if (fs.statSync(folderPath).isDirectory()) {
                const files = fs.readdirSync(folderPath).filter(file => file.endsWith('.jpg'));
                categories[folder] = files;
            }
        });

        res.json(categories);
    });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
