import { useState } from 'react'

const Card = ({ question, choice, answer, handleClick}) => {
    const [selectedOption, setSelectedOption] = useState(null);

    const handleOptionClick = (option) => {
        if (selectedOption === null) {
        setSelectedOption(option);  // Track which one was clicked
        handleClick(option, answer);
        }
    };

    return (
        <div className="p-6 bg-white shadow-md rounded-lg max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold mb-4">{question}</h3>
            <div className="flex flex-col gap-3">
                {choice.map((option, index) => (
                <button
                    key={index}
                    onClick={() => handleOptionClick(option)}
                    className={`py-2 px-4 rounded border text-left 
                    ${
                        selectedOption === option
                        ? 'bg-blue-200 border-blue-500'   // Selected style
                        : 'hover:bg-blue-100 border-gray-300'
                    }`}
                >
                    {option}
                </button>
                ))}
            </div>
        </div>
    );
};

export default Card