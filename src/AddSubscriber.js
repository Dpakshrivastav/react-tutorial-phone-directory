import React, { Component } from 'react';
import Header from './Header';
import './AddSubscriber.css';


class AddSubscriber extends Component{
    render(){
        return(
            <div>
                <Header heading="Add Subscriber"/>
                <div className="component-body-container">
                    <button className="custom-btn">Back</button><br />  <br />
                    <form className = "suscriber-form">
                        <label className="label-control" htmlFor="name">Name :</label>
                        <input className="input-control" id="name" type="text"></input><br /><br />

                        <label className="label-control" htmlFor="phone">Phone Number :</label>
                        <input className="input-control" id="phone" type="text"></input><br /><br />
                        <div className="subscriber-info-container">
                            <span className="subscriber-to-add-heading">Subscriber to be added:</span><br/>
                            <span className="subscriber-info">Name:</span><br />
                            <span className="subscriber-info">Phone:</span><br />
                        </div>
                        <button type="submit" className="custom-btn add-btn">Add</button>
                    </form>
                </div>
            </div>
        )
    }
}
export default AddSubscriber;
