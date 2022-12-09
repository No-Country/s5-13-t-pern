import * as React from 'react'
import './Home.modules.css'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import { Stack } from '@mui/system'
import { Button, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import Box1 from '../../components/Boxes/Box1'
import Box2 from '../../components/Boxes/Box2'
import Box3 from '../../components/Boxes/Box3'
import SearchBox from '../../context/SearchBox'
import SearchCargo from '../../context/SearchCargo'
import SearchPlace from '../../context/SearchPlace.jsx'

export default function Home() {
    return (
        <Container disableGutters maxWidth={false}>
            <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
            >
                <Container id="searchbox" disableGutters maxWidth={false}>
                    <Typography
                        display={{
                            xs: 'none',
                            sm: 'none',
                            md: 'none',
                            lg: 'flex',
                            xl: 'flex',
                        }}
                        fontSize={{
                            xl: '75px',
                            lg: '40px',
                        }}
                        justifyContent={{
                            xl: 'center',
                            lg: 'center',
                        }}
                        sx={{
                            fontFamily: 'Montserrat',
                            fontStyle: 'normal',
                            fontWeight: '700',
                            lineHeight: '88px',
                            textAlign: 'center',
                            color: '#FFFFFF',
                            marginTop: '100px',
                        }}
                    >
                        ¡Una nueva oportunidad más cerca de lo que crees!
                    </Typography>
                    <Typography
                        mt={4}
                        ml={4}
                        display={{
                            xs: 'flex',
                            md: 'flex',
                            lg: 'none',
                            xl: 'none',
                        }}
                        sx={{
                            fontFamily: 'Montserrat',
                            fontStyle: 'normal',
                            fontWeight: '700',
                            fontSize: '35px',
                            lineHeight: '32px',
                            textAlign: 'center',
                            color: '#FFFFFF',
                        }}
                    >
                        Buscador
                    </Typography>
                    <Typography
                        mt={1}
                        ml={4}
                        display={{
                            xs: 'flex',
                            md: 'flex',
                            lg: 'none',
                            xl: 'none',
                        }}
                        sx={{
                            fontFamily: 'Montserrat',
                            fontStyle: 'normal',
                            fontWeight: '400',
                            fontSize: '20px',
                            lineHeight: '24px',
                            textAlign: 'center',
                            color: '#FFFFFF',
                        }}
                    >
                        Filtra tu futuro trabajo
                    </Typography>
                    <Stack
                        marginTop="80px"
                        spacing={3}
                        justifyContent="center"
                        direction={{
                            xs: 'column',
                            md: 'column',
                            lg: 'column',
                            xl: 'row',
                        }}
                        alignItems={{
                            xs: 'center',
                            md: 'center',
                            lg: 'center',
                            xl: 'end',
                        }}
                    >
                        <Box fullWidth>
                            <Typography className="label">Cargo</Typography>
                            <SearchCargo
                                fullWidth
                                sx={{
                                    fontFamily: 'Montserrat',
                                    color: 'black',
                                    fontSize: '30px',
                                    fontWeight: '700',
                                    lineHeight: '36px',
                                }}
                            />
                        </Box>
                        <Box>
                            <Typography className="label">Lugar</Typography>
                            <SearchPlace className="box2" />
                        </Box>
                        {/* <Box>
                            <Typography className="label">Distancia</Typography>
                            <SearchBox className="box3" />
                        </Box> */}

                        <Link to="/jobs">
                            <Button
                                className="box3"
                                variant="contained"
                                sx={{
                                    ':hover': {
                                        bgcolor: 'rgba(194, 194, 194, 1)', // theme.palette.primary.main
                                        color: 'white',
                                    },
                                    fontFamily: 'Montserrat',
                                    color: 'black',
                                    width: '360px',
                                    height: '48px',
                                    borderRadius: '12px',
                                    fontSize: '30px',
                                    fontWeight: '700',
                                    lineHeight: '36px',
                                    backgroundColor: 'rgba(224, 224, 224, 1)',
                                }}
                            >
                                Buscar
                            </Button>
                        </Link>
                    </Stack>
                </Container>
                <Container
                    height={{
                        xl: 'flex',
                        lg: 'flex',
                        md: 'flex',
                        sm: 'none',
                        xs: 'none',
                    }}
                    className="bloque2-home"
                    disableGutters
                    maxWidth={false}
                >
                    <Stack
                        display={{
                            xl: 'flex',
                            lg: 'flex',
                            md: 'flex',
                            sm: 'none',
                            xs: 'none',
                        }}
                    >
                        <Typography
                            display={{
                                xl: 'flex',
                                lg: 'flex',
                                md: 'flex',
                                sm: 'none',
                                xs: 'none',
                            }}
                            sx={{
                                fontFamily: 'Montserrat',
                                fontWeight: '700',
                                lineHeight: '48px',
                                fontSize: '36px',
                                color: 'black',
                                display: 'flex',
                                alignItems: 'center',
                                marginLeft: '156px',
                                marginTop: '40px',
                            }}
                        >
                            ¿Qué puedes hacer en Scrapjob?
                        </Typography>
                    </Stack>

                    <Stack
                        display={{
                            xl: 'flex',
                            lg: 'flex',
                            md: 'flex',
                            sm: 'none',
                            xs: 'none',
                        }}
                        paddingTop="50px"
                        paddingBottom="50px"
                        justifyContent="space-evenly"
                        alignItems="center"
                        direction={{ xs: 'column', sm: 'column', md: 'row' }}
                        spacing={2}
                    >
                        <Box1 />
                        <Box2 />
                        <Box3 />
                    </Stack>
                </Container>
            </Grid>
        </Container>
    )
}