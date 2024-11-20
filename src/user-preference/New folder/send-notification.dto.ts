// src/user-preference/dto/send-notification.dto.ts

import { IsString, IsEnum, IsObject, IsOptional } from 'class-validator';

// Enum for notification type and channel
export class SendNotificationDto {
  @IsString()
  userId: string;

  @IsEnum(['marketing', 'newsletter', 'updates'])
  type: 'marketing' | 'newsletter' | 'updates';

  @IsEnum(['email', 'sms', 'push'])
  channel: 'email' | 'sms' | 'push';

  @IsObject()
  content: {
    @IsString()
    subject: string;

    @IsString()
    body: string;
  };

  @IsOptional()
  @IsObject()
  metadata?: Record<string, any>;  // Optional metadata related to the notification
}
