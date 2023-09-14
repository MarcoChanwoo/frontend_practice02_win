import styled from 'styled-components';
import HeaderNormal from '../components/common/HeaderNormal';
import field01 from '../img/field01.png';
import field02 from '../img/field02.png';
import Button from '../components/common/Button';
import Footer from '../components/common/Footer';

const Totalbox = styled.div`
    font-size: 1.1rem;
    text-align: center;
    padding-bottom: 8rem;
    .field {
        width: 25rem;
        height: 16rem;
    }
    .button {
        margin-top: 1rem;
        margin-bottom: 2rem;
    }
    .body {
        margin-top: 1rem;
        margin-bottom: 1rem;
    }
`;

const GuestPage = ({ onClick }) => {
    return (
        <Totalbox>
            <HeaderNormal />
            <div className="body">
                전국의 현장 상황을 놓치지않고 보호합니다
                <br />
                <img className="field" alt="field01" src={field01} />
                <br />
                깨끗함과 안전함을 추구합니다
                <br />
                <img className="field" alt="field01" src={field02} />
                <br />
                지금 상담해보세요!
                <br />
            </div>
            <Button className="button" onClick={onClick} to="/write">
                상담페이지로
            </Button>
            <Footer />
        </Totalbox>
    );
};

export default GuestPage;
