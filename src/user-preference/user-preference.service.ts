import { Injectable } from '@nestjs/common';
import { CreateUserPreferenceDto } from './dto/create-user-preference.dto';
import { UpdateUserPreferenceDto } from './dto/update-user-preference.dto';
import { SendNotificationDto } from './dto/send-notification.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserPreference } from './models/user-preference.model';
import { NotificationLog } from './models/notification-log.model';

@Injectable()
export class UserPreferenceService {
  constructor(
    @InjectModel(UserPreference.name) private userPreferenceModel: Model<UserPreference>,
    @InjectModel(NotificationLog.name) private notificationLogModel: Model<NotificationLog>,
  ) {}

  // Create user preference
  async createUserPreference(createUserPreferenceDto: CreateUserPreferenceDto) {
    const createdPreference = new this.userPreferenceModel(createUserPreferenceDto);
    return createdPreference.save();
  }

  // Get user preference by userId
  async getUserPreference(userId: string) {
    return this.userPreferenceModel.findOne({ userId });
  }

  // Update user preference by userId
  async updateUserPreference(userId: string, updateUserPreferenceDto: UpdateUserPreferenceDto) {
    return this.userPreferenceModel.findOneAndUpdate({ userId }, updateUserPreferenceDto, { new: true });
  }

  // Delete user preference by userId
  async deleteUserPreference(userId: string) {
    return this.userPreferenceModel.deleteOne({ userId });
  }

  // Send notification to user
  async sendNotification(sendNotificationDto: SendNotificationDto) {
    console.log('Sending notification:', sendNotificationDto);

    // Log the notification to the database
    const notificationLog = new this.notificationLogModel({
      ...sendNotificationDto,
      status: 'sent',
      sentAt: new Date(),
    });

    await notificationLog.save();

    return { message: 'Notification sent successfully', notification: sendNotificationDto };
  }
}
