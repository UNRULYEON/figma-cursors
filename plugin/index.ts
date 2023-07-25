import createShapes from "./messages/createShapes";
import { MessageTypes } from "../messageTypes";

figma.showUI(__html__);

figma.ui.onmessage = (msg) => {
  switch (msg.type) {
    case MessageTypes.CREATE_SHAPES:
      createShapes(msg);
      break;
    default:
      throw new Error("Unknown message type");
  }
};
