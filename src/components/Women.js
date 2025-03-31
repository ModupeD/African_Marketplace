import React, { useState } from "react";
import Modal from "react-modal";
import "./Home.css";
import "./Women.css";
import heroImage from "../assets/Influencer.png";
import sliverDress from "../assets/women/sliver dress.jpg";
import redAndSilver from "../assets/women/red and silver.jpg";
import peachGold from "../assets/women/peach gold.jpg";
import pinkDress from "../assets/women/Pink.jpeg";
import purpleDress from "../assets/women/Purple.jpg";
import orangeDress from "../assets/women/Orange.jpg";
import greenDress from "../assets/women/Green dress.jpg";
import greenStyle from "../assets/women/Green.jpg";
import goldenPeach from "../assets/women/Golden peach.jpg";
import blueStyle from "../assets/women/Blue.jpeg";
import blackDress from "../assets/women/Black dress.jpg";
import blueDress from "../assets/women/Blue dress.jpg";


// Product data structure
const products = [
  {
    id: 1,
    name: "Silver Elegance Dress",
    price: 30.99,
    image: sliverDress,
    description: "Stunning silver dress with elegant African patterns",
    category: "dresses"
  },
  {
    id: 2,
    name: "Red and Silver Fusion",
    price: 29.99,
    image: redAndSilver,
    description: "Beautiful fusion of red and silver in traditional African design",
    category: "dresses"
  },
  {
    id: 3,
    name: "Peach Gold Elegance",
    price: 34.99,
    image: peachGold,
    description: "Elegant peach and gold dress with modern African styling",
    category: "dresses"
  },
  {
    id: 4,
    name: "Pink African Beauty",
    price: 27.99,
    image: pinkDress,
    description: "Stunning pink dress with traditional African patterns",
    category: "dresses"
  },
  {
    id: 5,
    name: "Purple Majesty",
    price: 32.99,
    image: purpleDress,
    description: "Regal purple dress with African-inspired design",
    category: "dresses"
  },
  {
    id: 6,
    name: "Orange Sunset",
    price: 28.99,
    image: orangeDress,
    description: "Vibrant orange dress with African cultural elements",
    category: "dresses"
  },
  {
    id: 7,
    name: "Green Goddess",
    price: 31.99,
    image: greenDress,
    description: "Elegant green dress with traditional African patterns",
    category: "dresses"
  },
  {
    id: 8,
    name: "Green Harmony",
    price: 26.99,
    image: greenStyle,
    description: "Harmonious green ensemble with African design elements",
    category: "outfits"
  },
  {
    id: 9,
    name: "Golden Peach Delight",
    price: 33.99,
    image: goldenPeach,
    description: "Luxurious golden peach dress with African motifs",
    category: "dresses"
  },
  {
    id: 10,
    name: "Blue Serenity",
    price: 25.99,
    image: blueStyle,
    description: "Serene blue outfit with African cultural elements",
    category: "outfits"
  },
  {
    id: 11,
    name: "Brown Elegance",
    price: 27.99,
    image: blueDress,
    description: "Classic blue ensemble with African design",
    category: "outfits"
  },
  {
    id: 12,
    name: "Black Beauty",
    price: 35.99,
    image: blackDress,
    description: "Stunning black dress with African patterns",
    category: "dresses"
  }
];

function Women() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  const ProductCard = ({ product }) => (
    <div className="container">
      <div className={`box${product.id}`}>
        <div className="middle">
          <button 
            onClick={() => handleProductClick(product)}
            className="product-button"
            aria-label={`View details for ${product.name}`}
          >
            ${product.price}
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="beginning">
      <main>
        <div className="body-begin">
          <img 
            src={heroImage} 
            alt="Ghana traditional fashion showcase" 
            loading="lazy"
          />
        </div>

        <div className="headingstyle">
          <h2>SALES 10% OFF</h2>
        </div>

        <section>
          <div className="organize">
            {products.slice(0, 4).map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="headingstyle">
            <h2>Best Sellers</h2>
          </div>
        </section>
        <section>
          <div className="organize">
            {products.slice(4, 8).map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        <Modal
          isOpen={isModalOpen}
          onRequestClose={handleCloseModal}
          style={{
            content: {
              inset: 120,
              maxWidth: '600px',
              margin: 'auto',
              padding: '2rem',
              borderRadius: '8px',
            },
            overlay: {
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
            }
          }}
        >
          {selectedProduct && (
            <div className="product-modal">
              <button 
                onClick={handleCloseModal}
                className="close-button"
                aria-label="Close modal"
              >
                Back
              </button>
              <h2>{selectedProduct.name}</h2>
              <p>{selectedProduct.description}</p>
              <img 
                src={selectedProduct.image} 
                alt={selectedProduct.name}
                loading="lazy"
              />
              <h4>Price: ${selectedProduct.price}</h4>
              <button 
                className="add-to-cart-button"
                onClick={() => {
                  // Add to cart functionality
                  handleCloseModal();
                }}
              >
                Add to Cart
              </button>
            </div>
          )}
        </Modal>

      </main>
    </div>
  );
}

export default Women;
