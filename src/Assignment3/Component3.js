import logo from './Assets/download.jpg';
import img1 from './Assets/download (1).jpg';
import img2 from './Assets/images (1).jpg';
import img3 from './Assets/images (2).jpg';
import img4 from './Assets/images (3).jpg';
import img5 from './Assets/images (4).jpg';
import img6 from './Assets/images.jpg';
import './CompStyle.css';

function TourismWebapp(){
    return(
        <div>
            <h1>Toursim WebApp for Hotel Booking</h1>
            <div className="hotel-row">
                <div className="hotel-item">
                    <img src={logo} alt="Hotel img" />
                    <h3>Grand Hotel</h3>
                    <a href="#">Book Now</a>
                </div>
                <div className="hotel-item">
                    <img src={img1} alt="Hotel image 1"/>
                    <h3>Luxury Resort</h3>
                    <a href="#">Book Now</a>
                </div>
                <div className="hotel-item">
                    <img src={img2} alt="Hotel image 2"/>
                    <h3>Beach Paradise</h3>
                    <a href="#">Book Now</a>
                </div>
                <div className="hotel-item">
                    <img src={img3} alt="Hotel image 3"/>
                    <h3>Mountain View</h3>
                    <a href="#">Book Now</a>
                </div>
                <div className="hotel-item">
                    <img src={img4} alt="Hotel image 3"/>
                    <h3>City Center Hotel</h3>
                    <a href="#">Book Now</a>
                </div>
                <div className="hotel-item">
                    <img src={img5} alt="Hotel image 3"/>
                    <h3>Seaside Inn</h3>
                    <a href="#">Book Now</a>
                </div>
                <div className="hotel-item">
                    <img src={img6} alt="Hotel image 3"/>
                    <h3>Royal Palace</h3>
                    <a href="#">Book Now</a>
                </div>
            </div>
        </div>
    )
}

export default TourismWebapp;