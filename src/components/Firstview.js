import React from 'react';

const FirstView = ()=>{
    return(<div style={{ overflow: 'hidden' }}>
    <div className='row'>
        <div className='col-sm ml-5' >
            <h1 className='font-weight-bolder ' style={{ fontSize: '4em', marginTop: '20%' }}>
                More than just shorter links
        </h1>
            <p className='text-muted'>
                Build your brand’s recognition and get detailed <br /> insights
        on how your links are performing.
        </p>
            <button className='btn btn-info rounded-lg pl-4 pr-4'>Get Started</button>
        </div>
        <div className='col-sm'>
            <img src="illustration-working.svg" />
        </div>
    </div>
</div>);
}
export default FirstView