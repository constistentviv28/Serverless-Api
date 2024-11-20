// src/user-preference/models/user-preference.model.ts

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

// Enum for frequency options
export type UserPreferenceDocument = UserPreference & Document;

@Schema()
export class UserPreference {
  @Prop({ required: true, unique: true })
  userId: string;

  @Prop({ required: true })
  email: string;

  @Prop({ type: Object, required: true })
  preferences: {
    marketing: boolean;
    newsletter: boolean;
    updates: boolean;
    frequency: 'daily' | 'weekly' | 'monthly' | 'never';
    channels: {
      email: boolean;
      sms: boolean;
      push: boolean;
    };
  };

  @Prop({ required: true })
  timezone: string;

  @Prop({ default: Date.now })
  createdAt: Date;

  @Prop({ default: Date.now })
  lastUpdated: Date;
}

export const UserPreferenceSchema = SchemaFactory.createForClass(UserPreference);
