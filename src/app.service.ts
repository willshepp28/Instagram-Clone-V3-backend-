import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getCustomers(): Array<Object> {
    return  [
      {id: 1, name: "John"},
      {id: 2, name: "Sarah"},
      {id: 3, name: "Bob"}
    ];
  }
}
