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
import { IsNumber, IsOptional, IsString, IsEnum } from "class-validator";
import { EnumPaymentMethod } from "./EnumPaymentMethod";
import { EnumPaymentStatus } from "./EnumPaymentStatus";

@InputType()
class PaymentCreateInput {
  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  amount?: number | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  currency?: string | null;

  @ApiProperty({
    required: false,
    enum: EnumPaymentMethod,
  })
  @IsEnum(EnumPaymentMethod)
  @IsOptional()
  @Field(() => EnumPaymentMethod, {
    nullable: true,
  })
  method?: "Option1" | null;

  @ApiProperty({
    required: false,
    enum: EnumPaymentStatus,
  })
  @IsEnum(EnumPaymentStatus)
  @IsOptional()
  @Field(() => EnumPaymentStatus, {
    nullable: true,
  })
  status?: "Option1" | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  transactionId?: string | null;
}

export { PaymentCreateInput as PaymentCreateInput };
