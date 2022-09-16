import React from 'react'
import {useParams} from 'react-router-dom';

function Result() {
const params = useParams();
const id = params.id;

React.useEffect(() => {
  // write api call here when the component mounts
}, []);


  return (
    <div style={{marginTop: '50px', textAlign: 'center',}}>The Entered value is : {id} <br/> <a href="/">Go Back</a></div>
  )
}



export default Result
