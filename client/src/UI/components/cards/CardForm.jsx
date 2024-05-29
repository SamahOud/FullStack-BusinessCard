import { func, object, string } from "prop-types"

import Form from "../forms/Form"
import Input from "../forms/Input"
import ROUTES from "../../../core/routes/routesModel"

const CardForm = ({
    onSubmit, onReset, errors, data,
    onFormChange, onInputChange, title, }) => {

    return (
        <Form
            onSubmit={onSubmit}
            onReset={onReset}
            onChange={onFormChange}
            title={title}
            styles={{ maxWidth: "800px" }}
            to={ROUTES.CARDS}
        >
            <Input
                name="title"
                label="title"
                error={errors.title}
                handleChange={onInputChange}
                data={data}
                sm={6}
            />
            <Input
                name="subtitle"
                label="subtitle"
                error={errors.subtitle}
                handleChange={onInputChange}
                data={data}
                sm={6}
            />
            <Input
                name="description"
                label="description"
                error={errors.description}
                handleChange={onInputChange}
                data={data}
                sm={6}
            />
            <Input
                name="phone"
                label="phone"
                type="phone"
                error={errors.phone}
                handleChange={onInputChange}
                data={data}
                sm={6}
            />
            <Input
                name="email"
                label="email"
                type="email"
                error={errors.email}
                handleChange={onInputChange}
                data={data}
                sm={6}
            />
            <Input
                name="webUrl"
                label="web"
                error={errors.webUrl}
                handleChange={onInputChange}
                data={data}
                sm={6}
                required={false}
            />
            <Input
                name="imageUrl"
                label="image url"
                error={errors.imageUrl}
                handleChange={onInputChange}
                data={data}
                sm={6}
                required={false}
            />
            <Input
                name="imageAlt"
                label="image alt"
                error={errors.imageAlt}
                handleChange={onInputChange}
                data={data}
                sm={6}
                required={false}
            />
            <Input
                name="state"
                label="state"
                error={errors.state}
                handleChange={onInputChange}
                data={data}
                sm={6}
                required={false}
            />
            <Input
                name="country"
                label="country"
                error={errors.country}
                handleChange={onInputChange}
                data={data}
                sm={6}
            />
            <Input
                name="city"
                label="city"
                error={errors.city}
                handleChange={onInputChange}
                data={data}
                sm={6}
            />
            <Input
                name="street"
                label="street"
                error={errors.street}
                handleChange={onInputChange}
                data={data}
                sm={6}
            />
            <Input
                name="houseNumber"
                label="houseNumber"
                type="number"
                error={errors.houseNumber}
                handleChange={onInputChange}
                data={data}
                sm={6}
            />
            <Input
                name="zip"
                label="zip"
                type="number"
                error={errors.zip}
                handleChange={onInputChange}
                data={data}
                sm={6}
                required={false}
            />
        </Form>
    )
}

CardForm.propTypes = {
    onSubmit: func.isRequired,
    onReset: func.isRequired,
    errors: object.isRequired,
    onFormChange: func.isRequired,
    data: object.isRequired,
    onInputChange: func.isRequired,
    title: string.isRequired,
}

export default CardForm
