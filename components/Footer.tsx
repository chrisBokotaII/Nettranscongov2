import React from 'react';
import { Mail, MessageCircle, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-8 mt-auto border-t border-slate-800">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="text-center md:text-left space-y-1">
            <h4 className="text-white font-bold text-lg tracking-tight">NetTransCongo</h4>
            <p className="text-xs text-slate-500 max-w-xs">
              Plateforme d'apprentissage CompTIA A+ et Network+ adaptée au contexte de la RDC.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-3 text-sm font-medium">
            <a 
              href="mailto:christianinyekaka@gmail.com" 
              className="flex items-center gap-2 hover:text-white transition-colors group"
            >
              <Mail size={16} className="text-slate-500 group-hover:text-blue-400 transition-colors" />
              christianinyekaka@gmail.com
            </a>
            
            <a 
              href="https://wa.me/256708533447" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-white transition-colors group"
            >
              <MessageCircle size={16} className="text-slate-500 group-hover:text-green-400 transition-colors" />
              WhatsApp: +256 708 533 447
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-slate-800 text-center text-xs text-slate-600 flex items-center justify-center gap-1">
          Développé avec <Heart size={12} className="text-red-600 fill-red-600" /> par Christian Inyekaka.
        </div>
      </div>
    </footer>
  );
};