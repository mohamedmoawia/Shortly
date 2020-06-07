import React from 'react';
import './App.css';
import axios from 'axios';
import Navbar from './Navbar';
import FirstView from './Firstview';
import Footer from './Footer';
import Cards from './Cards';

class App extends React.Component {
    state = {
        input: '',
        error: false,
        links: [],
    }

    handleChange = (e) => {
        this.setState({
            input: e.target.value
        })
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        if (this.state.input !== '') {
            const response = await axios.post("https://rel.ink/api/links/", { url: this.state.input });
            this.setState({ links: this.state.links.concat(response.data), error: false });
        } else { this.setState({ error: true }) }

    }
    handleClick = () => {


    }
    renderdLinks = () => {
        return this.state.links.map(link => {
            let copy = `https://rel.ink/${link.hashid}`;
            return (
                <div id='link-box' className='mb-2'>
                    <div className='d-flex justify-content-between'>
                        <p>{link.url}</p>
                        <div className='d-flex align-items-center'>
                            <p style={{ color: 'hsl(180, 66%, 49%)' }}>{`https://rel.ink/${link.hashid}`}</p>
                            <button className='btn btn-info ml-3' onClick={() => { navigator.clipboard.writeText(copy); }}>
                                Copy
                            </button>
                        </div>
                    </div>
                </div>
            )
        })

    }
    render() {

        return (
            <div style={{ width: '100%', overflow: 'hidden' }}>
                <Navbar />
                <FirstView />

                <div className='text-center' style={{ backgroundColor: 'hsl(0, 0%, 91%)', paddingBottom: '180px', marginTop: '100px' }}>
                    <div className='jumbotron text-center'>
                        <form onSubmit={this.handleSubmit}>
                            <input type="text" className='form-control rounded' placeholder="Shorten a link here.. " value={this.state.input} onChange={this.handleChange} ></input>
                            <button type='submit' className='btn btn-info ml-3'>Shorten It!</button>
                            <p style={{ color: 'red', textAlign: 'start', marginLeft: '60px' }}>{this.state.error ? 'please add a link' : ''}</p>
                        </form>
                    </div>
                    <div className="mb-4" style={{ position: 'relative', bottom: '65px' }}>
                        {this.renderdLinks()}
                    </div>
                    <div>
                        <h1 className='font-weight-bolder '>Advanced Statistics</h1>
                        <p className='text-muted'>Track how your links are performing across the web with our<br />
                        advanced statistics dashboard.</p>
                    </div>

                    <Cards />

                </div>
                <div id='boost' className='d-flex align-items-center flex-column'>
                    <h2 className='font-weight-bolder'>Boost your links today</h2>
                    <button className='btn btn-info m-4 rounded-lg'> Get Started</button>
                </div>

                <Footer />
                
            </div>
        )

    }
}

export default App