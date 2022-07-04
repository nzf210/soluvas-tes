import { IsNotEmpty, IsNumber, IsEmail } from 'class-validator';
export class CreateItemDto {
    @IsNotEmpty()
    readonly nama: string;
    readonly jobdesk: string;
    readonly phone_number: string;

    @IsEmail()
    @IsNotEmpty()
    readonly email: string;
}