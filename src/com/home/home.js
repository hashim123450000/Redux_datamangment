import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import SHOE_DATA from '../data/data';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Item = styled(Paper)(({ theme }) => ({

    marginTop: "30px",
    textAlign: "center",

    justifyContent: "space-between",

    display: 'flex'
}));
function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "red" }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "green" }}
        onClick={onClick}
      />
    );
  }
  
export default function Sliders() {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
      };
    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
               
               
            </Box>
            <div sx={{
                flexGrow: 1,
                display: "flex",
                justifyContent: "center",
                gap: "20px",
                flexWrap: "wrap",
                margin: "auto",
                width: "90vw"
            }}>
                <Slider {...settings}>
                {
                    SHOE_DATA.map((shoe) => {
                        return <Card sx={{ Width: 345, }}>
                            <CardMedia
                                component="img"
                                height="140"
                                image={shoe.imageUrl}
                                alt={shoe.name}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Lizard
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {shoe.price}
                                </Typography>
                            </CardContent>
                           
                        </Card>


                    })
                }
                </Slider>

            </div>

        </div>

    )

}