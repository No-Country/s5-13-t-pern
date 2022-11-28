import * as React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { Stack } from '@mui/material'
import PersonIcon from '@mui/icons-material/Person'
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat'
import WorkOutlineIcon from '@mui/icons-material/WorkOutline'
import BookmarkIcon from '@mui/icons-material/Bookmark'

export default function Box3() {
    return (
        <Card
            sx={{
                minWidth: 275,
                width: '360px',
                height: '136px',
                backgroundColor: 'rgba(116,116,116,1)',
            }}
        >
            <CardContent>
                <Stack direction="row" spacing={2}>
                    <PersonIcon
                        sx={{
                            color: '#FFFFFF',
                            width: '56px',
                            height: '70px',
                        }}
                    />
                    <BookmarkIcon
                        sx={{
                            color: '#FFFFFF',
                            width: '42.51px',
                            height: '72.09px',
                        }}
                    />

                    <TrendingFlatIcon
                        sx={{
                            color: '#FFFFFF',
                            width: '127px',
                            height: '85.46px',
                        }}
                    />
                    <WorkOutlineIcon
                        sx={{
                            color: '#FFFFFF',
                            width: '50px',
                            height: '78px',
                        }}
                    />
                </Stack>
                <Typography
                    sx={{
                        color: '#FFFFFF',
                        width: '323px',
                        height: '24x',
                        fontFamily: 'Montserrat',
                        weight: '700',
                        fontSize: '21px',
                        lineHeight: '24px',
                    }}
                >
                    Guardar tus ofertas laborales
                </Typography>
            </CardContent>
        </Card>
    )
}
