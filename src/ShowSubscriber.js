import React, { Component } from 'react';
import Header from './Header';
import './ShowSubscriber.css';
let x=1, y=4;

class ShowSubscriber extends Component {
  deleteHandler(msg) {
    alert(msg)
  }
  // constructor(){
  //   super();
  //   this.state = {
  //     subscribers : [{
  //       id: 1,
  //       name: 'deepak',
  //       phone: '8888888 '
  //     },
  //   {
  //     id: 2,
  //     name: 'prashant',
  //     phone: '99999999'
  //   }]
  //   }
  // }
  // componentDidMount(){
  //   let newSubscriber = {
  //     id : 1,
  //     name : 'deepak',
  //     phone : '888888888'
  //   }
  //   let subscriberList = this.state.subscribers;
  //   subscriberList.push(newSubscriber);
  //   this.setState(subscriberList);
  //   console.log("mount called")
  // }
  render(){
  // let subscriber = [
  //   {
  //     "id"  : 1,
  //     "name" : "deepak",
  //     "number" : "9650268873"
  //   },
  //   {
  //     "id": 2,
  //     "name": "prashant",
  //     "number": "9650265068"
  //   }
  // ]
  return (
    <div>
        <Header heading="Phone Directory"/>
        <div className="component-body-container">
          <button className="custom-btn add-btn" >Add</button>

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
                <button className="custom-btn delete-btn" onClick={this.deleteHandler.bind(this, 'deleteHandler')}>Delete</button>
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