// components/FormWithDiv.js
import React, { useEffect } from 'react';
import { User } from '../utils/User';

interface FormWithDivProps {
    user: User;
    handleChange: React.ChangeEventHandler<HTMLInputElement | HTMLSelectElement>;
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    openModalSenha: () => void;
    isRequired: boolean;
}

export default function FormWithDiv({user, handleChange, handleSubmit, openModalSenha, isRequired} : FormWithDivProps) {
    
  useEffect(() => {
    const form = document.querySelector('form');
    const specialDiv = document.getElementById('in-form');
    const placeholder = document.getElementById('special-placeholder');
    
    // Move the special div inside the form at the placeholder position
    if (form && specialDiv && placeholder) {
      placeholder.replaceWith(specialDiv);
      specialDiv.classList.remove('hidden');
    }
  }, []);
  
  return (
    <div className="h-full mr-0 mt-12 pl-16 border-l-2 border-black">
        <div>
            <p className="font-bold text-xl">Perfil</p>
            <p>Queremos saber um pouco mais sobre você :)</p>
        </div>
        <form onSubmit={handleSubmit} action="#" method="post" className="relative mt-8 ml-6">
            <div className="flex flex-row text-bold">
                <fieldset className="w-1/2 mr-10">
                    <label className="font-bold" htmlFor="name">Nome</label>
                    <input 
                        className="w-full border-2 rounded-md border-gray-500" 
                        type="text" 
                        id="name" 
                        name="name" 
                        value={user.name} 
                        required={isRequired} 
                        onChange={handleChange}
                    />
                </fieldset>
                <fieldset className="w-1/2">
                    <label className="font-bold" htmlFor="lastName">Sobrenome</label>
                    <input 
                        className="w-full border-2 rounded-md border-gray-500" 
                        type="text" 
                        id="lastName" 
                        name="lastName" 
                        value={user.lastName} 
                        required={isRequired} 
                        onChange={handleChange}
                    />
                </fieldset>
            </div>
            <div className="flex flex-row">
                <fieldset className="w-1/2 mr-10">
                    <label className="font-bold" htmlFor="cpf">CPF</label>
                    <input 
                        className="w-full border-2 rounded-md border-gray-500"
                        type="text"
                        id="cpf"
                        name="cpf"
                        value={user.cpf}
                        required={isRequired}
                        onChange={handleChange}
                        pattern="^\d{3}\.\d{3}\.\d{3}-\d{2}$"
                        maxLength={14}
                    />
                </fieldset>
                <fieldset className="w-1/2">
                    <label className="font-bold" htmlFor="telephone">Telefone</label>
                    <input 
                        className="w-full border-2 rounded-md border-gray-500" 
                        type="text" 
                        id="telephone" 
                        name="telephone" 
                        value={user.telephone} 
                        required={isRequired} 
                        onChange={handleChange}
                        pattern = "^\+(\d{2}) (\d{2})\ \d{5}\-\d{4}$"
                        maxLength={19}
                    />
                </fieldset>
            </div>
            <div className="flex flex-row">
                <fieldset className="w-1/2 mr-10">
                    <label className="font-bold" htmlFor="email">Email</label>
                    <input 
                        className="w-full border-2 rounded-md border-gray-500" 
                        type="text" 
                        id="email" 
                        name="email" 
                        value={user.email} 
                        required={isRequired} 
                        onChange={handleChange}
                    />
                </fieldset>
                <fieldset className="w-1/2">
                    <label className="font-bold" htmlFor="birthDate">Data de nascimento</label>
                    <input 
                        className="w-full border-2 rounded-md border-gray-500"
                        type="date" 
                        id="birthDate" 
                        name="birthDate" 
                        value={user.birthDate} 
                         
                        onChange={handleChange}
                    />
                </fieldset>
            </div>
            <fieldset className="w-1/2 mt-6">
                <label className="block font-bold" htmlFor="gender">Gênero</label>
                <div className="flex justify-between ml-6">
                    <label>
                        <input
                        type="radio"
                        name="gender"
                        value="Masculino"
                        checked={user.gender === 'Masculino'}
                        onChange={handleChange}
                        className="mr-2"
                    />
                        Masculino
                    </label>
                    <label>
                        <input
                        type="radio"
                        name="gender"
                        value="Feminino"
                        checked={user.gender === 'Feminino'}
                        onChange={handleChange}
                        className="mr-2"
                    />
                        Feminino
                    </label>
                    <label>
                        <input
                        type="radio"
                        name="gender"
                        value="Outros"
                        checked={user.gender === 'Outros'}
                        onChange={handleChange}
                        className="mr-2"
                    />
                        Outros
                    </label>
                </div>
            </fieldset>
            <fieldset className="w-1/2 mt-6">
                <label className="block font-bold" htmlFor="nationality">Nacionalidade</label>
                {/* 
                    TODO: quais são as nacionalidades que ficarão?
                */}
                <select className="h-8 w-full border-2 rounded-md border-gray-500" name="nationality" id="nationality" onChange={handleChange}>
                    <option value="default">Selecione uma nacionalidade</option>
                    <option value="br">Brasileiro</option>
                    <option value="usa">Estadunidense</option>
                </select>
            </fieldset>
            <div id="special-placeholder" className="order-2"></div>
            <button className="absolute bottom-0 right-4 w-1/4 h-8 bg-verde text-cinza hover:cursor-pointer rounded-lg order-3" type="submit" >
                Salvar alterações
            </button>
        </form>
        <div id="in-form" className="mt-6">
            <p className="font-bold block">
                Senha
            </p>
            <div className='block ml-4'>
                <p className='inline'>
                    Deseja alterar sua senha?
                </p>
                <button onClick={openModalSenha} className="inline h-8 w-28 font-bold text-verde border-verde border-2 rounded-md ml-4">
                    Nova senha
                </button>
            </div>
        </div>
    </div>
  );
}
