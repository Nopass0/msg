export default function onError(err: any, req: any, res: any, next: any) {
  console.log(err);

  // если имеется объект ответа
  if (res) {
    // статус ошибки
    const status = err.status || err.statusCode || 500;
    // сообщение об ошибке
    const message = err.message || "Something went wrong. Try again later";
    res.status(status).json({ message });
  }
}
