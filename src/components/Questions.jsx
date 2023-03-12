import React, { useEffect, useState } from 'react';

const Questions = ({ baseURL, questions, setQuestions }) => {
  return (
    <div className='questions-main-container'>
      <h1>Questions</h1>
      {questions?.map((q) => {
        return <section>{q.question}</section>;
      })}
    </div>
  );
};

export default Questions;
