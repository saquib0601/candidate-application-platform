import React, { useEffect, useState } from 'react';
import axios from 'axios';
import JobCard from './JobCard';
import { useDispatch, useSelector } from 'react-redux';
import { setJobs } from '../redux/actions/actions';

const JobList = () => {
  const [page, setPage] = useState(1);
  // const [jobs, setJobs] = useState();

  const dispatch = useDispatch();
  const jobs = useSelector(state => state.jobs);
  console.log(jobs)

  useEffect(() => {
    const fetchData = async () => {
    try {
        const myHeaders = {
          "Content-Type": "application/json"
        };
    
        const body = JSON.stringify({
          "limit": 10,
          "offset": 0
        });
    
        const response = await axios.post("https://api.weekday.technology/adhoc/getSampleJdJSON", body, {
          headers: myHeaders
        });
    
        console.log(response.data);
        dispatch(setJobs(response.data.jdList)); // Dispatch action to set jobs
        // setJobs(response.data.jdList)
        // handle response data as needed
    
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();

 },[dispatch,page]);

  const handleScroll = () => {
    // Check if user has scrolled to the bottom of the page
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      setPage(prevPage => prevPage + 1);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="job-list">
      {jobs?.map(job => (
        <JobCard key={job.jdUid} job={job} />
      ))}
    </div>
  );
}

export default JobList;
