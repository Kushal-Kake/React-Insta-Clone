import Header from '../Header/Header.js'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Rocket from '../../../../Images/share.png'
import Heart from '../../../../Images/heart.png'
import './List.css'

export default function AllPost() {

    return (
        <div>
            <Header />

            <div className='list-post-container'>
                <div className='row m-3'>
                    <div className='col-12'>
                        <Card className="post-card">
                            <Card.Header className='card-header'>
                                <div className='col-5'>
                                    <h4>Shiva</h4>
                                    <label>Bengaluru</label>
                                </div>
                                <div className='col-5'>
                                    <span className='dot'>&#9679;&#9679;&#9679;</span>
                                </div>
                            </Card.Header>
                            <Card.Body className='card-body'>
                                
                                <img src='https://images.unsplash.com/photo-1678601883883-eed85065f49d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDF8RnpvM3p1T0hONnd8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60' alt='peace' />
                            </Card.Body>
                            <Card.Footer className="card-footer">
                                <div className='row'>
                                    <div className='col-5'>
                                        <img src={Heart} alt='heart' />
                                        <img src={Rocket} alt='rocket_icon' />
                                        <p>64 likes</p>
                                    </div>
                                    <div className='col-5'>
                                    <span className='dot'>&#9679;&#9679;&#9679;</span>
                                </div>
                                </div>
                                <div col-12 d-block>
                                    <h3>Hello From Kushal</h3>
                                </div>
                            </Card.Footer>
                        </Card>
                    </div>
                </div>
            </div>
        </div>


    )
}