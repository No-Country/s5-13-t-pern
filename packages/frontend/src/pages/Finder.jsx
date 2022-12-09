import React from 'react'
import { Box, Container, Grid, Paper, Typography } from '@mui/material'

import SearchBox1 from '../components/SearchBox/SearchBox1'

const Finder = () => {
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
                        Buscador
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
                        Filtra tu futuro trabajo
                    </Typography>

                    <Box sx={{ minWidth: 324, paddingTop: '20px' }}>
                        <Paper>
                            <SearchBox1 />
                        </Paper>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Finder
