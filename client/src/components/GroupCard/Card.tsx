import {useState} from 'react';


interface CardProps {
    setToggleHopUp: React.Dispatch<React.SetStateAction<boolean>>;
}

const Card: React.FC<CardProps> = ({ setToggleHopUp }) => {
    return (
        <div
            className='flex mx-[2rem] mt-[2rem] gap-[6rem]'
            onClick={() => setToggleHopUp(prev => !prev)}
        >
            <div className='bg-white h-[20rem] w-[20rem] hover:text-[4rem] duration-300 text-[1.5rem] flex justify-center items-center'>
                +
            </div>
        </div>
    );
};

export default Card;
