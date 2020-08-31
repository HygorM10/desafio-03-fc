import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Categorie } from './categories.entity';
import { UpdateResult, DeleteResult } from  'typeorm';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Categorie)
    private categorieRepository: Repository<Categorie>,
) {}

async findAll(): Promise<Categorie[]> {
  return await this.categorieRepository.find();
}

async create(categorie: Categorie): Promise<Categorie> {
  return await this.categorieRepository.save(categorie);
}

async update(categorie: Categorie): Promise<UpdateResult> {
  return await this.categorieRepository.update(categorie.id, categorie);
}

async delete(id): Promise<DeleteResult> {
  return await this.categorieRepository.delete(id);
}
}