import React, { useState } from 'react';
import axios from 'axios';
import '../styles/ReactPage.css'

const AddArticleForm = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [published, setPublished] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!title.trim() || !body.trim()) {
      alert('Title and body are required.');
      return;
    }

    console.log('Submit button clicked');
    console.log('Title:', title); 
    console.log('Body:', body);
    try {
      const response = await axios.post('http://localhost:3001/articles', { title, body, published });
      setTitle('');
      setBody('');
      console.log('Article added:', response.data);
    } catch (error) {
      console.error('Error adding article:', error);
      console.log('Error response:', error.response);
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label className="form-label">
          Title:
          <input className="form-input" type="text" value={title} onChange={(e) => setTitle(e.target.value)} required maxLength="50"/>
        </label>
      </div>
      <div className="form-group">
        <label className="form-label">
          Body:
          <textarea className="form-input" value={body} onChange={(e) => setBody(e.target.value)} required maxLength="250"/>
        </label>
      </div>
      <button className="form-button" type="submit">Add Article</button>
    </form>
  );
};

export default AddArticleForm;