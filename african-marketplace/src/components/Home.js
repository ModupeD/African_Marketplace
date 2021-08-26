import React from "react";
import "./Home.css";

function Home() {
  return (
    <div>
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
                <a href="profile">Profile</a>
              </button>
              <button>
                <a href="/">Add Items</a>
              </button>
            </nav>
          </header>
        </div>
      </div>
      <body>
        <section>
          <div class="organize">
            <div class="boxOne"></div>
            <div class="boxTwo"></div>
            <div class="boxThree"></div>
          </div>

          <div class="reorganize">
            <div class="boxFour"></div>
            <div class="boxFive"></div>
            <div class="boxSix"></div>
          </div>
        </section>
      </body>
    </div>
  );
}

export default Home;
