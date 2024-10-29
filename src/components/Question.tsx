import React from 'react';

interface Option {
  value: string;
  label: string;
}

interface QuestionProps {
  question: {
    id: string;
    title: string;
    options: Option[];
  };
  onAnswer: (questionId: string, answer: string) => void;
  selectedAnswer: string;
}

const Question: React.FC<QuestionProps> = ({ question, onAnswer, selectedAnswer }) => {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        {question.title}
      </h2>
      <div className="space-y-3">
        {question.options.map((option) => (
          <button
            key={option.value}
            onClick={() => onAnswer(question.id, option.value)}
            className={`w-full p-4 text-left rounded-xl transition-all duration-200 ${
              selectedAnswer === option.value
                ? 'bg-purple-100 border-2 border-purple-500 text-purple-700'
                : 'bg-gray-50 border-2 border-gray-100 text-gray-700 hover:bg-purple-50 hover:border-purple-200'
            }`}
          >
            <div className="flex items-center">
              <div className={`w-5 h-5 rounded-full border-2 mr-3 flex items-center justify-center ${
                selectedAnswer === option.value
                  ? 'border-purple-500 bg-purple-500'
                  : 'border-gray-300'
              }`}>
                {selectedAnswer === option.value && (
                  <div className="w-2 h-2 rounded-full bg-white" />
                )}
              </div>
              <span className="font-medium">{option.label}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Question;