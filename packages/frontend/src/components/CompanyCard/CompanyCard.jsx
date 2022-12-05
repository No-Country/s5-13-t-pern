import * as React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { Box, Rating } from '@mui/material'
import './CompanyCard.modules.css'

export default function CompanyCard() {
    return (
        <Card
            sx={{
                display: { xs: 'none', md: 'none', lg: 'none', xl: 'flex' },
                maxWidth: 400,
                height: 180,
                margin: '100px',
                border: 'none',
                boxShadow: 'none',
            }}
        >
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                    <CardMedia
                        component="img"
                        height="72"
                        width="20"
                        image=""
                        alt="LOGO"
                    />
                    <Box
                        width="300px"
                        sx={{ display: 'flex', flexDirection: 'column' }}
                    >
                        <CardContent sx={{ padding: '0px' }}>
                            <Typography
                                sx={{
                                    fontFamily: 'Montserrat',
                                    fontSize: '17px',
                                    fontWeight: '700',
                                    lineHeight: '24px',
                                    display: 'flex',
                                    alignItems: 'center',
                                }}
                            >
                                Empresa Nombre
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                1005 empleados
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Internacional
                            </Typography>
                        </CardContent>
                    </Box>
                </Box>
                <CardContent
                    className="rating"
                    style={{
                        alignItems: 'center',
                        justifyContent: 'start',
                        display: 'flex',
                    }}
                >
                    <Rating
                        readOnly
                        name="read-only"
                        precision={0.5}
                        size="large"
                        value="3"
                    />
                </CardContent>
            </Box>
        </Card>
    )
}
