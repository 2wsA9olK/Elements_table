import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { requestElements } from "../../Redux/elements-reducer";
import { getElements, getIsFetching } from "../../Redux/elements-selectors";
import Table from "./Table";

class TableContainer extends React.Component {

  componentDidMount() {
    this.props.getElements();
  }


  render() {
    return <>
      {this.props.isFetching ? <div>Loading...</div> : null}
      <Table elements={this.props.elements} />
    </>
  }
};

let mapStateToProps = (state) => {

  return {
    elements: getElements(state),
    isFetching: getIsFetching(state),
  }
};
export default compose(
  connect(mapStateToProps,
    { getElements: requestElements }
  ),
)(TableContainer);  