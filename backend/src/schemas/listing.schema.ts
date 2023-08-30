import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ListingDocument = HydratedDocument<Listing>;

@Schema()
export class Listing {
  @Prop()
  name: string;

  @Prop()
  description: string;

  @Prop()
  price: number;

  @Prop()
  userId: string;

  @Prop()
  views: number = 0;
}

export const ListingSchema = SchemaFactory.createForClass(Listing);