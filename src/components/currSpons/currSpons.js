import React from "react";
import img1 from "../../assets/images/sponsors-2020/img1.jpeg";
import img2 from "../../assets/images/sponsors-2020/2.png";
import img3 from "../../assets/images/sponsors-2020/2.png";
import img4 from "../../assets/images/sponsors-2020/2.png";
import img5 from "../../assets/images/sponsors-2020/2.png";
import img6 from "../../assets/images/sponsors-2020/2.png";
import img7 from "../../assets/images/sponsors-2020/2.png";
import "./currSpons.css";

function Spons() {
  const sponsdata = [
    { id: 1, pic: img1, link: "https://www.pccoer.com" },
    { id: 6, pic: img1, link: "https://www.pccoer.com" },
    { id: 2, pic: img1, link: "https://www.pccoer.com" },
    { id: 3, pic: img1, link: "https://www.pccoer.com" },
    { id: 4, pic: img1, link: "https://www.pccoer.com" },
    { id: 5, pic: img1, link: "https://www.pccoer.com" },
    { id: 7, pic: img1, link: "https://www.pccoer.com" },
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
