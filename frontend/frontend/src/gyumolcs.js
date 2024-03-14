import React, { useState, useEffect } from 'react';

const Gyumolcs = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://localhost:7268/api/Fruit');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      <h2>Édenkert gyümölcsei</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="row">
          {products.map((product) => (  
            <div key={product.fruitId} className="col-md-3 mb-4">
              <div className="card">
                <img src={product.imageUrl} className="card-img-top" alt={product.name} />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">Price: {product.price}Ft</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Gyumolcs;