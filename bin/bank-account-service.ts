#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { BankAccountServiceStack } from '../lib/bank-account-service-stack';
import * as dotenv from 'dotenv';

dotenv.config();

const app = new cdk.App();

const env: cdk.Environment = {
  region: process.env.REGION,
  account: process.env.ACCOUNT
}

const tags = {
  const: "BankAccountService",
  team: "BankAccountService"
}

new BankAccountServiceStack(app, 'BankAccountServiceStack', { 
  env: env,
  tags: tags,
});