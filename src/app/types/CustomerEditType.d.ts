import GenderEnum from "./GenderEnum";

type CustomerEditType = {
  name: string;
  lastName: string;
  cpf: string;
  phoneNumber: string;
  email: string;
  gender: GenderEnum | "";
  birthDate: string | Date;
  country: string;
  password: string;
};
