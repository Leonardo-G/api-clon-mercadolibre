import {
  BadRequestException,
  Body,
  Controller,
  DefaultValuePipe,
  Get,
  HttpException,
  Param,
  ParseIntPipe,
  Post,
  Query,
} from '@nestjs/common';
import { UserLoginDTO, UserRegisterDTO } from '../dto/user.dto';
import { UserService } from '../service/user.service';
import { ValidateCategoryPipe } from '../pipe/validate-category.pipe';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  postRegister(@Body() userRegisterDTO: UserRegisterDTO) {
    try {
      return this.userService.newUser(userRegisterDTO);
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
  }

  @Post()
  postLogin(@Body() userLoginDTO: UserLoginDTO) {
    try {
      return this.userService.login(userLoginDTO);
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
  }

  @Get('store/:category')
  getStores(
    @Param('category', ValidateCategoryPipe) category: string,
    @Query('limit', ParseIntPipe, new DefaultValuePipe(5)) limit: number,
    @Query('skip', ParseIntPipe, new DefaultValuePipe(0)) skip: number,
  ) {
    try {
      return this.userService.getAllStores(category, limit, skip);
    } catch (error) {
      throw new BadRequestException(error.message, error.status);
    }
  }
}
