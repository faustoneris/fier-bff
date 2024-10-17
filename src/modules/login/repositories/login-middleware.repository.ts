import { Injectable } from "@nestjs/common";

import axios from "axios";

import { UserAuthentication } from "../models/user-authentication.model";
import { User } from "../models/user.model";
import { API_BASE_URL } from "../../../envoriments/envoriments";

@Injectable()
export class LoginMiddlewareRepository {
  async userAuthentication(user: UserAuthentication): Promise<string> {
    try {
      const request = await axios.post(
        `${API_BASE_URL.USERS}/authentication`,
        user,
      );
      const { data } = request;
      return data;
    } catch (error) {
      console.log(
        `Middleware - Ocorreu um erro ao autenticar usuário: ${error}`,
      );
      throw error;
    }
  }
  async createUser(user: User): Promise<User> {
    try {
      const request = await axios.post<User>(
        `${API_BASE_URL.USERS}/login`,
        user,
      );
      const { data } = request;
      return data;
    } catch (error) {
      console.log(`Middleware - Ocorreu um erro ao criar o usuário: ${error}`);
      throw error;
    }
  }
}
