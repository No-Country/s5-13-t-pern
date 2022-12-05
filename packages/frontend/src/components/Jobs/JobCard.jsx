import React from 'react'
import { Card, Stack } from '@mui/material'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder'
import WorkOutlineIcon from '@mui/icons-material/WorkOutline'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import PlaceIcon from '@mui/icons-material/Place'
import './JobCard.modules.css'

const JobCard = (jobs) => {
    return (
        <Card
            sx={{
                margin: '0px',
                width: '360px',
                height: '144px',
                /* marginTop: '20px',
                marginLeft: '20px',
                marginRight: '20px', */
                borderRadius: '10px',
                bgcolor: '#E0E0E0',
            }}
        >
            <CardContent sx={{ padding: '0px' }}>
                <Stack
                    direction="row"
                    flexWrap="wrap"
                    justifyContent="space-between"
                >
                    <Typography
                        sx={{
                            position: 'absolute',
                            fontSize: '17px',
                            width: '100px',
                            fontWeight: '700',
                            lineHeight: '24px',
                            color: '#0A0A0A',
                            marginTop: '8px',
                            marginLeft: '12px',
                        }}
                    >
                        Electricista
                    </Typography>
                    <BookmarkBorderIcon
                        sx={{
                            height: '27px',
                            width: '21px',
                            color: '#1C1B1F',
                            position: 'absolute',
                            marginTop: '8px',
                            marginLeft: '320px',
                        }}
                    />
                </Stack>
                <Stack
                    direction="row"
                    flexWrap="wrap"
                    justifyContent="space-between"
                >
                    <PlaceIcon
                        sx={{
                            height: '27px',
                            width: '21px',
                            color: '#1C1B1F',
                            position: 'absolute',
                            marginTop: '40px',
                            marginLeft: '14px',
                        }}
                    />
                    <Typography
                        sx={{
                            position: 'absolute',
                            fontSize: '17px',
                            width: '147px',
                            fontWeight: '400px',
                            lineHeight: '24px',
                            color: '#0A0A0A',
                            marginTop: '40px',
                            marginLeft: '44px',
                        }}
                    >
                        Palermo, CABA
                    </Typography>
                </Stack>
                <Stack
                    direction="row"
                    flexWrap="wrap"
                    justifyContent="space-between"
                >
                    <WorkOutlineIcon
                        sx={{
                            height: '27px',
                            width: '21px',
                            color: '#1C1B1F',
                            position: 'absolute',
                            marginTop: '72px',
                            marginLeft: '14px',
                        }}
                    />
                    <Typography
                        sx={{
                            position: 'absolute',
                            fontSize: '17px',
                            width: '155px',
                            fontWeight: '400px',
                            lineHeight: '24px',
                            color: '#0A0A0A',
                            marginTop: '72px',
                            marginLeft: '44px',
                        }}
                    >
                        Jornada completa
                    </Typography>
                </Stack>
                <Stack
                    direction="row"
                    flexWrap="wrap"
                    justifyContent="space-between"
                >
                    <AccessTimeIcon
                        sx={{
                            height: '27px',
                            width: '21px',
                            color: '#1C1B1F',
                            position: 'absolute',
                            marginTop: '104px',
                            marginLeft: '14px',
                        }}
                    />
                    <Typography
                        sx={{
                            position: 'absolute',
                            fontSize: '17px',
                            width: '129px',
                            fontWeight: '400px',
                            lineHeight: '24px',
                            color: '#0A0A0A',
                            marginTop: '104px',
                            marginLeft: '44px',
                        }}
                    >
                        06:00 a 15:00hs
                    </Typography>
                    <Typography
                        sx={{
                            position: 'absolute',
                            fontSize: '12px',
                            width: '129px',
                            fontWeight: '400px',
                            lineHeight: '16px',
                            color: '#858585',
                            marginTop: '110px',
                            marginLeft: '260px',
                        }}
                    >
                        21/11/2022
                    </Typography>
                </Stack>
            </CardContent>
        </Card>
    )
}
export default JobCard
