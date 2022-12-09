import React, { useState } from 'react'
import { Container, Stack, Box } from '@mui/system'
import { Typography, Grid, Button } from '@mui/material'

const Contact = () => {
    const [name, setName] = useState('')
    const [comment, setComment] = useState('')
    const [submitted, setSubmitted] = useState(false)

    function handleSubmit(event) {
        event.preventDefault()

        // Validate input fields
        if (!name || !comment) {
            return
        }

        // Submit form data
        // ...

        setSubmitted(true)
    }

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
                    <Stack display="flex" direction="column">
                        <Box>
                            <Typography
                                sx={{
                                    justifyContent: {
                                        xs: 'start',
                                        md: 'center',
                                    },
                                    display: 'flex',
                                    flexDirection: 'column',
                                    width: '100%',
                                    fontSize: '45px',
                                    lineHeight: '32px',
                                    fontFamily: 'Montserrat',
                                    weight: '700',
                                }}
                            >
                                Dejanos tu comentario o sugerencia
                            </Typography>
                        </Box>
                        <form
                            onSubmit={handleSubmit}
                            style={{
                                width: '90%',
                                height: '600px',
                            }}
                        >
                            <Box mt={20}>
                                <label>
                                    <Typography
                                        sx={{
                                            fontSize: '35px',
                                            lineHeight: '32px',
                                            fontFamily: 'Montserrat',
                                        }}
                                    >
                                        Nombre:
                                        <input
                                            style={{
                                                width: '300px',
                                                height: '40px',
                                                display: 'block',
                                                margin: '0 auto',
                                            }}
                                            type="text"
                                            value={name}
                                            onChange={(event) =>
                                                setName(event.target.value)
                                            }
                                        />
                                    </Typography>
                                </label>
                            </Box>
                            <Box mt={5}>
                                <label>
                                    {' '}
                                    <Typography
                                        sx={{
                                            fontSize: '35px',
                                            lineHeight: '32px',
                                            fontFamily: 'Montserrat',
                                        }}
                                    >
                                        Comentario:
                                    </Typography>
                                    <input
                                        style={{
                                            width: '300px',
                                            height: '200px',
                                            display: 'block',
                                            margin: '0 auto',
                                        }}
                                        type="text"
                                        value={comment}
                                        onChange={(event) =>
                                            setComment(event.target.value)
                                        }
                                    />
                                </label>
                            </Box>
                            <Box mt={5}>
                                {submitted ? (
                                    <p>Gracias por tu comentario!</p>
                                ) : (
                                    <Button
                                        type="submit"
                                        sx={{
                                            ':hover': {
                                                bgcolor:
                                                    'rgba(194, 194, 194, 1)', // theme.palette.primary.main
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
                                        Enviar comentario
                                    </Button>
                                )}
                            </Box>
                        </form>
                    </Stack>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Contact
