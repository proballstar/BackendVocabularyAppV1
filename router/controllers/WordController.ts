import WordModel, { Word } from './../models/WordModel';
import { Request, Response } from 'express';
import { ParamsDictionary } from 'express-serve-static-core';
import { ParsedQs } from 'qs';
import { Controller } from './BaseController';
import { Repository } from './Respository';

export class WordController extends Controller<Word> {
    constructor() {
        super(new Repository<Word>(WordModel))
    }

    CreateSet(req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>): void {
        
    }

    GetSetsBasedOnTopic(req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>): void {
        
    }

    ReadSets(req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>): void {
        
    }

    delete(req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>): void {
        
    }
}