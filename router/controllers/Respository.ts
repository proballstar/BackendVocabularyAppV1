import {HydratedDocument, Model} from 'mongoose';
import {Validator} from './validation';

type Document<T> = HydratedDocument<T, any, any>

export class Repository<T>{

    public model: Model<T, any, any, any>;
    public validator: Validator<T>;
    
    constructor(model: Model<T, any, any, any>) {
        this.model = model
        this.validator = new Validator<T>()
    }

    async create(schema: T) {
        let Instance = new this.model(schema)
        Instance.save()
    }
    
    async read() {
        let AllInstances = this.model.find({})
        return AllInstances
    }

    async update(id: number | string, newSchema: Partial<T>) {
        let specificInstace: Document<T> = this.model.findById(id)
        await this.validator.exists(specificInstace)
        let newVer: Document<T> = Object.assign(specificInstace, newSchema)
        newVer.save()
    }

    async delete(id: number | string) {
        let instance: Document<T> = this.model.findById(id)
        await this.validator.exists(instance)
        instance.delete()

        return true
    }

    async one(criteria: Partial<T>) {
        let instanse: Document<T> = this.model.find(criteria)
        await this.validator.exists(instanse)
        return instanse
    }
}