import "./App.css";
import { useState } from "react";
import { food } from "./constants";

import CategoryTitle from "./components/CategoryTitle";
import ImagePicker from "./components/ImagePicker";
import Footer from "./components/Footer";

function App() {
  const [activeCategory, setActiveCategory] = useState("appetizer");
  let { title, foods } = food[activeCategory];

  function viewMenu() {
    document.querySelector(".menu").scrollIntoView({
      behavior: "smooth",
    });
  }

  return (
    <div className="mainContent min-vh-100">
      <header className="logoHeader d-flex flex-column align-items-center justify-content-center">
        <img className="img-fluid logoText" alt="company_logo" src="/images/logoText.png"></img>
        <button type="button" class="btn btn-warning viewMenuBtn mt-5 text-bangers fs-1 px-4" onClick={viewMenu}>View Menu</button>
      </header>
      <div className="row aboutus align-items-center p-5">
        <div className="col-md p-5">
          <img className="img-fluid" alt="boryani_img" src="/images/about_us_biryani.jpeg"></img>
        </div>
        <div className="col-md p-5">
          <div className="header">ABOUT<br></br>toss it up</div>
          <p>We are an authentic Indian restaurant dedicated to serving a delightful array of culinary delights. From sizzling Manchuria and perfectly seasoned Wings to aromatic Biryani and refreshing salads, our menu captures the true essence of Indian cuisine.</p>
          <p>Indulge in our flavorful dishes, crafted with care and infused with traditional spices. Complete your meal with a sweet treat like our delectable Gulab Jamun and quench your thirst with refreshing juices and smoothies.</p>
          <p>Join us at TOSSITUP for a memorable dining experience that will transport you to the vibrant streets of India. Taste the tradition, savor the experience.</p>
        </div>
      </div>
      <main className="container mb-5">
        <div className="text-center">
          <span className="menu text-bangers">MENU</span>
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
      <Footer />
    </div>
  );
}

export default App;
