import React, { useState } from 'react';
import ItemImageCarousel from './ItemImageCarousel';
import './styles/ItemPage.css';
import { useParams } from 'react-router-dom';
import productsData from '../productsData.json';

const ItemPage = () => {
  const { itemId } = useParams();

  const itemData = productsData.find(data => data.itemId === itemId);

  return (
    <div id="item-page-container">
      <div id="item-text">
        <h1>{itemData.name}</h1>
        <p id="item-price">{`$${itemData.price.toFixed(2)}`}</p>
        <div>
          {itemData.description.split('\n').map((text, key) => <p key={key}>{text}</p>)}
        </div>
      </div>
      <ItemImageCarousel images={itemData.images}/>
    </div>
  )
}

export default ItemPage;