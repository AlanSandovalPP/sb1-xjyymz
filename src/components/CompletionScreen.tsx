import React from 'react';
import { Gift, ArrowRight } from 'lucide-react';

const CompletionScreen: React.FC = () => {
  const handleNavigate = () => {
    window.location.href = 'https://sb1e2pcxj-k1vd--5173--34c588ed.local-credentialless.webcontainer.io/';
  };

  return (
    <div className="text-center space-y-6">
      <div className="flex justify-center">
        <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center">
          <Gift className="w-10 h-10 text-purple-600" />
        </div>
      </div>
      
      <h2 className="text-2xl font-bold text-gray-800">
        ¡Gracias por completar la encuesta!
      </h2>
      
      <div className="py-6">
        <div className="bg-gradient-to-r from-purple-50 to-orange-50 rounded-xl p-6">
          <p className="text-lg text-gray-700 mb-2">
            Recibe <span className="font-bold text-purple-600">50 créditos</span>
          </p>
          <p className="text-gray-600">
            por registrarte ahora
          </p>
        </div>
      </div>

      <button 
        onClick={handleNavigate}
        className="w-full bg-gradient-to-r from-purple-600 to-orange-500 text-white py-4 px-6 rounded-xl font-semibold hover:opacity-90 transition-opacity flex items-center justify-center group">
        Regístrate y reclama tus créditos
        <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
      </button>
    </div>
  );
};

export default CompletionScreen;