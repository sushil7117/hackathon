import { Injectable } from '@nestjs/common';
import { Model, Types } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Customer } from './interfaces/customer.interface';
import { CreateCustomerDTO } from './dto/create-customer.dto';
import * as _ from "lodash";

@Injectable()
export class CustomerService {

    constructor(@InjectModel('Customer') private readonly customerModel: Model<Customer>) { }

    // fetch all customers
    async getAllCustomer(level): Promise<Customer[]> {
        let params = {
            searchParams: {
                level: level
            }
        }
        console.log(params)
        let list = await this.customerModel.find(params).exec();
        list = list.map(item => {
            item = _.pick(item, ["_id", "questionText", "level", "jumbledText"]);
            return item;
          })
          return list;
    }


    async validateAnswer(questionId, body) {
        let question = await this.customerModel.findById(new Types.ObjectId(questionId));
        let solution = question.solution;
    
        if (solution.toLowerCase() === body.answer.toLowerCase()) {
          return { "status": "CORRECT" }
        }
        else {
          return { "status": "INCORRECT" }
        }
      }
}
