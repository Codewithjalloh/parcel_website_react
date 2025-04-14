import { Box, Container, Typography, Button, Grid, Card, CardContent, useTheme, IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import SpeedIcon from '@mui/icons-material/Speed';
import SecurityIcon from '@mui/icons-material/Security';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import PriceChangeIcon from '@mui/icons-material/PriceChange';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import { useState, useEffect } from 'react';
import image1 from '../assets/images/image_1.png';
import image2 from '../assets/images/image_2.png';
import image3 from '../assets/images/image_3.png';
import image4 from '../assets/images/image_4.png';

const Home = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [image1, image2, image3, image4];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: <SpeedIcon sx={{ fontSize: 40 }} />,
      title: 'Fast Delivery',
      description: 'Your packages are delivered with speed and precision, ensuring timely arrival at their destination.'
    },
    {
      icon: <SecurityIcon sx={{ fontSize: 40 }} />,
      title: 'Secure Service',
      description: 'Your packages are handled with care and tracked throughout the journey.'
    },
    {
      icon: <SupportAgentIcon sx={{ fontSize: 40 }} />,
      title: '24/7 Support',
      description: 'Our customer service team is always available to assist you.'
    },
    {
      icon: <LocalShippingIcon sx={{ fontSize: 40 }} />,
      title: 'Nationwide Coverage',
      description: 'Your packages reach every corner of the country with our extensive delivery network.'
    }
  ];

  const benefits = [
    {
      icon: <PriceChangeIcon sx={{ fontSize: 30 }} />,
      text: 'Competitive Pricing'
    },
    {
      icon: <AccessTimeIcon sx={{ fontSize: 30 }} />,
      text: 'Flexible Delivery Options'
    },
    {
      icon: <LocationOnIcon sx={{ fontSize: 30 }} />,
      text: 'Nationwide Coverage'
    }
  ];

  return (
    <Box>
      {/* Hero Section with Image Slider */}
      <Box
        sx={{
          position: 'relative',
          height: '100vh',
          overflow: 'hidden',
        }}
      >
        {images.map((image, index) => (
          <Box
            key={index}
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              opacity: currentSlide === index ? 1 : 0,
              transition: 'opacity 1s ease-in-out',
              zIndex: 1,
            }}
          />
        ))}
        
        {/* Navigation Arrows */}
        <IconButton
          onClick={prevSlide}
          sx={{
            position: 'absolute',
            left: 20,
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 2,
            bgcolor: 'rgba(255, 255, 255, 0.2)',
            color: 'white',
            '&:hover': {
              bgcolor: 'rgba(255, 255, 255, 0.3)',
            },
          }}
        >
          <NavigateBeforeIcon />
        </IconButton>
        
        <IconButton
          onClick={nextSlide}
          sx={{
            position: 'absolute',
            right: 20,
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 2,
            bgcolor: 'rgba(255, 255, 255, 0.2)',
            color: 'white',
            '&:hover': {
              bgcolor: 'rgba(255, 255, 255, 0.3)',
            },
          }}
        >
          <NavigateNextIcon />
        </IconButton>

        {/* Navigation Dots */}
        <Box
          sx={{
            position: 'absolute',
            bottom: 20,
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 2,
            display: 'flex',
            gap: 1,
          }}
        >
          {images.map((_, index) => (
            <Box
              key={index}
              onClick={() => setCurrentSlide(index)}
              sx={{
                width: 10,
                height: 10,
                borderRadius: '50%',
                bgcolor: currentSlide === index ? 'white' : 'rgba(255, 255, 255, 0.5)',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                '&:hover': {
                  bgcolor: 'white',
                },
              }}
            />
          ))}
        </Box>

        <Container
          maxWidth="lg"
          sx={{
            position: 'relative',
            zIndex: 2,
            height: '100%',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Box sx={{ maxWidth: 600 }}>
            <Typography 
              variant="h1" 
              sx={{ 
                fontSize: { xs: '2.5rem', md: '4rem' },
                fontWeight: 700,
                mb: 2,
                lineHeight: 1.2,
                color: 'white',
                textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
              }}
            >
              Fast & Reliable Package Delivery
            </Typography>
            <Typography 
              variant="h5"
              sx={{ 
                mb: 4,
                opacity: 0.9,
                lineHeight: 1.6,
                color: 'white',
                textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
              }}
            >
              Experience seamless delivery services with ParcelStar Limited. We deliver your packages with care and precision.
            </Typography>
            <Button 
              variant="contained" 
              size="large"
              onClick={() => navigate('/contact')}
              sx={{ 
                bgcolor: theme.palette.primary.main,
                color: 'white',
                px: 4,
                py: 1.5,
                fontSize: '1.1rem',
                '&:hover': {
                  bgcolor: theme.palette.primary.dark,
                },
              }}
            >
              Get a Quote
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Features Section */}
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
            Our Services
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {features.map((feature, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Card
                  sx={{
                    height: '100%',
                    transition: 'all 0.3s ease',
                    maxWidth: '250px',
                    mx: 'auto',
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
                      p: 2,
                    }}
                  >
                    <Box
                      sx={{
                        color: theme.palette.primary.main,
                        mb: 1.5,
                        p: 1.5,
                        borderRadius: '50%',
                        bgcolor: 'rgba(25, 118, 210, 0.1)',
                      }}
                    >
                      {feature.icon}
                    </Box>
                    <Typography
                      variant="h5"
                      sx={{
                        mb: 1.5,
                        fontWeight: 600,
                        fontSize: '1.1rem',
                      }}
                    >
                      {feature.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        color: theme.palette.text.secondary,
                        lineHeight: 1.4,
                        fontSize: '0.85rem',
                      }}
                    >
                      {feature.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Benefits Section */}
      <Box sx={{ py: 8, bgcolor: 'white' }}>
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
            Why Choose Us
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {benefits.map((benefit, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                    p: 3,
                    borderRadius: 2,
                    bgcolor: theme.palette.background.default,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateX(8px)',
                      boxShadow: theme.shadows[4],
                    },
                  }}
                >
                  <Box
                    sx={{
                      color: theme.palette.primary.main,
                      p: 1,
                      borderRadius: '50%',
                      bgcolor: 'rgba(25, 118, 210, 0.1)',
                    }}
                  >
                    {benefit.icon}
                  </Box>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 600,
                    }}
                  >
                    {benefit.text}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
          <Box sx={{ textAlign: 'center', mt: 6 }}>
            <Button
              variant="contained"
              size="large"
              onClick={() => navigate('/contact')}
              sx={{
                px: 6,
                py: 1.5,
                fontSize: '1.1rem',
                bgcolor: theme.palette.primary.main,
                '&:hover': {
                  bgcolor: theme.palette.primary.dark,
                },
              }}
            >
              Get Started
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Testimonials Section */}
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
            What Our Customers Say
          </Typography>
          <Box sx={{ position: 'relative', minHeight: '300px' }}>
            {[
              {
                name: 'Sarah Johnson',
                role: 'Business Owner',
                text: 'ParcelStar has transformed our shipping process. Their reliable service and competitive pricing have made them our go-to delivery partner.',
                rating: 5
              },
              {
                name: 'Michael Chen',
                role: 'E-commerce Manager',
                text: 'The tracking system is excellent, and their customer service is always responsive. Highly recommended for any business shipping needs.',
                rating: 5
              },
              {
                name: 'Emma Wilson',
                role: 'Online Retailer',
                text: 'Fast delivery times and secure handling of our packages. Their service has helped us build trust with our customers.',
                rating: 5
              }
            ].map((testimonial, index) => (
              <Box
                key={index}
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  opacity: currentSlide === index ? 1 : 0,
                  transition: 'opacity 1s ease-in-out',
                  zIndex: currentSlide === index ? 1 : 0,
                }}
              >
                <Card
                  sx={{
                    maxWidth: '800px',
                    mx: 'auto',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: theme.shadows[8],
                    },
                  }}
                >
                  <CardContent sx={{ p: 4 }}>
                    <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Box
                          key={i}
                          sx={{
                            color: '#ffc107',
                            fontSize: '1.2rem',
                          }}
                        >
                          ★
                        </Box>
                      ))}
                    </Box>
                    <Typography
                      variant="body1"
                      sx={{
                        mb: 3,
                        fontStyle: 'italic',
                        color: theme.palette.text.secondary,
                        lineHeight: 1.6,
                        fontSize: '1.1rem',
                      }}
                    >
                      "{testimonial.text}"
                    </Typography>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 600,
                        mb: 0.5,
                      }}
                    >
                      {testimonial.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: theme.palette.text.secondary,
                      }}
                    >
                      {testimonial.role}
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            ))}
            
            {/* Navigation Arrows */}
            <IconButton
              onClick={prevSlide}
              sx={{
                position: 'absolute',
                left: -60,
                top: '50%',
                transform: 'translateY(-50%)',
                zIndex: 2,
                bgcolor: 'rgba(255, 255, 255, 0.8)',
                color: theme.palette.primary.main,
                '&:hover': {
                  bgcolor: 'white',
                },
              }}
            >
              <NavigateBeforeIcon />
            </IconButton>
            
            <IconButton
              onClick={nextSlide}
              sx={{
                position: 'absolute',
                right: -60,
                top: '50%',
                transform: 'translateY(-50%)',
                zIndex: 2,
                bgcolor: 'rgba(255, 255, 255, 0.8)',
                color: theme.palette.primary.main,
                '&:hover': {
                  bgcolor: 'white',
                },
              }}
            >
              <NavigateNextIcon />
            </IconButton>

            {/* Navigation Dots */}
            <Box
              sx={{
                position: 'absolute',
                bottom: -40,
                left: '50%',
                transform: 'translateX(-50%)',
                zIndex: 2,
                display: 'flex',
                gap: 1,
              }}
            >
              {[0, 1, 2].map((index) => (
                <Box
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  sx={{
                    width: 10,
                    height: 10,
                    borderRadius: '50%',
                    bgcolor: currentSlide === index ? theme.palette.primary.main : 'rgba(0, 0, 0, 0.2)',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      bgcolor: theme.palette.primary.main,
                    },
                  }}
                />
              ))}
            </Box>
          </Box>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box sx={{ py: 8, bgcolor: theme.palette.primary.main, color: 'white' }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={8}>
              <Typography variant="h3" sx={{ mb: 2, fontWeight: 700 }}>
                Ready to Ship?
              </Typography>
              <Typography variant="h6" sx={{ opacity: 0.9 }}>
                Get started with ParcelStar today and experience the difference in delivery services.
              </Typography>
            </Grid>
            <Grid item xs={12} md={4} sx={{ textAlign: { xs: 'center', md: 'right' } }}>
              <Button
                variant="contained"
                size="large"
                onClick={() => navigate('/quote')}
                sx={{
                  px: 6,
                  py: 1.5,
                  fontSize: '1.1rem',
                  bgcolor: 'white',
                  color: theme.palette.primary.main,
                  '&:hover': {
                    bgcolor: 'rgba(255, 255, 255, 0.9)',
                  },
                }}
              >
                Get Started
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Home; 