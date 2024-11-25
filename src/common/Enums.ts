import moment from 'moment';

export enum DATE_FORMAT_ENUMS {
  LABEL = 'DD/MM/YYYY',
}

export const calculateAge = (dob: moment.MomentInput) => {
  const today = moment();
  const birthDate = moment(dob, 'DD/MM/YYYY');
  return today.diff(birthDate, 'years');
};

export const getFormattedDate = (date: any) => {
  const parsedDate = moment(date, 'YYYY-MM-DD');
  return parsedDate.format('DD/MM/YYYY');
};

export const bloodGroup = [
  {
    label: 'O+',
    value: '1',
  },
  {
    label: 'O-',
    value: '2',
  },
  {
    label: 'A+',
    value: '3',
  },
  {
    label: 'A-',
    value: '4',
  },
  {
    value: 5,
    label: 'B+',
  },
  {
    label: 'B-',
    value: '6',
  },
  {
    label: 'AB+',
    value: '7',
  },
  {
    label: 'AB-',
    value: '8',
  },
];

export const Genderitems = [
  {label: 'Male', value: '1'},
  {label: 'Female', value: '2'},
  {label: 'Others', value: '3'},
];

export const Relationshipitems = [
  {
    value: '1',
    label: 'Father',
  },
  {
    value: '2',
    label: 'Mother',
  },
  {
    value: '3',
    label: 'Wife',
  },
  {
    value: '4',
    label: 'Husbund',
  },
  {
    value: '5',
    label: 'Son',
  },
  {
    value: '6',
    label: 'Daughter',
  },
  {
    value: '7',
    label: 'Brother',
  },
  {
    value: '8',
    label: 'Sister',
  },
  {
    value: '9',
    label: 'Other',
  },
];

export const BankList: any = [
  {
    value: '1',
    label: 'Indian Bank',
  },
  {
    value: '2',
    label: 'Axis Bank',
  },
];

export const idProofs = [
  {
    value: '1',
    label: 'Pan',
  },
  {
    value: '2',
    label: 'Aadhaar',
  },
  {
    value: '3',
    label: 'DrivingLicense',
  },
  {
    value: '4',
    label: 'RationCard',
  },
  {
    value: '5',
    label: 'TIN',
  },
  {
    value: '6',
    label: 'Passport',
  },
  {
    value: '7',
    label: `Elector's Photo ID`,
  },
];
