import { Controller, Post, Get, Patch, Delete, Body, Param } from '@nestjs/common';
import { UserPreferenceService } from './user-preference.service';
import { CreateUserPreferenceDto } from './dto/create-user-preference.dto';
import { UpdateUserPreferenceDto } from './dto/update-user-preference.dto';
import { SendNotificationDto } from './dto/send-notification.dto';

@Controller('api/preferences')
export class UserPreferenceController {
  constructor(private readonly userPreferenceService: UserPreferenceService) {}

  // Create user preference
  @Post()
  create(@Body() createUserPreferenceDto: CreateUserPreferenceDto) {
    return this.userPreferenceService.createUserPreference(createUserPreferenceDto);
  }

  // Get user preference by userId
  @Get(':userId')
  findOne(@Param('userId') userId: string) {
    return this.userPreferenceService.getUserPreference(userId);
  }

  // Update user preference by userId
  @Patch(':userId')
  update(@Param('userId') userId: string, @Body() updateUserPreferenceDto: UpdateUserPreferenceDto) {
    return this.userPreferenceService.updateUserPreference(userId, updateUserPreferenceDto);
  }

  // Delete user preference by userId
  @Delete(':userId')
  remove(@Param('userId') userId: string) {
    return this.userPreferenceService.deleteUserPreference(userId);
  }

  // Send notification to user
  @Post('notifications/send')
  sendNotification(@Body() sendNotificationDto: SendNotificationDto) {
    return this.userPreferenceService.sendNotification(sendNotificationDto);
  }
}
