import React, { Component } from 'react';
import ArticleList from '../components/ArticleList.jsx';
import SearchControl from '../components/SearchControl.jsx';
import { fetchArticlesBySearch } from '../services/newsSearchApi.js';

export default class NewsSearch extends Component {

  state = {
    articles: [],
    text: 'dinosaur',
    loading: true
  }

  onSubmit = async (e) => {
    e.preventDefault();
    const { text } = this.state;
    const articles = await fetchArticlesBySearch(text);
    this.setState({ articles, loading: false });
  }

  handleChange = ({ target }) => {
    this.setState({ text: target.value });
  };

  async componentDidMount() {
    const { text } = this.state;
    const articles = await fetchArticlesBySearch(text);
    // setTimeout(() => {
    //   this.setState({ articles, loading: false });
    // }, 500);
    this.setState({ articles, loading: false });
  }

  async componentDidUpdate() {
    const { text } = this.state;
    const articles = await fetchArticlesBySearch(text);
    this.setState({ articles, loading: false });
    // setTimeout(() => {
    //   this.setState({ articles, loading: false });
    // }, 500);
  }

  render() {
    const { articles, text, loading } = this.state;

    if(loading) return <h1>Loading...</h1>;

    return (
      <>
        <SearchControl 
          text={text}
          onChange={this.handleChange}
          onSubmit={this.onSubmit}
        />

        <ArticleList 
          articles={articles} 
        />
      </>
    );
  }
}
