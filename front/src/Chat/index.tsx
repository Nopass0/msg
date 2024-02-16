import { Avatar, Button, Input, User } from "@nextui-org/react";
import { useState } from "react";
import { BiSend } from "react-icons/bi";
import { BsSendFill } from "react-icons/bs";

const ChatPage = () => {
  const [messages, setMessages] = useState<IMessage[]>([
    {
      id: 1,
      userId: 1,
      text: "Hello",
      time: "10:00",
    } as IMessage,
    {
      id: 2,
      userId: 2,
      text: "Hi",
      time: "10:01",
    },
    {
      id: 3,
      userId: 1,
      text: "How are you?",
      time: "10:02",
    },
    {
      id: 4,
      userId: 2,
      text: "Fine and you?",
      time: "10:03",
    },
    {
      id: 5,
      userId: 1,
      text: "I'm fine too",
      time: "10:04",
    },
    {
      id: 6,
      userId: 2,
      text: "I'm fine too too",
      time: "10:05",
    },
  ]);

  return (
    <div className="w-full h-full flex justify-center mt-5">
      <div className="w-[1400px] h-[800px] flex flex-row border border-neutral-100 dark:border-neutral-800 rounded-[10px]">
        <div
          id="leftUsersList"
          className="w-[300px] h-[95%] rounded-l-[10px] flex  mt-6 pl-5 flex-col gap-y-5 overflow-y-scroll scrollbar-hide"
        >
          {/* user-mini */}
          <div id="user-mini" className="flex flex-row gap-2">
            <Avatar
              isBordered
              radius="lg"
              size="md"
              src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
            />
            <div className="flex flex-col mx-2 ">
              <p className="text-[14px] font-bold">Вася Пупкин</p>
              <p className="text-[14px] truncate">
                Очень длинное сообщение ...
              </p>
            </div>
          </div>
          {/* end-user-mini */}
          {/* user-mini */}
          <div id="user-mini" className="flex flex-row gap-2">
            <Avatar
              isBordered
              radius="lg"
              size="md"
              src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
            />
            <div className="flex flex-col mx-2 ">
              <p className="text-[14px] font-bold">Вася Пупкин</p>
              <p className="text-[14px] truncate">
                Очень длинное сообщение ...
              </p>
            </div>
          </div>
          {/* end-user-mini */}
          {/* user-mini */}
          <div id="user-mini" className="flex flex-row gap-2">
            <Avatar
              isBordered
              radius="lg"
              size="md"
              src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
            />
            <div className="flex flex-col mx-2 ">
              <p className="text-[14px] font-bold">Вася Пупкин</p>
              <p className="text-[14px] truncate">
                Очень длинное сообщение ...
              </p>
            </div>
          </div>
          {/* end-user-mini */}
          {/* user-mini */}
          <div id="user-mini" className="flex flex-row gap-2">
            <Avatar
              isBordered
              radius="lg"
              size="md"
              src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
            />
            <div className="flex flex-col mx-2 ">
              <p className="text-[14px] font-bold">Вася Пупкин</p>
              <p className="text-[14px] truncate">
                Очень длинное сообщение ...
              </p>
            </div>
          </div>
          {/* end-user-mini */}
          {/* user-mini */}
          <div id="user-mini" className="flex flex-row gap-2">
            <Avatar
              isBordered
              radius="lg"
              size="md"
              src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
            />
            <div className="flex flex-col mx-2 ">
              <p className="text-[14px] font-bold">Вася Пупкин</p>
              <p className="text-[14px] truncate">
                Очень длинное сообщение ...
              </p>
            </div>
          </div>
          {/* end-user-mini */}
          {/* user-mini */}
          <div id="user-mini" className="flex flex-row gap-2">
            <Avatar
              isBordered
              radius="lg"
              size="md"
              src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
            />
            <div className="flex flex-col mx-2 ">
              <p className="text-[14px] font-bold">Вася Пупкин</p>
              <p className="text-[14px] truncate">
                Очень длинное сообщение ...
              </p>
            </div>
          </div>
          {/* end-user-mini */}
          {/* user-mini */}
          <div id="user-mini" className="flex flex-row gap-2">
            <Avatar
              isBordered
              radius="lg"
              size="md"
              src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
            />
            <div className="flex flex-col mx-2 ">
              <p className="text-[14px] font-bold">Вася Пупкин</p>
              <p className="text-[14px] truncate">
                Очень длинное сообщение ...
              </p>
            </div>
          </div>
          {/* end-user-mini */}
          {/* user-mini */}
          <div id="user-mini" className="flex flex-row gap-2">
            <Avatar
              isBordered
              radius="lg"
              size="md"
              src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
            />
            <div className="flex flex-col mx-2 ">
              <p className="text-[14px] font-bold">Вася Пупкин</p>
              <p className="text-[14px] truncate">
                Очень длинное сообщение ...
              </p>
            </div>
          </div>
          {/* end-user-mini */}
          {/* user-mini */}
          <div id="user-mini" className="flex flex-row gap-2">
            <Avatar
              isBordered
              radius="lg"
              size="md"
              src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
            />
            <div className="flex flex-col mx-2 ">
              <p className="text-[14px] font-bold">Вася Пупкин</p>
              <p className="text-[14px] truncate">
                Очень длинное сообщение ...
              </p>
            </div>
          </div>
          {/* end-user-mini */}
          {/* user-mini */}
          <div id="user-mini" className="flex flex-row gap-2">
            <Avatar
              isBordered
              radius="lg"
              size="md"
              src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
            />
            <div className="flex flex-col mx-2 ">
              <p className="text-[14px] font-bold">Вася Пупкин</p>
              <p className="text-[14px] truncate">
                Очень длинное сообщение ...
              </p>
            </div>
          </div>
          {/* end-user-mini */}
          {/* user-mini */}
          <div id="user-mini" className="flex flex-row gap-2">
            <Avatar
              isBordered
              radius="lg"
              size="md"
              src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
            />
            <div className="flex flex-col mx-2 ">
              <p className="text-[14px] font-bold">Вася Пупкин</p>
              <p className="text-[14px] truncate">
                Очень длинное сообщение ...
              </p>
            </div>
          </div>
          {/* end-user-mini */}
          {/* user-mini */}
          <div id="user-mini" className="flex flex-row gap-2">
            <Avatar
              isBordered
              radius="lg"
              size="md"
              src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
            />
            <div className="flex flex-col mx-2 ">
              <p className="text-[14px] font-bold">Вася Пупкин</p>
              <p className="text-[14px] truncate">
                Очень длинное сообщение ...
              </p>
            </div>
          </div>
          {/* end-user-mini */}
          {/* user-mini */}
          <div id="user-mini" className="flex flex-row gap-2">
            <Avatar
              isBordered
              radius="lg"
              size="md"
              src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
            />
            <div className="flex flex-col mx-2 ">
              <p className="text-[14px] font-bold">Вася Пупкин</p>
              <p className="text-[14px] truncate">
                Очень длинное сообщение ...
              </p>
            </div>
          </div>
          {/* end-user-mini */}
          {/* user-mini */}
          <div id="user-mini" className="flex flex-row gap-2">
            <Avatar
              isBordered
              radius="lg"
              size="md"
              src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
            />
            <div className="flex flex-col mx-2 ">
              <p className="text-[14px] font-bold">Вася Пупкин</p>
              <p className="text-[14px] truncate">
                Очень длинное сообщение ...
              </p>
            </div>
          </div>
          {/* end-user-mini */}
        </div>
        <div
          id="chatWindow"
          className="w-[1100px] h-full border-l-1 border-neutral-200 dark:border-neutral-700"
        >
          <div
            id="messagesList"
            className="w-full h-[700px] rounded-tr-[10px] flex flex-col-reverse "
          >
            <div className="w-full flex flex-col">
              {messages.map((message, index) => (
                <div className="w-full">
                  <p
                    className={`text-[14px] rounded-[10px] px-4 py-2 mx-2 ${
                      message.userId === 1
                        ? "bg-primary float-end text-white"
                        : "bg-neutral-300 dark:bg-neutral-800 float-left"
                    }`}
                  >
                    {message.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div
            id="messageInput"
            className="w-full items-center h-[100px] rounded-br-[10px] flex flex-row gap-x-0.5"
          >
            <Input
              key="inside"
              type="text"
              size="sm"
              label="Сообщение"
              labelPlacement="inside"
              className="w-[1020px] mx-2"
            />
            <Button
              //   className="mr-2"
              size="lg"
              isIconOnly
              color="primary"
              aria-label="Like"
            >
              <BiSend />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
