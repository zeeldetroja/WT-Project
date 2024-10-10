import {Link, Outlet} from 'react-router-dom';
import exampleImage from './pages/logo.jpeg';


function Layout(){
    
    return(
        <>
            <nav class="navbar navbar-expand-lg fs-6 "  style={{backgroundColor: "white"}}>
                <div class="container-fluid">
                    <img src={exampleImage} style={{height:"70px"}} />
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                        <Link class="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li class="nav-item">
                        <Link class="nav-link active" to="/bill">Bill</Link>
                        </li>
                        <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle active" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Add
                        </a>
                        <ul class="dropdown-menu">
                            <Link class="nav-link" to="/bill/add">Add Bill</Link>
                            <Link class="nav-link" to="/bill">Edit Bill<br/>(Click on Detail)</Link>
                            <a class="nav-link disabled" aria-disabled="true">Payment</a>
                            <li><hr class="dropdown-divider"/></li>
                            <li><Link class="dropdown-item" to="/bill/loading">Something else here</Link></li>
                        </ul>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link active" to="/bill/about">About Us</Link>
                        </li>
                    </ul>
                    <form class="d-flex" role="search">
                        <input class="form-control me-2" type="search"  placeholder="Search" aria-label="Search"/>
                        <button class="btn btn-outline-success" type="button">Search</button>
                    </form>
                    </div>
                </div>
            </nav>

            <div className="row">
                <div className="col-2"></div>
                <div className="col-8 p-3">
                    <Outlet/>
                </div>
            </div>
        </>
    )
}

export default Layout;