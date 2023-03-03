
import * as dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import fetch from 'node-fetch';

const port = parseInt(process.env.PORT || '8080', 10);
const api_keys = JSON.parse(process.env.API_KEYS);
const upstreamUrl = 'https://api.openai.com/v1/chat/completions';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, HEAD, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
};
