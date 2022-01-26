import { Mode } from 'fs'
import {Schema, Model, model} from 'mongoose'

export interface Word {
    word: string,
    meaning: string,
    sentence: string,
    set: number
}

let WordSchema: Schema = new Schema<Word>({
    word: {
        required: true,
        type: String,
    },
    meaning: {
        required: true,
        type: String,
    },
    sentence: {
        required: true,
        type: String,
    },
    set: {
        required: true,
        type: Number,
    }
})

const WordModel = model<Word>('Word', WordSchema)


export default WordModel