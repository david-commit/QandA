import { NavLink } from 'react-router-dom';

const Questions = ({ questions }) => {
  return (
    <div className='questions-main-container'>
      <div>
        <h1>Questions</h1>
        <input type='search' placeholder='Search' />
      </div>
      {questions?.map((q) => {
        return (
          <section key={q.id}>
            <NavLink to={`/questions/${q.id}`}>
              <h4>{q.question}</h4>
            </NavLink>
            <p>Answers: {q.answers.length || 0}</p>
          </section>
        );
      })}
    </div>
  );
};

export default Questions;
