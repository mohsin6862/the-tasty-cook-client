import React, { useEffect, useState } from 'react';
import { Button, Card, Container } from 'react-bootstrap';


const RightNav = () => {

    const [apply, setApply] = useState()

    useEffect(() => {
        fetch('https://chef-recipe-hunter-server-site-mohsin6862.vercel.app/apply')
            .then(res => res.json())
            .then(data => setApply(data))
    }, [])

    return (
        <div>
            <h4 className='text-center text-warning my-3'>Apply As Chef</h4>
          
            {
            apply?.map(job=>   <Card key={job._id} className='text-center mb-2' style={{ width: '16rem' }}>
            <Card.Img variant="top" src={job.image} />
            <Card.Body>
              <Card.Title>{job.jobName}</Card.Title>
              <Card.Title className='text-start'>Requrements:</Card.Title>

              <Card.Text className='text-start'>
                <p className=''>1. {job.req1} </p>
                <p className=''>2. {job.req2}</p>
                <p className=''>3. {job.req3}</p>
                <p className=''>4. {job.experience} experience</p>
              </Card.Text>
              <Button variant="primary">APPLY NOW</Button>
            </Card.Body>
          </Card>)
          }

        </div>
    );
};

export default RightNav;