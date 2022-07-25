/* eslint-disable jsx-a11y/alt-text */
import { Container } from "react-bootstrap";
import "./style.css";

function Footer() {
    return(
        <footer className="py-3">
            <Container>
                <div className="content d-flex justify-content-between">
                    <div className="contact-us">
                        <span className="ms-4">تواصل معنا</span>
                        <img src="../imgs/icons.svg" />
                    </div>
                    <div className="copyright">
                        <span className="ms-5 policy">سياسة الخصوصية</span>
                        <span className="ms-2">TG Academy</span>
                        <span className="ms-3" dir="ltr">&copy; 2022</span>
                    </div>
                </div>
            </Container>
        </footer>
    );
}
export default Footer;