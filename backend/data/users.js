import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@email.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Abdul Bari',
    email: 'abdul@email.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: false,
  },
  {
    name: 'Atif',
    email: 'atif@email.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: false,
  },
]

export default users
