export function Footer() {
    return <>
    <footer className="d-flex py-5">
    <div className="container">
            <div className="row text-white text-center">
                <div className="location col-md-4">
                    <div className="p-4">
                            <h2>LOCATION</h2>
                            <p className="py-1">2215 John Daniel Drive</p>
                            <p>Clark, MO 65243</p>
                    </div>
                </div>
                <div className="about-web col-md-4">
                    <div className="p-4">
                    <h2>AROUND THE WEB</h2>
                    <div className="icons my-3">
                        <span className="m-1"><i className="fa-brands fa-facebook"></i></span>
                        <span className="m-1"><i className="fa-brands fa-twitter"></i></span>
                        <span className="m-1"><i className="fa-brands fa-linkedin-in"></i></span>
                        <span className="m-1"><i className="fa-solid fa-globe"></i></span>
                    </div>
                    </div>
                </div>
                <div className="location col-md-4">
                    <div className="p-4">
                            <h2>ABOUT FREELANCER</h2>
                            <p className="m-0 p-0">Freelance is a free to use, licensed Bootstrap theme Created by Route</p>
                    </div>
                </div>
            </div>

        </div>
    </footer>
    <div className="copyright text-center text-white py-2 d-flex justify-content-center align-items-center">
            <p>Copyright © Your Website 2021</p>
        </div>
    </>
} 