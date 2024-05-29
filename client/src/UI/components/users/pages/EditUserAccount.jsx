import { useEffect, useState } from 'react';
import { Box } from '@mui/material';

import useForm from "../../../../core/hooks/useForms"
import initialEditForm from "../models/joi-schema/signupSchema"
import useUsers from "../hooks/useUsers"
import normalizeUser from "../helpers/normalization/normalizeUser"
import { mapUserToModel } from '../helpers/normalization/mapUserToModel';
import { useUser } from '../providers/UserProvider';
import { getUsersByID } from '../services/usersApiService';
import UserForm from './UserForm';
import editUserSchema from '../models/joi-schema/editUserSchema';
import PageHeader from '../../../pages/about-page/PageHeader';

const EditUserAccount = () => {
    const [initialForm, setInitForm] = useState(initialEditForm)
    const { user } = useUser()
    const { handleEditUser } = useUsers()
    const { value, ...rest } = useForm(initialEditForm, editUserSchema, () => {
        handleEditUser({
            ...normalizeUser(value.data),
        }, user._id)
    })

    useEffect(() => {
        if (user && user._id) {
            getUsersByID(user._id).then((data) => {
                const modeledUser = mapUserToModel(data);
                setInitForm(modeledUser)
                rest.setData(modeledUser)
            })
        }
    }, [user])

    return (
        <Box minHeight={100} sx={{ padding: { xs: 1, sm: 4},}} >
            <PageHeader
                title="Update Your Profile Information"
                subtitle="Customize Your Profile Data"
            />

            <UserForm
                data={value.data}
                onSubmit={rest.onSubmit}
                onReset={() => rest.setData(initialForm)}
                errors={value.errors}
                onFormChange={rest.validateForm}
                onInputChange={rest.handleChange}
            ></UserForm>
        </Box>
    )
}

export default EditUserAccount
