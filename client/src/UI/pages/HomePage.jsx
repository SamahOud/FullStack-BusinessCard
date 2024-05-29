import { useEffect } from 'react'
import { Box, Stack } from '@mui/material'

import { useUser } from '../components/users/providers/UserProvider'
import useCards from '../../core/hooks/useCards'
import PageHeader from './about-page/PageHeader'
import CardComponent from '../components/cards/card/Card'

const HomePage = () => {
    const { user } = useUser()
    const { value:{ cards }, handleGetCards } = useCards();

    useEffect(() => {
        handleGetCards();
    }, []);

    return (
        <Box minHeight={100} sx={{ padding: { xs: 1, sm: 4}}} >
            <PageHeader title='Easy Way To Find Your Business Card' subtitle='Search and find your business card.' />
            <Stack spacing={1} gap={2} direction="row" my={2} flexWrap="wrap" justifyContent="center">
                {   // אם אין משתמש מחובר יוצגו רק 3 כרטיסים
                    !user && (
                        cards?.slice(0, 3).map((card, i) => (<CardComponent card={card} key={i}></CardComponent>))
                )}
            </Stack>
        </Box>
    )
}

export default HomePage
