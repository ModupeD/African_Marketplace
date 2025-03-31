import React from "react";
import "./Home.css";
import Footer from "./Footer";

function Home() {
  return (
    <div className="beginning">
      <main>
        <div className="body-begin">
          <img 
            src={require("../assets/Influencer.png")} 
            alt="Ghana traditional fashion showcase" 
            loading="lazy"
          />
        </div>

        <div className="headingstyle">
          <h2>Welcome to African Marketplace</h2>
        </div>

        <section>
          <div className="organize">
            <div className="boxOne">
              <h1>Traditional African Fashion</h1>
            </div>
            <div className="boxTwo">
              <h1>Modern African Design</h1>
            </div>
            <div className="boxThree">
              <h1>Cultural Heritage</h1>
            </div>
            <div className="boxFour">
              <h1>Contemporary Style</h1>
            </div>
          </div>
        </section>

        <div className="headingstyle">
          <h2>Featured Collections</h2>
        </div>

        <section>
          <div className="organize">
            <div className="boxFive">
              <h1>Women's Collection</h1>
            </div>
            <div className="boxSix">
              <h1>Men's Collection</h1>
            </div>
            <div className="boxNine">
              <h1>Accessories</h1>
            </div>
            <div className="boxTen">
              <h1>Traditional Wear</h1>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
}

export default Home;
