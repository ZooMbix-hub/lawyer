import {useState, useEffect, Children, cloneElement} from 'react';

import ArrowIcon from '../../icons/ArrowIcon';
import s from './style.module.scss';

const PAGE_WIDTH = 450;

const Carousel = ({children, countImages}) => {
  const [images, setImages] = useState([]);
  const [offset, setOffset] = useState(0);
  const [currentImage, setCurrentImage] = useState(1);

  const handlerLeftArrowCLick = () => {
    setOffset((currentOffset) => {
      const newOffset = currentOffset + PAGE_WIDTH;

      console.log(Math.min(newOffset, 0));

      return Math.min(newOffset, 0);
    });

    if (currentImage !== 1) {
      setCurrentImage((prev) => prev - 1);
    }
  };

  const handlerRightArrowCLick = () => {
    setOffset((currentOffset) => {
      const newOffset = currentOffset - PAGE_WIDTH;

      const maxOffset = -(PAGE_WIDTH * (images.length - 1));

      console.log(Math.max(newOffset, maxOffset));

      return Math.max(newOffset, maxOffset);
    });

    if (currentImage !== countImages) {
      setCurrentImage((prev) => prev + 1);
    }
  };

  useEffect(() => {
    setImages(
      Children.map(children, (child) => {
        return cloneElement(child, {
          style: {
            height: '100%',
            minWidth: `${PAGE_WIDTH}px`,
            maxWidth: `${PAGE_WIDTH}px`
          }
        });
      })
    );
  }, []);

  return (
    <div className={s.wrapper}>
      <div className={s.container}>
        <button 
          className={s.btnArrow} 
          onClick={() => handlerLeftArrowCLick()}
        >
          <ArrowIcon />
        </button>
        <div className={s.window}>
          <div 
            className={s.itemsContainer}
            style={{transform: `translateX(${offset}px)`}}
          >
            {images}
          </div>
        </div>
        <button 
          className={s.btnArrow} 
          onClick={() => handlerRightArrowCLick()}
        >
          <ArrowIcon />
        </button>
      </div>
      <p className={s.indicatorImages}>
        {`${currentImage} — ${countImages}`}
      </p>
    </div>
  );
};

export default Carousel;