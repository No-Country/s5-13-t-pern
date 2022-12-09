import React from 'react'
import { Box } from '@mui/system'
import { Container, Typography } from '@mui/material'
import SearchBox from '../../context/SearchBox'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'

const SearchBox1 = () => {
    return (
        <Container>
            <Stack
                sx={{
                    display: {
                        xl: 'row',
                        lg: 'row',
                        md: 'row',
                    },
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                    spacing: '12',
                }}
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
                    sx={{
                        color: 'black',
                        width: '360px',
                        height: '48px',
                        borderRadius: '12px',

                        fontWeight: '700',
                        lineHeight: '36px',
                        backgroundColor: 'rgba(224, 224, 224, 1)',
                    }}
                >
                    Buscar
                </Button>
            </Stack>
        </Container>
    )
}

export default SearchBox1
