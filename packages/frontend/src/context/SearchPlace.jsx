import * as React from 'react'
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'
import { styled, lighten, darken } from '@mui/system'

const GroupHeader = styled('div')(({ theme }) => ({
    position: 'sticky',
    top: '-8px',
    padding: '4px 10px',
    backgroundColor:
        theme.palette.mode === 'light'
            ? lighten(theme.palette.primary.light, 0.85)
            : darken(theme.palette.primary.main, 0.8),
}))

const GroupItems = styled('ul')({
    padding: 0,
})

export default function searchPlatform() {
    const options = jobPlatform.map((option) => {
        const firstLetter = option.title[0].toUpperCase()
        return {
            firstLetter: /[0-9]/.test(firstLetter) ? '0-9' : firstLetter,
            ...option,
        }
    })

    return (
        <Autocomplete
            id="grouped-demo"
            options={options.sort(
                (a, b) => -b.firstLetter.localeCompare(a.firstLetter)
            )}
            groupBy={(option) => option.firstLetter}
            getOptionLabel={(option) => option.title}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} />}
            renderGroup={(params) => (
                <li>
                    <GroupHeader>{params.group}</GroupHeader>
                    <GroupItems>{params.children}</GroupItems>
                </li>
            )}
        />
    )
}

const jobPlatform = [
    {title: 'Colombia'},
    {title: 'Venezuela'}
]
