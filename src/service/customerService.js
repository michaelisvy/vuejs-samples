export function getCustomerList() {
  return {
    headers: headers,
    data: data
  }
}

const headers = [
  { text: 'First Name', value: 'firstName' },
  { text: 'Last Name', value: 'lastName' },
  { text: 'Date of Birth', value: 'dateOfBirth' },
  { text: 'email', value: 'email' }
];

const data = [
  {
    id: "001",
    firstName: 'John',
    lastName: 'Smith',
    dateOfBirth: '15/08/1983',
    email: 'john.smith@email.com'
  },
  {
    id: "002",
    firstName: 'Samantha',
    lastName: 'Smith',
    dateOfBirth: '12/11/1982',
    email: 'samantha.smith@email.com'
  },
  {
    id: "003",
    firstName: 'Melina',
    lastName: 'Smith',
    dateOfBirth: '31/07/2010',
    email: 'NA'
  },
  {
    id: "004",
    firstName: 'Alicia',
    lastName: 'Smith',
    dateOfBirth: '07/10/2011',
    email: 'NA'
  }
]