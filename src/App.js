import "./App.css";
import { useState } from "react";
import { food } from "./constants";

import CategoryTitle from "./components/CategoryTitle";
import ImagePicker from "./components/ImagePicker";

function App() {
  const [activeCategory, setActiveCategory] = useState("appetizer");
  let { title, foods } = food[activeCategory];

  return (
    <div className="mainContent min-vh-100">
      <header className="logoHeader d-flex align-items-center justify-content-center">
        <img className="img-fluid logoText" src="/images/logoText.png"></img>
      </header>
      <main className="container mb-5">
        <div className="text-center">
          <span className="menu">MENU</span>
        </div>
        <ImagePicker
          onImageClick={setActiveCategory}
          activeCategory={activeCategory}
        />
        <CategoryTitle category={title} />
        <div className="row row-cols-1 row-cols-md-2 g-5">
          {foods.map((x, idx) => (
            <div className="col" key={idx}>
              <div className="d-flex flex-row justify-content-between fw-bold">
                <span>{x.name}</span>
                <span>${x.price}</span>
              </div>
              <div>{x.description}</div>
              {x.spice && (
                <div className="d-flex flex-row justify-content-end mt-2">
                  {x.spice.map((s) => (
                    <span className={s + " spicePill"} key={idx + s}>
                      {s}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </main>
      <footer className="d-flex flex-column justify-content-center align-items-center pb-3">
        <div className="brand">TOSS IT UP</div>
        <div>1233 Dillon Rd, Burlington</div>
        <div>ON L7M 1K6</div>
        <div className="mt-2">Phone - 905 497 5677</div>
      </footer>
    </div>
  );
}

export default App;
