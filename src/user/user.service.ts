import { Injectable } from '@nestjs/common';
import { ClickhouseService } from '../clickhouse/clickhouse.service';

@Injectable()
export class UserService {
  constructor(
    private clickhouseService: ClickhouseService,
  ) {}

  async getById(id: number) {
    return this.clickhouseService.getById(id);
  }

  async getAll() {
    return this.clickhouseService.getAll();
  }

  async create(data) { // @todo: temp solution for test
    return this.clickhouseService.create(data);
  }

  async update(id: string, data) {
    return this.clickhouseService.update(id, data);
  }

  async delete(id) {
    return this.clickhouseService.delete(id);
  }
}
