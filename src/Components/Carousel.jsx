import React, { useState } from "react";
import styles from "./carousel.module.css";

const Carousel = () => {
  const [currentItemIndex, setCurrentItemIndex] = useState(0);

  const carouselItems = [
    {
      image: "https://via.placeholder.com/300",
      title: "Item 1",
      description: "Description for Item 1",
      cta: "Action Button 1",
    },
    {
      image: "https://via.placeholder.com/300",
      title: "Item 2",
      description: "Description for Item 2",
      cta: "Action Button 2",
    },
    {
      image: "https://via.placeholder.com/300",
      title: "Item 3",
      description: "Description for Item 3",
      cta: "Action Button 3",
    },
    {
      image: "https://via.placeholder.com/300",
      title: "Item 4",
      description: "Description for Item 4",
      cta: "Action Button 4",
    },
    {
      image: "https://via.placeholder.com/300",
      title: "Item 5",
      description: "Description for Item 5",
      cta: "Action Button 5",
    },
    {
      image: "https://via.placeholder.com/300",
      title: "Item 6",
      description: "Description for Item 6",
      cta: "Action Button 6",
    },
  ];

  const handlePrevious = () => {
    setCurrentItemIndex(
      currentItemIndex === 0 ? carouselItems.length - 1 : currentItemIndex - 1,
    );
  };

  const handleNext = () => {
    setCurrentItemIndex(
      currentItemIndex === carouselItems.length - 1 ? 0 : currentItemIndex + 1,
    );
  };

  return (
    <div className={styles.carousel}>
      <div className={styles.itemContainer}>
        {carouselItems.map((item, index) => (
          <div
            key={index}
            className={`${styles.carouselItem} ${
              index === currentItemIndex ? styles.active : ""
            }`}
          >
            <img
              src={item.image}
              alt={`Item ${index + 1}`}
              className={styles.itemImage}
            />
            <h3 className={styles.itemTitle}>{item.title}</h3>
            <p className={styles.itemDescription}>{item.description}</p>
            <button className={styles.actionButton}>{item.cta}</button>
          </div>
        ))}
      </div>
      <div className={styles.navigation}>
        <button className={styles.previousButton} onClick={handlePrevious}>
          &lt;
        </button>
        <button className={styles.nextButton} onClick={handleNext}>
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Carousel;
