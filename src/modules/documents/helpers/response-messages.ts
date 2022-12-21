
export const responseMessage = async (channel, queue, message) => {
  console.log(message)
  await channel.assertQueue(queue);
  await channel.sendToQueue(
    queue,
    Buffer.from(JSON.stringify(message)),
    {
        persistent: true,
    }
)
}

