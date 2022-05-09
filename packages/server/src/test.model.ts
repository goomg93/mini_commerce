import { Schema, model } from 'mongoose';

interface ITest {
  message: String;
}

const testSchema = new Schema<ITest>(
  {
	  message: String,
  }
);

const Test = model<ITest>('Test', testSchema, 'test');

export const getMessage = async (): Promise<String> => {
  const ret = await Test.findOne({})
    .select({ _id: 0 })
    .lean();
	
  return ret?.message || '';
};
