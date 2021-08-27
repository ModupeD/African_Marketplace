//import React from "react";

import pic from "./../components/Trad Wear.png";

function Profile() {
  return (
    <div class="beginning">
      <div class="source">
        <div class="headingstyle">
          <header>
            <title>Site Title</title>
            <h2>African Market </h2>
            <nav>
              <button>
                <a href="/home">Home</a>
              </button>
              <button>
                <a href="/profile">Profile</a>
              </button>
              <button>
                <a href="/">Checkout</a>
              </button>
            </nav>
          </header>
        </div>
      </div>

      <body>
        <div class="body-begin">
          <img src={pic} />
        </div>
        <div class="headingstyle">
          <header>
            <h2> SALES 10% OFF</h2>
          </header>
        </div>
        <section>
          <div class="organize">
            <div class="container">
              <div class="boxOne">
                <div class="overlay">
                  <button>$9.99</button>
                </div>
              </div>
            </div>
            <div class="boxTwo">
              {" "}
              <h4>$9.99</h4>
            </div>
            <div class="boxThree"> </div>
          </div>

          <div class="reorganize">
            <div class="boxFour">
              {" "}
              <button>$9.99</button>
            </div>
            <div class="boxFive">
              {" "}
              <button>$9.99</button>
            </div>
            <div class="boxSix">
              {" "}
              <button>$9.99</button>
            </div>
          </div>
          <div class="headingstyle">
            <header>
              <h2> Best Sellers</h2>
            </header>
          </div>
        </section>

        <div class="style">
          <div class="stylish">
            <div class="boxSeven"></div>
            <div class="boxNine"></div>
          </div>
          <div class="stylish">
            <div class="boxEleven"></div>
            <div class="boxTwelve"></div>
          </div>
          <div class="stylish">
            <div class="boxEight"></div>
            <div class="boxTen"></div>
          </div>
        </div>

        <footer>
          <div class="foot">
            <h2>Need Help?</h2>
            <p>
              Contact:
              <a href="+1(513)3046167">+1(513)3046167</a>
              <br />
              Email:
              <a href="pizzahome@gmail.com">pizzahome@gmail.com</a>
            </p>
          </div>
        </footer>
      </body>
    </div>
  );
}

export default Profile;
