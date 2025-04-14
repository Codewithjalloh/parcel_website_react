import { Container, Typography, Box, Grid, Paper, Stack, useTheme } from '@mui/material';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import SpeedIcon from '@mui/icons-material/Speed';
import SecurityIcon from '@mui/icons-material/Security';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import PaymentIcon from '@mui/icons-material/Payment';
import BusinessIcon from '@mui/icons-material/Business';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const ServiceCard = ({ icon, title, description, features }) => {
  const theme = useTheme();
  
  return (
    <Paper
      elevation={0}
      sx={{
        p: 4,
        height: '100%',
        borderRadius: 3,
        background: 'white',
        boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
        transition: 'all 0.3s ease',
        '&:hover': {
          transform: 'translateY(-5px)',
          boxShadow: '0 8px 30px rgba(0,0,0,0.1)',
        }
      }}
    >
      <Box sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        height: '100%',
        gap: 2
      }}>
        <Box sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: 2,
          mb: 1
        }}>
          <Box sx={{ 
            p: 1.5, 
            borderRadius: 2, 
            bgcolor: 'primary.light',
            color: 'primary.main',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            {icon}
          </Box>
          <Typography variant="h5" sx={{ fontWeight: 600 }}>
            {title}
          </Typography>
        </Box>
        
        <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
          {description}
        </Typography>

        <Stack spacing={1} sx={{ mt: 'auto' }}>
          {features.map((feature, index) => (
            <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <CheckCircleIcon sx={{ color: 'primary.main', fontSize: '1.2rem' }} />
              <Typography variant="body2" color="text.secondary">
                {feature}
              </Typography>
            </Box>
          ))}
        </Stack>
      </Box>
    </Paper>
  );
};

const Services = () => {
  const theme = useTheme();

  const services = [
    {
      icon: <LocalShippingIcon sx={{ fontSize: 32 }} />,
      title: "Express Delivery",
      description: "Fast and reliable delivery services for your urgent shipments. Perfect for time-sensitive documents and packages.",
      features: [
        "Next-day delivery available",
        "Real-time tracking",
        "Dedicated customer support",
        "Insurance coverage included"
      ]
    },
    {
      icon: <BusinessIcon sx={{ fontSize: 32 }} />,
      title: "Business Solutions",
      description: "Tailored logistics solutions for businesses of all sizes. Streamline your supply chain with our professional services.",
      features: [
        "Custom delivery schedules",
        "Bulk shipping discounts",
        "Dedicated account manager",
        "Detailed reporting and analytics"
      ]
    },
    {
      icon: <SecurityIcon sx={{ fontSize: 32 }} />,
      title: "Secure Shipping",
      description: "Advanced security measures to ensure your packages arrive safely. Our priority is the security of your shipments.",
      features: [
        "Tamper-proof packaging",
        "24/7 monitoring",
        "Secure storage facilities",
        "Insurance options available"
      ]
    },
    {
      icon: <PaymentIcon sx={{ fontSize: 32 }} />,
      title: "Flexible Payment",
      description: "Multiple payment options and flexible billing solutions to suit your business needs.",
      features: [
        "Multiple payment methods",
        "Monthly billing options",
        "Online payment portal",
        "Transparent pricing"
      ]
    },
    {
      icon: <SupportAgentIcon sx={{ fontSize: 32 }} />,
      title: "Customer Support",
      description: "24/7 customer support to assist you with any queries or concerns. We're here to help whenever you need us.",
      features: [
        "24/7 support availability",
        "Multiple contact channels",
        "Quick response times",
        "Dedicated support team"
      ]
    }
  ];

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
            Our Services
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
            Discover our comprehensive range of delivery and logistics services designed to meet all your shipping needs.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <ServiceCard {...service} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services; 