import React from 'react';
import ReactDOM from 'react-dom';

/* Add the Profile function here */

// const name = "Jessica";
// const bio = "I love coding & design";

function Profile(props) {
     return <main id="content" role="main" class="base">
             <h1>{props.name}'s React Page</h1>
               <p>{props.bio}</p>
             </main>
    }
    // else {
    //   return <main id="content" role="main" class="base">
    //     <h1>Just a React Page</h1>
    //     <p>Nothing to see here!</p>
    //   </main>  
    // }
//  };

export default Profile