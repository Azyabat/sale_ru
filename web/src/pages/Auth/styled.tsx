import styled from "styled-components";

export const ContentWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const AuthFormWrapper = styled.div`
    margin: 0 50px;
    width: 620px;
    height: 320px;
    padding: 20px 12px;
    background-color: darkcyan;
    border-radius: 20px;
    box-shadow: 0px 0px 23px 4px rgba(34, 60, 80, 0.29);
    color: whitesmoke;

    form {
        margin-top: 32px;
    }

    .ant-form-item {
        width: 250px;
        margin: 24px auto;
    }

    .ant-input-affix-wrapper,
    button {
        border-radius: 12px;
    }

    button {
        width: 100%;
    }
`;

export const AuthFormHeader = styled.div`
    margin-top: 18px;
    text-align: center;
    font-size: 28px;
    font-weight: 600;
`;
