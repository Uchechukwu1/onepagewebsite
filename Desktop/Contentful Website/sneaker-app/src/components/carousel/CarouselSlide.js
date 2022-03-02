import React from "react";

const Carouselslide = (props) => {
  const { slideDescription, slideTitle, slideBg } = props;

  return (
    <div className="slideWrap" style={{ backgroundImage: `url(${slideBg})` }}>
      <div className="textWrap">
        <h2>{slideTitle}</h2>
        <p>{slideDescription}</p>
      </div>
    </div>
  );
};

export default Carouselslide;
