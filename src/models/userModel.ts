import {
  prop,
  getModelForClass,
  Severity,
  modelOptions,
  DocumentType,
} from "@typegoose/typegoose";

@modelOptions({
  schemaOptions: {
    timestamps: true,
  },
  options: {
    allowMixed: Severity.ALLOW,
  },
})
class User {
  @prop({ required: true })
  public name!: string;
}

const UserModel = getModelForClass(User);
export type IUser = DocumentType<typeof User>;
export default UserModel;
