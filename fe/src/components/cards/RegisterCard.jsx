import {Card, CardContent, CardMedia, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import {useState} from "react";

/**
 * Component present in the landing page, its purpose is to redirect the
 * user on click to a page where they can create an account
 * @param img Source of the image used for the card
 * @param text Text of the card, should be under 40 chars
 * @param setOpen The setter for an 'open' variable of a dialog. When clicked,
 * the component will open the dialog
 */
const RegisterCard = ({img, text, setOpen}) => {
  return (
    <Card onClick={() => setOpen(true)} sx={{
      height: '360px',
      width: '360px',
      padding: '30px',
      borderRadius: '15px',
      boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
      transition: 'transform .2s',
      '&:hover': {
        transform: 'scale(1.05)',
        cursor: 'pointer',
      },
      '@media (max-width: 728px)': {
        height: '160px',
        width: '160px',
        padding: '10px'
      }
    }}>
      <CardMedia
          component={'img'}
          image={img}
          sx={{
            height: '240px',
            width: '310px',
            objectFit: 'contain',
            '@media (max-width: 728px)': {
              height: '105px',
              width: '130px',
            }
          }}
      />
      <CardContent sx={{
        padding: '0'
      }}>
        <Typography sx={{
          textAlign: 'center',
          fontWeight: '550',
          marginTop: '20px',
          '@media (max-width: 728px)': {
            width: '100%',
            fontSize: '1em',
            fontWeight: '600',
            marginTop: '10px',
          }
        }} variant={'h4'} component={'h4'}>{text}</Typography>
      </CardContent>
    </Card>
  );
}

export default RegisterCard;