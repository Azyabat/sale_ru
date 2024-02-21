import styled from "styled-components";
import { Layout, Menu as AntMenu } from "antd";

export const SiderWrapper = styled(Layout.Sider)`
    &&& {
        background: #797575;
    }
    color: white;
    padding: 24px 0px;
`;

export const Menu = styled(AntMenu)`
    &&& {
        background: inherit;
        padding-left: 32px;
    }
    .ant-menu-item {
        color: whitesmoke;
        border-radius: 0px;
        padding: 0px;
    }

    .ant-menu-item-selected {
        color: black;
        border-bottom: 1px solid black;
        background: inherit;
    }

    .ant-menu-item-active:not(.ant-menu-item-selected) {
        color: #adbcbcd9 !important;
        border-bottom: 1px solid #adbcbcd9;
        background: inherit !important;
    }
`;
