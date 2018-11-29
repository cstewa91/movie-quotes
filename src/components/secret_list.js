import React from 'react';
import auth from '../hoc/auth';

const SecretList = props => {
   return (
      <div>
         <h1 className='center'>Secret Operative List</h1>
         <ol>
            <li>Jim</li>
            <li>Jane</li>
            <li>Kevin</li>
            <li>Kathy</li>
         </ol>
      </div>
   );
}

export default auth(SecretList);