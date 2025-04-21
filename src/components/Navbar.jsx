import { AppBar, Toolbar, Typography, Button, Box, Container } from '@mui/material';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <AppBar 
      position="static" 
      elevation={0}
      sx={{ 
        bgcolor: 'transparent',
        color: 'black',
        boxShadow: 'none',
        height: '30px',
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ minHeight: '30px', py: 0 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Box 
              component="img"
              src={logo}
              alt="ParcelStar Logistics"
              sx={{ 
                height: 70,
                cursor: 'pointer',
                '&:hover': {
                  opacity: 0.9,
                }
              }}
              onClick={() => navigate('/')}
            />
          </Box>

          <Box sx={{ flexGrow: 1 }} />

          <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
            <Button 
              color="inherit" 
              component={Link} 
              to="/"
              sx={{ 
                mx: 1,
                '&:hover': { 
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  transform: 'translateY(-2px)',
                  transition: 'all 0.3s ease'
                }
              }}
            >
              Home
            </Button>
            <Button 
              color="inherit" 
              component={Link} 
              to="/services"
              sx={{ 
                mx: 1,
                '&:hover': { 
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  transform: 'translateY(-2px)',
                  transition: 'all 0.3s ease'
                }
              }}
            >
              Services
            </Button>
            <Button 
              color="inherit" 
              component={Link} 
              to="/about"
              sx={{ 
                mx: 1,
                '&:hover': { 
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  transform: 'translateY(-2px)',
                  transition: 'all 0.3s ease'
                }
              }}
            >
              About Us
            </Button>
            <Button 
              color="inherit" 
              component={Link} 
              to="/contact"
              sx={{ 
                mx: 1,
                '&:hover': { 
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  transform: 'translateY(-2px)',
                  transition: 'all 0.3s ease'
                }
              }}
            >
              Contact
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar; 