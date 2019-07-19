import React, { Component } from 'react'
import { Link } from 'react-router-dom';


export default class Footer extends Component {
    
    render() {
        return (
        <div id="footer" className="bg-secondary">
            <div className="container row pt-4">
                <div className="col">
                    <div className="btn btn-outline-success btn-lg">
                        <div height="80" width="100">
                            <h4>Stay in Touch!</h4>
                        </div>
                            <div className="container card-body">
                                <p className="card-title">Sign Up for News & Updates</p>
                            
                        <div className="form-group">
                        <label htmlFor="Name">Email Address:</label>
                            <input type="text" className="form-control" id="email" />
                        </div>
                        <div>
                            <a href="#" className="btn btn-success mr-4 btn-btn-block">Join Our Mailing List</a>
                        </div>
                    </div>
                </div>
                </div>


                
                <div className="col">
                    <button id="cat" type="button" className="btn btn-outline-success mb-4" data-toggle="modal" data-target="#exampleModalCenter">
                    Submit a Business
                    </button>
                        <div className="modal fade" id="footer" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="footer">Submit a Business You Would Like to See! </h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                            <div className="modal-body">
                                    <form>
                                    <div className="form-group">
                                        <label htmlFor="recipient-name" className="col-form-label">Business Name</label>
                                        <input type="text" className="form-control" id="recipient-name" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="message-text" className="col-form-label">Contact Information:</label>
                                        <textarea className="form-control" id="message-text"></textarea>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="message-text" className="col-form-label">Additional Details You Would Like to Share</label>
                                        <textarea className="form-control" id="message-text"></textarea>
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Submit</button>
                            </div>
                            </div>
                            
                        </div>
                        </div>
                        

                        <div>
                        <button id="cat" type="button" className="btn btn-outline-success my-2 my-sm-0 mr-2" data-toggle="modal" data-target="#exampleModalCenter">
                        Submit a Collaboration
                        </button>
                        <div className="modal fade" id="footer" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered" role="document">
                            <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="footer">Submit a Business You Would Like to See! </h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="form-group">
                                        <label htmlFor="recipient-name" className="col-form-label">Business Name</label>
                                        <input type="text" className="form-control" id="recipient-name" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="message-text" className="col-form-label">Contact Information:</label>
                                        <textarea className="form-control" id="message-text"></textarea>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="message-text" className="col-form-label">Additional Details You Would Like to Share</label>
                                        <textarea className="form-control" id="message-text"></textarea>
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Submit</button>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>

                <div>
                    <iframe width="450" height="300" src="https://www.youtube.com/embed/cP6XwggAJyo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>"
                </div>
                    
                </div>
                    <br></br>
                <footer className="text-align-center">
                    Copyright COLORborate - All Rights Reserved - Registered 501(c)(3). 
                </footer>
                <br></br>
                </div>
            )
        }
    }