import { useEffect } from 'react';
import {
    useDispatch,
    useSelector,
} from '../../../node_modules/react-redux/es/exports';
import { changeField, initializeForm, register } from '../../modules/auth';
import AuthForm from '../../components/auth/Auth.Form';
import { check } from '../../modules/user';
import { useNavigate } from 'react-router-dom';
// import { useNavigate } from '../../../node_modules/react-router-dom/dist/index';

const RegisterForm = () => {
    const dispatch = useDispatch();
    const { form, auth, authError, user } = useSelector(({ auth, user }) => ({
        form: auth.register,
        auth: auth.auth,
        authError: auth.authError,
        user: user.user,
    }));
    // 인풋 변경 이벤트 핸들러
    const onChange = (e) => {
        const { value, name } = e.target;
        dispatch(
            changeField({
                form: 'register',
                key: name,
                value,
            }),
        );
    };

    // 폼 등록 이벤트 핸들러
    const onSubmit = (e) => {
        e.preventDefault();
        const { username, password, passwordConfirm } = form;
        if (password !== passwordConfirm) {
            // TODO: 오류 처리
            return;
        }
        dispatch(register({ username, password }));
    };

    // 컴포넌트가 처음 렌더링될 때 form을 초기화함
    useEffect(() => {
        dispatch(initializeForm('register'));
    }, [dispatch]);

    // 회원가입 성공/실패 처리
    useEffect(() => {
        if (authError) {
            console.log('오류 발생');
            console.log(authError);
            return;
        }
        if (auth) {
            console.log('회원가입 성공');
            console.log(auth);
            dispatch(check());
        }
    }, [auth, authError, dispatch]);

    const navigate = useNavigate();

    // user값이 잘 설정되었는지 확인
    useEffect(() => {
        if (user) {
            navigate('/'); // 홈화면으로 이동
        }
    }, [navigate, user]);

    return (
        <AuthForm
            type="register"
            form={form}
            onChange={onChange}
            onSubmit={onSubmit}
        />
    );
};

export default RegisterForm;
