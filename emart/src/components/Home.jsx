import Products from "./Products";
import bg from '../assets/bg.jpg';

export default function Home() {
    return (
        <div className="hero">

            <div className="card bg-dark text-white border-0">
                <img src={bg} className="card-img" alt="background" height="650px" />

                <div className="card-img-overlay d-flex flex-column justify-content-center">
                    <div className="container">

                        <h5 className="card-title display-3 fw-bolder mb-0">NEW SEASON ARRIVALS</h5>
                        <p className="card-text">
                            CHECK OUT ALL THE TRENDS
                        </p>

                    </div>
                </div>
            </div>
            <Products />
        </div>
    )
}