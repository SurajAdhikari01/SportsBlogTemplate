import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { posts } from "../../data/posts";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Categories from "./Categories";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const featuredPosts = posts.slice(0, 3);
  const carouselRef = useRef(null);
  const autoSlideInterval = 5000; // Auto-slide interval in milliseconds

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? featuredPosts.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === featuredPosts.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleKeyPress = (e) => {
    if (e.key === "ArrowLeft") {
      handlePrev();
    } else if (e.key === "ArrowRight") {
      handleNext();
    }
  };

  useEffect(() => {
    const carousel = carouselRef.current;
    carousel.addEventListener("keydown", handleKeyPress);
    return () => {
      carousel.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, autoSlideInterval);

    return () => {
      clearInterval(interval);
    };
  }, [currentIndex]);

  return (
    <div className="relative flex flex-col items-center w-full h-[60vh] overflow-hidden outline-none">
      <div className="absolute top-10 z-10 ">
        <Categories />
      </div>
      <div
        className="w-full flex-grow overflow-hidden outline-none"
        ref={carouselRef}
        tabIndex="0"
      >
        {featuredPosts.map((post, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: `url(${post.image})` }}
          >
            <Link
              to={`/post/${post.id}`}
              className="flex items-center justify-center w-full h-full bg-black bg-opacity-50"
            >
              <h2 className="text-3xl md:text-5xl text-white font-bold text-center p-4 rounded">
                {post.title}
              </h2>
            </Link>
          </div>
        ))}
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
        {featuredPosts.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition ease-in-out ${
              index === currentIndex ? "bg-white" : "bg-white bg-opacity-50"
            }`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      <div className="absolute top-1/2 transform -translate-y-1/2 w-full flex justify-between px-4 z-10">
        <button
          onClick={handlePrev}
          className="bg-black bg-opacity-50 text-white rounded-full w-12 h-12 flex items-center justify-center hover:bg-opacity-75 transition ease-in-out"
          aria-label="Previous"
        >
          <FaChevronLeft />
        </button>
        <button
          onClick={handleNext}
          className="bg-black bg-opacity-50 text-white rounded-full w-12 h-12 flex items-center justify-center hover:bg-opacity-75 transition ease-in-out"
          aria-label="Next"
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
