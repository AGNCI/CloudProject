import React, { useState } from 'react';
import ArticleList from './components/Article';
import AddArticleForm from './components/addArticle';
import EditArticleForm from './components/editArticle';
import FetchArticleList from './components/fetchArticleList';
import './styles/ReactPage.css';
import Header from './components/header';

const App = () => {
  const [ setArticles] = useState([]);
  const [selectedArticleId, setSelectedArticleId] = useState(null);
  const articles = FetchArticleList();

  const handleSelectArticle = (articleId) => {
    setSelectedArticleId(articleId);
  };

  const handleDeleteArticle = (articleId) => {
    setArticles(articles.filter(article => article.id !== articleId));

  };
  
  
  return (
    <div className="container">
      <Header />
      <div className='form-container'>
        <AddArticleForm />
        <EditArticleForm articleId={selectedArticleId} />
      </div>
      <div className="article-list">
        <ArticleList articles={articles} onSelectArticle={handleSelectArticle} onDelete={handleDeleteArticle} />
      </div>
      </div>
    
  );
};

export default App;