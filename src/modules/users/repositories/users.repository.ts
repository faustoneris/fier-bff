import { BadGatewayException, Injectable } from "@nestjs/common";
import { UserDto } from "../models/users.dto";
import axios from "axios";
import { API_BASE_URL } from "src/envoriments/envoriments";
import { User } from "../login/models/user.model";

@Injectable()
export class UserRepository {
    async findAllSuppliers(): Promise<UserDto[]> {
        try{
            const request = await axios.get(
                `${API_BASE_URL.USERS}/users`
            );
            return request.data;
        } catch (error) {
            console.log(
                `Erro na busca de fornecedores: ${error}`
            );
            throw error;
        }
    }

    async findUserByDocument(document: string): Promise<UserDto> {
        try {
            const request = await axios.get(
                `${API_BASE_URL.USERS}/users/document/${document}`
            );
            return request.data; 
        } catch (error) {
            console.log(
                `Erro ao retornar usuario pelo documento: ${error}`
            );
            throw error;
        }
    }

    async findUserByEmail(email: string): Promise<UserDto> {
        try {
            const request = await axios.get(
                `${API_BASE_URL.USERS}/users/email/${email}`
            );
            return request.data;
        } catch (error) {
            console.log(
                `Errro ao retornar usuario pelo email: ${error}`
            );
            throw error;
        }        
    }

    async createUser(user: UserDto): Promise<void> {
        try {
            await axios.post(
                `${API_BASE_URL.USERS}/users`,
                user
            );
        } catch (error) {
            console.log(
                `Erro na criação de usuario: ${error}`
            );
            throw error;
        }
    }
    
    async updateUser(id: string, user: User): Promise<boolean> {
        const request = await axios.put(
            `${API_BASE_URL.USERS}/users/${id}`,
            user
        ).catch(x => { 
            throw x.response.data;
        });
        return request.data;
    }

    async deleteUser(document: string): Promise<void> {
        await axios.delete(
            `${API_BASE_URL.USERS}/users/${document}`
        ).catch(x => { 
            throw x.response.data;
        });
    }
}