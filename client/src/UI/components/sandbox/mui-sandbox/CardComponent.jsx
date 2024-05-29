import Card from '@mui/material/Card'
import CardActionArea from '@mui/material/CardActionArea'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import Box from '@mui/material/Box'

const CardComponent = () =>{
    
    return(
        <Card sx={{width: 250, m: 2}} >
            <CardActionArea>
                <CardHeader title="Card Title" />
                <CardContent>
                    <Box display="flex" justifyContent="space-between">

                    <Typography  variant="h1" color="initial">left</Typography>
                    <Divider orientation='vertical' flexItem />
                    <Typography  variant="h1" color="initial">right</Typography>
                    </Box>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default CardComponent