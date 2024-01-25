import React from 'react';
import styles from './Card.module.scss';

function Card({onPluse, title, imageUrl, price}) {
  const [isAdded, setIsAdded] = React.useState(false);

  const onClickPlus = ( ) => {
    // onPluse({title, imageUrl, price});
    setIsAdded(!isAdded);
  };

    return (
        <div className={styles.card}>
          <img width={178} height={237} src={imageUrl} alt="Game"/>
          <h5>{title}</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span> Цена:</span>
              <b>{price}₽</b>
            </div>
                <img className='styles.plus' onClick={onClickPlus} src={isAdded ? "/img/btn-checked.svg" : "/img/btn-plus.svg"} alt='Plus'></img>
          </div>
        </div>
    ); 
}

export default Card;