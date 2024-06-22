type EstablishmentType = {
    userModel: {
        name: string;
        email: string;
        phoneNumber: string;
        confirm_password: string;
        password: string;
        role: string;
    },
    addressModel: {
        zipCode: string;
        streetAddress: string;
        city: string;
        neighborhood: string;
        state: string;
        number: number;
        complement: string;
    },
    description: string, 
    cnpj: string;
};