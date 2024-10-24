import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { UserDto } from "../models/users.dto";
import { UserService } from "../services/users.service";
import { User } from "../login/models/user.model";

@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService){}

    @Get()
    async findAllSuppliers(): Promise<UserDto[]>{
        return await this.userService.findAllSuppliers();
    }

    @Get('document/:document')
    async findUserByDocument(@Param('document') document: string): Promise<UserDto>{
        return await this.userService.findUserByDocument(document);
    }

    @Get('email/:email')
    async findUserByEmail(@Param('email') email: string): Promise<UserDto> {
        return await this.userService.findUserByEmail(email);
    }

    @Post()
    async createUser(@Body() user: UserDto): Promise<void> {
        await this.userService.createUser(user);
    }

    @Put(':id')
    async updateUser(@Param('id') id: string, @Body() user: User): Promise<boolean> {
        return await this.userService.updateUser(id, user);
    }

    @Delete(':document')
    async deleteUser(@Param('document') document: string): Promise<void> {
        await this.userService.deleteUser(document);
    }
}