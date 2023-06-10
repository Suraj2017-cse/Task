import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";

const ProductItem = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setItems(json))
      .catch((err) => console.log(err));
  }, []);

  //   console.log(items[0]le);

  return (
    <>
      <section className='container'>
        <h2>{items.length} Items</h2>
        {items.map((product) => {
          const { id, title, price, description, image } = product;
          return (
            <Card sx={{ display: "flex", mb: 3 }} key={id}>
              <CardMedia
                component='img'
                sx={{ width: 201, objectFit: 'cover' }}
                image={image}
                alt={title}
              />
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <CardContent sx={{ flex: "1 0 auto" }}>
                  <Typography
                    component='div'
                    variant='h4'
                    className='text-capitalize'>
                    {title}
                  </Typography>
                  <Typography
                    variant='subtitle1'
                    color='text.secondary'
                    component='div'>
                    {price}
                  </Typography>
                  <Typography variant='subtitle2' component='div'>
                    {description}
                  </Typography>
                  <Typography component='div'>Rating (No of User)</Typography>
                </CardContent>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    pl: 1,
                    pb: 1,
                    mb: 1,
                  }}>
                  <Button variant='contained' color='success'>
                    Add to Card
                  </Button>
                </Box>
              </Box>
            </Card>
          );
        })}
      </section>
    </>
  );
};

export default ProductItem;
