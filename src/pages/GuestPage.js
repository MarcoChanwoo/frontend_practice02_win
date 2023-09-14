import styled from 'styled-components';
import HeaderNormal from '../components/common/HeaderNormal';
import field01 from '../img/field01.png';
import field02 from '../img/field02.png';
import Button from '../components/common/Button';

const Whitebox = styled.div`
    font-size: 1.4rem;
    text-align: center;
    .field {
        width: 25rem;
        height: 16rem;
    }
`;

const GuestPage = () => {
    return (
        <Whitebox>
            <div>
                <HeaderNormal />
                <div className="body">
                    전국의 현장 상황을 놓치지않고 보호합니다
                    <img className="field" alt="field01" src={field01} />
                    <br />
                    깨끗함과 안전함을 추구합니다
                    <img className="field" alt="field01" src={field02} />
                    <br />
                    <br />
                    지금 상담해보세요!
                    <br />
                    <Button>상담하러 가기</Button>
                </div>
            </div>
        </Whitebox>
    );
};

export default GuestPage;
