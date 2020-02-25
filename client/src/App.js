import React from 'react'
import {
	BrowserRouter as Router,
	Route,
	// Link,
	Redirect,
	Switch,
	withRouter
} from 'react-router-dom';
import Auth from "./utils/Auth";
import Nav from "./components/Nav";
import Login from "./components/Login";
import Register from "./components/Register";
import {Container} from "./components/Grid";
import PublicRoute from "./pages/PublicRoute";
import ProtectedRoute from "./pages/PublicRoute";
import './App.css';

import Home from "./pages/Home";
import Explore from "./pages/Explore";
import About from "./pages/About";
import City from "./pages/City";
import Details from "./pages/Details"
import Review from "./pages/Review"

//I want to add some basic inline styling here, even though we are bringing in styles
// const listStyle = {
// 	color: 'cornflowerblue',
// 	listStyle:'none'
//   };
//Now we have all the stuff we need .. let's render some components with the Router
const AuthExample = () => (
	<Router>
		<div>
      		<Nav className="App-header"/>
			<Container>
				{/* <AuthButton/> */}
				{/* <ul style={listStyle}>
					<li><Link to="/public">Public Page</Link></li>
					<li><Link to="/protected">Protected Page</Link></li>
					<li><Link to="/register">Register a New User</Link></li>
				</ul> */}
				<Switch>
					<Route exact path="/" component={Home}></Route>
					<Route exact path="/search" component={Home}></Route>
					<Route exact path="/explore" component={Explore}></Route>

					{/* este route es cuando hayan buscando la ciudad */}
					<Route exact path="/city" component={City}></Route>

					{/* este route es para que hagan reviews de los restaurantes */}
					<Route exact path="/review" component={Review}></Route>

					<Route exact path="/about" component={About}></Route>
					<Route exact path="/public" component={PublicRoute}/>
					<Route exact path="/login" component={Login}/>
					<Route exact path="/register" component={Register}/>
					<PrivateRoute path="/protected" component={Review}/>
					{/* <Route component={NoMatch} /> */}
				</Switch>
			</Container>
		</div>
	</Router>
)


//Authbutton component / withRouter is imported from react-router
const AuthButton = withRouter(({ history }) => (
	Auth.isAuthenticated ? (
		
			<button className="btn btn-danger" 
				onClick={() => {
					Auth.signout(() => history.push('/'))
				}}>
				Sign out
			</button>
	) : (
		""
	)
))

// This is the private route component this checks for an authorized user here
const PrivateRoute = ({ component: Component, ...rest }) => (
	<Route {...rest} render={props => (
		Auth.isAuthenticated ? (
			<Component {...props}/>
		) : (
			<Redirect to={{
				pathname: '/login',
				state: { from: props.location }
			}}/>
		)
	)}/>
)








export { AuthExample, AuthButton }

