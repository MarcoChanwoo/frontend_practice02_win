// 문의하는 사이트
import styled from 'styled-components';
import HeaderNormal from '../components/common/HeaderNormal';
import field06 from '../img/field06.png';
import Button from '../components/common/Button';

const Totalbox = styled.div`
    text-align: center;
    .total {
        margin-top: 1rem;
    }
    .img {
        width: 25rem;
        height: 16rem;
    }
    .require {
        margin-top: 1rem;
    }
    .text {
        width: 20rem;
        margin-bottom: 0.5rem;
    }
`;

const WritePage = () => {
    const onClick = () => {
        alert('작성 완료!');
    };
    return (
        <Totalbox>
            <HeaderNormal />
            <div className="total">
                <div>
                    귀하의 현장을 함께 컨설팅해 드립니다.
                    <br />
                    연락처를 남겨주세요.
                </div>
                <img className="img" src={field06} alt="field06" />
                <br />
                <div className="require">
                    <textarea
                        className="text"
                        placeholder="담당자 성함 / 회사명 / 연락처"
                    />
                    <br />
                    <Button onClick={onClick} to="/">
                        작성하기
                    </Button>
                </div>
            </div>
        </Totalbox>
    );
};

export default WritePage;
