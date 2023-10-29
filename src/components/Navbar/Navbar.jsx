import CartWidget from "../CartWidget/CartWidget"

const Navbar = () => {
        return (
            <nav>
                <h1>Bienvendos</h1>
                <div>
                    <button>Comics Marvel</button>
                    <button>Comics DC</button>
                    <button>Manga</button>
                </div>
                <CartWidget />
            </nav>
        )
    }
export default Navbar 