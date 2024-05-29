import { useSearchParams } from 'react-router-dom'
import { Box, FormControl, InputAdornment, OutlinedInput } from "@mui/material"
import IconButton from '@mui/material/IconButton'
import SearchIcon from '@mui/icons-material/Search'

import { useTheme } from "../../../../providers/ThemeProvider"

const SearchBar = () => {
    const { isDark } = useTheme()
    const [ searchParams, setSearchParams ] = useSearchParams()
    const handleChange = ({target}) => setSearchParams({q: target.value})

    return (
        <Box display="inline-flex" >
            <FormControl variant='standard' >
                <OutlinedInput 
                    sx={{ backgroundColor: isDark ? "#2c3e50" : "#e3f2fd" }}
                    placeholder='Search'
                    size='small'
                    value={searchParams?.get('q') ?? ''}
                    onChange={handleChange}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton edge="end">
                                <SearchIcon />
                            </IconButton>
                        </InputAdornment>
                    }
                />
            </FormControl>
        </Box>
    )
}

export default SearchBar
