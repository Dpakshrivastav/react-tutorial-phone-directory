import React, { Component } from 'react';
import Header from './Header';
import './ShowSubscriber.css';
import './common/common.css';
import {Link} from 'react-router-dom';
let x=1, y=4;

class ShowSubscriber extends Component {
  deleteHandler(subid) {
    this.props.deleteSubscriberHandler(subid);
  }
 
  render(){
 
  return (
    <div>
        <Header heading="Phone Directory"/>
        <div className="component-body-container">
        <Link to='/add'><button className="custom-btn add-btn" >Add</button></Link>

          <div className="grid-container heading-container">
            <span className="grid-item name-heading">Name</span>
            <span className="grid-item phone-heading">Phone</span>
          </div>
        {
          this.props.subscribersList.map(sub=>{

          return  (
            <div key={sub.id} className="grid-container">
          <span className="grid-item">{sub.name}</span>
          <span className="grid-item">{sub.phone}</span>
              <span className="grid-item action-btn-container">
                <button className="custom-btn delete-btn" onClick={this.deleteHandler.bind(this, sub.id)}>Delete</button>
              </span>
        </div>)
            })
        }
    </div>
    </div>
    // React.createElement("p", {id: "dk"}, "helloworld")
  );
  }
}

export default ShowSubscriber;
// 
//   <div className="form-group">
//     <label htmlFor="name">Name :</label>
//     <input type="text" placeholder="type here..." defaultValue="deepak"></input>
//   </div>
//   <div className="form-group">
//     <label htmlFor="number">Number :</label>
//     <input type="text" placeholder="type number here..." defaultValue={x + y}></input>
//   </div>