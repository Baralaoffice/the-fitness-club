import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';



const  Gellary = () => {
  return (
    <ImageList
      variant="quilted"
      cols={4}
      rowHeight={'auto'}
    >
      {itemData.map((item ,i) => (
        <ImageListItem key={i} cols={2}>
          <img
            src={item.img}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}
export default Gellary

const itemData = [
  {
    img: './img/image1.1091417d32e491f0bbb6.png',
    title: 'Breakfast',
    rows: 2,
    cols: 2,
  },
  {
    img: './img/image2.82da8b2725df896d8a8e.png',
    title: 'Burger',
  },
  {
    img: './img/image3.69484cb0ee7687a8c28b.png',
    title: 'Camera',
  },
  {
    img: './img/image4.2c0d30b9ce1579eb1109.png',
    title: 'Coffee',
    cols: 2,
  },
];
