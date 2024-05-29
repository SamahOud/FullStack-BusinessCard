import { Avatar, Box, Divider, Paper, Typography } from '@mui/material'
import PermIdentityRoundedIcon from '@mui/icons-material/PermIdentityRounded';

import OutlinedFlagIcon from '@mui/icons-material/OutlinedFlag';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import MarkunreadMailboxOutlinedIcon from '@mui/icons-material/MarkunreadMailboxOutlined';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

import { useEffect } from 'react';
import useUsers from "../hooks/useUsers"
import { useTheme } from "../../../providers/ThemeProvider"

const UserProfilePage = () => {
    const { user, handleGetUser } = useUsers();
    const { isDark } = useTheme()
    const styles = {
        display: "flex",
        alignItems: 'center',
        padding: 1, 
        paddingLeft: 0,
        color: isDark ? '#a5adb7' : '#5f6974'
    }

    useEffect(() => {
        handleGetUser(user?._id);
    }, [handleGetUser, user?._id]);
    const employeeRole = user?.isAdmin ? "Admin" : user?.isBusiness ? "Business User" : user ? "User" : "Unknown";

    return (
        <Box minHeight={100} sx={{ padding: { xs: 1, sm: 4}}}  >
            <Paper elevation={15} sx={{ borderRadius: '8px',background: isDark ? '#344a54' : '#f7f5f5' }} >
                <img src="/assets/images/profile_banner.png" alt="profile" 
                    style={{ width: '100%', height: '150px', borderTopLeftRadius: '8px', borderTopRightRadius: '8px' }} />
                
                <Paper sx={{ padding: 2, borderRadius:'0', background: isDark ? '#344a54' : '#f7f5f5'}} >
                    <Box padding={1}>
                        <Typography variant="h4" >{user?.name?.first} {user?.name?.last}</Typography>
                    </Box>

                    <Box padding={1} display='flex' alignItems='center' sx={{color: isDark ? '#a5adb7' : '#5f6974'}}>
                        <PlaceOutlinedIcon sx={{ marginRight: '10px' }} />
                        <Typography variant="h6" >{user?.address?.country}</Typography>
                    </Box>
               </Paper>
            </Paper>

            <Box padding={3} display="flex" alignItems='center' justifyContent='space-evenly' color='white'
                sx={{ borderRadius: '8px', margin: '16px 0 16px', p: 2, width: '200px', background: isDark ? '#182429' : '#4D3E4C' }}> 
                {/* <PermIdentityRoundedIcon sx={{ marginRight: '10px' }} />  */}
                <Avatar alt='me' src='/assets/images/user.png'></Avatar>
                <Typography variant="h6" sx={{ fontSize: '18px', }}>Profile</Typography>
            </Box>

            <Paper sx={{ background: isDark ? '#344a54' : '#f7f5f5', padding: 3, height: '450px', borderRadius: '8px' }} >
                <Typography variant="h6" sx={{ fontSize: { xs: '14px', sm: '18px'}}}>
                    ABOUT
                </Typography>
                <Divider  />

                <Box sx={{ ...styles}}>
                    <PermIdentityRoundedIcon sx={{ marginRight: '10px' }} /> 
                    <Typography variant="h6" sx={{ fontSize: { xs: '14px', sm: '18px'}}}>Full Name: {user?.name?.first} {user?.name?.last}</Typography>
                </Box>

                <Box sx={{ ...styles}}>
                    <PlaceOutlinedIcon sx={{ marginRight: '10px' }} /> 
                    <Typography variant="h6" sx={{ fontSize: { xs: '14px', sm: '18px'}}}>Address: {user?.address?.city} {user?.address?.street}</Typography>
                </Box>

                <Box sx={{ ...styles}}>
                    <OutlinedFlagIcon sx={{ marginRight: '10px' }} /> 
                    <Typography variant="h6" sx={{ fontSize: { xs: '14px', sm: '18px'}}}>Country: {user?.address?.country}</Typography>
                </Box>

                <Box sx={{ ...styles}}>
                    <MarkunreadMailboxOutlinedIcon sx={{ marginRight: '10px' }} /> 
                    <Typography variant="h6" sx={{ fontSize: { xs: '14px', sm: '18px'}}}>Zip Code: {user?.address?.zip}</Typography>
                </Box>

                <Box sx={{ ...styles}}>
                    <BusinessCenterOutlinedIcon sx={{ marginRight: '10px' }} /> 
                    <Typography variant="h6" sx={{ fontSize: { xs: '14px', sm: '18px'}}}>Employee: {employeeRole}</Typography>
                </Box>

                <Typography variant="h6" pt={3} sx={{ fontSize: { xs: '14px', sm: '18px'}}}>CONTACT</Typography>
                <Divider  />

                <Box sx={{ ...styles}}>
                    <CallOutlinedIcon sx={{ marginRight: '10px' }} /> 
                    <Typography variant="h6" sx={{ fontSize: { xs: '14px', sm: '18px'}}}>Contact: {user?.phone}</Typography>
                </Box>

                <Box sx={{ ...styles}}>
                    <EmailOutlinedIcon sx={{ marginRight: '10px' }} /> 
                    <Typography variant="h6" sx={{ fontSize: { xs: '14px', sm: '18px'}}}>Email: {user?.email}</Typography>
                </Box>
            </Paper>
        </Box>
    )
}

export default UserProfilePage
