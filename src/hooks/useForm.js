import {useState,useEffect} from "react";

function useForm(initialValues) {
    const [formData, setFormData] = useState(initialValues);

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }

    const resetForm = () => {
        setFormData(initialValues);
    }

    return {
        formData,
        handleChange,
        resetForm
    };
}

export default useForm;