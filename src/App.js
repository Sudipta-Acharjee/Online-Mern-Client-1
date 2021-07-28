import './App.css';
import React from "react";
import Header from './Component/Home-1st/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import LogIn from './Component/Home-1st/LogIn';
import BookingList from './Component/MainPart/BookingLIst/BookingList';
import LearnerReview from'./Component/MainPart/LearnerReview/LearnerReview';
import LearnerBook from './Component/MainPart/LearnerBook/LearnerBook';
import Service from './Component/MainPart/Service/Service';
import OrderListAdmin from './Component/MainPart/OrderListAdmin/OrderListAdmin';
import AddService from './Component/MainPart/AddService/AddService';
import AddAdmin from './Component/MainPart/AddAdmin/AddAdmin';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Header></Header>
        </Route>
        <Route path="/login">
          <LogIn></LogIn>
        </Route>
        <Route path="/login">
          <LogIn></LogIn>
        </Route>
        {/* <Route path="/booking">
            
          </Route> */}
          <Route path="/booking/:id">
            {/* <Service></Service> */}
            <LearnerBook></LearnerBook>
          </Route>
          <Route path="/learner/review">
            <LearnerReview></LearnerReview>
          </Route>
          <Route path="/learner/allBooking">
            <BookingList></BookingList>
          </Route>
          <Route path="/admin/order">
            <OrderListAdmin></OrderListAdmin>
          </Route>
          <Route path="/admin/addService">
            <AddService></AddService>
          </Route>
          <Route path="/admin/addAdmin">
            <AddAdmin></AddAdmin>
          </Route>
      </Switch>
    </Router>
  );
}

export default App;
