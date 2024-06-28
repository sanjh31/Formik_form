import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, "Please enter valid name.")
        .max(25, "Name can't be longer than 25 characters.")
        .required("Please enter your name."),
    email: Yup.string()
        .email("Please enter a valid email.")
        .required("Please enter your email."),
    password: Yup.string()
        .min(6, "Password must be at least 6 characters long.")
        .required("Please enter your password."),
    confirm_password: Yup.string()
        .oneOf([Yup.ref('password'), null], "Passwords must match.")
        .required("Please confirm your password."),
});

export default SignupSchema;
