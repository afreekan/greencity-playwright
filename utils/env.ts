import * as dotenv from 'dotenv';

dotenv.config();

export const config = {
    baseUrl: process.env.BASE_URL || '',

    // Перевіряємо, чи дорівнює рядок слову 'true', результат буде boolean
    headless: process.env.HEADLESS === 'true',

    // Якщо значення є — перетворюємо рядок на число (parseInt), якщо ні — ставимо 0
    retries: process.env.RETRIES ? parseInt(process.env.RETRIES, 10) : 0,

    // Перетворюємо на число, дефолтне значення — 30000
    timeout: process.env.TIMEOUT ? parseInt(process.env.TIMEOUT, 10) : 30000,
};