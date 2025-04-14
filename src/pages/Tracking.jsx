import { useState } from 'react';
import {
  Container,
  Typography,
  TextField,
  Button,
  Paper,
  Box,
  Stepper,
  Step,
  StepLabel,
  Alert
} from '@mui/material';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';

const Tracking = () => {
  const [trackingNumber, setTrackingNumber] = useState('');
  const [trackingInfo, setTrackingInfo] = useState(null);
  const [error, setError] = useState('');

  const steps = [
    'Order Received',
    'Package Processed',
    'In Transit',
    'Out for Delivery',
    'Delivered'
  ];

  const handleTrack = (e) => {
    e.preventDefault();
    if (!trackingNumber) {
      setError('Please enter a tracking number');
      return;
    }
    // Simulate tracking information
    setTrackingInfo({
      status: 'In Transit',
      currentStep: 2,
      estimatedDelivery: '2024-03-25',
      location: 'New York Distribution Center'
    });
    setError('');
  };

  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom align="center">
          Track Your Package
        </Typography>
        
        <Box component="form" onSubmit={handleTrack} sx={{ mt: 4 }}>
          <TextField
            fullWidth
            label="Enter Tracking Number"
            variant="outlined"
            value={trackingNumber}
            onChange={(e) => setTrackingNumber(e.target.value)}
            sx={{ mb: 2 }}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            size="large"
            startIcon={<LocalShippingIcon />}
          >
            Track Package
          </Button>
        </Box>

        {error && (
          <Alert severity="error" sx={{ mt: 2 }}>
            {error}
          </Alert>
        )}

        {trackingInfo && (
          <Box sx={{ mt: 4 }}>
            <Stepper activeStep={trackingInfo.currentStep} alternativeLabel>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
            
            <Box sx={{ mt: 4 }}>
              <Typography variant="h6" gutterBottom>
                Package Status: {trackingInfo.status}
              </Typography>
              <Typography variant="body1" gutterBottom>
                Current Location: {trackingInfo.location}
              </Typography>
              <Typography variant="body1">
                Estimated Delivery: {trackingInfo.estimatedDelivery}
              </Typography>
            </Box>
          </Box>
        )}
      </Paper>
    </Container>
  );
};

export default Tracking; 