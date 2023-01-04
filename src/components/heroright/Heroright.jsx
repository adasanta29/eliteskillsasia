import '../heroright/Heroright.css';
import { motion, AnimateSharedLayout, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import heroimg1 from '../../assets/heroimg1.jpg';
import heroimg2 from '../../assets/heroimg2.jpg';
import heroimg3 from '../../assets/heroimg3.jpg';

function ProductImage ({ id, onExpand }) {
    return (
        <motion.img
        src={heroimg1}
        alt=""
        onClick={() => onExpand(id)}
        className="related-product-image"
        layoutId={`product-${id}`}
        />
    );
}

export default function Heroright() {
    const [productIds, setProductIds] = useState([238, 239, 240]);
    const [primaryProduct, setPrimaryProduct] = useState(237);
  
    function setAsPrimary(id) {
      const currentProductId = primaryProduct;
      const newProductIds = [
        ...productIds.filter((x) => x !== id),
        currentProductId
      ];
  
      setPrimaryProduct(id);
      setProductIds(newProductIds);
    }
  
    return (
      <div className="container">
        <AnimateSharedLayout type="crossfade">
          <main className="primary-container">
            <AnimatePresence>
              <motion.img
                key={primaryProduct}
                className="primary-product-image"
                src={heroimg2}
                alt=""
                layoutId={`product-${primaryProduct}`}
              />
            </AnimatePresence>
          </main>
          <aside className="product-gallery">
            <AnimatePresence>
              {productIds.map((id) => (
                <ProductImage id={id} key={id} onExpand={setAsPrimary} />
              ))}
            </AnimatePresence>
          </aside>
        </AnimateSharedLayout>
      </div>
    );
  }