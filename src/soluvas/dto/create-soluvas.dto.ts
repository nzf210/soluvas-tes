import { IsNotEmpty, IsNumber, IsEmail } from 'class-validator';
export class CreateItemDto {
    @IsNotEmpty()
    readonly nama: string;
    readonly jobdesk: string;
    @IsNumber()
    readonly phone_number: number;

    @IsEmail()
    @IsNotEmpty()
    readonly email: string;
}