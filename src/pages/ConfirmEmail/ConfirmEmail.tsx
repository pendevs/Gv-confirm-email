import React, { useEffect } from "react";
import { Typography } from "@mui/material";
import "./ConfirmEmail.css";
import { useSearchParams } from "react-router-dom";
import { useConfirmEmail } from "../../services/confirm-email/confirm-email.service";

const ConfirmEmail = () => {
    const [searchParams] = useSearchParams();
    const { confirmationEmail, data } = useConfirmEmail()

    useEffect(() => {
        const token = searchParams.get('token');
        console.log('token', token);
        if (token) {
            confirmationEmail(token);
        }
    }, []);
    
    useEffect(() => {
        console.log('data cofirm', data);
    }, [data]);

    return (
        <>
            <Typography
                variant='h1'
                sx={{ py: 2, display: 'flex', justifyContent: 'center' }}
            >
                Wellcome to Goodvets!
            </Typography>
            <div className='dog-container'>
                <img src='assets/perro-imagen.png' alt='dog' />
            </div>
            <div className='subtitle'>We just confirmed your email.</div>
        </>
    );
}

export default ConfirmEmail;
