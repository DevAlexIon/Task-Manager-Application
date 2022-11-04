import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class EncryptService {
  async encrypt(password: string) {
    const SALT = bcrypt.genSaltSync();
    return await bcrypt.hash(password, SALT);
  }

  comparePasswords(password: string, hash: string) {
    return bcrypt.compareSync(password, hash);
  }
}
