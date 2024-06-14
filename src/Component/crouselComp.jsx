import React from 'react';
import { styled } from '@mui/system';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Carousel from 'react-slick';
import '../css/slick.css'; // Adjust the path as needed
import '../css/slick-theme.css'; // Adjust the path as needed
import { useTheme } from '@mui/material/styles';

const NavBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  borderBottom: `1px solid ${theme.palette.primary.dark}`,
  boxShadow: 'none',
}));

const Logo = styled(Typography)(({ theme }) => ({
  flexGrow: 1,
  display: 'none',
  [theme.breakpoints.up('sm')]: {
    display: 'block',
  },
}));

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: theme.alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: theme.spacing(2),
  width: 'auto',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1),
    transition: theme.transitions.create('width'),
    width: '200px',
  },
}));

const CarouselContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  textAlign: 'center',
  background: theme.palette.background.default,
}));

const EnhancedNavBar = () => {
  const theme = useTheme();
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <NavBar position="static" theme={theme}>
        <Toolbar>
          <Logo variant="h6" noWrap>
            Your Logo
          </Logo>
          <Search>
            <SearchIcon />
            <StyledInputBase placeholder="Search…" inputProps={{ 'aria-label': 'search' }} />
          </Search>
        </Toolbar>
      </NavBar>
      <CarouselContainer>
        <Carousel {...carouselSettings}>
          <div>
            <img src="https://placekitten.com/300/200" alt="Slide 1" />
          </div>
          <div>
            <img src="https://placekitten.com/300/201" alt="Slide 2" />
          </div>
          <div>
            <img src="https://placekitten.com/300/202" alt="Slide 3" />
          </div>
          {/* Add more slides as needed */}
        </Carousel>
      </CarouselContainer>
    </Box>
  );
};

export default EnhancedNavBar;
