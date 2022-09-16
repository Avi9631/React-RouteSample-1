import React, { useState } from 'react'

export default function Form() {

    const [tn, setTn] = useState('');

    
    return (
        <div style={{marginTop: '50px', textAlign: 'center',}}>
            
            <label>Enter The TN : </label>
            <input placeholder='Enter the Tn' value={tn} onChange={(e) => { setTn(e.target.value) }} />
            <button type='button' onClick={()=> window.location = '/result/'+tn}>Submit</button>

        </div>
    )
}
