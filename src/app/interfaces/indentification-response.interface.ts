export interface IdentificationResponse {
  identification:  Identification;
  role:            string;
  phone:           string;
  email:           string;
  provinceCountry: string;
}

export interface Identification {
  name:    string;
  surname: string;
}

