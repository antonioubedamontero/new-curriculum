import { Identification, IdentificationResponse } from "../../interfaces";

export const identificationMock: Identification = {
  name: "mock name",
  surname: "mock surname"
}

export const identificationResponseMock: IdentificationResponse = {
  identification:  identificationMock,
  role:            'mock role',
  phone:           'mock phone',
  email:           'mock email',
  provinceCountry: 'mock provice, country',
  githubUrl:       'mock github url',
  linkedinUrl:     'mock linkedin url'
}
