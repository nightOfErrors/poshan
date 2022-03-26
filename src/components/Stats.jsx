import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import '../stats.css';


const Stats = () => {


    return (
        <div>

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
                            </Link >
                            <li class="nav-item">
                                <a class="nav-link" href="#">Download</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div className="graphsContainer" style={{width:'85%', padding:'15px', position:'absolute', left: '50%', transform: 'translate(-50%, 0)', marginTop:'100px'}} >
                
                <div className="inGraph">

                </div>
                <div className="inGraph">

                </div>
                <div className="inGraph">

                </div>

            </div>

        </div>
    );
}

export default Stats;