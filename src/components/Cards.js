import React from 'react';

const Cards = () => {
    return (

        <div id='cards-container' className='d-flex justify-content-around mr-auto ml-auto' style={{ marginTop: '100px', width: '70%' }}>

            <div className='bg-white rounded' style={{ height: '200px', width: '290px' }}>
                <div className='rounded-circle p-2 ml-4' style={{ position: 'relative', bottom: '29px', backgroundColor: 'hsl(257, 27%, 26%)', height: '60px', width: '60px' }}>
                    <img className="mt-1" src="icon-brand-recognition.svg" height='30px' width='30px' />
                </div>
                <div style={{ textAlign: 'start', fontSize: '12px', padding: '10px' }}>
                    <h5 className="font-weight-bolder">Brand Recognition</h5>

                    <p className="text-muted"> Boost your brand recognition with each click. Generic links don’t
                mean a thing. Branded links help instil confidence in your content.</p>
                </div>
            </div>


            <div className='bg-white rounded' style={{ height: '200px', width: '290px', position: 'relative', top: '30px' }}>
                <div className='rounded-circle p-2 ml-4' style={{ position: 'relative', bottom: '29px', backgroundColor: 'hsl(257, 27%, 26%)', height: '60px', width: '60px' }}>
                    <img className="mt-1" src="icon-detailed-records.svg" height='30px' width='30px' />
                </div>
                <div style={{ textAlign: 'start', fontSize: '12px', padding: '10px' }}>
                    <h5 className="font-weight-bolder">Detailed Records</h5>

                    <p className="text-muted"> Gain insights into who is clicking your links. Knowing when and where
                    people engage with your content helps inform better decisions.
              </p>
                </div>
            </div>

            <div className='bg-white rounded' style={{ height: '200px', width: '290px', position: 'relative', top: '60px' }}>
                <div className='rounded-circle p-2 ml-4' style={{ position: 'relative', bottom: '29px', backgroundColor: 'hsl(257, 27%, 26%)', height: '60px', width: '60px' }}>
                    <img className="mt-1" src="icon-fully-customizable.svg" height='30px' width='30px' />
                </div>
                <div style={{ textAlign: 'start', fontSize: '12px', padding: '10px' }}>
                    <h5 className="font-weight-bolder">Fully Customizable</h5>

                    <p className="text-muted"> Improve brand awareness and content discoverability through customizable
                    links, supercharging audience engagement.
                </p>
                </div>
            </div>
        </div>

    );
}

export default Cards