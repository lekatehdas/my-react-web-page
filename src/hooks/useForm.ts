import {useState} from "react";
import apiClient from "../services/api-client.ts";

export interface FormProps {
    name: string;
    email: string;
    message: string;
}

const useForm = () => {
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    const handleSubmit = ({name, email, message}: FormProps) => {
        const payload = {content: `Name: ${name}\nEmail: ${email}\nMessage:\n${message}`}

        apiClient.post('', payload)
            .then(() => {
                setSuccess(true);
                setError(null);
            })
            .catch(err => {
                setError(err.message || "Something went wrong.");
            })
    }

    return {handleSubmit, success, error};
};

export default useForm;
