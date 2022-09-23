import Carousel from 'react-material-ui-carousel';
import {Card, CardContent, CardMedia, Typography} from "@mui/material";
import Interview from '../../resources/vectors/undraw_interview_re_e5jn.svg';
import SocialThinking from '../../resources/vectors/undraw_social_thinking_re_y8cc.svg';
import JobOffers from '../../resources/vectors/undraw_job_offers_re_634p.svg';
import AppContext from "../../contexts/AppContext";
import {useContext} from "react";

/**
 * @param img Source of the image used for the card
 * @param text Text of the card, should be under 40 chars
 */
const CarouselItem = ({img, text}) => {
  return (
    <Card sx={{
      backgroundColor: 'transparent',
      boxShadow: 'none',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      <CardMedia
        component={'img'}
        image={img}
        sx={{
          width: '720px',
          height: '520px',
          objectFit: 'contain',
          color: 'transparent',
          '@media (max-width: 728px)': {
            width: '100%',
            height: '300px',
          }
        }}
      />
      <CardContent>
        <Typography sx={{
          textAlign: 'center',
          fontWeight: '550'
        }} variant={'h5'} component={'h5'}>{text}</Typography>
      </CardContent>
    </Card>
  );
}

/**
 * This carousel is used on the landing page, its purpose design enchantment, for now
 */
const LandingCarousel = () => {
  const theme = useContext(AppContext);

  return (
      <Carousel sx={{
        marginTop: '20px',
        '@media (min-width: 728px)': {
          padding: '50px',
          marginTop: '40px'
        }
      }} index={1} navButtonsAlwaysInvisible={true} interval={5000}
      indicatorIconButtonProps={{ style: { color: theme.palette.bullets.secondary } }}
      activeIndicatorIconButtonProps={{ style: { color: theme.palette.bullets.primary } }}>
        <CarouselItem img={Interview} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit'} />
        <CarouselItem img={SocialThinking} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit'} />
        <CarouselItem img={JobOffers} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit'} />
      </Carousel>
  );
}

export default LandingCarousel;