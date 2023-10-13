import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { SchemaTypes, Types } from "mongoose";
import * as _ from 'lodash'

@Schema({ collection: "hackathon_questions", timestamps: true })
export class HackathonQuestions {

    _id: Types.ObjectId;
    
    @Prop({
        type: String,
    })
    questionText: string;

    @Prop({
        type: String
    })
    solution: string;

    @Prop({
        type: Number,
    })
    level: number;

    @Prop({
        type: String
    })
    jumbledText: string;

    @Prop({
        type: String
    })
    image: string;

    @Prop({
        type: [[Number]]
    })
    mappedRow: [number[]];

}

export const CustomerSchema = SchemaFactory.createForClass(HackathonQuestions);