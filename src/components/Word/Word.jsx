import React from 'react';
import './Word.scss';

const Word = ({ word }) => {
    return (
        <div>
            <h1 className="text-center app-game__main-word">{ word.eng }</h1>
            <h5 className="text-center mb-4 app-game__secondary-word">{ word.spa }</h5>
        </div>
    );
}
 
export default Word;