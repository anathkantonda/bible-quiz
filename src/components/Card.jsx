import React from 'react'

const Card = ({ question, choice, answer, handleClick, index, isDisabled }) => {
    return (
        <div className="card p-6 border border-gray-300 rounded shadow-md bg-white mb-4">
            <h3 className="text-2xl mb-4">{question}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {choice.map((option, i) => (
                    <button
                    key={i}
                    className="bg-blue-200 py-2 px-4 rounded hover:bg-blue-300 disabled:opacity-50"
                    onClick={() => handleClick(option, answer, index)}
                    disabled={isDisabled}
                    >
                    {option}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Card