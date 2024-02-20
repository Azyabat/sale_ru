import styled from "styled-components";
import { Layout as AntLayout } from "antd";

export const Layout = styled(AntLayout)`
    height: 100%;
    background-color: #e4e4e4;
`;

export const ContentWrapper = styled.div`
    width: calc(100% - 64px);
    height: calc(100% - 48px);
    margin: 24px 32px;
    border-radius: 32px;
    background: gainsboro;
`;
