import React, { useEffect } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

interface FormData {
    username: string;
    // email: string;
    password: string;
}

const validationSchema: Yup.SchemaOf<FormData> = Yup.object().shape({
    username: Yup.string().required('Username is required'),
    // email: Yup.string().email('Invalid email format').required('Email is required'),
    password: Yup.string().required('Password is required'),
});

function LoginPage() {

    const initialValues: FormData = {
        username: '',
        // email: '',
        password: '',
    };

    const handleSubmit = (values: FormData, { setSubmitting, resetForm }: any) => {
        // Handle form submission here (e.g., send data to backend)
        console.log(values);

        // setTimeout(() => {
        // alert(JSON.stringify(values, null, 2));
        resetForm();
        setSubmitting(false);
        // }, 500);
    };

    return (
        <>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
                {({ isSubmitting }) => (
                    <Form>
                        <div className="login-box">
                            <div className="login-logo">
                                <a href="../../index2.html"><b>Admin</b>LTE</a>
                            </div>
                            {/* /.login-logo */}
                            <div className="card">
                                <div className="card-body login-card-body">
                                    <p className="login-box-msg">Sign in to start your session</p>
                                        <div className="input-group mb-3">
                                        <input type="text" className="form-control" placeholder="Email" id="username" name="username" />
                                            <div className="input-group-append">
                                                <div className="input-group-text">
                                                    <span className="fas fa-envelope" />
                                                </div>
                                            </div>
                                        <ErrorMessage name="username" component="div" className="text-danger" />

                                        </div>
                                        <div className="input-group mb-3">
                                        <input type="password" className="form-control" placeholder="Password" id="password" name="password"  />
                                            <div className="input-group-append">
                                                <div className="input-group-text">
                                                    <span className="fas fa-lock" />
                                                </div>
                                            </div>
                                        <ErrorMessage name="password" component="div" className="text-danger" />

                                        </div>
                                        <div className="row">
                                            <div className="col-8">
                                                <div className="icheck-primary">
                                                    <input type="checkbox" id="remember" />
                                                    <label htmlFor="remember">
                                                        Remember Me
                                                    </label>
                                                </div>
                                            </div>
                                            {/* /.col */}
                                            <div className="col-4">
                                                <button type="submit" className="btn btn-primary btn-block">Sign In</button>
                                            </div>
                                            {/* /.col */}
                                        </div>
                                </div>
                                {/* /.login-card-body */}
                            </div>
                        </div>

                    </Form>
                )}
            </Formik>
        </>

    )
}

export default LoginPage