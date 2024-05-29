import { Box, CardContent, CardHeader, Chip, Divider, Typography } from '@mui/material'
import { useTheme } from '../../../providers/ThemeProvider'

const CardBody = ({ card }) => {
    const { title, subtitle, phone, address: { street, houseNumber, city }, bizNumber } = card;
    const { isDark } = useTheme()

    return (
        <CardContent sx={{ textAlign: "start", backgroundColor: isDark ? "#182429" : "whit"}}>
            <Box sx={{ pb: 1, textAlign: 'center', height: '90px' }}>
                <CardHeader sx={{ p: 0, md: 1 }} title={title} subheader={subtitle} />
            </Box>

            <Divider textAlign="left">
                <Chip label="Details"/>
            </Divider>
            
            <Box sx={{ pt: 1, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Typography variant="caption">Phone:</Typography>
                <Typography variant="caption">{phone}</Typography>
            </Box>

            <Box sx={{ pt: 1.5, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Typography variant="caption">Address:</Typography>
                <Typography variant="caption">{`${houseNumber}, ${street}, ${city}`}</Typography>
            </Box>

            <Box sx={{ pt: 1.5, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Typography variant="caption">Registration number</Typography>
                <Typography variant="caption">{bizNumber}</Typography>
            </Box>
        </CardContent>
    )
}

export default CardBody
