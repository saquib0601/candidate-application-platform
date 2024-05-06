import React, { useEffect, useState } from 'react';
import axios from 'axios';
import JobCard from './JobCard';
// import { useDispatch, useSelector } from 'react-redux';
// import { setJobs } from '../redux/actions/actions';

const JobList = () => {
  const [page, setPage] = useState(1);
  const [jobs, setJobs] = useState();
  const [searchTerm, setSearchTerm] = useState('');
  const [originalJobs, setOriginalJobs] = useState();

  // const dispatch = useDispatch();
  // const jobs = useSelector(state => state.jobs);
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
        // dispatch(setJobs(response.data.jdList)); // Dispatch action to set jobs
        setOriginalJobs(response.data.jdList)
        setJobs(response.data.jdList)
        // handle response data as needed
    
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();

//  },[dispatch,page]);
},[page]);

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

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
    // onSearchChange(e.target.value);

    let filteredJobs = [...jobs];
    console.log(filteredJobs)

    if (searchTerm) {
      filteredJobs = filteredJobs.filter(job =>
        job.companyName.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    console.log(searchTerm)
  };

  const onFilterChange = (filterType, value) => {
    // Create a copy of the original jobs array
    let filteredJobs = [...originalJobs];
    console.log(filteredJobs)
    console.log(filterType)
    console.log(value)
  
    // Filter the jobs based on the selected filter
    if (filterType === 'role') {
      filteredJobs = filteredJobs.filter(job => job.jobRole === value);
    } else if (filterType === 'experience') {
      filteredJobs = filteredJobs.filter(job => job.minExp == value);
    } else if (filterType === 'location') {
      filteredJobs = filteredJobs.filter(job => job.location === value);
    } else if (filterType === 'minBasePay') {
      filteredJobs = filteredJobs.filter(job => job.minJdSalary >= value);
    };
  
    // Filter by search term if present
    if (searchTerm) {
      filteredJobs = filteredJobs.filter(job =>
        job.companyName.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    console.log(searchTerm)
  
    // Set the filtered jobs to state
    setJobs(filteredJobs);
    console.log(filteredJobs)
  };

  const handleClearFilters = () => {
    setJobs(originalJobs); // Reset jobs to original list
    setSearchTerm(''); // Clear search term
  };
  
  return (
    <div>

<div className="filter-panel">
      <div>
        <label htmlFor="role">Roles:</label>
        <select id="role" onChange={(e) => onFilterChange('role', e.target.value)}>
          <option value="">All</option>
          <option value="frontend">Frontend</option>
          <option value="backend">Backend</option>
          <option value="ios">iOS</option>
          <option value="android">Android</option>
          <option value="tech lead">Tech Lead</option>
          {/* Add more options as needed */}
        </select>
      </div>
      <div>
        <label htmlFor="experience">Min Experience:</label>
        <select id="experience" onChange={(e) => onFilterChange('experience', e.target.value)}>
          <option value="">All</option>
          <option value="0">0 - 1 years</option>
          <option value="1">1 - 3 years</option>
          <option value="3">3 - 6 years</option>
          <option value="5">5+ years</option>
        </select>
      </div>
      <div>
        <label htmlFor="remote">Location:</label>
        <select id="remote" onChange={(e) => onFilterChange('location', e.target.value)}>
          <option value="">All</option>
          <option value="remote">Remote</option>
          <option value="chennai">Chennai</option>
          <option value="mumbai">Mumbai</option>
          <option value="bangalore">Bangalore</option>
          <option value="delhi ncr">Delhi NCR</option>
        </select>
      </div>
      <div>
        <label htmlFor="minBasePay">Minimum Base Pay:</label>
        <select id="minBasePay" onChange={(e) => onFilterChange('minBasePay', e.target.value)}>
          <option value="">All</option>
          <option value="0">$0 - $30k</option>
          <option value="30">$30k - $60k</option>
          <option value="60">$60k - $100k</option>
          <option value="100">$100k - $150k</option>
          <option value="150">$150k+</option>
        </select>
      </div>
      <div>
        <label htmlFor="search">Search Company Name:</label>
        <input
          type="text"
          id="search"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleInputChange}
        />
      </div>
      <button onClick={handleClearFilters}>Clear Filters</button>
    </div>

    <div className="job-list">
      {jobs?.map(job => (
        <JobCard key={job.jdUid} job={job} />
      ))}
    </div>
    </div>
  );
}

export default JobList;
