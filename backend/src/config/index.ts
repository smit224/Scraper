/* eslint-disable node/no-process-env */

export default {
  nodeEnv: (process.env.NODE_ENV || 'development'),
  port: (process.env.PORT || 3001),
  brightData_bearerToken: ('5bc93e7a-a31d-4a6b-893a-e269d9e85084'),
  brightData_collectorId: ('c_lorxaaxp1kv74f4nd4'),
  mongo_connectionString: ('mongodb+srv://smit:smit@cluster0.aouqduq.mongodb.net/?retryWrites=true&w=majority'),
} as const;

	
