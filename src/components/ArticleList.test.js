import React from 'react';
import { render, screen, } from '@testing-library/react';
import ArticleList from './ArticleList';
import axios from 'axios';

jest.mock('axios');

describe('ArticleList Integration Tests', () => {
  const articles = [
    { id: 1, title: 'Article 1', body: 'Body 1' },
    { id: 2, title: 'Article 2', body: 'Body 2' }
  ];

  beforeEach(() => {
    axios.get.mockResolvedValue({ data: articles });
  });

  it('renders a list of articles', async () => {
    render(<ArticleList />);
    const articleElements = await screen.findAllByRole('listitem');
    expect(articleElements).toHaveLength(articles.length);
  });

  it('renders article titles and bodies', async () => {
    render(<ArticleList />);
    await screen.findByText('Article 1 - Body 1');
    await screen.findByText('Article 2 - Body 2');
  });

describe('ArticleList', () => {
  it('renders a list of articles', () => {
    const articles = [
      { id: 1, title: 'Article 1', body: 'Body 1' },
      { id: 2, title: 'Article 2', body: 'Body 2' }
    ];

    render(<ArticleList articles={articles} />);

    expect(screen.getAllByRole('listitem')).toHaveLength(articles.length);
    
    articles.forEach(article => {
      expect(screen.getByText(article.title)).toBeInTheDocument();
      expect(screen.getByText(article.body)).toBeInTheDocument();
    });


        });
    })
})