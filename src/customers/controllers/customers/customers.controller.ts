import { Controller, Get, Param, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express'
import { CustomersService } from 'src/customers/services/customers/customers.service';

@Controller('customers')
export class CustomersController {
  constructor(
    private customersService: CustomersService
    ) {}

  @Get(':id')
  getCustomer(@Param('id') id:number, @Req() req: Request, @Res() res: Response) {
    return this.customersService.findCustomerById(id)
  }
}
