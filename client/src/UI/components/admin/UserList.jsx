import { useEffect, useState } from 'react';
import { IconButton } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

import Visibility from '@mui/icons-material/Visibility';
import Edit from '@mui/icons-material/Edit';
import Delete from '@mui/icons-material/Delete';
import axios from 'axios';
import { useTheme } from '../../providers/ThemeProvider';

// const apiUrl = process.env.REACT_APP_API_URL || 'https://monkfish-app-z9uza.ondigitalocean.app/bcard2/users';
// const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:8181';
const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:9191';

const UserList = () => {
    const [users, setUsers] = useState([]);
    const { isDark } = useTheme();

    const makeStyles = {
        root: {
            width: '100%',
            height: 550,
            backgroundColor: isDark ? '#344a54' : '#f7f5f5',
            padding: '20px',
            borderRadius: '10px',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        }
    }

    useEffect(() => {
        // Fetch users data
        axios.get(`${apiUrl}/users`)
        .then(response => {
            setUsers(response.data);
        })
        .catch(error => {
            console.error('Error fetching users:', error);
        });
    }, []);

    const handleView = (id) => {
        console.log(`View user with id ${id}`);
        // Implement view logic here
    };
    
    const handleEdit = (id) => {
        console.log(`Edit user with id ${id}`);
        // Implement edit logic here
    };
    
    const handleDelete = (id) => {
        console.log(`Delete user with id ${id}`);
        // Implement delete logic here
    };

    const columns = [
        { field: 'firstName', headerName: 'First name', width: 170, editable: true,},
        { field: 'lastName', headerName: 'Last name', width: 170, editable: true,},
        { field: 'employee', headerName: 'Employee', width: 170, editable: true, },
        { field: 'phone', headerName: 'Phone', width: 170, editable: true,},
        { field: 'country', headerName: 'Country', width: 170, editable: true,},
        { field: 'action', headerName: 'Action', width: 170,
        renderCell: (params) => (
            <div>
                <IconButton edge="end" aria-label="view" onClick={() => handleView(params.row.id)}>
                    <Visibility />
                </IconButton>

                <IconButton edge="end" aria-label="edit" onClick={() => handleEdit(params.row.id)}>
                    <Edit />
                </IconButton>

                <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(params.row.id)}>
                    <Delete />
                </IconButton>
            </div>
          ),}
    ];

    const rows = users.map(user => ({
        id: user._id,
        firstName: user.name.first,
        lastName: user.name.last,
        employee: user.isAdmin ? "Admin" : user.isBusiness ? "Business User" : "User",
        phone: user.phone,
        country: user.address.country
    }));

    return (
        <div style={makeStyles.root}>
            <DataGrid 
                rows={rows}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
            />
        </div>
    )
};

export default UserList;