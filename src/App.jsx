import React, { useContext } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Intro from "./components/intro/Intro";
import Navbar from "./components/navigation/Navbar";
import Project from "./components/project/Project";
import Contact from "./components/contact/Contact";
import Toggle from "./components/toggle/Toggle";
import { ThemeContext } from "./context";

// CONTEXT API APP

const App = () => {
	const theme = useContext(ThemeContext);
	const { darkMode } = theme.state;
	return (
		<div style={{
			backgroundColor: darkMode ? '#000' : "white",
			color: darkMode && 'white'
		}}>
			<Intro/>
			{/* <Project/>
			<Contact/> */}
			{/* <Router>
				<Navbar />
				<Switch>
					<Route path="/" exact component={Intro} />
					<Route path="/project" exact component={Project} />
					<Route path="/contact" exact component={Contact} />
				</Switch>
			</Router> */}
			<Toggle />
		</div>
	);
};

export default App;
