import { Typography } from "antd";
import styled from "styled-components";

export const Text = styled(Typography.Text)<{
    fontSize?: string;
    color?: string;
}>`
    font-size: ${(props) => (props.fontSize ? props.fontSize : "12px")};
    color: ${(props) => (props.color ? props.color : "black")};
`;
