import CenterNavbar from "./navbarcenter";
import SimpleNavbar from "./navbar";
import GridExample from "./card"


export default function Layout({ children }) {
    return (
        <>
            <SimpleNavbar />
            {children}
            <CenterNavbar/>
            <GridExample/>

        </>
    )
}