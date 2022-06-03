import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomersService {
  user = [
    {
      id: 1,
      email: 'kingifean@gmail.com',
      createdAt: new Date()
    },
    {
      id: 2,
      email: 'kingana@gmail.com',
      createdAt: new Date()
    },
    {
      id: 3,
      email: 'adams@gmail.com',
      createdAt: new Date()
    },
    {
      id: 4,
      email: 'kingifean@gmail.com',
      createdAt: new Date()
    },
    {
      id: 5,
      email: 'test@gmail.com',
      createdAt: new Date()
    }
  ]
  findCustomerById(id: number) {
    return this.user.find(user => user.id === id);
  }
}
