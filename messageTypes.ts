export enum MessageTypes {
  CREATE_SHAPES = "create-shapes",
}

export type CreateShapes = {
  type: MessageTypes.CREATE_SHAPES;
  count: number;
};

export type Message = CreateShapes;

export default MessageTypes;
