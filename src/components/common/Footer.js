import styled from 'styled-components';
import Responsive from './Responsive';

const FooterBlock = styled.div`
    position: fixed;
    width: 100%;
    bottom: 0;
    background: #e0ecf8;
`;

const Container = styled(Responsive)`
    height: 4.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .left {
        font-size: 0.85rem;
    }
    .info {
        font-size: 0.3rem;
    }
    .right {
        font-size: 0.5rem;
    }
`;

const Footer = () => {
    return (
        <>
            <FooterBlock>
                <Container>
                    <div className="left">
                        호윤상사 주식회사
                        <br />
                        <div className="info">
                            대표: 정호윤
                            <br />
                            소재지: 서울 마포구
                            <br /> 사업자 등록번호: 00000-000
                        </div>
                    </div>
                    <div className="right">
                        Copyright©호윤상사주식회사 all right reserved
                    </div>
                </Container>
            </FooterBlock>
        </>
    );
};

export default Footer;
