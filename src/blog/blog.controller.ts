import { Controller, Get } from '@nestjs/common';
import { BlogService } from './blog.service';

@Controller('blog')
export class BlogController {
  constructor(private blogService: BlogService) {}
  @Get()
  getPosts(): any {
    return this.blogService.findAll();
  }
}
