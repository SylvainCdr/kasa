import "./style.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Homepage() {
  const [data, setData] = useState([]);

  // API LINK : https://titi.startwin.fr/logements
  // WEBSITE VIEW LINK : https://www.figma.com/file/qEno0LwL4ZLkWyeY59kxp1/UI-Design-Kasa-FR?type=design&node-id=0-1&mode=design

  useEffect(() => {
    fetch("https://titi.startwin.fr/logements")
      .then((response) => response.json())
      .then((response) => {
        setData(response);
      });
  }, []);

  return (
    <div className="homepage">
      {/* DEBUT HERO */}
      <div className="heroe">
        <div className="heroe__text">
          <img src="/image/hero.webp" alt="hero" className="hero__img" />
        </div>
      </div>
      {/* FIN HERO */}

      {/* DEBUT CARDS */}


        <div>






        </div>




      {/* FIN CARDS */}
    </div>
  );
}

export default Homepage;
