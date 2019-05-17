import React, {Component} from 'react';
import AddSubscriber from './AddSubscriber';
import ShowSubscriber from './ShowSubscriber';
import { BrowserRouter as Router, Route } from 'react-router-dom';
class PhoneDirectory extends Component{
    // constructor(){
    //     super();
    //     this.state = {
    //         subscribersList: []
    //      }

    // }
    constructor() {
        super();
        this.state = {
            subscribersList: [{
                id: 1,
                name: 'deepak',
                phone: '8888888 '
            },
            {
                id: 2,
                name: 'prashant',
                phone: '99999999'
            }]
        }
    }
    deleteSubscriberHandler = (subcriberId) =>{
        let subscribersList = this.state.subscribersList;
        let subIndex = 0;
        subscribersList.forEach(function(subcriber, index){
            if(subcriber.id==subcriberId){
                subIndex = index;
            }
        }, this);
        let newSubscribers = subscribersList;
        newSubscribers.splice(subIndex, 1);
        this.setState({ subscribersList : newSubscribers});

    }
    addSubscriberHandler = (newSubscriber) => {
        let subscribersList = this.state.subscribersList;
        if(subscribersList.length > 0)
            newSubscriber.id = subscribersList[subscribersList.length - 1].id + 1;
        else 
            newSubscriber.id = 1;
        subscribersList.push(newSubscriber);
        this.setState({subscribersList : subscribersList});
        console.log(this.state.subscribersList);
    }
    render(){
        return(
            <Router>
            <div className="main-container">
                    <Route exact path='/' render={(props) => <ShowSubscriber {...props} subscribersList={this.state.subscribersList} deleteSubscriberHandler={this.deleteSubscriberHandler}/>} /> 
                <Route exact path='/add' render={({history},props) => <AddSubscriber history={history} {...props} addSubscriberHandler={this.addSubscriberHandler}/>}/> 
                </div>            
            </Router>
            // <AddSubscriber addSubscriberHandler = {this.addSubscriberHandler}/>
            // <ShowSubscriber subscribersList = {this.state.subscribersList}/>
            );
    }
}
export default PhoneDirectory;