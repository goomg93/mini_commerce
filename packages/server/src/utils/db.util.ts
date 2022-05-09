import mongoose from 'mongoose';


export default {
  init: async (): Promise<void> => {
	  await mongoose.connect(process.env.DB_URL || '');
  },
};
