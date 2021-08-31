import React from "react";
import "./Home.css";
import pic from "./../components/Influencer.png";

function Home() {
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
              <div class="boxOne">
                {" "}
                <div class="middle">
                  <button>$9.99</button>{" "}
                </div>
              </div>
            </div>
            <div class="container">
              <div class="boxTwo">
                {" "}
                <div class="middle">
                  <button>$9.99</button>
                </div>
              </div>
            </div>
            <div class="container">
              <div class="boxThree">
                {" "}
                <div class="middle">
                  <button>$9.99</button>
                </div>
              </div>
            </div>
          </div>

          <div class="reorganize">
            <div class="container">
              <div class="boxFour">
                {" "}
                <div class="middle">
                  <button>$9.99</button>
                </div>
              </div>
            </div>
            <div class="container">
              <div class="boxFive">
                {" "}
                <div class="middle">
                  <button>$9.99</button>
                </div>
              </div>
            </div>
            <div class="container">
              <div class="boxSix">
                {" "}
                <div class="middle">
                  <button>$9.99</button>
                </div>
              </div>
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
            <div class="container">
              <div class="boxSeven">
                <div class="middle">
                  <button>$9.99</button>
                </div>
              </div>
            </div>
            <div class="container">
              <div class="boxNine">
                <div class="middle">
                  <button>$9.99</button>
                </div>
              </div>
            </div>
          </div>
          <div class="stylish">
            <div class="container">
              <div class="boxEleven">
                <div class="middle">
                  <button>$9.99</button>
                </div>
              </div>
            </div>
            <div class="container">
              <div class="boxTwelve">
                <div class="middle">
                  <button>$9.99</button>
                </div>
              </div>
            </div>
          </div>
          <div class="stylish">
            <div class="container">
              <div class="boxEight">
                <div class="middle">
                  <button>$9.99</button>
                </div>
              </div>
            </div>

            <div class="container">
              <div class="boxTen">
                <div class="middle">
                  <button>$9.99</button>
                </div>
              </div>
            </div>
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

export default Home;
