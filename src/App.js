import React,{useEffect} from 'react';
import './App.sass';
import Header from './components/Header/Header';
import { Route, Switch, Redirect } from 'react-router-dom';
import { ALL_ROUTES } from './configRoutes'

const RouteConfig = ({ component: CurrentComponent, isLoggedIn, access, ...rest }) => {
  if(access === "private"){
    if (isLoggedIn) {
      return <Route {...rest} component={CurrentComponent} />;
    }
    return <Redirect to="/login" />
  }else{
    if (isLoggedIn) {
      return <Redirect to="/contacts" />;
    }
    return <Route {...rest} component={CurrentComponent} />;
  }
};

const App=(props)=>{
  useEffect(()=>{
    props.IsloggedInPageMount()
    console.log("render App")
  },[])
  return (
    <>
      <div className="app-wrapper">
        {props.isLoggedIn ? <Header LogOut={props.LogOut} email={props.validEmail} /> : null}
        <div className="content-wrapper">
          <Switch>
            {ALL_ROUTES.map((item) => <RouteConfig key={item.component} component={item.component} isLoggedIn={props.isLoggedIn} access={item.access} path={item.path} exact/>)}
            { props.isLoggedIn
             ? <Route path="">
                <Redirect to="/contacts" />
               </Route>
             : <Route path="">
                <Redirect to="/login" />
               </Route>
            }
          </Switch>
        </div>
      </div>
    </>
  );
}

export default App;

// const PrivateRoute = ({ component: CurrentComponent, isLoggedIn, ...rest }) => {
//   if (isLoggedIn) {
//     return <Route {...rest} component={CurrentComponent} />;
//   }
//   return (
//     <Route {...rest}>
//       <Redirect to="/login" />
//     </Route>
//   );
// };
//
// const PublicRoute = ({ component: CurrentComponent, isLoggedIn, ...rest }) => {
//   if (isLoggedIn) {
//     return <Route {...rest}><Redirect to="/contacts" /></Route>;
//   }
//   return <Route {...rest} component={CurrentComponent} />;
// };
//
// const App=(props)=>{
//   useEffect(()=>{
//     props.IsloggedInPageMount()
//     console.log("render App")
//   })
// // https://dev.to/thecoollearner/how-to-pass-methods-to-child-components-in-react-3n5g
//   return (
//     <>
//       <div className="app-wrapper">
//         {props.isLoggedIn ? <Header LogOut={props.LogOut} email={props.validEmail} /> : null}
//         <div className="content-wrapper">
//         <Switch>
//           <PrivateRoute component={ContactsContainer} isLoggedIn={props.isLoggedIn} path='/contacts' exect={true}/>
//           <PrivateRoute component={CardAddingContainer} isLoggedIn={props.isLoggedIn} path='/add' exect={true}/>
//           <PrivateRoute component={ContactChangeConteiner} isLoggedIn={props.isLoggedIn} path='/contact-change' exect={true}/>
//           <PrivateRoute component={ContactInfo} isLoggedIn={props.isLoggedIn} path='/contact-info' exect={true}/>
//           <PublicRoute component={LoginConteiner} isLoggedIn={props.isLoggedIn} path='/login' exect={true}/>
//           <PublicRoute component={RegisterForm} isLoggedIn={props.isLoggedIn} path='/register' exect={true}/>
//           <Route path="**">
//             <Redirect to="/login" />
//           </Route>
//         </Switch>
//         </div>
//       </div>
//     </>
//   );
// }
// export default App;
// Autorization with react router dom
// https://medium.com/@thanhbinh.tran93/private-route-public-route-and-restricted-route-with-react-router-d50b27c15f5e
// https://stackoverflow.com/questions/43164554/how-to-implement-authenticated-routes-in-react-router-4
