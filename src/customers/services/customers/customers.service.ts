import { Injectable } from '@nestjs/common';
import { ICustomer } from 'src/customers/Customer';
import { CreateCustomerDto } from 'src/customers/dtos/CreateCustomer.dto';

@Injectable()
export class CustomersService {
  private customers: ICustomer[] = [
    {
      id: 1,
      email: 'kingifean@gmail.com',
      name: 'James jsmes'
    },
    {
      id: 2,
      email: 'kingana@gmail.com',
      name: 'James jsmes'
    },
    {
      id: 3,
      email: 'adams@gmail.com',
      name: 'James jsmes'
    }
  ]
  findCustomerById(id: number) {
    return this.customers.find(customer => customer.id === id);
  }

  createCustomer(createCustomer: CreateCustomerDto) {
    this.customers.push(createCustomer)
  }

  getCustomers() {
    return this.customers
  }
}
