import React, { useEffect, useState } from 'react';

const Questions = ({ questions }) => {

  return (
    <div className='questions-main-container'>
      <h1>Questions</h1>
      {questions?.map((q) => {
        return (
          <section key={q.id}>
            <h4>{q.question}</h4>
            <p>Answers: {q.answers.length || 0}</p>
          </section>
        );
      })}
    </div>
  );
};

export default Questions;
