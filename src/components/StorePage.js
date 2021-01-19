import React, { useState, useEffect } from 'react';
import StorePageItem from './StorePageItem';
import playingCards from '../productsData.json';
import './styles/StorePage.css';

const StorePage = () => {
  useEffect(() => {
    const imageUrlsToCache = playingCards.map(data => [data.images[0], data.images[1]]).flat();
    cacheImages(imageUrlsToCache);
  }, [])

  async function cacheImages(imageSources) {
    const promises = await imageSources.map(source => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = source;
        img.onload = resolve;
        img.onerror = reject;
      });
    });
    await Promise.all(promises);
  }

  return(
    <div id="store-page-container">
      <br></br>
      <div id="store-page-grid">
        {playingCards.map(data => (
          <StorePageItem key={data.name} itemData={data}/>
        ))}
      </div>
    </div>
  )
}



export default StorePage;