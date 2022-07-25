/* eslint-disable jsx-a11y/alt-text */
import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./style.css";

function LandingPage() {
    return(
        <div className="landing-page pt-5 d-flex justify-content-between align-items-center">
            <div className="content">
                <h1 className="mb-5">تعلم مهارات المستقبل</h1>
                <p className="mb-5">ابدأ حياتك المهنية او بدلها او ارتقي بيها من خلال مسار المهارات الرقمية عبر الانترنيت منها التصميم، البرمجة، المونتاج و الكثير.</p>
                <Nav.Link to="/sign-up" as={NavLink}>
                    <button className="btn px-3 sign-up">
                        انضم لنا
                    </button>
                </Nav.Link>
            </div>
            <img src="../imgs/main.svg" />
        </div>
    );
}
export default LandingPage;