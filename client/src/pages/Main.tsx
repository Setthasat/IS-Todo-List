import { useState } from 'react';
import Background from '../components/Background';
import HopUp from '../components/GroupCard/HopUp';

function Main() {

    const [toggleHopUp, setToggleHopUp] = useState(false);

    return (
        <div className={''}>
            <Background setToggleHopUp={setToggleHopUp} />
            {toggleHopUp && (
                <div className="absolute inset-0 bg-black/50 z-10 flex justify-center items-center">
                    <HopUp setToggleHopUp={setToggleHopUp} />
                </div>
            )}
        </div>
    );
}

export default Main;
