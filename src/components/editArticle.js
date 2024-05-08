import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EditArticleForm = () => {
  const [articles, setArticles] = useState([]);
  const [selectedArticleId, setSelectedArticleId] = useState('');
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get('http://localhost:3001/articles');
        setArticles(response.data);
      } catch (error) {
        console.error('Error fetching articles:', error);
      }
    };
    fetchArticles();
  }, []);

  useEffect(() => {
    if (!selectedArticleId) {
      setTitle('');
      setBody('');
      return;
    }

    const fetchArticle = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/articles/${selectedArticleId}`);
        setTitle(response.data.title);
        setBody(response.data.body);
      } catch (error) {
        console.error('Error fetching article:', error);
      }
    };

    fetchArticle();
  }, [selectedArticleId]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    if (!selectedArticleId) {
      console.error('No article selected');
      return;
    }

    try {
      await axios.put(`http://localhost:3001/articles/${selectedArticleId}`, { title, body });
      console.log('Article updated successfully');
    } catch (error) {
      console.error('Error updating article:', error);
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label className="form-label">Select Article:</label>
        <select className="form-input" value={selectedArticleId} onChange={e => setSelectedArticleId(e.target.value)} required>
          <option value="">Please select an article</option>
          {articles.map(article => (
            <option key={article.id} value={article.id}>
              {article.id}: {article.title}
            </option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label className="form-label">Title:</label>
        <input className="form-input" value={title} onChange={e => setTitle(e.target.value)} required />
      </div>
      <div className="form-group">
        <label className="form-label">Body:</label>
        <textarea className="form-input" value={body} onChange={e => setBody(e.target.value)} required />
      </div>
      <button className="form-button" type="submit">Update Article</button>
    </form>
  );
};

export default EditArticleForm;