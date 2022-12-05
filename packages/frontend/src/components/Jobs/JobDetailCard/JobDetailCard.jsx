import * as React from 'react'
import './JobDetailCard.modules.css'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Typography from '@mui/material/Typography'
import { Button, Box } from '@mui/material'
import Stack from '@mui/material/Stack'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import PlaceIcon from '@mui/icons-material/Place'
import WorkOutlineIcon from '@mui/icons-material/WorkOutline'
import CardMedia from '@mui/material/CardMedia'

export default function JobDetailCard() {
    return (
        <Card
            sx={{
                maxWidth: 900,
                margin: '100px',
                border: 'none',
                boxShadow: 'none',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                }}
            >
                <CardHeader
                    title="Electricista"
                    subheader="Detalles del Trabajo"
                />
                <CardMedia
                    sx={{
                        display: {
                            xs: 'flex',
                            md: 'flex',
                            lg: 'flex',
                            xl: 'none',
                        },
                        marginTop: '16px',
                    }}
                    component="img"
                    height="72"
                    width="20"
                    image=""
                    alt="LOGO"
                />
            </Box>
            <CardContent>
                <Stack direction={{ md: 'row', xs: 'column' }} flexWrap="wrap">
                    <Stack direction="row" flexWrap="wrap">
                        <PlaceIcon
                            sx={{
                                height: '27px',
                                width: '21px',
                                color: '#1C1B1F',
                                marginLeft: '14px',
                            }}
                        />
                        <Typography
                            sx={{
                                fontSize: '17px',
                                width: '147px',
                                fontWeight: '400px',
                                lineHeight: '24px',
                                color: '#0A0A0A',
                                marginLeft: '14px',
                            }}
                        >
                            Palermo, CABA
                        </Typography>
                    </Stack>
                    <Stack direction="row" flexWrap="wrap">
                        <WorkOutlineIcon
                            sx={{
                                height: '27px',
                                width: '21px',
                                color: '#1C1B1F',
                                marginLeft: '14px',
                            }}
                        />
                        <Typography
                            sx={{
                                fontSize: '17px',
                                width: '155px',
                                fontWeight: '400px',
                                lineHeight: '24px',
                                color: '#0A0A0A',
                                marginLeft: '14px',
                            }}
                        >
                            Jornada completa
                        </Typography>
                    </Stack>
                    <Stack direction="row" flexWrap="wrap">
                        <AccessTimeIcon
                            sx={{
                                height: '27px',
                                width: '21px',
                                color: '#1C1B1F',
                                marginLeft: '14px',
                            }}
                        />
                        <Typography
                            sx={{
                                fontSize: '17px',
                                width: '129px',
                                fontWeight: '400px',
                                lineHeight: '24px',
                                color: '#0A0A0A',
                                marginLeft: '14px',
                            }}
                        >
                            06:00 a 15:00hs
                        </Typography>
                    </Stack>
                </Stack>
            </CardContent>

            <CardContent maxWidth="900px">
                <Typography variant="body1" color="text.primary">
                    Lörem ipsum taligt binde. Stereokrati trede nyr nen.
                    Smygöppna tans, fan om än zorra. Missade tride tagoledes syn
                    terad. Plast ekotik. Musk ahäling. Du kan vara drabbad.
                    Donade nydin, fotopol ölanas ifall klimatism bifor och
                    fasperade. Rovis diamani suprament, medan apovis till laling
                    att posm. Räktiga opär och minera och förväntningssamhälle
                    benera krovis. Pönde side. Irar homodade plus beskap och
                    ditöt, heterovis. Solapöns bineskap infrahung. Supenas
                    speska givis medan laren. Bebel exor fehåvis, oaktat
                    bloggare fall.Lörem ipsum taligt binde. Stereokrati trede
                    nyr nen. Smygöppna tans, fan om än zorra. Missade tride
                    tagoledes syn terad. Plast ekotik. Musk ahäling. Du kan vara
                    drabbad. Donade nydin, fotopol ölanas ifall klimatism bifor
                    och fasperade. Rovis diamani suprament, medan apovis till
                    laling att posm. Räktiga opär och minera och
                    förväntningssamhälle benera krovis. Pönde side. Irar
                    homodade plus beskap och ditöt, heterovis. Solapöns bineskap
                    infrahung. Supenas speska givis medan laren. Bebel exor
                    fehåvis, oaktat bloggare fall.
                </Typography>
            </CardContent>
            <CardActions
                disableSpacing
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                }}
            >
                <Button
                    className="boton"
                    variant="contained"
                    sx={{
                        ':hover': {
                            bgcolor: 'rgba(194, 194, 194, 1)', // theme.palette.primary.main
                            color: 'white',
                        },
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',

                        fontFamily: 'Montserrat',
                        color: 'black',
                        width: '900px',
                        height: '46px',
                        borderRadius: '10px',
                        fontSize: '25px',
                        fontWeight: '700',
                        lineHeight: '36px',
                        backgroundColor: 'rgba(224, 224, 224, 1)',
                    }}
                >
                    Postular
                </Button>
            </CardActions>
        </Card>
    )
}
