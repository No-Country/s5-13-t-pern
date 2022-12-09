import { Typography, Stack, Paper } from '@mui/material'
import { Box, Container } from '@mui/system'
import React from 'react'

const AboutUs = () => {
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
                        ¿Cómo funciona Scrapjob?
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
                            ¿Te imaginas tener todos los avisos de empleo
                            disponibles en internet en un solo lugar? ¡Eso es
                            exactamente lo que hace nuestro scraper! Nuestra
                            aplicación recopila avisos de empleo de diferentes
                            fuentes en internet, como páginas de empleo o redes
                            sociales, y los agrega en una base de datos que
                            puedes acceder fácilmente.
                        </Typography>
                    </Paper>
                </Box>
                <Box mb={3}>
                    <Paper elevation={4} sx={{ backgroundColor: 'white' }}>
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
                            De esta manera, en lugar de tener que revisar uno
                            por uno los diferentes sitios de empleo, puedes
                            utilizar nuestro scraper para buscar y filtrar los
                            avisos de empleo según tus preferencias. Puedes
                            elegir el tipo de trabajo que estás buscando, la
                            ubicación deseada o el salario que estás dispuesto a
                            aceptar. ¡Así de fácil!
                        </Typography>
                    </Paper>
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
                            Además, nuestro scraper se actualiza constantemente
                            para asegurarse de que tienes acceso a todos los
                            avisos de empleo disponibles en internet. ¡No te
                            pierdas ninguna oportunidad laboral con nuestro
                            scraper! Prueba nuestra aplicación hoy mismo y
                            comienza tu búsqueda de empleo de manera eficiente y
                            efectiva.
                        </Typography>
                    </Paper>
                </Box>
            </Stack>
        </Container>
    )
}

export default AboutUs
