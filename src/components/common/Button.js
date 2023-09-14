// import { styled } from '../../../node_modules/styled-components/dist/index'; <- 설정이 다름을 주의하고 수정 필요시 작업!
import { styled, css } from 'styled-components';
import palette from '../../lib/styles/palette';
import { Link } from '../../../node_modules/react-router-dom/dist/index';

const buttonStyle = css`
    border: none;
    border-radius: 4px;
    font-size: 1rem;
    font-weight: bold;
    padding: 0.25rem;
    color: white;
    outline: none;
    cursor: pointer;
    background: ${palette.gray[8]};
    &:hover {
        background: ${palette.gray[6]};
    }

    ${(props) =>
        props.fullWidth &&
        css`
            padding-top: 0.75rem;
            padding-bottom: 0.75rem;
            width: 100%;
            font-size: 1.125rem;
        `}

    ${(props) =>
        props.cyan &&
        css`
            background: ${palette.cyan[5]};
            &:hover {
                background: ${palette.cyan[4]};
            }
        `}
`;

const StyledButton = styled.button`
    ${buttonStyle}
`;

const StyledLink = styled(Link)`
    ${buttonStyle}
`;

const Button = (props) => {
    return props.to ? (
        <StyledLink {...props} cyan={props.cyan ? 1 : 0} />
    ) : (
        <StyledButton {...props} />
    );
};

// const StyledButton = styled.button`
//     border: none;
//     border-radius: 4px;
//     font-size: 1rem;
//     font-weight: bold;
//     padding: 0.25rem 1rem;
//     color: white;
//     outline: none;
//     cursor: pointer;

//     background: ${palette.gray[8]};
//     &:hover {
//         background: ${palette.gray[6]};
//     }

//     ${(props) =>
//         props.fullWidth &&
//         css`
//             padding-top: 0.75rem;
//             padding-bottom: 0.75rem;
//             width: 100%;
//             font-size: 1.125rem;
//         `}

//     ${(props) =>
//         props.cyan &&
//         css`
//             background: ${palette.cyan[5]};
//             &:hover {
//                 background: ${palette.cyan[4]};
//             }
//         `}
// `;

// const Button = (props) => <StyledButton {...props} />;

export default Button;
