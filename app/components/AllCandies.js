import React from 'react';
import { connect } from 'react-redux';
import { getCandies } from '../reducers/index';

class AllCandies extends React.Component {

  componentDidMount() {
    this.props.getCandies();
  }

  render() {
    const candies = this.props.candies;

    return (
      <div>
        <ul>
          {candies.map(candy => (
            <li key={candy.id}>{candy.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    candies: state.candies,
  };
};

//GO OVER THIS AGAIN
//WHY DONT WE HAVE AN ARG IN GET CANDIES?
//BECAUSE WHEN WE DISPATCH THIS FUNC WE DONT HAVE CANDIES, THAT HAPPENS WHEN WE DO OUR AXIOS REQUEST
const mapDispatchToProps = dispatch => {
  return {
    getCandies: () => dispatch(getCandies()),
  };
};

//need curly braces if NOT returning

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllCandies);
//exproting where you want to import it
//when youre exporting a connected comonent only need to export the one at the bottom (its the same thing)
