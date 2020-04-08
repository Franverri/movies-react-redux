import React, { Component } from "react";
import { connect } from "react-redux";
import { removeArticle } from "../actions/index";

function mapStateToProps(state) {
  return {
    articles: state.articles
  };
}

function mapDispatchToProps(dispatch) {
  return {
    removeArticle: article => dispatch(removeArticle(article))
  };
}

export class ConnectedList extends Component {

  render() {
    return (
      <div>
        <h2>Películas Favoritas</h2>
        <ul>
          {this.props.articles && this.props.articles.map(el => (
            <div className="row">
              <li className="col-3">{el.title}</li>
              <button className="col-1" onClick={() => this.props.removeArticle({title: el.title})}>X</button>
            </div>
          ))}
        </ul>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectedList);
