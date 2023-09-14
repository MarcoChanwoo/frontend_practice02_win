// 메인 페이지
import styled from 'styled-components';
import Header from '../components/common/Header';
import field03 from '../img/field03.png';
import field04 from '../img/field04.png';
import field05 from '../img/field05.png';

const Container = styled.div`
    text-align: center;
    .hello {
        font-size: 1.6rem;
        font-weight: bold;
    }
    .main {
        margin-top: 3rem;
        padding-bottom: 2rem;
        font-size: 1.1rem;
    }
    .img {
        width: 25rem;
        height: 16rem;
        padding-bottom: 0.5rem;
    }
`;

const PostListPage = () => {
    return (
        <Container>
            <Header />
            <div className="hello">HY상사 주식회사에 오신것을 환영합니다!</div>
            <div className="main">
                우리는 만듭니다
                <br />
                <img className="img" src={field03} alt="field03" />
                <br />
                근로자의 안전을 확실하게!
                <br />
                <img className="img" src={field04} alt="field04" />
                <br />
                우리가 모여 안전한 건물을 보장합니다!
                <br />
                <img className="img" src={field05} alt="field05" />
                <br />
                문의 전화(대표자): 010-9019-7XX2
            </div>
        </Container>
    );
};

export default PostListPage;
