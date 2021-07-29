import React, { Component } from 'react';
import ArticleList from '../components/ArticleList.jsx';
import { fetchArticles } from '../services/newsSearchApi.js';

export default class NewsSearch extends Component {
  state = {
    articles: [],
    loading: true
  }

  async componentDidMount() {
    const articles = await fetchArticles();
    setTimeout(() => {
      this.setState({ articles, loading: false });
    }, 500);
  }

  render() {
    const { articles, loading } = this.state;
    if(loading) return <h1>Loading...</h1>;
    return <ArticleList articles={articles} />;
  }
}
