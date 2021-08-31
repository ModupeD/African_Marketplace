//import React from "react";

import pic from "./../components/Trad Wear.png";
import "./profile.css";
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
                <a href="/">Add Items</a>
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
              <div class="boxA">
                <div class="overlay">
                  <button>$9.99</button>
                </div>
              </div>
            </div>
            <div class="boxB">
              {" "}
              <h4>$9.99</h4>
            </div>
            <div class="boxC"> </div>
          </div>

          <div class="reorganize">
            <div class="boxD">
              {" "}
              <button>$9.99</button>
            </div>
            <div class="boxE">
              {" "}
              <button>$9.99</button>
            </div>
            <div class="boxF">
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
            <div class="boxG"></div>
            <div class="boxH"></div>
          </div>
          <div class="stylish">
            <div class="boxI"></div>
            <div class="boxJ"></div>
          </div>
          <div class="stylish">
            <div class="boxK"></div>
            <div class="boxL"></div>
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
