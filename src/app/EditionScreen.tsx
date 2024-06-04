"use client";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ModalSenha from "./components/ModalSenha";
import { User } from "./utils/User";
import FormWithDiv from "./components/FormWithDiv";

import { BsPersonVcard } from "react-icons/bs";
import { LuBellRing } from "react-icons/lu";
import { RiCalendarTodoFill } from "react-icons/ri";
import { FaRegHeart } from "react-icons/fa";
import { CiDiscount1 } from "react-icons/ci";
import { useState } from "react";

function EditionScreen(){

    const [user, setUser] = useState<User>({
        name: '',
        lastName: '',
        password: '',
        email: '',
        telephone: '',
        cpf: '',
        gender: '',
        birthDate: '',
        nationality: ''
    })

    const [edit, setEdit] = useState<boolean>(false)
    const [isRequired, setIsRequired] = useState<boolean>(true)

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        console.log(`${formData.get('name')}`)
    }

    const handleSubmitPassword = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        // TODO Checar se o usuário em quesão possui a senha escrita em currPassword
        const currPassword = formData.get('currPassword')
        const newPassword = formData.get('newPassword')
        const confirmPassword = formData.get('confirmPassword')
        if(newPassword != confirmPassword){
            // TODO Lógica para lidar com senha diferente
            console.log('senhas diferentes')
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const name: string = e.target.name;
        let value = e.target.value
        if(name == 'cpf'){
            value = value
                .replace(/\D/g, '') // substitui qualquer caracter que nao seja numero por nada
                .replace(/(\d{3})(\d)/, '$1.$2') // captura 2 grupos de numero o primeiro de 3 e o segundo de 1, apos capturar o primeiro grupo ele adiciona um ponto antes do segundo grupo de numero
                .replace(/(\d{3})(\d)/, '$1.$2')
                .replace(/(\d{3})(\d{1,2})/, '$1-$2')
        }
        else if(name == 'telephone'){
            value = value
                .replace(/\D/g, '')
                .replace(/(\d{2})(\d)/, '+$1 $2')
                .replace(/(\d{2})(\d)/, '($1) $2')
                .replace(/(\d{5})(\d)/, '$1-$2')
        }
        setUser(prevUser => ({ ...prevUser, [name]: value}));
    };

    const changeModalSenhaState = () => {
        setIsRequired(isRequired => !isRequired)
        setEdit(edit => !edit)
    }

    return(
        <>
            {/* <Header/> */}
            <div className="flex flex-row justify-start space-x-60 ml-14 h-full">
                <div className="relative">
                    <div className="h-4/5 absolute pt-12 top-6 left-6 mr-0">
                        <div className="border-l-4 border-azulClaro rounded-sm pl-4 mb-3">
                            <BsPersonVcard className="inline"/>
                            <p className="inline whitespace-nowrap font-bold">Informações pessoais</p>
                        </div>
                        <div className="mb-3 pl-4">
                            <LuBellRing className="inline mr-2"/>
                            <p className="inline">Alertas</p>
                        </div>
                        <div className="mb-3 pl-4">
                            <RiCalendarTodoFill  className="inline mr-2"/>
                            <p className="inline">Agendamentos</p>
                        </div>
                        <div className="mb-3 pl-4">
                            <FaRegHeart className="inline mr-2"/>
                            <p className="inline">Favoritos</p>
                        </div>
                        <div className="pl-4">
                            <CiDiscount1 className="inline mr-2"/>
                            <p className="inline">Cupons</p>
                        </div>
                    </div>
                </div>
                <FormWithDiv user={user} handleChange={handleChange} handleSubmit={handleSubmit} openModalSenha={changeModalSenhaState} isRequired={isRequired}/>
            </div>
            {/* <Footer/> */}
            { edit ? <ModalSenha handleSubmit={handleSubmitPassword} closeModal={changeModalSenhaState}/> : <></>}
            
            
        </>
    )
}

export default EditionScreen