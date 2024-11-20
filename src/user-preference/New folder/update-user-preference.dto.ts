// src/user-preference/dto/update-user-preference.dto.ts

import { IsString, IsBoolean, IsEnum, IsObject, IsOptional, IsEmail } from 'class-validator';

// Enum for frequency
export class UpdateUserPreferenceDto {
  @IsString()
  @IsOptional()
  userId?: string;

  @IsEmail()
  @IsOptional()
  email?: string;

  @IsObject()
  @IsOptional()
  preferences?: {
    @IsBoolean()
    @IsOptional()
    marketing?: boolean;

    @IsBoolean()
    @IsOptional()
    newsletter?: boolean;

    @IsBoolean()
    @IsOptional()
    updates?: boolean;

    @IsEnum(['daily', 'weekly', 'monthly', 'never'])
    @IsOptional()
    frequency?: 'daily' | 'weekly' | 'monthly' | 'never';

    @IsObject()
    @IsOptional()
    channels?: {
      @IsBoolean()
      @IsOptional()
      email?: boolean;

      @IsBoolean()
      @IsOptional()
      sms?: boolean;

      @IsBoolean()
      @IsOptional()
      push?: boolean;
    };
  };

  @IsString()
  @IsOptional()
  timezone?: string;
}
