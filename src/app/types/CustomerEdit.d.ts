import GenderEnum from "./GenderEnum";

type CustomerEdit = {
  name: string;
  lastName: string;
  cpf: string;
  phoneNumber: string;
  email: string;
  gender: GenderEnum;
  birthDate: Date;
  country: string;
  password: string;
};
