// eslint-disable-next-line import/no-duplicates
import React from 'react'
import JobsContainer from '../../components/Jobs/JobsContainer'
import { Stack } from '@mui/system'
import './Jobs.modules.css'
import { Box, Link } from '@mui/material'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import SelectEspecialidad from '../../components/Select/SelectEspecialidad'
import SelectExperiencia from '../../components/Select/SelectExperiencia'
import SelectSalario from '../../components/Select/SelectSalario'

const Jobs = () => {
    return (
        <Container disableGutters maxWidth={false}>
            <Typography
                mt={3}
                ml={2}
                display={{
                    xs: 'flex',
                    sm: 'flex',
                    md: 'flex',
                    lg: 'none',
                    xl: 'none',
                }}
                sx={{
                    fontFamily: 'Montserrat',
                    fontStyle: 'normal',
                    weight: '700',
                    fontSize: '32px',
                    linHeight: '32px',
                }}
            >
                Resultados
            </Typography>
            <Box
                mt={2}
                ml={2}
                className="buscador"
                display="flex"
                justifyContent={{ xs: 'start', sm: 'start', md: 'center' }}
            >
                <Typography
                    sx={{
                        fontFamily: 'Montserrat',
                        fontStyle: 'normal',
                        weight: '400',
                        linHeight: '56px',
                    }}
                    fontSize={{
                        xs: '25px',
                        sm: '25px',
                        md: '38px',
                        lg: '43px',
                        xl: '43px',
                    }}
                >
                    Se han encontrado 1001 trabajos
                </Typography>
            </Box>
            <Stack
                display={{
                    xs: 'none',
                    sm: 'none',
                    md: 'none',
                    lg: 'flex',
                    xl: 'flex',
                }}
                direction="row"
                justifyContent="space-evenly"
                alignItems="center"
                /* margin-top="150px" */
                mt={4}
            >
                <SelectEspecialidad />
                <SelectExperiencia />
                <SelectSalario />
            </Stack>

            <Stack justifyContent="center">
                <Link to="/" style={{ color: 'black', textDecoration: 'inherit'}}>
                    <JobsContainer/>
                </Link>
            </Stack>
        </Container>
    )
}

export default Jobs
