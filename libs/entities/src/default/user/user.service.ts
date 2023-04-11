import { Injectable } from "@nestjs/common";
import { User } from "./user.entity";
import { FindOptionsWhere, Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User, "default")
    private readonly _userRepository: Repository<User>,
  ) {}

  createOne = async (user: Partial<User>): Promise<User> => await this._userRepository.save(user);

  findOneBy = async (by: FindOptionsWhere<User>): Promise<User> =>
    this._userRepository.findOneBy(by);
}
