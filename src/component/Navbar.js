import { NavLink } from "react-router-dom";

const Navbar = () => {
    const activateStyle = {
        backgroundColor: "black",
        color:"white"
    };

    return(
        <>
            <ul>
                <li>
                    <NavLink to="/" style={({isActive}) => //isActive 는 NavLink가 주는것이다!
                        isActive? activateStyle : null
                    }>Home</NavLink>
                </li>
                <li>
                    <NavLink to="/menupage" style={({isActive}) =>
                        isActive? activateStyle : null    
                }>Menupage</NavLink>
                </li>
            </ul>
        </>
    )
}

export default Navbar;