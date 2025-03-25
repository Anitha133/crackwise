import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Dashboard = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const res = await axios.get('http://192.168.203.16:5000/questions/all');
        setQuestions(res.data.questions);
      } catch (err) {
        console.error('Error fetching questions', err);
      }
    };

    fetchQuestions();
  }, []);

  return (
    <div>
      <h2>Welcome to the Dashboard</h2>
      {questions.map((q, index) => (
        <div key={q.id} style={{ marginBottom: '20px', padding: '10px', border: '1px solid #ccc' }}>
          <Link to={`/question/${q.id}`} style={{ textDecoration: 'none', color: 'blue', fontSize: '18px' }}>
            {index + 1}. {q.title}
          </Link>
          <div style={{ marginTop: '8px' }}>
            <strong>Test Cases:</strong>
            <ul>
              {q.test_cases.map((tc, i) => (
                <li key={i}>
                  <strong>Input:</strong> {tc.input} | <strong>Expected Output:</strong> {tc.expected_output}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
