 import React from "react";
 import RoutesArray from "./routes";
 import * as Pages from '../pages';
 import * as Layout from '../layouts'
 import { Login } from "../pages";
 import { Route, HashRouter, Routes, Navigate, BrowserRouter as Router } from "react-router-dom";
 let history = 'data'


// class RouterComponent extends React.Component { 
	
// 	populateRoutes(routes) {
// 		return routes.map(
// 		  ({
// 			component,
// 			redirect,
// 			path,
// 			exact = false,
// 			auth = true,
// 			rootPath = '',
// 			childrens = [],
// 		  }) => {
// 			if (childrens.length > 0) {
// 				console.log('path', path)
// 			  return (
// 				<Route
// 					path={path}
// 					element={<LoginLayout/>}
// 				/>
// 			  );
// 			}
// 			else {
			
// 			}
// 		  }
// 		)
// 	  }
// 	render () {
// 		return (        
// 			<HashRouter history={history}>
// 				<Routes>
// 					{this.populateRoutes(RoutesArray)}
// 				</Routes>          
// 			</HashRouter>
// 		  );
// 	}   
//  }

const  RouterComponent = () => {

	const populateRoutes = (routes) => {
		return routes.map(
		  ({
			component,
			redirect,
			path,
			exact = false,
			auth = true,
			rootPath = '',
			childrens = [],
		  }, index) => {
			if (childrens.length > 0) {
				let LayoutComponent = Layout[component]
				let RedirectComponent = Pages[childrens[0]['component']]
			  return (
				  <Route path={path} element={<LayoutComponent />} key={index} >
					  	<Route index element={<RedirectComponent/>} key={index} />
					  	{	
							childrens.map((props, index) => {
								let Page = Pages[props.component]
								return <Route
								key={index}
								path={props.path}
								element={<Page/>}
						/>
							})	
				  		}
					  	{/* <Route
							path='login'
							element={<Login/>}
						/> */}
				  </Route>
				
			  );
			}
			else {
				if(redirect) {
					return  <Route path={path} element={<Navigate to={redirect} replace />}  />
				}
				let LayoutComponent = Layout[component] 
				return  <Route path={path} element={<LayoutComponent />} key={index} />
			}
		  }
		)
	  }
	return (        
		<Router history={history}>
			<Routes>
				{populateRoutes(RoutesArray)}
			</Routes>          
		</Router>
	);
}
export default RouterComponent