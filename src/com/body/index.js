import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import Card from '@mui/material/Card';
import { green } from '@mui/material/colors';
import Icon from '@mui/material/Icon';
import { maxWidth } from '@mui/system';
import myStore from '../../store/store';
import { useNavigate } from 'react-router-dom';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Zoom from 'react-reveal/Zoom';
import { useState } from 'react';
import { Search } from '@mui/icons-material';
import SHOE_DATA from '../data/data';
import { useSelector } from 'react-redux';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Body() {
  const navigate = useNavigate()
  const [search, setSearch] = useState('')
  const BUY = useSelector((state) => state.signupdata.users3)
  console.log('ABC', BUY)
  return (
    <div>

      <input style={{
        marginTop: "20px",
        width: "300px",
        height: "40px",
        padding: "10px",
        fontSize: "20px"
      }} type='text' placeholder='search' onChange={(event) => { setSearch(event.target.value) }} />
      <Box sx={{
        flexGrow: 1,
        display: "flex",
        justifyContent: "center",
        gap: "20px",
        flexWrap: "wrap",
        margin: "auto",
        width: "90vw"
      }}>

        {
          SHOE_DATA.filter((data) => {
            if (search == "") {
              return data
            } else if (data.name.toLowerCase().includes(search.toLowerCase())) {
              return data

            }
          }).map((data, index) => {
            return <>
              <Card sx={{ width: 245 }} >
                <CardMedia
                  component="img"
                  height="194"
                  image={data.imageUrl}

                />
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    <h3>{data.name} </h3>
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {data.price}$
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                  <h3>itemleft:</h3>    {data.itemleft}
                  </Typography>
                </CardContent>
                <div style={{
                  display: "flex",
                  alignItems: 'center',
                  justifyContent: "space-between"

                }}>
                  <div>
                    <IconButton aria-label="add to favorites">
                      <FavoriteIcon onClick={() => {
                        myStore.dispatch({
                          type: "LIKED",
                          payload: data

                        })

                      }} />
                    </IconButton>
                  </div>

                  <div onClick={() => {
                    if (BUY.length==0) {
                      navigate('/sgnup')      

                    }else{
                      myStore.dispatch({
                        type: "TOBuy",
                        payload: data
  
                      })
                      navigate('/buy')
  
                    }}
                    }
                   >
                    <IconButton color="primary" aria-label="add to shopping cart">
                      <AddShoppingCartIcon />
                    </IconButton>
                  </div>
                  <div onClick={() => {



                    myStore.dispatch({
                      type: "TOwishlist",
                      payload: data

                    })

                  }} >
                    <Icon sx={{ color: green[500], }}   >add_circle</Icon>
                  </div>
                </div>

              </Card>
            </>


          })
        }


      </Box>
    </div>
  );
}
