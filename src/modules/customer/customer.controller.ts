import { Controller, Get, Res, HttpStatus, Post, Body, Put, Query, NotFoundException, Delete, Param } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CreateCustomerDTO } from './dto/create-customer.dto';

@Controller('hackathon-questions')
export class CustomerController {
    constructor(private customerService: CustomerService) { }

    // Retrieve customers list
    @Get('/list')
    async getAllCustomer(@Query("level") level) {
        let response = await this.customerService.getAllCustomer(parseInt(level));
        return {
          "success": true,
          "data": response
        }
    }

    @Post('/:questionId/validate-answer')
    async validateAnswer(@Param('questionId') questionId: string, @Body() body) {
      let response = await this.customerService.validateAnswer(questionId, body);
      return {
        "success": true,
        "data": response
      };
    }
    
    @Get('/get-images')
    async getImages(@Query() query) {
      return {
        "success": true,
        "data": [
          "https://d2bps9p1kiy4ka.cloudfront.net/5eb393ee95fab7468a79d189/74de5c0d-00c3-46a7-af48-98c06fb01be7.png",
          "https://d2bps9p1kiy4ka.cloudfront.net/5eb393ee95fab7468a79d189/9cf7ae3a-ced0-4e4a-a1b0-4afa602cb17d.png",
          "https://d2bps9p1kiy4ka.cloudfront.net/5eb393ee95fab7468a79d189/7e2fa1d4-339a-48f3-a8c3-d0029c70a5fa.png",
          "https://d2bps9p1kiy4ka.cloudfront.net/5eb393ee95fab7468a79d189/09a6c5cc-bb04-4b83-87cb-3a33b64e1850.png",
          "https://d2bps9p1kiy4ka.cloudfront.net/5eb393ee95fab7468a79d189/ecb405f8-31d7-4b34-8b36-7de566cd5656.png",
          "https://d2bps9p1kiy4ka.cloudfront.net/5eb393ee95fab7468a79d189/4c160c3b-1868-4b11-bd76-817716fcc069.png"
        ]
      }
    }
}
