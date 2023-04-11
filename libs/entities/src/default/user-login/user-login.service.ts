import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { FindOptionsWhere, Repository } from "typeorm";
import { UserLogin } from "../user-login/user-login.entity";

@Injectable()
export class UserLoginService {
  constructor(
    @InjectRepository(UserLogin, "default")
    private readonly _sessionRepository: Repository<UserLogin>,
  ) {}

  create = async (session: Partial<UserLogin>): Promise<UserLogin> =>
    this._sessionRepository.save(session);

  findOneBy = async (by: FindOptionsWhere<UserLogin>): Promise<UserLogin> =>
    this._sessionRepository.findOneBy(by);

  delete = async (id: string): Promise<void> => {
    this._sessionRepository.delete(id);
  };

  update = async (id: string, session: Partial<UserLogin>): Promise<UserLogin> => {
    await this._sessionRepository.update(id, session);
    return this._sessionRepository.findOneBy({ id });
  }
}
