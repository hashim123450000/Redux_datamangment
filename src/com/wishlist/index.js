
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
import { useSelector } from "react-redux";



const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Body() {
    let Lists = useSelector(store=>store.wshlst.users2)
    console.table(Lists);
 



  return (
    <Box sx={{ flexGrow: 1,
        display:"flex",
        justifyContent:"center",
        gap:"20px",
        flexWrap:"wrap",
        margin:"auto",
        width:"90vw"
     }}>
     
          {
              Lists.map((lst,index)=>{
                  return <>
                  <Card sx={{ width:245}} >
                   <CardMedia
        component="img"
        height="194"
        image={lst.imageUrl}
        
        
      />
      <CardContent>
      <Typography variant="body2" color="text.secondary">
          <h3>{lst.name} </h3>
       
        </Typography>
        <Typography variant="body2" color="text.secondary">
         {lst.price}$
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        
        
      </CardActions>
      
    </Card>
                  </>
                    
                  
              })
          }
       
    </Box>
  );
}
