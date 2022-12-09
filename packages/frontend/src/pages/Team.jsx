import { Typography, Stack, Paper } from '@mui/material'
import { Box, Container } from '@mui/system'
import React from 'react'

const Team = () => {
    return (
        <Container>
            <Stack mb={2}>
                <Box mb={3}>
                    <Typography
                        sx={{
                            fontFamily: 'Montserrat',
                            fontStyle: 'normal',
                            fontSize: '45px',
                            fontWeight: '700',
                            lineHeight: '88px',
                            textAlign: 'center',
                            justifyContent: 'start',
                            color: 'black',
                        }}
                    >
                        ¿Quiénes somos?
                    </Typography>
                </Box>
                <Box mb={3}>
                    <Paper elevation={8} sx={{ backgroundColor: '#E0E0E0 ' }}>
                        <Typography
                            sx={{
                                fontFamily: 'Montserrat',
                                fontStyle: 'normal',
                                fontWeight: '700',
                                fontSize: '25px',

                                lineHeight: '88px',
                                textAlign: 'center',
                                justifyContent: 'start',
                                color: 'black',
                            }}
                        >
                            Nuestro grupo de jóvenes desarrolladores está
                            compuesto por talentosos y apasionados programadores
                            que han unido sus habilidades para crear este sitio
                            web. Con un enfoque en la facilidad de uso y la
                            funcionalidad, hemos trabajado arduamente para
                            ofrecerte una experiencia en línea única y
                            satisfactoria. Estamos orgullosos de lo que hemos
                            creado y esperamos que disfrutes de nuestro sitio
                            tanto como nosotros lo disfrutamos al construirlo.
                            ¡Gracias por visitarnos!
                        </Typography>
                    </Paper>
                </Box>
            </Stack>
        </Container>
    )
}

export default Team
