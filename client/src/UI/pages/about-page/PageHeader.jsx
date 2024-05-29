import { string } from 'prop-types';
import { Box, Paper, Typography } from '@mui/material';
import { useTheme } from '../../providers/ThemeProvider';

const PageHeader = ({ title, subtitle }) => {
    const { isDark } = useTheme()
    return (
        <Box marginBottom={6}>
            <Paper elevation={15} sx={{ borderRadius: '8px', background: isDark ? '#344a54' : '#f7f5f5' }} >
                <img src="/assets/images/profile_banner.png" alt="profile" 
                    style={{ width: '100%', height: '120px', borderTopLeftRadius: '8px', borderTopRightRadius: '8px' }} />
                
                <Paper sx={{ padding: 2, mt: 0, pt: 0, background: isDark ? '#344a54' : '#f7f5f5'}} >
                    <Box paddingLeft={4} sx={{color: isDark ? '#a5adb7' : '#5f6974'}}>
                        <Typography variant='h3' component="h1" fontWeight={400} color={isDark ? "white" : "black"}>{title}</Typography>
                        <Typography variant='h5' component="h2" color={isDark ? "white" : "black"}>{subtitle}</Typography>
                    </Box>
                </Paper>
            </Paper>
        </Box>
    );
}

PageHeader.propTypes = {
    title: string.isRequired,
    subtitle: string.isRequired,
}
export default PageHeader