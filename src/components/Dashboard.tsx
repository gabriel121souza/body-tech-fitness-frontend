import React from 'react';
import { Link } from 'react-router-dom';
import logo from './../img/logo.jpeg'; // Substitua pelo caminho correto da sua logo
import backgroundImage from './../img/image-background.jpeg'; // Substitua pelo caminho da sua imagem de fundo

const Dashboard: React.FC = () => {
    return (
        <div
            className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <img src={logo} alt="Logo" className="h-48 mb-2 rounded-full" /> {/* Arredondando a logo */}
            <h1 className="text-4xl font-bold mb-6 text-white mt-2 text-center">Body Tech Fitness</h1> {/* Título centralizado */}
            <div className="grid grid-cols-1 gap-6 px-4 md:grid-cols-2 lg:grid-cols-4">
                <Link to="/register" className="bg-white shadow-lg rounded-lg p-6 text-center transition-all duration-300 transform hover:scale-105 hover:border-green-500 hover:border-2 hover:shadow-2xl">
                    <h2 className="text-2xl font-bold mb-2">Registrar</h2>
                    <p className="text-gray-600">Preencha suas informações para registrar-se.</p>
                </Link>
                <Link to="/measurements" className="bg-white shadow-lg rounded-lg p-6 text-center transition-all duration-300 transform hover:scale-105 hover:border-green-500 hover:border-2 hover:shadow-2xl">
                    <h2 className="text-2xl font-bold mb-2">Medidas</h2>
                    <p className="text-gray-600">Insira suas medidas corporais.</p>
                </Link>
                <Link to="/train-register" className="bg-white shadow-lg rounded-lg p-6 text-center transition-all duration-300 transform hover:scale-105 hover:border-green-500 hover:border-2 hover:shadow-2xl">
                    <h2 className="text-2xl font-bold mb-2">Registrar Treino</h2>
                    <p className="text-gray-600">Registre seu treino diário.</p>
                </Link>
                <Link to="/train-tracking" className="bg-white shadow-lg rounded-lg p-6 text-center transition-all duration-300 transform hover:scale-105 hover:border-green-500 hover:border-2 hover:shadow-2xl">
                    <h2 className="text-2xl font-bold mb-2">Acompanhar Treino</h2>
                    <p className="text-gray-600">Monitore seu progresso no treino.</p>
                </Link>
            </div>
        </div>
    );
};

export default Dashboard;
