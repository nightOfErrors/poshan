import '../authentication.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Authentication = () => {



    return (<div>

        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">PM Poshan</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <Link to="/" class="nav-item">
                            <a class="nav-link" href="#">Home</a>
                        </Link>
                        <Link to="/login" class="nav-item">
                            <a class="nav-link" href="#">Admin</a>
                        </Link>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Download</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

        <div className="authenticationContainor" style={{width:'100%', marginTop:'50px'}}>

            <div align="center" className="authenticationBox" style={{width:'550px', padding:'50px', height:'300px', position:'absolute', left: '50%', transform: 'translate(-50%, 0)', marginTop:'70px'}}>
                
                <b><p style={{fontSize:'30px', color:'green'}} >Account Details</p></b>

                <input placeholder="Id" style={{marginTop:'10px'}} className="inputLogin"></input>
                <input placeholder="password" className="inputLogin"></input>
                <Link to="/stats"><button className="signInButton">LogIn</button></Link>

            </div>

        </div>

    </div>);
}

export default Authentication;