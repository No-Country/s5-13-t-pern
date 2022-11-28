import * as React from 'react'
import './Home.modules.css'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import SearchBox from '../../components/SearchBox'
import { Stack } from '@mui/system'
import { Button, Typography } from '@mui/material'
import Box1 from '../../components/Boxes/Box1'
import Box2 from '../../components/Boxes/Box2'
import Box3 from '../../components/Boxes/Box3'

export default function Home() {
    return (
        <React.Fragment>
            <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
            >
                <Container id="searchbox" disableGutters maxWidth={false}>
                    <Typography
                        sx={{
                            fontFamily: 'Montserrat',
                            fontStyle: 'normal',
                            fontWeight: '700',
                            fontSize: '75px',
                            lineHeight: '88px',
                            display: 'flex',

                            color: '#FFFFFF',
                            marginTop: '100px',
                        }}
                    >
                        ¡Una nueva oportunidad más cerca de lo que crees!
                    </Typography>
                    <Stack
                        className="searchbox2"
                        direction="row"
                        justifyContent="space-evenly"
                        alignItems="center"
                        spacing={12}
                    >
                        <Box>
                            <Typography className="label">Cargo</Typography>
                            <SearchBox
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
                            <SearchBox className="box2" />
                        </Box>
                        <Box>
                            <Typography className="label">Distancia</Typography>
                            <SearchBox className="box3" />
                        </Box>
                        <div className="label2"></div>
                        <Button
                            variant="contained"
                            sx={{
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
                    </Stack>
                </Container>
                <Container
                    className="bloque2-home"
                    disableGutters
                    maxWidth={false}
                >
                    <Stack>
                        <Typography
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
                        paddingTop="50px"
                        paddingBottom="50px"
                        justifyContent="space-evenly"
                        alignItems="center"
                        direction={{ xs: 'column', sm: 'row' }}
                        spacing={2}
                    >
                        <Box1 />
                        <Box2 />
                        <Box3 />
                    </Stack>
                </Container>
            </Grid>
        </React.Fragment>
    )
}
