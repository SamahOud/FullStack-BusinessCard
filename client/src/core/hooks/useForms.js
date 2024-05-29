import { useCallback, useMemo, useState } from "react";
import Joi from "joi";
import { func, object } from "prop-types";

const useForm = (initialForm, schema, handleSubmit) => {
    const [data, setData] = useState(initialForm);
    const [errors, setErrors] = useState({});

    const handleReset = useCallback(() => {
        setData(initialForm);
        setErrors({});
    }, [initialForm]);

    
    const validateProperty = useCallback(({name,value}) => {
        const obj = {[name]: value};
        const genSchema = Joi.object({[name]: schema[name]});

        const {error} = genSchema.validate(obj);
        return error ? error.details[0].message : null;
    }, [schema]);


    const handleChange = useCallback((e) => {
        const target = e.target;
        const {name, value} = target;
        const errorMessage = validateProperty({name, value});
        if (errorMessage) setErrors(prev => ({...prev, [name]: errorMessage}));
        else setErrors(prev =>
            {
                const pbj = {...prev};
                delete pbj[name];
                return pbj;
            });
        setData(prev => ({...prev, [name]: value}));
    },[validateProperty]);

    
    const validateForm = useCallback(() => {
        const schemaForValidate = Joi.object(schema);
        const {error} = schemaForValidate.validate(data);
        if(error) return error;
        return null;
    }, [data, schema]);


    const onSubmit = useCallback(() => {
        handleSubmit(data);
    }, [data, handleSubmit]);


    const value = useMemo(() => {
        return { data, errors }
    }, [data, errors]);

    return { handleChange, handleReset, onSubmit, validateForm, setData, value };
}

useForm.propTypes = {
    initialForm: object.isRequired,
    schema: object.isRequired,
    handleSubmit: func.isRequired
}

export default useForm;