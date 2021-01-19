import React, {useState} from 'react';
import './styles/StorePageItem.css';

const StorePageItem = ({ itemData }) => {
  const [imageIndex, setImageIndex] = useState(0)

  return (
    <div className="store-page-item">
      <div className="item-title">
        {itemData.name}
      </div>
      
      <div 
        className="item-image-container"
        onMouseOver={() => setImageIndex(1)}
        onMouseLeave={() => setImageIndex(0)}
      >
        <img src={itemData.images[imageIndex]}/>
      </div>
    </div>
  )
}

export default StorePageItem;