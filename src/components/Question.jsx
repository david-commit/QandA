import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Question = ({ baseURL }) => {
  const { q_id } = useParams();
  const [question, setQuestion] = useState([]);

  // Fetch specific Question
  useEffect(() => {
    fetch(`${baseURL}/questions/${q_id}`)
      .then((response) => response.json())
      .then((data) => setQuestion(data));
  }, []);

  return (
    <div className='question-main-container'>
      <h1>{question.question}</h1>
      <h3>Responses:</h3>
      <hr />
      {question.answers?.map((answer) => {
        return (
          <section>
            <p>{answer.answer}</p>
            <hr />
          </section>
        );
      })}
    </div>
  );
};

export default Question;
