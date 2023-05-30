import { Link, Outlet} from "react-router-dom";
import './styles/NavBar.css';
import { Button } from 'antd';

export default function NavBar() {
    return (
        <nav>
            <section className="navSection">
                <div className="navLogo">
                    <Link className="navLinks" to="/">
                        <img className='khoj-logo' src="./khoj_logo.svg" alt="Khoj" />
                    </Link>
                </div>
                <div className="navLogo" id="khoj-waves">
                    <img className='khoj-waves' src="./header_waves.svg" alt="Khoj" />
                </div>
                <div className="navContent">
                    <ul className="navLinks">
                        <li className="navLinks">
                            <Button type="primary" shape="default" size="large">
                                <Link className="navLinks" to="https://github.com/debanjum/khoj">Install</Link>
                            </Button>
                            <Button type="link" href="/about">
                                About
                            </Button>
                        </li>
                    </ul>
                </div>
            </section>
            <Outlet />
        </nav>
    );
}