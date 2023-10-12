import { PropsWithChildren } from "react";
import './Layout.css';

const Layout = ({ children }: PropsWithChildren<any>) => (
    <main className="Layout LightTheme">
        {children}
    </main>
)

export default Layout;