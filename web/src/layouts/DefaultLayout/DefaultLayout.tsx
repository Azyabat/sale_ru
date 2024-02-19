import { FC } from "react";
import { Header } from "components";
import { Wrapper } from "./styled";

export const DefaultLayout: FC<React.PropsWithChildren> = ({ children }) => (
    <>
        <Header />
        <Wrapper>{children}</Wrapper>
    </>
);
