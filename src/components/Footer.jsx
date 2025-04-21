import { Box, Container, Grid, Typography, Link, IconButton } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'rgba(255, 215, 0, 0.1)',
        color: 'black',
        py: 6,
        mt: 'auto'
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              ParcelStar Logistics
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Fast, reliable, and secure delivery services for all your shipping needs.
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <IconButton color="inherit" component="a" href="#">
                <FacebookIcon />
              </IconButton>
              <IconButton color="inherit" component="a" href="#">
                <TwitterIcon />
              </IconButton>
              <IconButton color="inherit" component="a" href="#">
                <InstagramIcon />
              </IconButton>
              <IconButton color="inherit" component="a" href="#">
                <LinkedInIcon />
              </IconButton>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Link component={RouterLink} to="/" color="inherit" underline="hover">
                Home
              </Link>
              <Link component={RouterLink} to="/about" color="inherit" underline="hover">
                About
              </Link>
              <Link component={RouterLink} to="/services" color="inherit" underline="hover">
                Services
              </Link>
              <Link component={RouterLink} to="/contact" color="inherit" underline="hover">
                Contact
              </Link>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              214 Old Road East
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              Gravesend, DA12 1PQ
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              Phone: +4407555527859
            </Typography>
            <Typography variant="body2">
              Email: contact@parcelstarlogistics.com
            </Typography>
          </Grid>
        </Grid>

        <Box sx={{ mt: 4, pt: 2, borderTop: 1, borderColor: 'rgba(0, 0, 0, 0.1)' }}>
          <Typography variant="body2" align="center">
            © {new Date().getFullYear()} ParcelStar Logistics. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer; 