import React, { useState } from 'react';
import { CircleUser, Gift, CreditCard, ShoppingBag } from 'lucide-react';
import SurveyProgress from './components/SurveyProgress';
import Question from './components/Question';
import CompletionScreen from './components/CompletionScreen';

function App() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({
    motivation: '',
    frequency: '',
    coupons: '',
    promotions: ''
  });

  const questions = [
    {
      id: 'motivation',
      title: '¿Qué te motiva a usar iUtópica?',
      options: [
        { value: 'recharge', label: 'Recargar tiempo aire' },
        { value: 'coupons', label: 'Canjear cupones' },
        { value: 'both', label: 'Ambos' }
      ]
    },
    {
      id: 'frequency',
      title: '¿Con qué frecuencia recargas tu celular?',
      options: [
        { value: 'monthly', label: 'Una vez al mes' },
        { value: 'biweekly', label: 'Cada dos semanas' },
        { value: 'weekly', label: 'Cada semana' },
        { value: 'asNeeded', label: 'Cuando se me acaba el saldo' }
      ]
    },
    {
      id: 'coupons',
      title: '¿Qué tipo de cupones te interesan más?',
      options: [
        { value: 'restaurants', label: 'Restaurantes' },
        { value: 'cinema', label: 'Cines' },
        { value: 'online', label: 'Compras en línea' },
        { value: 'supermarket', label: 'Supermercado' }
      ]
    },
    {
      id: 'promotions',
      title: '¿Qué tipo de promociones te gustaría recibir?',
      options: [
        { value: 'direct', label: 'Descuentos directos' },
        { value: '2x1', label: '2x1' },
        { value: 'freeShipping', label: 'Envío gratis' }
      ]
    }
  ];

  const handleAnswer = (questionId: string, answer: string) => {
    setAnswers(prev => ({ ...prev, [questionId]: answer }));
    if (currentStep < questions.length) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const gradientStyle = {
    background: 'linear-gradient(135deg, #F6E8FF 0%, #FFF3E6 100%)'
  };

  return (
    <div className="min-h-screen" style={gradientStyle}>
      <div className="max-w-2xl mx-auto px-4 py-8">
        {/* Logo and Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center items-center mb-4">
            <CircleUser className="w-12 h-12 text-purple-600" />
            <span className="ml-2 text-3xl font-bold bg-gradient-to-r from-purple-600 to-orange-500 bg-clip-text text-transparent">
              iUtópica
            </span>
          </div>
        </div>

        {/* Progress Bar */}
        <SurveyProgress 
          currentStep={currentStep} 
          totalSteps={questions.length} 
        />

        {/* Main Content */}
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 mt-6">
          {currentStep < questions.length ? (
            <>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 text-center">
                ¡Queremos conocerte mejor!
              </h1>
              <p className="text-gray-600 text-center mb-8">
                Completa esta breve encuesta y recibe 50 créditos que puedes usar en iUtópica.
              </p>
              <Question
                question={questions[currentStep]}
                onAnswer={handleAnswer}
                selectedAnswer={answers[questions[currentStep].id as keyof typeof answers]}
              />
            </>
          ) : (
            <CompletionScreen />
          )}
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-sm text-gray-500">
          <a href="#" className="hover:text-purple-600 transition-colors">
            Términos y Condiciones
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;