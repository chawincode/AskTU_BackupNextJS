import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import '../styles/SideBar.css'

function SideBar() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div1 className="col-auto min-vh-100">
                    <ul>
                        {/* <a>
                            <span>
                                AskTU
                            </span>
                        </a> */}
                        <li>
                            <a className="nav-link px-2" href="/home">
                                <i className="bi-house-door-fill"/><span className="ms-2 d-none d-sm-inline">Home</span>
                            </a>
                        </li>
                        <li>
                            <a className="nav-link px-2" href="/answers">
                                <i className="bi-chat-fill"/><span className="ms-2 d-none d-sm-inline">Answer</span>
                            </a>
                        </li>
                        <li>
                            <a className="nav-link px-2" href="/question">
                                <i className="bi-question-lg"/><span className="ms-2 d-none d-sm-inline">Question</span>
                            </a>
                        </li>
                        <li>
                            <a className="nav-link px-2" href="/class">
                                <i className="bi-grid-fill"/><span className="ms-2 d-none d-sm-inline">Class</span>
                            </a>
                        </li>
                        <li>
                            <a className="nav-link px-2" href="/">
                                <i className="bi-box-arrow-left"/><span className="ms-2 d-none d-sm-inline">Log out</span>
                            </a>
                        </li>
                    </ul>
                </div1>
            </div>
        </div>
    )
}

export default SideBar;


// export default function SideBar() {
//     return (
//         <div className="container-fluid">
//             <Navbar>
//                 <div className="row">
//                     <div1 className="col-auto min-vh-100">
//                     <Navbar.Brand href="/">
//                         AskTU
//                     </Navbar.Brand>
//                     <Nav.Link href="/">
//                         <i className="bi-house-door-fill"/>  Home
//                     </Nav.Link>
//                     <Nav.Link href="/">
//                         <i className="bi-chat-fill"/>  Answer
//                     </Nav.Link>
//                     <Nav.Link href="/">
//                         <i className="bi-question-lg"/>  Question
//                     </Nav.Link>
//                     <Nav.Link href="/">
//                         <i className="bi-grid-fill"/>  Class
//                     </Nav.Link>
//                     </div1>
//                 </div>
//             </Navbar>
//         </div>
//     )
// }