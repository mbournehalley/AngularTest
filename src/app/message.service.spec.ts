import { MessageService } from "./message.service";

describe("MessageService", () => {
  let service: MessageService;

  it("should have no message to start", () => {
    service = new MessageService();
    expect(service.messages.length).toBe(0);
  });

  it("should add a message when add is called", () => {
    service = new MessageService();
    service.add("message 1");
    expect(service.messages.length).toBe(1);
  });

  it("should remove all message when clear is called", () => {
    service = new MessageService();
    service.add("message 1");
    service.clear();
    expect(service.messages.length).toBe(0);
  });
});
