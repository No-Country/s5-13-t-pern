import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'
import MenuItem from '@mui/material/MenuItem'
import AdbIcon from '@mui/icons-material/Adb'

const pages = ['Publicar un empleo', '¿Quiénes somos?', 'Postulaciones']
const settings = ['Mi perfil', 'Configuración', 'Dashboard', 'Logout']

function Header() {
    const [anchorElNav, setAnchorElNav] = React.useState(null)
    const [anchorElUser, setAnchorElUser] = React.useState(null)

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget)
    }
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget)
    }

    const handleCloseNavMenu = () => {
        setAnchorElNav(null)
    }

    const handleCloseUserMenu = () => {
        setAnchorElUser(null)
    }

    return (
        <AppBar position="static" sx={{ backgroundColor: '#E4E4E4' }}>
            <Container disableGutters maxWidth={false}>
                <Toolbar disableGutters>
                    <AdbIcon
                        sx={{
                            display: { xs: 'none', md: 'flex' },
                            mr: 1,
                            width: '33.6px',
                            height: '38.4px',
                            marginTop: '10px',
                            marginLeft: '170px',
                            color: 'rgba(0,0,0,1)',
                        }}
                    />
                    <Typography
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'Montserrat',
                            fontWeight: 700,
                            fontSize: '36px',
                            lineHeight: '48px',
                            marginTop: '10px',

                            color: 'rgba(0,0,0,1)',
                            textDecoration: 'none',
                            ':hover': {
                                bgcolor: 'rgba(194, 194, 194, 1)', // theme.palette.primary.main
                                color: 'white',
                            },
                        }}
                    >
                        Scrapjob
                    </Typography>

                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: 'flex', md: 'none' },
                        }}
                    >
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem
                                    key={page}
                                    onClick={handleCloseNavMenu}
                                >
                                    <Typography textAlign="center">
                                        {page}
                                    </Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <AdbIcon
                        sx={{
                            display: { xs: 'flex', md: 'none' },
                            mr: 1,
                            marginTop: '10px',
                            color: 'rgba(0,0,0,1)',
                        }}
                    />
                    <Typography
                        noWrap
                        component="a"
                        href=""
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'Montserrat',
                            fontWeight: 700,
                            fontSize: '36px',
                            lineHeight: '48px',
                            marginTop: '10px',
                            color: 'rgba(0,0,0,1)',
                            textDecoration: 'none',
                        }}
                    >
                        Scrapjob
                    </Typography>
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: 'none', md: 'flex' },
                            marginTop: '50px',
                            marginLeft: '100px',
                        }}
                    >
                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={handleCloseNavMenu}
                                sx={{
                                    my: 2,
                                    color: 'rgba(0,0,0,1)',
                                    display: 'block',
                                    padding: '0px 15px 0px 15px',
                                    fontFamily: 'Montserrat',
                                }}
                            >
                                <Typography
                                    sx={{
                                        mr: 2,

                                        flexGrow: 1,
                                        fontFamily: 'Montserrat',
                                        fontWeight: 700,
                                        fontSize: '23px',
                                        lineHeight: '48px',
                                        marginTop: '10px',
                                        color: 'rgba(0,0,0,1)',
                                        textDecoration: 'none',
                                    }}
                                >
                                    {page}
                                </Typography>
                            </Button>
                        ))}
                    </Box>

                    <Box sx={{ flexGrow: 1 }}>
                        <Tooltip title="Open settings">
                            <IconButton
                                onClick={handleOpenUserMenu}
                                sx={{ p: 0 }}
                            >
                                <Avatar
                                    alt="Remy Sharp"
                                    src="/static/images/avatar/2.jpg"
                                    sx={{ marginRight: '10px' }}
                                />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting) => (
                                <MenuItem
                                    key={setting}
                                    onClick={handleCloseUserMenu}
                                >
                                    <Typography textAlign="center">
                                        {setting}
                                    </Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Header
