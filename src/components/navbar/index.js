/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable jsx-a11y/alt-text */
import { Container, Nav, Navbar as NavbarBs } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./style.css";

function Navbar() {
    return(
        <NavbarBs className="bg-white shadow-sm mb-3">
            <Container>
                <Nav className="ms-auto align-items-center">
                    <Nav>
                        <img src="./imgs/logo.svg" alt="اللعبة" className="ms-3 logo"/> 
                    </Nav>
                    <Nav.Link to="/" as={NavLink}>
                        الصفحة الرئيسية
                    </Nav.Link>
                    <Nav.Link to="/who-are-we" as={NavLink}>
                        من نحن
                    </Nav.Link>
                    <Nav.Link to="/what-do-we-offer" as={NavLink}>
                        ماذا نقدم
                    </Nav.Link>
                    <Nav.Link to="/tracks" as={NavLink}>
                        المسارات
                    </Nav.Link>
                    <Nav.Link to="/our-work" as={NavLink}>
                        اعمالنا
                    </Nav.Link>
                    <Nav.Link to="/our-team" as={NavLink}>
                        فريقنا
                    </Nav.Link>
                </Nav>
                <div className="signup-signin d-flex align-items-center">
                    <Nav.Link to="/sign-in" as={NavLink} className="ms-3 sign-in">
                        تسجيل الدخول
                    </Nav.Link>
                    <Nav.Link to="/sign-up" as={NavLink}>
                        <button className="btn px-3 sign-up">
                            انضم لنا
                        </button>
                    </Nav.Link>
                </div>
            </Container>
        </NavbarBs>
    );
}
export default Navbar;