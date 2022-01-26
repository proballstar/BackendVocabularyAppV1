import {HydratedDocument} from "mongoose";

export class Validator<T>{
    exists(instance: HydratedDocument<T, any, any>) {
        if(typeof instance === 'undefined' || instance == null ) {
            throw new Error(`Item was not found in the database`)
        }
    }
}