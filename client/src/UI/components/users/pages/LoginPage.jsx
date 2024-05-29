import { Navigate } from "react-router-dom";
import Container from '@mui/material/Container'
import { Box, Grid, Typography } from "@mui/material";

import ROUTES from "../../../../core/routes/routesModel";
import { useUser } from "../providers/UserProvider";
import useUsers from "../hooks/useUsers";
import useForm from "../../../../core/hooks/useForms";
import initialLoginForm from "../helpers/initialForms/initialLoginForm";
import loginSchema from "../models/joi-schema/loginSchema";
import Form from "../../forms/Form";
import Input from "../../forms/Input";
import "../../../styles/form.css";
import "../../../styles/shape.css";
import { useTheme } from "../../../providers/ThemeProvider";

const LoginPage = () => {
    const { user } = useUser();
    const { handleLogin } = useUsers();
    const { isDark } = useTheme();

    const { value, ...rest } = useForm(initialLoginForm, loginSchema, handleLogin);
    
    if (user) return <Navigate to={ROUTES.CARDS} />;

    return (
        <Container 
            sx={{
                pt: 8,
                display: "flex",
                justifyContent: "center",
                alignItems: "center", 
                paddingBottom: "64px",
            }}
        >
            <div className="background">
                <div className="shape"></div>
                <div className="shape"></div>
            </div>
            
            <Grid container 
                    sx={{ height: "75vh", '@media (max-width: 600px)': { height: '100vh' }, 
                        background: isDark 
                        ? "linear-gradient(90deg, #182429 0%, #2c3e50 100%)" 
                        : "linear-gradient(90deg, #4D3E4C 0%, #b6e8f3 100%)"
                    }} 
                    paddingRight= "10px" marginLeft= 'auto' borderRadius={5}
                    alignItems="center" spacing={1}>
                
                <Grid item md={4} xs={12} textAlign="center" >
                    <Box p={4} sx={{ marginTop: { md: '0', xs: '70px' } }}>
                        <Typography variant="h4" component="h1" color="white" fontWeight={700}>Welcome Back!</Typography>
                        <Typography variant="h6" component="h2" color="white">Enter your personal details to sign in and start managing your cards.</Typography>
                    </Box>
                </Grid>

                <Grid item md={8} xs={12} alignSelf="center" sx={{display: {md: 'flex' }, justifyContent: "center"}}> 
                    <Form 
                        onSubmit={rest.onSubmit}
                        onReset={rest.handleReset}
                        onChange={rest.validateForm}
                        title='Login'
                        styles={{ maxWidth: "450px", }}
                        to={ROUTES.CARDS}
                    >
                        <Input 
                            color={"black"} 
                            label={'Email Address'}
                            name={'email'}
                            type={'email'}
                            data={value.data}
                            error={value.errors.email}
                            handleChange={rest.handleChange}
                        />
                        <Input 
                            label={'Password'}
                            name={'password'}
                            type={'password'}
                            data={value.data}
                            error={value.errors.password}
                            handleChange={rest.handleChange}
                        />
                    </Form>
                </Grid>
            </Grid>
        </Container>
    ) 
}

export default LoginPage
