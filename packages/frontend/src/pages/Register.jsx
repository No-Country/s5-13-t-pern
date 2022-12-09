import React from 'react'
import { Box, Container, Grid, Paper, Typography } from '@mui/material'

import Form from '../components/Register/Form'

const Register = () => {
    const onSubmit = (data) => console.log(data)

    return (
        <Container
            maxWidth="xl"
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: 'calc(100vh - 210px - 69px)',
                padding: '30px 10px 50px 10px',
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
                        justifyContent: 'center',
                        width: '100%',
                    }}
                    xs={12}
                >
                    <Typography
                        sx={{
                            alignItems: 'start',
                            display: 'flex',
                            flexDirection: 'column',
                            width: '100%',
                            fontSize: '25px',
                            lineHeight: '32px',
                            fontFamily: 'Montserrat',
                            weight: '700',
                        }}
                    >
                        Regístrate
                    </Typography>
                    <Typography
                        sx={{
                            alignItems: 'start',
                            display: 'flex',
                            flexDirection: 'column',
                            width: '100%',
                            fontSize: '17px',
                            lineHeight: '24px',
                            fontFamily: 'Montserrat',
                            weight: '400',
                        }}
                    >
                        ¡Crea tu cuenta y mira las ofertas más adecuadas a tu
                        perfil profesional!
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

export default Register
