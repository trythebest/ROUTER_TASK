import React, { useEffect, useState } from 'react';
import Card from '../components/Card';

const Home = ({cart ,setCart}) => {

  const [product, setProduct] = useState([]);


  
  const fetchData = async () => {
    try {
      const res = await fetch("https://fakestoreapi.com/products"); // fetching the data from api
      const jsonData = await res.json();  // convert the readable stream to json format.
      setProduct(jsonData);  //it update the state 
    }
    catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  
 


  return (
    <div className='grid grid-cols-1  lg:grid-cols-4' >
      {product.map((item) => {
        return (
          <Card
            key={item.id}
            item={item}
            cart={cart}
            setCart={setCart}
            
          />

        )
      })}
    </div>
  );
};

export default Home;