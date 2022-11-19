import Navbar from "./Navbar";

function Layout(props){
    return(
        <div>
            <Navbar/>
            Hello Layout
            {props.children}
            footer
        </div>
    )
}
export default Layout;