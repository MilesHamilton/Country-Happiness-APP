import React from 'react';

export const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h1>loading...</h1>;
  }

  return <div></div>;
};
