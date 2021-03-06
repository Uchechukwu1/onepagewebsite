import React, { useState, useEffect, useCallback } from "react";
import { client } from "../../client";
import Carouselslide from "./CarouselSlide";

const Carousel = () => {
  const [isCarouselLoading, setIsCarouselLoading] = useState(false);
  const [carouselSlides, setCarouselSlides] = useState([]);

  const cleanUpCarouselSlides = useCallback((rawData) => {
    const cleanSlides = rawData.map((slide) => {
      const { sys, fields } = slide;
      const { id } = sys;
      const slideTitle = fields.title;
      const slideDescription = fields.description;
      const slideBg = fields.image.fields.file.url;
      const updatedSlide = { id, slideTitle, slideDescription, slideBg };
      return updatedSlide;
    });

    setCarouselSlides(cleanSlides);
  }, []);

  const getCarouselSlides = useCallback(async () => {
    setIsCarouselLoading(true);
    try {
      const response = await client.getEntries({
        content_type: "playerCarousel",
      });
      const responseData = response.items;
      console.log(responseData);
      if (responseData) {
        cleanUpCarouselSlides(responseData);
      } else {
        setCarouselSlides([]);
      }
      setIsCarouselLoading(false);
    } catch (error) {
      console.log(error);
      setIsCarouselLoading(false);
    }
  }, [cleanUpCarouselSlides]);

  useEffect(() => {
    getCarouselSlides();
  }, [getCarouselSlides]);

  console.log(carouselSlides);

  return (
    <div>
      {carouselSlides.map((item) => {
        const { id, slideBg, slideTitle, slideDescription } = item;

        return (
          <Carouselslide
            key={id}
            slideTitle={slideTitle}
            slideDescription={slideDescription}
            slideBg={slideBg}
          />
        );
      })}
    </div>
  );
};

export default Carousel;
