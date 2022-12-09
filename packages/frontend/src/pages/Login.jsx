import React from 'react'
import { Box, Container, Grid, Paper, Typography } from '@mui/material'

import Form from '../components/Login/Form'

const Login = () => {
    const onSubmit = (data) => console.log(data)

    return (
        <Container
            minWidth="xs"
            sx={{
                display: 'flex',
                justifyContent: 'start',

                alignItems: 'center',
                minHeight: 'calc(100vh - 210px - 69px)',
            }}
        >
            <Grid container px={12}>
                <Grid
                    item
                    md={12}
                    sx={{
                        alignItems: 'center',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'start',
                        width: '100%',
                    }}
                    xs={12}
                >
                    <Typography
                        sx={{
                            justifyContent: { xs: 'start', md: 'center' },
                            display: 'flex',
                            flexDirection: 'column',
                            width: '100%',
                            fontSize: '25px',
                            lineHeight: '32px',
                            fontFamily: 'Montserrat',
                            weight: '700',
                        }}
                    >
                        Inicia sesión
                    </Typography>
                    <Typography
                        sx={{
                            justifyContent: { xs: 'start', md: 'center' },
                            display: 'flex',
                            flexDirection: 'column',
                            width: '100%',
                            fontSize: '17px',
                            lineHeight: '24px',
                            fontFamily: 'Montserrat',
                            weight: '400',
                        }}
                    >
                        ¡Nos alegra que hayas vuelto!
                    </Typography>

                    <Box sx={{ minWidth: 324, paddingTop: '20px' }}>
                        <Paper>
                            <Form onSubmit={onSubmit} />
                        </Paper>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Login
