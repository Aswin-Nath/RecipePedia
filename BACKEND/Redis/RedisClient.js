const { createClient } = require('redis');
require('dotenv').config();

// const redisClient = createClient({
//   url: process.env.REDIS_URL,
//   socket: {
//     tls: true
//   },
//   legacyMode: true
// });

const redisClient = createClient({
    username: 'default',
    password: process.env.REDIS_PASSWORD,
    socket: {
        host: 'redis-16202.crce276.ap-south-1-3.ec2.cloud.redislabs.com',
        port: 16202
    }
});

redisClient.connect()
  .then(() => console.log('✅ Connected to Upstash Redis'))
  .catch(err => console.error('❌ Redis connection error:', err));

module.exports = redisClient;
