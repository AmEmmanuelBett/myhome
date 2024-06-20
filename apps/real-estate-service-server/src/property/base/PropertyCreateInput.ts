/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  IsOptional,
  IsDate,
  ValidateNested,
  IsNumber,
  IsEnum,
} from "class-validator";
import { Type } from "class-transformer";
import { BookingCreateNestedManyWithoutPropertiesInput } from "./BookingCreateNestedManyWithoutPropertiesInput";
import { TransactionCreateNestedManyWithoutPropertiesInput } from "./TransactionCreateNestedManyWithoutPropertiesInput";
import { EnumPropertyTypeField } from "./EnumPropertyTypeField";

@InputType()
class PropertyCreateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  address?: string | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  availableFrom?: Date | null;

  @ApiProperty({
    required: false,
    type: () => BookingCreateNestedManyWithoutPropertiesInput,
  })
  @ValidateNested()
  @Type(() => BookingCreateNestedManyWithoutPropertiesInput)
  @IsOptional()
  @Field(() => BookingCreateNestedManyWithoutPropertiesInput, {
    nullable: true,
  })
  bookings?: BookingCreateNestedManyWithoutPropertiesInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  city?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  description?: string | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  price?: number | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  state?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  title?: string | null;

  @ApiProperty({
    required: false,
    type: () => TransactionCreateNestedManyWithoutPropertiesInput,
  })
  @ValidateNested()
  @Type(() => TransactionCreateNestedManyWithoutPropertiesInput)
  @IsOptional()
  @Field(() => TransactionCreateNestedManyWithoutPropertiesInput, {
    nullable: true,
  })
  transactions?: TransactionCreateNestedManyWithoutPropertiesInput;

  @ApiProperty({
    required: false,
    enum: EnumPropertyTypeField,
  })
  @IsEnum(EnumPropertyTypeField)
  @IsOptional()
  @Field(() => EnumPropertyTypeField, {
    nullable: true,
  })
  typeField?: "Option1" | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  zipcode?: string | null;
}

export { PropertyCreateInput as PropertyCreateInput };
