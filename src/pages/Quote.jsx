import { useState } from 'react';
import {
  Container,
  Typography,
  TextField,
  Button,
  Paper,
  Box,
  Grid,
  MenuItem,
  Alert,
  Stack,
  useTheme,
  Divider,
  IconButton,
  Tooltip
} from '@mui/material';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import InfoIcon from '@mui/icons-material/Info';
import CalculateIcon from '@mui/icons-material/Calculate';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import HelpIcon from '@mui/icons-material/Help';

const Quote = () => {
  const theme = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    packageType: '',
    weight: '',
    dimensions: {
      length: '',
      width: '',
      height: ''
    },
    fromAddress: '',
    toAddress: '',
    deliveryType: ''
  });
  const [submitStatus, setSubmitStatus] = useState(null);
  const [estimatedPrice, setEstimatedPrice] = useState(null);

  const packageTypes = [
    { value: 'Document', label: 'Document', maxWeight: 2, maxSize: 30 },
    { value: 'Small Package', label: 'Small Package', maxWeight: 5, maxSize: 60 },
    { value: 'Medium Package', label: 'Medium Package', maxWeight: 10, maxSize: 120 },
    { value: 'Large Package', label: 'Large Package', maxWeight: 20, maxSize: 200 },
    { value: 'Oversized Package', label: 'Oversized Package', maxWeight: 30, maxSize: 300 }
  ];

  const deliveryTypes = [
    { value: 'Standard', label: 'Standard (3-5 days)', multiplier: 1 },
    { value: 'Express', label: 'Express (2-3 days)', multiplier: 1.5 },
    { value: 'Same Day', label: 'Same Day', multiplier: 2.5 },
    { value: 'Next Day', label: 'Next Day', multiplier: 2 }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith('dimensions.')) {
      const dimension = name.split('.')[1];
      setFormData(prev => ({
        ...prev,
        dimensions: {
          ...prev.dimensions,
          [dimension]: value
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
    calculatePrice();
  };

  const calculatePrice = () => {
    if (formData.packageType && formData.weight && formData.deliveryType) {
      const basePrice = 8; // Base price in GBP
      const weightMultiplier = parseFloat(formData.weight) * 0.4;
      const deliveryMultiplier = deliveryTypes.find(type => type.value === formData.deliveryType)?.multiplier || 1;
      const estimated = (basePrice + weightMultiplier) * deliveryMultiplier;
      setEstimatedPrice(estimated.toFixed(2));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitStatus('success');
    setFormData({
      name: '',
      email: '',
      phone: '',
      packageType: '',
      weight: '',
      dimensions: {
        length: '',
        width: '',
        height: ''
      },
      fromAddress: '',
      toAddress: '',
      deliveryType: ''
    });
    setEstimatedPrice(null);
  };

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
            Get a Quote
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
            Fill out the form below to get an instant quote for your delivery. Our pricing is transparent and competitive.
          </Typography>
        </Box>

        <Grid container spacing={4} sx={{ maxWidth: '1200px', mx: 'auto' }}>
          {/* Quote Form */}
          <Grid item xs={12} md={8}>
            <Paper 
              elevation={0}
              sx={{ 
                p: { xs: 3, md: 4 },
                borderRadius: 3,
                background: 'white',
                boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                mx: 'auto'
              }}
            >
              <Box component="form" onSubmit={handleSubmit}>
                <Stack spacing={4}>
                  {/* Personal Information Section */}
                  <Box>
                    <Typography variant="h6" sx={{ mb: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
                      <CheckCircleIcon color="primary" />
                      Personal Information
                    </Typography>
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          label="Name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          size="medium"
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
                          size="medium"
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
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          label="Phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          size="medium"
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
                  </Box>

                  {/* Package Information Section */}
                  <Box>
                    <Typography variant="h6" sx={{ mb: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
                      <LocalShippingIcon color="primary" />
                      Package Information
                    </Typography>
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          select
                          label="Package Type"
                          name="packageType"
                          value={formData.packageType}
                          onChange={handleChange}
                          required
                          size="medium"
                          sx={{ 
                            '& .MuiOutlinedInput-root': {
                              borderRadius: 2,
                              '&:hover .MuiOutlinedInput-notchedOutline': {
                                borderColor: 'primary.main',
                              },
                            },
                          }}
                        >
                          {packageTypes.map((type) => (
                            <MenuItem key={type.value} value={type.value}>
                              {type.label}
                            </MenuItem>
                          ))}
                        </TextField>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          label="Weight (kg)"
                          name="weight"
                          type="number"
                          value={formData.weight}
                          onChange={handleChange}
                          required
                          size="medium"
                          InputProps={{
                            endAdornment: (
                              <Tooltip title="Maximum weight depends on package type">
                                <IconButton size="small">
                                  <InfoIcon fontSize="small" />
                                </IconButton>
                              </Tooltip>
                            ),
                          }}
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
                      <Grid item xs={12} sm={4}>
                        <TextField
                          fullWidth
                          label="Length (cm)"
                          name="dimensions.length"
                          type="number"
                          value={formData.dimensions.length}
                          onChange={handleChange}
                          required
                          size="medium"
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
                      <Grid item xs={12} sm={4}>
                        <TextField
                          fullWidth
                          label="Width (cm)"
                          name="dimensions.width"
                          type="number"
                          value={formData.dimensions.width}
                          onChange={handleChange}
                          required
                          size="medium"
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
                      <Grid item xs={12} sm={4}>
                        <TextField
                          fullWidth
                          label="Height (cm)"
                          name="dimensions.height"
                          type="number"
                          value={formData.dimensions.height}
                          onChange={handleChange}
                          required
                          size="medium"
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
                  </Box>

                  {/* Delivery Information Section */}
                  <Box>
                    <Typography variant="h6" sx={{ mb: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
                      <CalculateIcon color="primary" />
                      Delivery Information
                    </Typography>
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          select
                          label="Delivery Type"
                          name="deliveryType"
                          value={formData.deliveryType}
                          onChange={handleChange}
                          required
                          size="medium"
                          sx={{ 
                            '& .MuiOutlinedInput-root': {
                              borderRadius: 2,
                              '&:hover .MuiOutlinedInput-notchedOutline': {
                                borderColor: 'primary.main',
                              },
                            },
                          }}
                        >
                          {deliveryTypes.map((type) => (
                            <MenuItem key={type.value} value={type.value}>
                              {type.label}
                            </MenuItem>
                          ))}
                        </TextField>
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          label="From Address"
                          name="fromAddress"
                          multiline
                          rows={3}
                          value={formData.fromAddress}
                          onChange={handleChange}
                          required
                          size="medium"
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
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          label="To Address"
                          name="toAddress"
                          multiline
                          rows={3}
                          value={formData.toAddress}
                          onChange={handleChange}
                          required
                          size="medium"
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
                  </Box>

                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    size="large"
                    fullWidth
                    startIcon={<LocalShippingIcon />}
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
                    Get Quote
                  </Button>
                </Stack>
              </Box>
            </Paper>
          </Grid>

          {/* Price Estimate and Information */}
          <Grid item xs={12} md={4}>
            <Stack spacing={3} sx={{ height: '100%', justifyContent: 'center' }}>
              <Grid container spacing={2}>
                {/* Price Estimate Card */}
                <Grid item xs={12} sm={6} md={12}>
                  <Paper 
                    elevation={0}
                    sx={{ 
                      p: { xs: 3, md: 4 },
                      borderRadius: 3,
                      background: 'white',
                      boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      textAlign: 'center',
                      mx: 'auto',
                      width: '100%',
                      height: '100%'
                    }}
                  >
                    <Typography variant="h6" sx={{ mb: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
                      <CalculateIcon color="primary" />
                      Estimated Price
                    </Typography>
                    {estimatedPrice ? (
                      <Box sx={{ py: 2 }}>
                        <Typography variant="h3" color="primary" sx={{ fontWeight: 800 }}>
                          £{estimatedPrice}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                          This is an estimated price based on your inputs
                        </Typography>
                      </Box>
                    ) : (
                      <Box sx={{ py: 2 }}>
                        <Typography variant="body1" color="text.secondary">
                          Fill in the form to get an estimated price
                        </Typography>
                      </Box>
                    )}
                  </Paper>
                </Grid>

                {/* Helpful Tips */}
                <Grid item xs={12} sm={6} md={12}>
                  <Paper 
                    elevation={0}
                    sx={{ 
                      p: { xs: 3, md: 4 },
                      borderRadius: 3,
                      background: 'white',
                      boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      textAlign: 'center',
                      mx: 'auto',
                      width: '100%',
                      height: '100%'
                    }}
                  >
                    <Typography variant="h6" sx={{ mb: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
                      <HelpIcon color="primary" />
                      Helpful Tips
                    </Typography>
                    <Stack spacing={2} sx={{ width: '100%' }}>
                      <Typography variant="body2" color="text.secondary">
                        • Measure your package dimensions carefully
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        • Include accurate weight for better pricing
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        • Choose the right delivery speed for your needs
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        • Provide complete address details
                      </Typography>
                    </Stack>
                  </Paper>
                </Grid>
              </Grid>
            </Stack>
          </Grid>
        </Grid>

        {submitStatus === 'success' && (
          <Alert 
            severity="success" 
            sx={{ 
              mt: 3,
              borderRadius: 2,
              bgcolor: 'success.light',
              color: 'success.dark',
              maxWidth: '800px',
              mx: 'auto'
            }}
          >
            Your quote request has been submitted successfully! We'll get back to you shortly.
          </Alert>
        )}
      </Container>
    </Box>
  );
};

export default Quote; 