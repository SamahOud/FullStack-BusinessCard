import { Navigate } from "react-router-dom";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

import ROUTES from "../../../../core/routes/routesModel";
import PageHeader from "../../../pages/about-page/PageHeader";
import useUsers from "../hooks/useUsers";
import useForm from "../../../../core/hooks/useForms";
import initialSignupForm from "../helpers/initialForms/initialSignupForm";
import loginSchema from "../models/joi-schema/signupSchema";
import { useUser } from "../providers/UserProvider";
import Form from "../../forms/Form";
import Input from "../../forms/Input";
import { Box } from "@mui/material";

const SignupPage = () => {
    const { handleSignup } = useUsers();
    const { value, ...rest } = useForm(
        initialSignupForm,
        loginSchema,
        handleSignup
    )
    const { user } = useUser();
    if (user) return <Navigate replace to={ROUTES.CARDS} />;
    
    return (
        <>
            <Box minHeight={100} sx={{ padding: { xs: 1, sm: 4}}}  >
                <PageHeader
                    title="Sign Up and Get Started"
                    subtitle="It only takes a few moments to get started."
                />
            
                <Container
                    sx={{
                        paddingTop: 2, paddingBottom: 5,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <Form
                        onSubmit={rest.onSubmit}
                        onChange={rest.validateForm}
                        onReset={rest.handleReset}
                        styles={{ maxWidth: "800px" }}
                        // title="register"
                        sx={{ p: 5 }}
                        to={ROUTES.CARDS}
                    >
                        <Input
                            name="first"
                            label="first name"
                            error={value.errors.first}
                            handleChange={rest.handleChange}
                            data={value.data}
                            sm={6}
                        />
                        <Input
                            name="middle"
                            label="middle name"
                            error={value.errors.middle}
                            handleChange={rest.handleChange}
                            data={value.data}
                            sm={6}
                            required={false}
                        />
                        <Input
                            name="last"
                            label="last name"
                            error={value.errors.last}
                            handleChange={rest.handleChange}
                            data={value.data}
                            sm={6}
                        />
                        <Input
                            name="phone"
                            label="phone"
                            type="phone"
                            error={value.errors.phone}
                            handleChange={rest.handleChange}
                            data={value.data}
                            sm={6}
                        />
                        <Input
                            name="email"
                            label="email"
                            type="email"
                            error={value.errors.email}
                            handleChange={rest.handleChange}
                            data={value.data}
                            sm={6}
                        />
                        <Input
                            name="password"
                            label="password"
                            type="password"
                            error={value.errors.password}
                            handleChange={rest.handleChange}
                            data={value.data}
                            sm={6}
                        />
                        <Input
                            name="url"
                            label="image url"
                            error={value.errors.url}
                            handleChange={rest.handleChange}
                            data={value.data}
                            sm={6}
                            required={false}
                        />
                        <Input
                            name="alt"
                            label="image alt"
                            error={value.errors.alt}
                            handleChange={rest.handleChange}
                            data={value.data}
                            sm={6}
                            required={false}
                        />
                        <Input
                            name="state"
                            label="state"
                            error={value.errors.state}
                            handleChange={rest.handleChange}
                            data={value.data}
                            sm={6}
                            required={false}
                        />
                        <Input
                            label="country"
                            name="country"
                            error={value.errors.country}
                            handleChange={rest.handleChange}
                            data={value.data}
                            sm={6}
                        />
                        <Input
                            name="city"
                            label="city"
                            error={value.errors.city}
                            handleChange={rest.handleChange}
                            data={value.data}
                            sm={6}
                        />
                        <Input
                            name="street"
                            label="street"
                            error={value.errors.street}
                            handleChange={rest.handleChange}
                            data={value.data}
                            sm={6}
                        />
                        <Input
                            name="houseNumber"
                            label="house Number"
                            type="number"
                            error={value.errors.houseNumber}
                            handleChange={rest.handleChange}
                            data={value.data}
                            sm={6}
                        />
                        <Input
                            name="zip"
                            label="zip"
                            error={value.errors.zip}
                            handleChange={rest.handleChange}
                            data={value.data}
                            sm={6}
                            required={false}
                        />
                        <Grid item>
                            <FormControlLabel
                                onChange={(e) =>
                                    rest.setData({ ...value.data, isBusiness: !!e.target.checked })
                                }
                                name="isBusiness"
                                control={
                                    <Checkbox value={value.data.isBusiness} color="primary" />
                                }
                                label="Signup as business"
                            ></FormControlLabel>
                        </Grid>
                    </Form>
                </Container>
            </Box>
        </>
    )
}

export default SignupPage;
