import React, { useState } from 'react';
import { Gift, ArrowRight, Loader } from 'lucide-react';
import { motion } from 'framer-motion';

interface CompletionScreenProps {
  credits?: number;
  redirectUrl?: string;
}

const CompletionScreen: React.FC<CompletionScreenProps> = ({
  credits = 50,
  redirectUrl = import.meta.env.VITE_REDIRECT_URL || 'https://sb1-e2pcxj.vercel.app'
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleNavigate = async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      const urlWithCredits = `${redirectUrl}?credits=${credits}`;
      console.log('Intentando redirigir a:', urlWithCredits);
      
      if (!redirectUrl) {
        throw new Error('URL de redirección no configurada');
      }
      
      window.location.href = urlWithCredits;
    } catch (err) {
      console.error('Error durante la redirección:', err);
      setError('Hubo un error al redirigir. Por favor, intenta de nuevo.');
      setIsLoading(false);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center space-y-6"
    >
      <p className="text-sm text-gray-500 mt-2">
        URL de redirección: {redirectUrl}
      </p>

      <div className="flex justify-center">
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center"
        >
          <Gift className="w-10 h-10 text-purple-600" />
        </motion.div>
      </div>
      
      <h2 className="text-2xl font-bold text-gray-800">
        ¡Gracias por completar la encuesta!
      </h2>
      
      <div className="py-6">
        <div className="bg-gradient-to-r from-purple-50 to-orange-50 rounded-xl p-6">
          <p className="text-lg text-gray-700 mb-2">
            Recibe <span className="font-bold text-purple-600">{credits} créditos</span>
          </p>
          <p className="text-gray-600">
            por registrarte ahora
          </p>
        </div>
      </div>

      {error && (
        <p className="text-red-500 text-sm">{error}</p>
      )}

      <button 
        onClick={handleNavigate}
        disabled={isLoading}
        className="w-full bg-gradient-to-r from-purple-600 to-orange-500 text-white py-4 px-6 rounded-xl font-semibold hover:opacity-90 transition-opacity flex items-center justify-center group disabled:opacity-70"
      >
        {isLoading ? (
          <Loader className="w-5 h-5 animate-spin" />
        ) : (
          <>
            Regístrate y reclama tus créditos
            <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
          </>
        )}
      </button>
    </motion.div>
  );
};

export default CompletionScreen;
export default CompletionScreen;
