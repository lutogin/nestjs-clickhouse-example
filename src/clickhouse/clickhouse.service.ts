import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import { CLICKHOUSE_URL } from '../../config/app.config';

@Injectable()
export class ClickhouseService {
  private client: AxiosInstance;
  private readonly tableName: string;

  constructor(tableName) {
    this.client = axios.create({
      baseURL: `${CLICKHOUSE_URL}`,
    })
    this.tableName = tableName;
  }

  makeUpdateQuery(data): string {
    return JSON.stringify(data)
      .replace(/({|})/g, '')
      .replace(/:/g, '=')
  }

  async ping() {
    const { data } = await this.client.get('');
    return data;
  }

  async getAll() {
    const { data: responseData } = await this.client.post('/', `select * from ${this.tableName} format JSON;`);

    return responseData.data;
  }

  async getById(id) {
    const { data: responseData } = await this.client.post(
      '/',
      `select * from ${this.tableName} where id = ${id} format JSON;`,
    );

    return responseData;
  }

  async create(dataObj) {
    const { data: responseData } = await this.client.post(
      '/',
      `insert into ${this.tableName} format JSONEachRow ${dataObj};`,
    );

    return responseData;
  }

  async update(id, dataObj) {
    const { data: responseData } = await this.client.post(
      '/',
      `alter table ${this.tableName} update ${dataObj} where id = ${id};`,
    );

    return responseData;
  }

  async delete(id) {
    const { data: responseData } = await this.client.post(
      '/',
      `alter table ${this.tableName} delete where id = ${id};`,
    );

    return responseData;
  }
}
