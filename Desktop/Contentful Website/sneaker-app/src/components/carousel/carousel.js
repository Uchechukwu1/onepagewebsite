import React, { useState, useEffect, useCallback } from "react";
import { client } from "../../client";

const Carousel = () => {
  const [isCarouselLoading, setIsCarouselLoading] = useState(false);
  const [carouselSlides, setCarouselSlides] = useState([]);

  const cleanUpCarouselSlides = (rawData) => {
    const cleanSlides = rawData.Map((slide) => {
      const { sys, fields } = slide;
      const { id } = sys;
      const slideTitle = fields.title;
      const slideDescription = fields.description;
      const slideBg = fields.image.fields.file.url;
      const updatedSlide = { id, slideTitle, slideDescription, slideBg };
      return updatedSlide;
    });

    setCarouselSlides(cleanSlides);
  };

  const getCarouselSlides = useCallback(async () => {
    try {
      const response = await client.getEntries({
        content_type: "playerCarousel",
      });
      const responseData = response.items;
      console.log(responseData);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    getCarouselSlides();
  }, [getCarouselSlides]);

  return (
    <div>
      <h1>Sneaker Carousel</h1>
    </div>
  );
};

export default Carousel;
