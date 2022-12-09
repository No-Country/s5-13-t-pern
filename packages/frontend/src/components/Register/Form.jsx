import React from 'react'
import { Button, Grid, TextField, Typography, Container } from '@mui/material'
import { useForm } from 'react-hook-form'
import { useTheme } from '@emotion/react'
import { Link } from 'react-router-dom'

// eslint-disable-next-line react/prop-types
const Form = ({ onSubmit }) => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const { palette } = useTheme()

    const password = watch('password1')
    const repeatPassword = watch('password2')

    return (
        <Container
            maxWidth="xl"
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <form style={{ width: '100%' }} onSubmit={handleSubmit(onSubmit)}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Nombre"
                            type="text"
                            variant="standard"
                            {...register('name', { required: true })}
                        />
                        {errors.email && (
                            <Typography color="error" variant="caption">
                                El campo Nombre es obligatorio
                            </Typography>
                        )}
                    </Grid>
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
                            {...register('password1', { required: true })}
                        />
                    </Grid>
                    {errors.email && (
                        <Typography color="error" variant="caption">
                            El campo Contraseña es obligatorio
                        </Typography>
                    )}
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Confirmar contraseña"
                            type="password"
                            variant="standard"
                            {...register('password2', { required: true })}
                        />
                        {errors.password2 && (
                            <Typography color="error" variant="caption">
                                El campo Repetir Contraseña es obligatorio
                            </Typography>
                        )}
                        {password !== '' &&
                            repeatPassword !== '' &&
                            password !== repeatPassword && (
                                <Typography color="error" variant="caption">
                                    Las contraseñas no coinciden
                                </Typography>
                            )}
                    </Grid>
                </Grid>
                <Grid container mt={5} spacing={1}>
                    <Grid item xs={12}>
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
                    <Grid item mt={3} xs={6}>
                        <Button
                            fullWidth
                            type="submit"
                            variant="contained"
                            sx={{
                                ':hover': {
                                    bgcolor: 'rgba(194, 194, 194, 1)',
                                    color: 'white',
                                },
                                background: '#666666',
                            }}
                        >
                            Registrarse
                        </Button>
                    </Grid>
                    <Grid item mt={3} xs={6}>
                        <Link style={{ textDecoration: 'none' }} to="/">
                            <Button
                                fullWidth
                                sx={{
                                    ':hover': {
                                        bgcolor: 'rgba(194, 194, 194, 1)',
                                        color: 'white',
                                    },
                                    background: '#C2C2C2',
                                }}
                                type="reset"
                                variant="contained"
                            >
                                Cancelar
                            </Button>
                        </Link>
                    </Grid>
                </Grid>
                <Grid item mt={1} sx={{ paddingBottom: 1 }} xs={12}>
                    <Typography variant="caption">
                        Ya tienes una cuenta?{' '}
                        <Link
                            style={{ color: palette.primary.main }}
                            to="/login"
                        >
                            Ingresa aquí
                        </Link>
                    </Typography>
                </Grid>
            </form>
        </Container>
    )
}

export default Form
