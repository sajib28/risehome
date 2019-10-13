import React, { Component } from 'react';
import src1 from '../../assets/intechnic.mp4';
import poster from '../../assets/intechnic.jpg';
import Nav from '../commonTools/Nav';
class Home extends Component {
    render() {
        return (
            <div className="home">
                <Nav />
                <section className="intro">
                    <div className="background-cover">
                        <video autoPlay muted loop playsInline preload="none" poster={poster}>
                            <source src={src1} type="video/mp4" />
                        </video>
                    </div>
                    <div className="container">
                        <div className="inroText">
                            <h1>Sajib Kumar Biswas</h1>
                            <p>I am a web developer</p>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
export default Home;