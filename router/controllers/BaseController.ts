import {Repository} from './Respository';
import {Model} from "mongoose";
import {Request, Response} from 'express'

type CreateMethod = (schema: any) => void
type ReadMethod = () => any
type UpdateMethod = (newSchema: Partial<any>) => void
type DeleteMethod = () => boolean

export class Controller<T>{
    
    public repo: Repository<T>;
    
    constructor(repository: Repository<T>) {
        this.repo = repository
    }

    create(req: Request, res: Response) {
        
    }

    read(req: Request, res: Response)  {

    }

    update(req: Request, res: Response) {

    }

    delete (req: Request, res: Response) {

    }
}