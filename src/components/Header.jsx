import { FaBeer } from 'react-icons/fa';
import { LiaSmokingSolid } from 'react-icons/lia';

const header = ()=>{
    return (
        <header>
            Mehdi <FaBeer style={{color: 'blue', fontSize: '30px' , backgroundColor: 'red' }}/> 
            <LiaSmokingSolid style={{color: 'red',  fontSize: '30px' , backgroundColor: 'blue' }}/>
        </header>
    );
}

export default header;