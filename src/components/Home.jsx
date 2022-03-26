import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import '../home.css';
import background from '../poshan.png';

const Home = () => {



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
                            {/* <Link to="/" class="nav-item">
                                <a class="nav-link" href="#">Home</a>
                            </Link> */}
                            {/* <Link to="/login" class="nav-item">
                                <a class="nav-link" href="#">Admin</a>
                            </Link > */}
                            {/* <li class="nav-item">
                                <a class="nav-link" href="#">Download</a>
                            </li> */} 
                        </ul>
                    </div>
                </div>
            </nav>

            <div style={{ display: 'flex', width: '100%', marginTop: '50px', padding: '10px' }}>

                <div style={{ width: '47%', border: '2px solid black', backgroundImage:`url(${background})`, backgroundSize:'cover' }}>

                </div>
                <div style={{ width: '45vw', height: '30vw', marginTop: '50px', marginLeft: '41px' }}>
                    <b><p style={{ color: 'green', fontSize: '35px' }} >About PM Poshan Yojana</p></b>
                    <p>Mid-day Meal Scheme

                        The Mid-day Meal Scheme (under the Ministry of Education) is a centrally sponsored scheme which was launched in 1995.
                        It is considered as the world’s largest school meal programme aimed to attain the goal of universalization of primary education.
                        Provides cooked meals to every child within the age group of six to fourteen years studying in classes I to VIII who enrolls and attends the school.
                        If the Mid-Day Meal is not provided in school on any school day due to non-availability of food grains or any other reason, the State Government shall pay food security allowance by 15th of the succeeding month.
                        <br />
                        <b style={{marginTop:'15px'}} >Download the app by licking the button below.</b>
                    </p>
                    <a href="https://drive.google.com/file/d/1ZnMH_0lw9xSax81C4A8y2ra09-XYWWak/view?usp=sharing"><button className="downloadApp" style={{ width: '320px', height: '45px', border: 'none', marginTop: '30px', color: 'white', backgroundColor: 'black', borderRadius: '5px' }}>Download APK</button></a>
                </div>


            </div>

        </div>
    );
}

export default Home;