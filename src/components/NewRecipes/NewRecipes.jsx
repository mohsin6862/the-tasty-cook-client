import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NewRecipes = () => {
  const [newRecipe, setNewRecipe] = useState();

  useEffect(() => {
    fetch('https://chef-recipe-hunter-server-site-mohsin6862.vercel.app/newrecipes')
      .then(res =>res.json())
      .then(data => setNewRecipe(data))
  }, [])

  return (
    <div className="row mt-5">
      {
        newRecipe?.map(rs =>  
          <div key={rs.id} className='col-6'>
            <Card className='text-center mb-2' style={{ width: '100%' }}>
              <Card.Img style={{width:'400px',height:'300px'}} variant="top" src={rs.image} />
              <Card.Body>
                <Card.Title>{rs.name}</Card.Title>
                
                <Card.Text className='text-start'>
                  {rs.des}
                </Card.Text>
                <Link to={rs.youtube_link}><Button variant="danger">Watch On Youtube</Button></Link>
              </Card.Body>
            </Card>
          </div>
        )
      }
    </div>
  );
};

export default NewRecipes;

