import React from "react";
import img1 from "../../assets/images/sponsors-2025/1.jpg";
import img2 from "../../assets/images/sponsors-2025/2.jpg";
import "./currSpons.css";

function Spons() {
  const sponsdata = [
    { id: 1, pic: img1, link: "https://www.kaalibilli.in/", name: "Kali Billi" },
    { id: 2, pic: img2, link: "https://kweenmedia.in/", name: "KWEEN Media" },

    // { id: 5, pic: img5 , link:"https://www.monsterenergy.com/en-in/"},
  ];
  return (
    <>
      <div className="spons-grid">
        {sponsdata.map((item) => (
          <div key={item.id}>
            <div className="spons">
              <a href={item.link} target="_blank">
                {" "}
                <img className="spons--image" src={item.pic} alt="spons logo" />
               
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Spons;
