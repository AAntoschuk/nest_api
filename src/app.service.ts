import { Injectable } from '@nestjs/common';
import { POSTS } from './mock/posts.mock';

@Injectable()
export class AppService {
  posts = POSTS;
  async getPosts(): Promise<any> {
    return await this.posts;
  }
}
