import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Terrms = () => {
    return (
        <Container>
        <h1 className='text-center'>Trems and Conditions</h1>
        <p>You must have to accepted ours all terms and condition other wise you can not be registerd </p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste suscipit, facilis temporibus repellat distinctio tempore! Quia ratione eligendi, consequatur quas ea incidunt exercitationem inventore. Nihil vel vitae nulla est rerum id pariatur quos, neque similique hic aperiam, expedita, dolor ducimus provident magni saepe excepturi accusantium officia cumque labore dolorem! Est!       </p>
        <p>GO back to <Link to='/register'>register</Link></p>

    </Container>
    );
};

export default Terrms;