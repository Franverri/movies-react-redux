import React, { Component } from "react";
import { connect } from "react-redux";
import { getData } from "../actions/index";
import { addArticle } from "../actions/index";

function mapStateToProps(state) {
  return {
    articles: state.remoteArticles
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addArticle: article => dispatch(addArticle(article)),
    getData: title => dispatch(getData(title))
  };
}

export class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.getData(this.state.title);
  }

  render() {
    const { title } = this.state;
    return (
      <div>
        <h2>OMDB Búsqueda</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="title">Película</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={this.handleChange}
            />
          </div>
          <button type="submit">BUSCAR</button>
        </form>
        <ul>
          {this.props.articles && this.props.articles.map(el => (
            <div className="row">
              <li className="col-3">{el.Title}</li>
              <button className="col-1" onClick={() => this.props.addArticle({title: el.Title})}>Fav</button>
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
)(Post);
