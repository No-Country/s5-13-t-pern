// eslint-disable-next-line import/no-duplicates
import React from 'react'
import JobsContainer from '../../components/Jobs/JobsContainer'
import { Stack } from '@mui/system'
import './Jobs.modules.css'
import { Box, Link } from '@mui/material'
import SearchBox from '../../context/SearchBox'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import SelectEspecialidad from '../../components/Select/SelectEspecialidad'
import SelectExperiencia from '../../components/Select/SelectExperiencia'
import SelectSalario from '../../components/Select/SelectSalario'

const Jobs = (jobs) => {
    return (
        <Container disableGutters maxWidth={false}>
            <Stack
                className="searchbox3"
                direction="row"
                alignItems="center"
                spacing={12}
                backgroundColor="#E4E4E4"
                height="140px"
            >
                <Stack
                    direction="row"
                    paddingLeft="180px"
                    justifyContent="space-evenly"
                    alignItems="center"
                    spacing={12}
                >
                    <Box>
                        <Typography className="label1">Cargo</Typography>
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
                        <Typography className="label1">Lugar</Typography>
                        <SearchBox className="box2" />
                    </Box>
                    <Box>
                        <Typography className="label1">Distancia</Typography>
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
            </Stack>
            <Box className="buscador">
                <Typography
                    sx={{
                        fontFamily: 'Montserrat',
                        fontStyle: 'normal',
                        weight: '400',
                        fontSize: '43px',
                        linHeight: '56px',
                    }}
                >
                    Se han encontrado 1001 trabajos
                </Typography>
            </Box>
            <Stack
                direction="row"
                justifyContent="space-evenly"
                alignItems="center"
                margin-top="150px"
            >
                <SelectEspecialidad />
                <SelectExperiencia />
                <SelectSalario />
            </Stack>

            <Stack className="containerjobs">
                <Link to="/">
                    <JobsContainer jobs={jobs} />
                </Link>
            </Stack>
        </Container>
    )
}

export default Jobs
