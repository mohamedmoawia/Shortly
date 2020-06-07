import React from 'react';

const Footer = ()=>{
    return(
        <footer>
                    <div className='d-flex' style={{ backgroundColor: '#1d2124e3', color: 'white', padding: '70px' }}>
                        <h2 style={{ fontSize: '2em' }}>Shortly</h2>
                        <ul style={{ listStyle: 'none', marginLeft: '300px' }}>
                            <li><h6>Features</h6></li>
                            <li className="text-muted">Link Shortening</li>
                            <li className="text-muted">Branded Links</li>
                            <li className="text-muted">Analytics</li>
                        </ul>

                        <ul style={{ listStyle: 'none' }}>
                            <li><h6>Resources</h6></li>
                            <li className="text-muted">Blog</li>
                            <li className="text-muted">Developers</li>
                            <li className="text-muted">Support</li>
                        </ul>
                        <ul style={{ listStyle: 'none' }}>
                            <li><h6>Company</h6></li>
                            <li className="text-muted"> About</li>
                            <li className="text-muted">Our Team</li>
                            <li className="text-muted">Careers</li>
                            <li className="text-muted">Contact</li>
                        </ul>
                        <div id="social">
                            <i className="fab fa-facebook-square"></i>
                            <i className="fab fa-twitter"></i>
                            <i className="fab fa-pinterest"></i>
                            <i className="fab fa-instagram"></i>
                        </div>
                    </div>
                </footer>
    );
}

export default Footer