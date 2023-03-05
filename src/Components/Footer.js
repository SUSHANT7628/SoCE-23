// import { Button } from "bootstrap";
import './Styles/footer.css'
export default function Footer() {
    return (
        <div>
            <footer className="site-footer">
                <div className="container">
                    <div className="row">
                        <div className='col'>
                            <div className='row'>
                                <div className="col-xs-6 col-md-2">
                                    <h6>Quick Links</h6>
                                    <ul className="footer-links">
                                        <li><a href="https://www.iitk.ac.in/">IIT Kanpur</a></li>
                                        <li><a href="https://www.iitk.ac.in/ce/">CE IITK</a></li>
                                        <li><a href="/">SOCE IITK</a></li>
                                    </ul>
                                </div>
                                <div className="col-xs-6 col-md-2">
                                    <h6>For Students</h6>
                                    <ul className="footer-links">
                                        <li><a href="/">Resumes</a></li>
                                        <li><a href="/">CE Courses</a></li>
                                        <li><a href="/">Postulates</a></li>
                                        <li><a href="/">Merchandises</a></li>
                                    </ul>
                                </div>
                                <div className="col-xs-6 col-md-2">
                                    <h6>Events</h6>
                                    <ul className="footer-links">
                                        <li><a href="/">Freshers</a></li>
                                        <li><a href="/">Farewell</a></li>
                                        <li><a href="/">Seminar</a></li>
                                        <li><a href="/">Workshop</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-3">
                            <h6>Contact</h6>
                            <p className='footer-p'>WLE-301, IIT Kanpur, Kalyanpur<br/>
                                Kanpur, Uttar Pradesh, 208016</p>
                            <ul className="footer-links">
                                <li> <a href="tel:+91 8009117479">Phone no.: +91 8009117479</a> </li>
                                <li><a href="mailto:soce@iitk.ac.in">Email: soce@iitk.ac.in</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-7 col-sm-6 col-xs-12 my-3" id='footer-icon'>
                            <ul className="social-icons">
                                <li><a className="facebook" href="https://www.facebook.com/soce.iitk" target="_blank"><i className="fa fa-facebook"></i></a></li>
                                <li><a className="youtube" href="https://www.youtube.com/@societyofcivilengineersiit3172" target="_blank"><i className="fa fa-youtube-play"></i></a></li>
                                <li><a className="dribbble" href="https://www.instagram.com/soce.iitk/?hl=en" target="_blank"><i className="fa fa-instagram"></i></a></li>
                                <li><a className="linkedin" href="https://www.linkedin.com/company/society-of-civil-engineers-iitk/" target="_blank"><i className="fa fa-linkedin"></i></a></li>
                            </ul>
                        </div>
                        <hr className="border  border-1" />
                        <div className="col-md-12 col-sm-6 col-xs-12">
                            <p  className="copyright-text text-center footer-p">Copyright &copy; 2022-23 <a href="#" id='company'> SoCE, IITK</a> All Rights reserved.
                                
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}