import { useState, useEffect } from 'react';
import axios from 'axios';

const FetchArticleList = () => {
  const [articles, setArticles] = useState([]);

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

    const intervalId = setInterval(fetchArticles, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return articles;
};

export default FetchArticleList;