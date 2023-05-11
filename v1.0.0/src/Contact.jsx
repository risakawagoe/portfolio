import React, { useState } from "react";
import { useFormik } from "formik"
import * as Yup from "yup" // form validation
import "./Contact.css"
import { TextField, Button } from "@mui/material"
import emailjs from '@emailjs/browser'

export default function Contact() {
    const [confirmation, setConfirmation] = useState("")


    // form validation
    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            message: ""
        },
        validationSchema: Yup.object({
            name: Yup.string().trim()
                .required('Name field is required.'),
            email: Yup.string().trim()
                .email('Email address is invalid.')
                .required('Email field is required.'),
            message: Yup.string().trim()
                .required('Message field is required.')
        }),
        onSubmit: (values) => {
            sendEmail(values)
        }
    })


    async function sendEmail(values) {
        try {
            const result = await emailjs.send('service_xvc40p7', 'template_83o7hxw', values, 'jFsJXRONx91p59O1m')
            console.log(result.text)
        }catch(err) {
            console.log(err)
        }
    }

    return (
        <div id="contact">
            <h2>Contact</h2>
            <TextField 
                required 
                fullWidth 
                error={formik.touched.name && formik.errors.name} 
                helperText={formik.touched.name && formik.errors.name} 
                id="name" 
                name="name"
                className="form-input" 
                label="Name" 
                variant="filled" 
                value={formik.values.name} 
                onBlur={formik.handleBlur}
                onChange={formik.handleChange} />
            <TextField 
                required 
                fullWidth 
                error={formik.touched.email && formik.errors.email} 
                helperText={formik.touched.email && formik.errors.email} 
                id="email" 
                name="email"
                className="form-input" 
                label="Email" 
                variant="filled" 
                value={formik.values.email} 
                onBlur={formik.handleBlur}
                onChange={formik.handleChange} />
            <TextField
                required
                fullWidth
                error={formik.touched.message && formik.errors.message}
                helperText={formik.touched.message && formik.errors.message}
                id="message"
                name="message"
                className="form-input"
                label="Message"
                multiline
                rows={5}
                variant="filled"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
            />
            <TextField
                required
                fullWidth
                id="confirmation"
                className="form-input"
                label="Confirmation"
                helperText="Please enter RISA to confirm."
                variant="standard"
                onChange={(e) => setConfirmation(e.target.value)}
            />
            <div className="align-right">
                <Button variant="outlined" className="form-input" onClick={formik.handleSubmit} disabled={
                    confirmation !== "RISA" || 
                    formik.errors.name || 
                    formik.errors.email || 
                    formik.errors.message}
                >Send</Button>
            </div>
        </div>
    )
}