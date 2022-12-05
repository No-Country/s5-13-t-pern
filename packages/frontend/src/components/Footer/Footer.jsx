import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'

import Container from '@mui/material/Container'
import AdbIcon from '@mui/icons-material/Adb'
import Grid from '@mui/material/Grid'

function Footer() {
    const [, setAnchorElNav] = React.useState(null)
    const [, setAnchorElUser] = React.useState(null)

    // eslint-disable-next-line no-unused-vars
    const handleCloseNavMenu = () => {
        setAnchorElNav(null)
    }

    // eslint-disable-next-line no-unused-vars
    const handleCloseUserMenu = () => {
        setAnchorElUser(null)
    }

    return (
        <AppBar
            position="static"
            sx={{
                width: '100%',
                height: { xs: '170px', md: '260px' },
                backgroundColor: '#E4E4E4',
            }}
        >
            <Container disableGutters maxWidth={false}>
                <Toolbar disableGutters>
                    <AdbIcon
                        sx={{
                            width: '48px',
                            height: '64px',
                            radius: '10px',
                            color: 'rgba(0,0,0,1)',

                            margin: '90px 1236px 136px 156px',
                            display: { xs: 'none', md: 'flex' },
                            mr: 1,
                        }}
                    />
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            width: '180px',
                            height: '36px',
                            margin: '100px 0px 150px 0px',
                            mr: 1,
                            color: 'rgba(0,0,0,1)',

                            fontSize: '28px',
                            lineHeight: '36px',
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'Montserrat',
                            fontWeight: 700,
                            textDecoration: 'none',
                        }}
                    >
                        Scrapjob
                    </Typography>

                    <AdbIcon
                        sx={{
                            justifyContent: 'center',
                            display: { xs: 'flex', md: 'none' },
                            mr: 1,
                            color: 'rgba(0,0,0,1)',
                        }}
                    />
                    <Typography
                        sx={{
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            justifyContent: 'left',
                            fontFamily: 'Montserrat',
                            fontWeight: '700',
                            fontSize: '30px',
                            lineHeight: '36px',
                            textDecoration: 'none',
                            color: 'rgba(0,0,0,1)',
                        }}
                    >
                        Scrapjob
                    </Typography>
                    <Grid
                        container
                        direction="column"
                        justifyContent="center"
                        alignItems="flexStart"
                        rowSpacing={1.5}
                        marginBottom="0px"
                        marginRight="10px"
                        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                    >
                        <Grid item xs={12}>
                            <Typography
                                sx={{
                                    display: { xs: 'none', md: 'flex' },
                                    flexGrow: 1,
                                    justifyContent: 'left',
                                    fontFamily: 'Montserrat',
                                    fontWeight: '700',
                                    fontSize: '21px',
                                    lineHeight: '24px',
                                    color: 'rgba(10,10,10,1)',
                                    marginLeft: '60px',

                                    textDecoration: 'none',
                                }}
                            >
                                Home
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography
                                sx={{
                                    display: { xs: 'none', md: 'flex' },
                                    flexGrow: 1,
                                    justifyContent: 'left',
                                    fontFamily: 'Montserrat',
                                    fontWeight: '400',
                                    fontSize: '21px',
                                    lineHeight: '24px',
                                    marginLeft: '60px',

                                    color: 'rgba(10,10,10,1)',
                                    textDecoration: 'none',
                                }}
                            >
                                Publicar empleo
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography
                                sx={{
                                    display: { xs: 'none', md: 'flex' },
                                    flexGrow: 1,
                                    justifyContent: 'left',
                                    fontFamily: 'Montserrat',
                                    fontWeight: 400,
                                    fontSize: '21px',
                                    lineHeight: '24px',
                                    color: 'rgba(10,10,10,1)',
                                    marginLeft: '60px',

                                    textDecoration: 'none',
                                }}
                            >
                                ¿Quiénes somos?
                            </Typography>
                        </Grid>
                    </Grid>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Footer
