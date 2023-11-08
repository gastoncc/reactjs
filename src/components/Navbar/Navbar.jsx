import CartWidget from "../CartWidget/CartWidget"
import { Link } from "react-router-dom"

const Navbar = () => {
        return (
            <nav>
                <Link to="/">Bienvendos</Link>
                <div>
                    <Link to="/category/comic">Comics Marvel</Link>
                    <Link to="/category/comic">Comics DC</Link>
                    <Link to="/category/manga">Manga</Link>
                </div>
                <CartWidget />
            </nav>
        )
    }
export default Navbar 