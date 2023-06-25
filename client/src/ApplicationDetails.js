import React, { useState } from 'react';

const ApplicationDetailsPage = () => {
  const [company, setCompany] = useState('');
  const [title, setTitle] = useState('');
  const [progress, setProgress] = useState(false);
  const [response, setResponse] = useState(false);
  const [deadline, setDeadline] = useState('');
  const [details, setDetails] = useState('');
  const [recruiterName, setRecruiterName] = useState('');
  const [recruiterPhone, setRecruiterPhone] = useState('');
  const [recruiterEmail, setRecruiterEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new job object with the form values
    const newJob = {
      company,
      title,
      progress: progress ? 'completed' : 'not started',
      response: response ? 'completed' : 'pending',
      deadline,
      details,
      recruiterName,
      recruiterPhone,
      recruiterEmail
    };

    // Perform an API request to update the database with the new job details
    // You will need to implement the API call to your backend server

    // Reset the form fields
    setCompany('');
    setTitle('');
    setProgress(false);
    setResponse(false);
    setDeadline('');
    setDetails('');
    setRecruiterName('');
    setRecruiterPhone('');
    setRecruiterEmail('');
  };

  return (
    <div>
      <h1>Application Details</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="company">Company:</label>
          <input
            type="text"
            id="company"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="progress">Progress:</label>
          <input
            type="checkbox"
            id="progress"
            checked={progress}
            onChange={(e) => setProgress(e.target.checked)}
          />
        </div>
        <div>
          <label htmlFor="response">Response:</label>
          <input
            type="checkbox"
            id="response"
            checked={response}
            onChange={(e) => setResponse(e.target.checked)}
          />
        </div>
        <div>
          <label htmlFor="deadline">Deadline:</label>
          <input
            type="date"
            id="deadline"
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="details">Details:</label>
          <textarea
            id="details"
            value={details}
            onChange={(e) => setDetails(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="recruiterName">Recruiter Name:</label>
          <input
            type="text"
            id="recruiterName"
            value={recruiterName}
            onChange={(e) => setRecruiterName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="recruiterPhone">Recruiter Phone:</label>
          <input
            type="text"
            id="recruiterPhone"
            value={recruiterPhone}
            onChange={(e) => setRecruiterPhone(e.target.value)}
          />
        </div>
    </form>
    </div>
    )};