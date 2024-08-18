import {useState, useEffect, Children, cloneElement} from 'react';

import ArrowIcon from '../../icons/ArrowIcon';
import s from './style.module.scss';

const PAGE_WIDTH = 450;

const Carousel = ({children}) => {
  const [pages, setPages] = useState([]);
  const [offset, setOffset] = useState(0);

  const handlerLeftArrowCLick = () => {
    setOffset((currentOffset) => {
      const newOffset = currentOffset + PAGE_WIDTH;

      return Math.min(newOffset, 0);
    });
  };

  const handlerRightArrowCLick = () => {
    setOffset((currentOffset) => {
      const newOffset = currentOffset - PAGE_WIDTH;

      const maxOffset = -(PAGE_WIDTH * (pages.length - 1));

      return Math.max(newOffset, maxOffset);
    });
  };

  useEffect(() => {
    setPages(
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
          {pages}
        </div>
      </div>
      <button 
        className={s.btnArrow} 
        onClick={() => handlerRightArrowCLick()}
      >
        <ArrowIcon />
      </button>
    </div>
  );
};

export default Carousel;