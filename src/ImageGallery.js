import React from 'react';

const categories = {
  living_room: ['4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg'],
};

const ImageGallery = () => {
    return (
        <div>
            <h1>Product Image Gallery</h1>

            {/* Loop over categories */}
            {Object.keys(categories).map((category) => (
                <div key={category}>
                    <h2>{category}</h2>
                    <div className="image-gallery">
                        {categories[category].map((image, index) => (
                            <div key={index} className="image-item">
                                <img
                                    src={`${process.env.PUBLIC_URL}/images/${category}/${image}`}
                                    alt={`Product in ${category} ${index + 1}`}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ImageGallery;
