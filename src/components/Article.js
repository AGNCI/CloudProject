import React from 'react';
import axios from 'axios';

const ArticleList = ({ articles, onSelectArticle, onDelete }) => {
  const handleArticleClick = (articleId) => {
    onSelectArticle(articleId);
  }

  const handleDelete = async (articleId) => {
    try {
      await axios.delete(`http://localhost:3001/articles/${articleId}`);
      onDelete(articleId);
    } catch (error) {
      console.error('Error deleting article:', error);
    }
  };

  return (
    <div>
      <h2>Articles</h2>
      <div className="article-list">
        {articles.map(article => (
          <div key={article.id} className="article" onClick={() => handleArticleClick(article.id)}>
            <small>{article.id}</small>
            <h3>{article.title}</h3>
            <p>{article.body}</p>
            <button onClick={(e) => handleDelete(article.id, e)}>Delete</button> 
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArticleList;