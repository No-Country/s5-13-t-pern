import React from 'react'
import { Box, CircularProgress, Container, Typography } from '@mui/material'

const Spinner = () => (
    <Container
        maxWidth="xl"
        sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: 'calc(100vh - 210px - 69px)',
        }}
    >
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
            }}
        >
            <CircularProgress color="primary" />
            <Typography textAlign="center" variant="body">
                Cargando...
            </Typography>
        </Box>
    </Container>
)

export default Spinner
