import ButtonAppBars from "./navbarcenter";
import ButtonAppBar from "./navbar";
import Post from "./card"


export default function Layout({ children }) {
    return (
        <>
            <ButtonAppBar />
            {children}
            <ButtonAppBars/>
            <Post/>

        </>
    )
}