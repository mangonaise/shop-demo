import React, { useEffect } from 'react';
import StorePageItem from './StorePageItem';
import productsData from '../productsData.json';
import './styles/StorePage.css';

const StorePage = () => {
  useEffect(() => {
    const imageUrlsToCache = productsData.map(data => [data.images[0], data.images[1]]).flat();
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
      <h1>Products</h1>
      <div id="store-page-grid">
        {productsData.map(data => (
          <StorePageItem key={data.name} itemData={data}/>
        ))}
      </div>
    </div>
  )
}



export default StorePage;