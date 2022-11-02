import {
  IsEmail,
  IsEmpty,
  IsNotEmpty,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @MinLength(4)
  username: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsEmpty()
  authStrategy: string;

  @IsNotEmpty()
  @MinLength(6)
  @MaxLength(10)
  password: string;
}
