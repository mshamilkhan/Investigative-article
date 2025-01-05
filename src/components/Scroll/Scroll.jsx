import React, { useEffect, useRef } from 'react'
import "./Scroll.css"
import hero from "../../assets/images/image.png"

import NewsCard from '../NewsCard/NewsCard'



export default function Scroll({scrollData = [], onClick}) {
    const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;

    const autoScroll = () => {
      if (scrollContainer) {
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.offsetWidth) {
          scrollContainer.scrollLeft = 0; // Reset to start when reaching the end
        } else {
          scrollContainer.scrollLeft += 1; // Adjust speed
        }
      }
    };

    const interval = setInterval(autoScroll, 10); // Adjust the interval for smoothness/speed

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  const cards = [
    { image: hero, heading: "Card 1", para: "This is card 1 content." },
    { image: hero, heading: "Card 2", para: "This is card 2 content." },
    { image: hero, heading: "Card 3", para: "This is card 3 content." },
    { image: hero, heading: "Card 4", para: "This is card 4 content." },
    { image: hero, heading: "Card 5", para: "This is card 5 content." },
    { image: hero, heading: "Card 1", para: "This is card 1 content." },
    { image: hero, heading: "Card 2", para: "This is card 2 content." },
    { image: hero, heading: "Card 3", para: "This is card 3 content." },
    { image: hero, heading: "Card 4", para: "This is card 4 content." },
    { image: hero, heading: "Card 5", para: "This is card 5 content." },
  ];

  return (
    <div className="scrollable-cards-container" ref={scrollRef}>
      <div className="scrollable-cards">
        {scrollData.map((card, index) => (
          <NewsCard
          
            key={index}
            image={`/images/${card.images[0].filename}`}
            heading={card.title}
            onClick={onClick}
            value={card.title}
          />
        ))}
        {scrollData.map((card, index) => (
          <NewsCard
            key={index}
            image={`/images/${card.images[0].filename}`}
            heading={card.title}
           onClick={onClick}
           value={card.title}
          />
        ))}
       
      </div>
    </div>
  );
}
