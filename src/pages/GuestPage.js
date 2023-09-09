import AuthForm from "../components/auth/Auth.Form";
import AuthTemplate from "../components/auth/AuthTemplate";

const GuestPage = () => {
    return (
        <AuthTemplate>
            <AuthForm type='guest'/>
        </AuthTemplate>
    )
};

export default GuestPage;
