import React from 'react';
import store from '../store';
import AllCandies from './AllCandies';
import Navbar from './Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const Root = () => {
  return (
    <Router>
      <div>
        <nav>
          <Navbar />
        </nav>
        
        <Switch>
          <Route exact path="/">
            <main>
              <h1>Welcome to the Goodie Bag!</h1>
              <p>What a nice home page for your goodies!</p>
            </main> 
          </Route>
          <Route exact path="/candies" component={AllCandies} />
        </Switch>
      </div>
    </Router>
  );
};

export default Root;

// const Root = () => {
//   return (
//       <div>
//         <nav>
//           <Navbar />
//         </nav>
//         <main>
//           <h1>Welcome to the Goodie Bag!</h1>
//           <p>What a nice home page for your goodies!</p>
//         </main>
//       </div>
//   );
// };

// export default Root;