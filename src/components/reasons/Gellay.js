import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { makeStyles } from "@mui/styles";

const usestyles = makeStyles({
  gellary:{
    paddingRight:'2rem !important'
  },
  row: {
    "&:nth-child(1)": {
      gridColumnEnd: 'span 2 !important',
      gridRowEnd: 'span 2 !important',
    },
    "&:nth-child(2)": {
      gridColumnEnd: 'span 4 !important',
      gridRowEnd: 'span 1 !important',
    },
     "&:nth-child(3)": {
      gridColumnEnd: 'span 2 !important',
      gridRowEnd: 'span 1 !important',
    },
    "&:nth-child(4)": {
      gridColumnEnd: 'span 2 !important',
      gridRowEnd: 'span 1 !important',
    },
    
  }

})


const Gellary = () => {
  const classes = usestyles();
  return (
    <ImageList
      className={classes.gellary}
      variant="quilted"
      cols={6}
      rowHeight={'auto'}
      gap={"1rem"}
    >
      {itemData.map((item, i) => (
        <ImageListItem key={i} cols={2} className={classes.row}>
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
