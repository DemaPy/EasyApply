import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { ResumeService } from './resume.service';
import { UserWithSecrets } from 'src/utils/lib/dto/user';
import { User } from 'src/user/decorators/user.decorator';
import { JwtGuard } from 'src/auth/guards/jwt.guard';

@Controller('resume')
export class ResumeController {
  constructor(private readonly resumeService: ResumeService) {}

  @Post()
  create(@Body() resume) {
    return this.resumeService.create(resume);
  }

  @Get(':id')
  get(@Param('id') id: string) {
    return this.resumeService.get(id);
  }

  @Get()
  @UseGuards(JwtGuard)
  getAll(@User() user: UserWithSecrets) {
    console.log(user);
    return this.resumeService.getAll();
  }
}
