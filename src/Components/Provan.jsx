import React from 'react';
import { useEffect, useState } from "react";
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';

const Provan = () => {
const [items, setItems] = useState([]);

useEffect(() => {
fetch("https://fakestoreapi.com/products")
.then((res) => res.json())
.then((json) => setItems(json))
.catch((err) => console.log(err));
}, []);
return (
<>
  <section className=''>
    {
    items.map((item) =>{
    return(
    <div className='flex'>
      <div className='w-23'>
        {/* <picture>
          <source srcSet={item.image} media='(min-width: 768px)' />
        </picture> */}
        <img src={item.image} alt='l' className='w-2' />
      </div>
      <div>
        <h4>{item.title}</h4>
        <p>
          {item.description}
        </p>
        <button variant="primary">Go somewhere</button>
      </div>

    </div>
    )
    })
    }
  </section>
</>
)
}

export default Provan