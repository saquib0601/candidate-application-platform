import React from 'react'

const JobCard = ({ job }) => {
    return (
      <div className="job-card">
        <h2>{job.companyName}</h2>
        <p>Job Role: {job.jobRole}</p>
        <p>Location: {job.location}</p>
        <p>Experience: {job.minExp} - {job.maxExp} years</p>
        <p>Salary: {job.minJdSalary ? `$${job.minJdSalary} - $${job.maxJdSalary}` : `Up to $${job.maxJdSalary}`}</p>
        <p><a href={job.jdLink}>View Job Details</a></p>
        <img src={job.logoUrl} alt={job.companyName} />
        <button>Apply</button>
      </div>
    );
  }
export default JobCard;