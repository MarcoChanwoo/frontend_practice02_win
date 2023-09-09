import AuthForm from "../components/auth/Auth.Form";
import AuthTemplate from "../components/auth/AuthTemplate";

const RegisterPage = () => {
    return (
        <AuthTemplate>
            <AuthForm type='register'/>
        </AuthTemplate>
    )
};

export default RegisterPage;
