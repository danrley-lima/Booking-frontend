import React, { useEffect, useRef } from "react";

interface ModalSenhaProps {
    closeModal: () => void;
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

function ModalSenha({ closeModal }: ModalSenhaProps){

    const handleBackgroundClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (e.target === e.currentTarget) {
          closeModal();
        }
    };
      
    return (
        <div onClick={handleBackgroundClick} className="fixed inset-0 flex items-center justify-center bg-opacity-50 backdrop-blur-sm text-preto bg-white">
            <div className="z-50 flex flex-col bg-white p-8 rounded-lg shadow-md w-1/4">
                <h1 className="text-2xl pb-2 font-bold block">
                    Crie sua nova senha
                </h1>
                <form action="#" method="post" className="block">
                    <fieldset className="font-semibold pb-2">
                        <label htmlFor="currPassword" className="block">Senha atual</label>
                        <input id="currPassword" name="currPassword" className="w-full border-2 border-black rounded-md" type="password" />
                    </fieldset>
                    <fieldset className="font-semibold pb-2">
                        <label htmlFor="newPassword" className="block">Nova senha</label>
                        <input id="newPassword" name="newPassword" className="w-full border-2 border-black rounded-md" type="password" />
                    </fieldset>
                    <fieldset className="font-semibold pb-2">
                        <label htmlFor="confirmPassword" className="block">Confirmar nova senha</label>
                        <input id="confirmPassword" name="confirmPassword" className="w-full border-2 border-black rounded-md" type="password" />
                    </fieldset>
                    <div className="pt-2 flex justify-center">
                        <input className="w-3/4 rounded-md h-8 bg-azul text-white hover:cursor-pointer" type="submit" value="Confirmar" />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ModalSenha;