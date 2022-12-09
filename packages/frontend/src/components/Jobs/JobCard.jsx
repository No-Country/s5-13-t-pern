import React from 'react'
import { Card, Stack } from '@mui/material'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder'
import WorkOutlineIcon from '@mui/icons-material/WorkOutline'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import PlaceIcon from '@mui/icons-material/Place'
import Tooltip from '@mui/material/Tooltip'
import './JobCard.modules.css'

const JobCard = ({ jobs }) => {

    return (
        <Card
            sx={{
                margin: '0px',
                width: '360px',
                // height: '144px',
                /* marginTop: '20px',
                marginLeft: '20px',
                marginRight: '20px', */
                borderRadius: '10px',
                bgcolor: '#E0E0E0',
                paddingX: '12px',
                paddingTop: '15px'
            }}
        >
            <CardContent sx={{ padding: '0px' }}>


                <Stack
                    direction="row"
                    flexWrap="wrap"
                    justifyContent="space-between"
                >
                    <Tooltip title={jobs.name} arrow placement='top'>

                        <Typography
                            sx={{
                                fontSize: '17px',
                                fontWeight: '700',
                                lineHeight: '24px',
                                color: '#0A0A0A',
                                display: 'block',
                                overflow: 'hidden',
                                whiteSpace: 'nowrap',
                                textOverflow: 'ellipsis',
                                width: '327px',
                                marginBottom: '20px'
                            }}
                        >
                            {jobs.name}
                        </Typography>
                    </Tooltip>

                    <BookmarkBorderIcon
                        sx={{
                            height: '27px',
                            position: 'absolute',
                            width: '21px',
                            color: '#1C1B1F',
                            marginLeft: '320px',
                        }}
                    />
                </Stack>
                <Stack
                    direction="row"
                    flexWrap="wrap"
                    justifyContent="start"
                >
                    <PlaceIcon
                        sx={{
                            height: '27px',
                            width: '21px',
                            color: '#1C1B1F',
                        }}
                    />
                    <Typography
                        sx={{
                            fontSize: '17px',
                            fontWeight: '400px',
                            lineHeight: '24px',
                            color: '#0A0A0A',
                            marginLeft: '5px',
                        }}
                    >
                        {jobs.location}
                    </Typography>
                </Stack>
                <Stack
                    direction="row"
                    flexWrap="wrap"
                    justifyContent="start"
                >
                    <WorkOutlineIcon
                        sx={{
                            height: '27px',
                            width: '21px',
                            color: '#1C1B1F',
                        }}
                    />
                    <Typography
                        sx={{
                            fontSize: '17px',
                            width: '155px',
                            fontWeight: '400px',
                            lineHeight: '24px',
                            color: '#0A0A0A',
                            marginLeft: '5px',
                        }}
                    >
                        Jornada completa
                    </Typography>
                </Stack>
                <Stack
                    direction="row"
                    flexWrap="wrap"
                    justifyContent="start"
                >
                    <AccessTimeIcon
                        sx={{
                            height: '27px',
                            width: '21px',
                            color: '#1C1B1F',
                        }}
                    />
                    <Typography
                        sx={{
                            fontSize: '17px',
                            width: '129px',
                            fontWeight: '400px',
                            lineHeight: '24px',
                            color: '#0A0A0A',
                            marginLeft: '5px',
                        }}
                    >
                        06:00 a 15:00hs
                    </Typography>
                </Stack>
                <Stack
                    textAlign="right"
                >
                    <Typography
                        sx={{
                            fontSize: '12px',
                            fontWeight: '400px',
                            lineHeight: '16px',
                            color: '#858585',
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
