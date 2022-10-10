import Button from '@mui/material/Button';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import myStore from '../../store/store';
import { useSelector } from 'react-redux';
import { Box } from '@mui/system';


const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function BUYING() {
  let buydatas = useSelector(store => store.BUY.users5)
  let totalbll

  const [expanded, setExpanded] = React.useState(false);
  let [value, setValue] = React.useState(0)

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  // function Calculate() {
  //   buydatas.forEach(element => {
  //     totalbll = element.itemleft - element.price

  //   });
  //   setData(totalbll)

  // }

  return (<Box sx={{
    flexGrow: 1,
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    flexWrap: "wrap",
    margin: "auto",
    width: "90vw"
  }}>

    {
      buydatas.map((data, index) => {
        return <div style={{ display: "flex", width: "100%", justifyContent: "space-between" }}  >
          <div style={{ backgroundColor: "blue", }}>
            <Card  >
              <CardMedia
                component="img"
                height="150"
                image={data.imageUrl}


              />
              <CardContent
                style={{ height: "" }}>
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
              <CardActions disableSpacing>
              </CardActions>
              <div style={{ display:"flex", width: "200px", justifyContent: "space-around",height:"50px" }}>
                <div style={{display:"flex"}}>
                  <button style={{height:"30px"}} onClick={() => {
 

                    if (value >= data.itemleft) {
                      alert('not avalble')
                    } else {
                      setValue(++value)
                    }
                  }} >+</button>
                  <div>
                  <h4>{value} </h4>
                  </div>
                  <button style={{height:"30px"}} onClick={() => {
                    if (value <= 0) {
                      alert('plz enter correct value')
                    } else {
                      setValue(--value)
                    }

                  }} >-</button>
                </div>
                <div>
                  <Button style={{}} onClick={() => {
                    myStore.dispatch({
                      type: "delete",
                      payload: index

                    })
                  }} variant="outlined" color="error">
                    Error
                  </Button>
                </div>
              </div>
            </Card>

          </div>

        </div>


      })
    }

    <div style={{ position: "absolute", left: "50%" }}>
      <Card sx={{ width: 500 }} >

        <CardContent>
          <Typography variant="body2" color="text.secondary">
            <h3>Bill <br /> $ {value} </h3>

          </Typography>
          <Typography variant="body2" color="text.secondary">
            <h3>Total item puchash``ed<br /> {value} </h3>
          </Typography>
          <Typography variant="body2" color="text.secondary">
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
        </CardActions>

      </Card>
    </div>

  </Box >
  );

}
