import { useState } from 'react';
import {
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  Box,
  Alert,
  IconButton,
  useTheme,
  Stack,
  Paper
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SendIcon from '@mui/icons-material/Send';

const Contact = () => {
  const theme = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitStatus('success');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: <EmailIcon />,
      title: 'Email',
      content: 'contact@parcelstarlogistics.com',
      link: 'mailto:contact@parcelstarlogistics.com'
    },
    {
      icon: <PhoneIcon />,
      title: 'Phone',
      content: '+4407555527859',
      link: 'tel:+4407555527859'
    },
    {
      icon: <LocationOnIcon />,
      title: 'Address',
      content: '214 Old Road East, Gravesend, DA12 1PQ',
      link: 'https://maps.google.com'
    },
    {
      icon: <AccessTimeIcon />,
      title: 'Business Hours',
      content: 'Monday - Friday: 9:00 AM - 6:00 PM\nSaturday: 10:00 AM - 4:00 PM\nSunday: Closed'
    }
  ];

  return (
    <Box sx={{ 
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
      position: 'relative',
      overflow: 'hidden',
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
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, py: { xs: 4, md: 8 } }}>
        <Box sx={{ textAlign: 'center', mb: { xs: 4, md: 8 } }}>
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
            Let's Get in Touch
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
            Have questions about our services? We're here to help. Fill out the form below and we'll get back to you as soon as possible.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {/* Contact Form */}
          <Grid item xs={12} md={6}>
            <Paper 
              elevation={0}
              sx={{ 
                p: { xs: 3, md: 4 },
                borderRadius: 3,
                background: 'white',
                boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                height: '100%'
              }}
            >
              <Box component="form" onSubmit={handleSubmit}>
                <Stack spacing={3}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        variant="outlined"
                        sx={{ 
                          '& .MuiOutlinedInput-root': {
                            borderRadius: 2,
                            '&:hover .MuiOutlinedInput-notchedOutline': {
                              borderColor: 'primary.main',
                            },
                          },
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        variant="outlined"
                        sx={{ 
                          '& .MuiOutlinedInput-root': {
                            borderRadius: 2,
                            '&:hover .MuiOutlinedInput-notchedOutline': {
                              borderColor: 'primary.main',
                            },
                          },
                        }}
                      />
                    </Grid>
                  </Grid>
                  <TextField
                    fullWidth
                    label="Subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    variant="outlined"
                    sx={{ 
                      '& .MuiOutlinedInput-root': {
                        borderRadius: 2,
                        '&:hover .MuiOutlinedInput-notchedOutline': {
                          borderColor: 'primary.main',
                        },
                      },
                    }}
                  />
                  <TextField
                    fullWidth
                    label="Message"
                    name="message"
                    multiline
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    variant="outlined"
                    sx={{ 
                      '& .MuiOutlinedInput-root': {
                        borderRadius: 2,
                        '&:hover .MuiOutlinedInput-notchedOutline': {
                          borderColor: 'primary.main',
                        },
                      },
                    }}
                  />
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    size="large"
                    endIcon={<SendIcon />}
                    sx={{ 
                      py: 1.5,
                      px: 4,
                      borderRadius: 2,
                      textTransform: 'none',
                      fontWeight: 600,
                      boxShadow: 'none',
                      '&:hover': {
                        boxShadow: '0 4px 12px rgba(255, 215, 0, 0.3)',
                        transform: 'translateY(-2px)',
                        transition: 'all 0.2s ease'
                      }
                    }}
                  >
                    Send Message
                  </Button>
                </Stack>
              </Box>
              {submitStatus === 'success' && (
                <Alert 
                  severity="success" 
                  sx={{ 
                    mt: 3,
                    borderRadius: 2,
                    bgcolor: 'success.light',
                    color: 'success.dark'
                  }}
                >
                  Your message has been sent successfully!
                </Alert>
              )}
            </Paper>
          </Grid>

          {/* Contact Information */}
          <Grid item xs={12} md={6}>
            <Stack spacing={3}>
              <Paper 
                elevation={0}
                sx={{ 
                  p: { xs: 3, md: 4 },
                  borderRadius: 3,
                  background: 'white',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.05)'
                }}
              >
                <Stack spacing={3}>
                  {contactInfo.map((info, index) => (
                    <Box 
                      key={index}
                      component={info.link ? 'a' : 'div'}
                      href={info.link}
                      target={info.link ? '_blank' : undefined}
                      rel={info.link ? 'noopener noreferrer' : undefined}
                      sx={{ 
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: 2,
                        textDecoration: 'none',
                        color: 'inherit',
                        p: 2,
                        borderRadius: 2,
                        transition: 'all 0.2s ease',
                        '&:hover': {
                          bgcolor: 'rgba(255, 215, 0, 0.05)',
                          transform: 'translateX(4px)'
                        }
                      }}
                    >
                      <Box sx={{ 
                        color: 'primary.main',
                        bgcolor: 'rgba(255, 215, 0, 0.1)',
                        p: 1.5,
                        borderRadius: 2,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}>
                        {info.icon}
                      </Box>
                      <Box>
                        <Typography variant="subtitle1" fontWeight="bold">
                          {info.title}
                        </Typography>
                        <Typography 
                          variant="body1" 
                          color="text.secondary"
                          sx={{ whiteSpace: 'pre-line' }}
                        >
                          {info.content}
                        </Typography>
                      </Box>
                    </Box>
                  ))}
                </Stack>
              </Paper>

              <Paper 
                elevation={0}
                sx={{ 
                  p: { xs: 3, md: 4 },
                  borderRadius: 3,
                  background: 'white',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.05)'
                }}
              >
                <Typography 
                  variant="h6" 
                  sx={{ 
                    fontWeight: 700,
                    color: 'primary.main',
                    mb: 3
                  }}
                >
                  Follow Us
                </Typography>
                <Stack direction="row" spacing={2} sx={{ flexWrap: 'wrap', gap: 2 }}>
                  {[
                    { icon: <FacebookIcon />, label: 'Facebook' },
                    { icon: <TwitterIcon />, label: 'Twitter' },
                    { icon: <InstagramIcon />, label: 'Instagram' },
                    { icon: <LinkedInIcon />, label: 'LinkedIn' }
                  ].map((social, index) => (
                    <IconButton 
                      key={index}
                      color="primary" 
                      component="a" 
                      href="#" 
                      sx={{ 
                        bgcolor: 'rgba(255, 215, 0, 0.1)',
                        '&:hover': { 
                          bgcolor: 'rgba(255, 215, 0, 0.2)',
                          transform: 'translateY(-2px)',
                          transition: 'all 0.2s ease'
                        }
                      }}
                    >
                      {social.icon}
                    </IconButton>
                  ))}
                </Stack>
              </Paper>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact; 