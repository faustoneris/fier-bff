import { Injectable } from "@nestjs/common";
import { UserDto } from "../models/users.dto";
import { UserRepository } from "../repositories/users.repository";
import { User } from "../login/models/user.model";

@Injectable()
export class UserService {
    
    constructor(private readonly userRepository: UserRepository){}

    async findAllSuppliers(): Promise<UserDto[]> {
        return await this.userRepository.findAllSuppliers();
    }

    async findUserByDocument(document: string): Promise<UserDto> {
        return await this.userRepository.findUserByDocument(document);
    }

    async findUserByEmail(email: string): Promise<UserDto> {
        return await this.userRepository.findUserByEmail(email);
    }

    async createUser(user: UserDto): Promise<void>{
        await this.userRepository.createUser(user);
    }

    async updateUser(id: string, user: User): Promise<boolean> {
        return await this.userRepository.updateUser(id, user);
    }

    async deleteUser(document: string): Promise<void> {
        await this.userRepository.deleteUser(document);
    }
}