import React, { useState } from 'react';
import './App.css';  // Import App.css for styling

// Dynamically require images from the directory
function importAll(r) {
  return r.keys().map(r);
}

const imagesLivingRoom = importAll(require.context('../public/images/living_room', false, /\.(png|jpe?g|svg)$/));
const imageskitchen = importAll(require.context('../public/images/kitchen', false, /\.(png|jpe?g|svg)$/));
const imagesbathroom = importAll(require.context('../public/images/bathroom', false, /\.(png|jpe?g|svg)$/));
const imagesstudy = importAll(require.context('../public/images/study', false, /\.(png|jpe?g|svg)$/));
const imagesBedroom = importAll(require.context('../public/images/bedroom', false, /\.(png|jpe?g|svg)$/));
const imageshallwaym = importAll(require.context('../public/images/hallway', false, /\.(png|jpe?g|svg)$/));

const categories = [
  { name: 'Living Room', images: imagesLivingRoom },
  { name: 'Kitchen', images: imageskitchen },
  { name: 'Bathroom', images: imagesbathroom },
  { name: 'Study', images: imagesstudy },
  { name: 'Bedroom', images: imagesBedroom },
  { name: 'Hallway', images: imageshallwaym },
];

const ImageGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  return (
    <div>
      <h1>AYMOBSAN CATALOGUE</h1>
      <div className="category-selector">
        {categories.map((category) => (
          <button
            key={category.name}
            onClick={() => setSelectedCategory(category)}
            className={category.name === selectedCategory.name ? 'active' : ''}
          >
            {category.name}
          </button>
        ))}
      </div>

      <div className="image-gallery">
        {selectedCategory.images.map((image, index) => (
          <React.Fragment key={index}>
            <img
              src={image}
              alt={`image-${index}`}
              style={{ margin: '100px', width: '100vw', height: '100vh' }}
            />
            {index < selectedCategory.images.length - 1 && (
              <div className="divider"></div> /* Add divider between images */
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
