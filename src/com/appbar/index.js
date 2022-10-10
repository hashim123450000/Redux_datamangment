import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
import { useSelect } from '@mui/base';
import { useSelector } from 'react-redux';
import Login from '../login'
import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import EditIcon from '@mui/icons-material/Edit';
import Divider from '@mui/material/Divider';
import ArchiveIcon from '@mui/icons-material/Archive';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { green } from '@mui/material/colors';
import Icon from '@mui/material/Icon';
import { Abc } from '@mui/icons-material';

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity,
        ),
      },
    },
  },
}));


export default function NavBar() {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
    
  };
  const routng3= () => {
    
    navigate('/Profle')
  };
  const routng2= () => {
    
    navigate('/liked')
  };
   const routng= () => {
    
    navigate('/wishlist')
  };
  

  let navigate = useNavigate()
  const currentUser = useSelector((state) => state.LOGIN)
  const currentWshlst = useSelector((state) => state.wshlst)
  const currentliked = useSelector((state) => state.liked)
  const currentbuy = useSelector((state) => state.BUY)
  console.log('user', currentUser)
  function Changeroute() {
    navigate('/')

  }
    function ChangerouteProducts(){
    navigate('/body')
  }
  function ChangerouteSignup(){
    
    navigate("/sgnup")
  }
  function ChangerouteLogin(){
    navigate("/logn")
  }
  return (
    <Box sx={{ flexGrow: 1, }}>
      <AppBar style={{
        backgroundColor: "orange",
        boxShadow:"none"
       
      }} position="static">
        <Toolbar>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1,alignItems:"start" }}>
            
              <img style={{
                height: "100px",
                width: "150px",
               float:"left"
              }} src='https://www.freeiconspng.com/thumbs/nike-logo/nike-shoes-logo-png-13.png' />
            
          </Typography>

          <div style={{
            justifyContent: "space-around",
            alignItems: "center",
            color: "black"
          }}>


            {/* <Button style={{
            marginRight:20
          }} color="inherit" onClick={gotosgnup} >SIGNUP</Button> */}
            {/* <Button style={{
            marginRight:20
          }} color="inherit" onClick={gotologn} >login</Button> */}



            <Button style={{
                marginRight: 20
              }} color="inherit" onClick={Changeroute} >Home</Button>
                   <Button style={{
                marginRight: 20
              }} color="inherit" onClick={ChangerouteProducts} >Products</Button>
                <Button style={{
                marginRight: 20
              }} color="inherit" onClick={ChangerouteSignup} >Signup</Button>
                <Button style={{
                marginRight: 20
              }} color="inherit" onClick={ChangerouteLogin} >Login</Button>
           
            {/* {
                    currentUser &&   <Button style={{
                      marginRight:20
                    }} color="inherit"onClick={gotowishlist} >wishlist</Button>
                  }    */}



<Button style={{backgroundColor:"transparent", color:"black"}}
        id="demo-customized-button"
        aria-controls={open ? 'demo-customized-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        variant="contained"
        disableElevation
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
        
      >
        Options
      </Button>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={()=>{handleClose();routng()}} disableRipple>
        <Icon sx={{ color: green[500], }}   >add_circle</Icon>
          Wishlist
        </MenuItem>
        <MenuItem onClick={()=>{handleClose();routng2()}} disableRipple>
      
          LIKED
        </MenuItem>
        <Divider sx={{ my: 0.5 }} />
        <MenuItem onClick={() => { handleClose(); routng3();}}  disableRipple>
          <ArchiveIcon />
          ProfIle
        </MenuItem>
         </StyledMenu>
    </div>
          

        </Toolbar>
      </AppBar>
    </Box>
  );
}
