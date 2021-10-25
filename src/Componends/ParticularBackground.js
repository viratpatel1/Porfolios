import React from 'react';
import Particles from 'react-particles-js';
import Particularconfig from '../config/particular-config';

const ParticularBackground = () =>
{
    return (
        <div style={{ backgroundColor: "gray" }} >
            <Particles params={Particularconfig}></Particles>
        </div>
    )
}

export default ParticularBackground
