import React from "react";
import "./Menu.css";
import img1 from "../../Assets/MenuNew/Menu_page-0001.jpg";
import img2 from "../../Assets/MenuNew/Menu_page-0002.jpg";
import img3 from "../../Assets/MenuNew/Menu_page-0003.jpg";

const ImageGallery = () => {
  const images = [
    img1, img2, img3
  ];

  return (
    <div  className="imageContainer">
      {images.map((imageUrl, index) => (
        <img
          key={index}
          src={imageUrl}
          alt="img"
          className="fullWidthImage"
        />
      ))}
    </div>
  );
};

export default ImageGallery;
