// 첫화면 로그인 버튼
import styled from 'styled-components';
import Responsive from './Responsive';
import Button from './Button';
import { Link } from '../../../node_modules/react-router-dom/dist/index';

const HeaderBlock = styled.div`
    position: fixed;
    width: 100%;
    background: white;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
`;

/**
 * Responsive 컴포넌트의 속성에 스타일을 추가해서 새로운 컴포넌트 생성
 */
const Wrapper = styled(Responsive)`
    height: 4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .logo {
        font-size: 1.125rem;
        font-weight: 800;
        letter-spacing: 2px;
    }
    .right {
        display: flex;
        align-items: center;
    }
`;

/**
 * 헤더가 fixed로 되어 있으므로 페이지의 콘텐츠가 4rem 아래에 나타나도록 해주는 컴포넌트
 */
const Spacer = styled.div`
    height: 4rem;
`;

const Header = () => {
    return (
        <>
            <HeaderBlock>
                <Wrapper>
                    <Link to="/" className="logo">
                        <div className="logo">(주)HY상사</div>
                    </Link>

                    <div className="right">
                        <Button to="/login">들어가기</Button>
                    </div>
                </Wrapper>
            </HeaderBlock>
            <Spacer /> {/* 헤더의 위치와 겹치지 않게 하기위해 설정 */}
        </>
    );
};

export default Header;
