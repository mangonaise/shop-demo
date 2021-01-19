import React, {useState} from 'react';
import { Link } from 'react-router-dom'
import './styles/StorePageItem.css';

const StorePageItem = ({ itemData }) => {
  const [imageIndex, setImageIndex] = useState(0)

  return (
    <Link to={`/products/${itemData.itemId}`} className="store-page-item">
      <div className="item-title">
        {itemData.name}
      </div>
      
      <div 
        className="item-image-container"
        onMouseOver={() => setImageIndex(1)}
        onMouseLeave={() => setImageIndex(0)}
      >
        <img src={itemData.images[imageIndex]} alt="product thumbnail"/>
      </div>
    </Link>
  )
}

export default StorePageItem;