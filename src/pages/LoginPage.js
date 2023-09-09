import AuthForm from "../components/auth/Auth.Form";
import AuthTemplate from "../components/auth/AuthTemplate";

const LoginPage = () => {
    return (
        <AuthTemplate>
            <AuthForm type='login'/>
        </AuthTemplate>
    )
};

export default LoginPage;
