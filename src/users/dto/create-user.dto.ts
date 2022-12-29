import { IsEmail, IsString } from 'class-validator';

export class CreateUserDto {
  createdAt?: string | Date;
  email: string;
  name: string;
}
