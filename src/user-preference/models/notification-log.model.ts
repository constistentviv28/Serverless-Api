// src/user-preference/models/notification-log.model.ts

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

// Enum for notification type and status options
export type NotificationLogDocument = NotificationLog & Document;

@Schema()
export class NotificationLog {
  @Prop({ required: true })
  userId: string;

  @Prop({ required: true, enum: ['marketing', 'newsletter', 'updates'] })
  type: 'marketing' | 'newsletter' | 'updates';

  @Prop({ required: true, enum: ['email', 'sms', 'push'] })
  channel: 'email' | 'sms' | 'push';

  @Prop({ required: true, enum: ['pending', 'sent', 'failed'] })
  status: 'pending' | 'sent' | 'failed';

  @Prop()
  sentAt?: Date;

  @Prop()
  failureReason?: string;

  @Prop({ type: Object })
  metadata: Record<string, any>;
}

export const NotificationLogSchema = SchemaFactory.createForClass(NotificationLog);