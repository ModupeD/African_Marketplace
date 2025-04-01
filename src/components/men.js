import React, { useState } from "react";
import Modal from "react-modal";
import "./Men.css";
// import "./Men.css";
import heroImage from "../assets/men/Trad Wear.png";

// Import product images - using only available images
import africanStyle from "../assets/men/African.jpeg";
import traditionalStyle from "../assets/men/traditional.jpeg";
import taylorStyle from "../assets/men/Taylor Bankz.jpeg";
import brownStyle from "../assets/men/Brown.jpeg";
import asoebiStyle from "../assets/men/Asoebi Styles.jpeg";
import blackAfricanStyle from "../assets/men/Black African.jpeg";
import agbadaStyle from "../assets/men/Agbada.jpeg";
import asoOkeStyle from "../assets/men/Aso Oke.jpeg";

const maleProducts = [
  {
    id: 1,
    name: "African Traditional",
    price: 45.99,
    image: africanStyle,
    description: "Traditional African men's attire with modern styling",
    category: "traditional"
  },
  {
    id: 2,
    name: "Traditional Wear",
    price: 39.99,
    image: traditionalStyle,
    description: "Contemporary African fashion for the modern man",
    category: "modern"
  },
  {
    id: 3,
    name: "Blue Outfit",
    price: 49.99,
    image: taylorStyle,
    description: "Classic African traditional wear with cultural significance",
    category: "traditional"
  },
  {
    id: 4,
    name: "Brown Collection",
    price: 42.99,
    image: brownStyle,
    description: "Modern African-inspired fashion with traditional elements",
    category: "modern"
  },
  {
    id: 5,
    name: "Asoebi Style",
    price: 47.99,
    image: asoebiStyle,
    description: "Timeless African design with contemporary comfort",
    category: "classic"
  },
  {
    id: 6,
    name: "Black African Style",
    price: 34.99,
    image: blackAfricanStyle,
    description: "Comfortable casual wear with African patterns",
    category: "casual"
  },
  {
    id: 7,
    name: "Agbada Collection",
    price: 52.99,
    image: agbadaStyle,
    description: "Sophisticated formal wear with African design elements",
    category: "formal"
  },
  {
    id: 8,
    name: "Aso Oke Design",
    price: 37.99,
    image: asoOkeStyle,
    description: "Urban street style with African cultural influences",
    category: "casual"
  }
];

function Men() {
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
       <img 
    src={product.image} 
    alt={product.name}
    className="product-image-direct"
  />
  <div className="middle">
    <button 
      onClick={() => handleProductClick(product)}
      className="product-button"
    >
      ${product.price}
    </button>
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
          <h2>Men's Collection</h2>
        </div>

        <section>
          <div className="organize">
            {maleProducts.slice(0, 4).map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="headingstyle">
            <h2>Best Sellers</h2>
          </div>
          <div className="organize">
            {maleProducts.slice(4, 8).map(product => (
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

export default Men;
