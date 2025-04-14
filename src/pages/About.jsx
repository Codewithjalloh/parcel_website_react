import { Container, Typography, Box, Grid, Paper, useTheme, Card, CardContent } from '@mui/material';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import SpeedIcon from '@mui/icons-material/Speed';
import SecurityIcon from '@mui/icons-material/Security';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import BusinessIcon from '@mui/icons-material/Business';
import GroupsIcon from '@mui/icons-material/Groups';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import StarIcon from '@mui/icons-material/Star';

const About = () => {
  const theme = useTheme();

  return (
    <Box sx={{ 
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        right: 0,
        width: '40%',
        height: '100%',
        background: 'linear-gradient(135deg, rgba(255,215,0,0.1) 0%, rgba(255,215,0,0.05) 100%)',
        clipPath: 'polygon(100% 0, 100% 100%, 0 100%)',
        zIndex: 0
      }
    }}>
      <Container maxWidth="lg" sx={{ 
        position: 'relative', 
        zIndex: 1, 
        py: { xs: 4, md: 8 },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        <Box sx={{ 
          textAlign: 'center', 
          mb: { xs: 4, md: 8 },
          maxWidth: '800px',
          mx: 'auto'
        }}>
          <Typography 
            variant="h1" 
            sx={{ 
              fontWeight: 800,
              color: 'primary.main',
              mb: 2,
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              lineHeight: 1.2
            }}
          >
            About Us
          </Typography>
          <Typography 
            variant="h6" 
            sx={{ 
              color: 'text.secondary',
              maxWidth: '600px',
              mx: 'auto',
              fontSize: { xs: '1rem', md: '1.25rem' }
            }}
          >
            Learn more about our company and what makes us the preferred choice for delivery and logistics services.
          </Typography>
        </Box>

        <Box sx={{ 
          mb: 8,
          p: 4,
          borderRadius: 3,
          background: 'white',
          boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
          width: '100%',
          maxWidth: '800px',
          textAlign: 'center'
        }}>
          <Typography variant="h5" sx={{ mb: 3, fontWeight: 600 }}>
            Our Story
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
            Founded in 2013, we started as a small local delivery service with a vision to transform the logistics industry. 
            Today, we've grown into a trusted name in delivery and logistics, serving thousands of customers across the region. 
            Our commitment to excellence and customer satisfaction has been the driving force behind our success.
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={4}>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
                <Typography variant="h4" color="primary.main">10+</Typography>
                <Typography variant="body2" color="text.secondary">
                  Years of Experience
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
                <Typography variant="h4" color="primary.main">1000+</Typography>
                <Typography variant="body2" color="text.secondary">
                  Happy Customers
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
                <Typography variant="h4" color="primary.main">24/7</Typography>
                <Typography variant="body2" color="text.secondary">
                  Customer Support
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
                <Typography variant="h4" color="primary.main">50+</Typography>
                <Typography variant="body2" color="text.secondary">
                  Delivery Vehicles
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
                <Typography variant="h4" color="primary.main">15+</Typography>
                <Typography variant="body2" color="text.secondary">
                  Service Centers
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>

        <Box sx={{ py: 8, bgcolor: theme.palette.background.default }}>
          <Container maxWidth="lg">
            <Typography
              variant="h2"
              align="center"
              sx={{
                mb: 6,
                fontWeight: 700,
                color: theme.palette.text.primary,
                position: 'relative',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: 0,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '80px',
                  height: '4px',
                  bgcolor: theme.palette.primary.main,
                  borderRadius: '2px',
                },
              }}
            >
              Our Mission
            </Typography>
            <Typography
              variant="body1"
              align="center"
              sx={{
                mb: 6,
                fontSize: '1.1rem',
                lineHeight: 1.8,
                color: theme.palette.text.secondary,
                maxWidth: '800px',
                mx: 'auto',
              }}
            >
              To provide reliable, efficient, and secure delivery services that exceed customer expectations. We strive to be the most trusted logistics partner by delivering excellence in every package we handle.
            </Typography>
            <Grid container spacing={4} justifyContent="center">
              {[
                {
                  icon: <LocalShippingIcon sx={{ fontSize: 40 }} />,
                  title: 'Professional Service',
                  description: 'Expert handling of all your delivery needs'
                },
                {
                  icon: <SupportAgentIcon sx={{ fontSize: 40 }} />,
                  title: 'Customer Focus',
                  description: 'Putting your needs first in everything we do'
                },
                {
                  icon: <StarIcon sx={{ fontSize: 40 }} />,
                  title: 'Excellence',
                  description: 'Committed to the highest standards of service'
                }
              ].map((value, index) => (
                <Grid item xs={12} sm={4} key={index}>
                  <Card
                    sx={{
                      height: '100%',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: theme.shadows[8],
                      },
                    }}
                  >
                    <CardContent
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        textAlign: 'center',
                        p: 3,
                      }}
                    >
                      <Box
                        sx={{
                          color: theme.palette.primary.main,
                          mb: 2,
                          p: 1.5,
                          borderRadius: '50%',
                          bgcolor: 'rgba(25, 118, 210, 0.1)',
                        }}
                      >
                        {value.icon}
                      </Box>
                      <Typography
                        variant="h5"
                        sx={{
                          mb: 1.5,
                          fontWeight: 600,
                          fontSize: '1.1rem',
                        }}
                      >
                        {value.title}
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          color: theme.palette.text.secondary,
                          lineHeight: 1.4,
                          fontSize: '0.9rem',
                        }}
                      >
                        {value.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>

        <Box sx={{ 
          p: 4,
          borderRadius: 3,
          background: 'white',
          boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
          width: '100%',
          maxWidth: '800px',
          textAlign: 'center'
        }}>
          <Typography variant="h5" sx={{ mb: 3, fontWeight: 600 }}>
            Why Choose Us?
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={3}>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
                <SpeedIcon sx={{ fontSize: 40, color: 'primary.main' }} />
                <Typography variant="h6">Fast Delivery</Typography>
                <Typography variant="body2" color="text.secondary">
                  Quick and reliable service to meet your deadlines
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
                <SecurityIcon sx={{ fontSize: 40, color: 'primary.main' }} />
                <Typography variant="h6">Secure Service</Typography>
                <Typography variant="body2" color="text.secondary">
                  Your packages are safe with our security measures
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
                <SupportAgentIcon sx={{ fontSize: 40, color: 'primary.main' }} />
                <Typography variant="h6">24/7 Support</Typography>
                <Typography variant="body2" color="text.secondary">
                  Always available to assist you with any queries
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
                <LocalShippingIcon sx={{ fontSize: 40, color: 'primary.main' }} />
                <Typography variant="h6">Nationwide Coverage</Typography>
                <Typography variant="body2" color="text.secondary">
                  Extensive network for reliable delivery across the country
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default About; 