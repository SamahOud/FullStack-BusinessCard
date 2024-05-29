import { Box } from '@mui/material'
import UserList from './UserList'
import PageHeader from '../../pages/about-page/PageHeader'

const AdminDashboard = () => {
    return (
        <Box minHeight={100} sx={{ padding: { xs: 1, sm: 4}}}  >
            <PageHeader
                title="Dashboard"
                subtitle="Welcome to the admin dashboard. Here you can manage users and settings."
            />
            <UserList />
        </Box>
    )
}

export default AdminDashboard
