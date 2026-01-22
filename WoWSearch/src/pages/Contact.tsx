import React from 'react'
import { Container, Typography } from '@mui/material'

export default function Contact() {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Contact
      </Typography>
      {/* Your contact content here */}
    </Container>
  )
}