interface IUser {
  id: number;
  name: string;
  avatar: string;
  gender: string;
  email: string;
  // token: string;
}

interface IMessage {
  id: number;
  userId: number;
  text: string;
  time: string;
}
