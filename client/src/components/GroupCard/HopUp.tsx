import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

interface BackgroundProps {
    setToggleHopUp: React.Dispatch<React.SetStateAction<boolean>>;
}

const HopUp: React.FC<BackgroundProps> = ({ setToggleHopUp }) => {
    const [data, setData] = useState({
        id: uuidv4(),
        title: '',
        description: '',
        date: '',
    });

    const handleClose = () => {
        setToggleHopUp(false);
    };

    const onChangeInput = (e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.currentTarget;
        setData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(data);
        setToggleHopUp(false);
        // handle form submission logic
    };

    return (
        <div className='fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50'>
            <div className='relative bg-white w-96 p-6 rounded-lg shadow-lg'>
                <div className='bg-gray-700 h-12 flex justify-end items-center text-white px-4 rounded-t-lg'>
                    <button onClick={handleClose} className='text-xl font-bold'>X</button>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className='mt-4'>
                        <input
                            name='title'
                            value={data.title}
                            onChange={onChangeInput}
                            placeholder='Title'
                            className='w-full p-2 mb-4 border rounded focus:ring-0'
                        />
                        <input
                            name='date'
                            type='date'
                            value={data.date}
                            onChange={onChangeInput}
                            placeholder='Date'
                            className='w-full p-2 mb-4 border rounded focus:ring-0'
                        />
                        <textarea
                            name='description'
                            value={data.description}
                            onChange={onChangeInput}
                            placeholder='Description'
                            className='w-full p-2 mb-4 border rounded h-32 focus:ring-0'
                        />
                        <button
                            type='submit'
                            className='w-full bg-gray-700 text-white p-2 rounded'
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default HopUp;
