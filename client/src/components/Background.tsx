import React, {useState} from 'react';
import Sidebar from './Sidebar';
import Card from './GroupCard/Card';

interface BackgroundProps {
    setToggleHopUp: React.Dispatch<React.SetStateAction<boolean>>;
}

function Background({ setToggleHopUp }: BackgroundProps) {

    

    return (
        <div className='w-screen h-screen flex justify-center items-center'>
            <div className='bg-white/75 w-[90rem] h-[45rem] flex backdrop-blur-3xl'>
                <Sidebar />
                <div>
                    <Card setToggleHopUp={setToggleHopUp} />
                </div>
            </div>
        </div>
    );
}

export default Background;
