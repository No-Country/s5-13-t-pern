import React from 'react'
import {
    Button,
    TextField,
    Typography,
    Grid,
    Container,
    useTheme,
} from '@mui/material'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'

// eslint-disable-next-line react/prop-types
const Form = ({ onSubmit }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const { palette } = useTheme()

    return (
        <Container
            maxWidth="xl"
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <form onSubmit={handleSubmit(onSubmit)}>
                <Grid container spacing={1}>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Email"
                            type="email"
                            variant="standard"
                            {...register('email', { required: true })}
                        />
                        {errors.email && (
                            <Typography color="error" variant="caption">
                                El campo Email es obligatorio
                            </Typography>
                        )}
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Contraseña"
                            type="password"
                            variant="standard"
                            {...register('password', { required: true })}
                        />
                        {errors.password && (
                            <Typography color="error" variant="caption">
                                El campo Contraseña es obligatorio
                            </Typography>
                        )}
                    </Grid>
                </Grid>
                <Grid container mt={5}>
                    <Grid item xs={6}>
                        <Button
                            fullWidth
                            type="submit"
                            variant="contained"
                            sx={{
                                ':hover': {
                                    bgcolor: 'rgba(194, 194, 194, 1)', // theme.palette.primary.main
                                    color: 'white',
                                },
                                background: '#666666',
                            }}
                        >
                            Ingresar
                        </Button>
                    </Grid>
                    <Grid item mb={3} xs={6}>
                        <Link style={{ textDecoration: 'none' }} to="/">
                            <Button
                                fullWidth
                                color="secondary"
                                type="reset"
                                variant="contained"
                                sx={{
                                    ':hover': {
                                        bgcolor: 'rgba(194, 194, 194, 1)', // theme.palette.primary.main
                                        color: 'white',
                                    },
                                    background: '#C2C2C2',
                                }}
                            >
                                Cancelar
                            </Button>{' '}
                        </Link>
                    </Grid>
                    <Grid item mt={-2} sx={{ paddingBottom: 1 }} xs={12}>
                        <Typography variant="caption">
                            ¿No tienes una cuenta?{' '}
                            <Link
                                style={{ color: palette.primary.main }}
                                to="/register"
                            >
                                Regístrate aquí
                            </Link>
                        </Typography>
                    </Grid>
                    <Grid item mt={6} xs={12}>
                        <Link to="/jobs">
                            <Button
                                sx={{
                                    ':hover': {
                                        bgcolor: 'rgba(194, 194, 194, 1)', // theme.palette.primary.main
                                        color: 'white',
                                    },
                                    height: '48px',
                                    width: '100%',
                                    left: '-1847',
                                    top: '7055',
                                    borderRadius: '10px',
                                    background: 'rgba(40, 196, 37, 1)',
                                    fontFamily: 'Montserrat',
                                    color: 'rgba(255,255,255,1)',
                                    fontSize: '21px',
                                    lineHeight: '24px',
                                    alignSelf: 'center',
                                }}
                            >
                                Buscar ofertas
                            </Button>
                        </Link>
                    </Grid>
                </Grid>
            </form>
        </Container>
    )
}

export default Form
