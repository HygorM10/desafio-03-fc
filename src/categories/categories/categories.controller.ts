import { Controller, Get } from '@nestjs/common';
import { Post, Body } from  '@nestjs/common';
import { Categorie } from '../categories.entity';
import { CategoriesService } from '../categories.service';

@Controller('categories')
export class CategoriesController {
  constructor(private categoriesService: CategoriesService){}

  @Get()
  index(): Promise<Categorie[]> {
      return this.categoriesService.findAll();
  }

  @Post('create')
    async create(@Body() categorieData: Categorie): Promise<any> {
      return this.categoriesService.create(categorieData);
  }  
}
