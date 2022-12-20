import amqp, {Connection, Channel} from "amqplib"
//Dotenv 
import * as dotenv from 'dotenv'
dotenv.config()
import documentQueues from "./queues"
import { redirectQueuesByRequest } from '../../routes/index';

const amqp_hostname:any = process.env.AMQP_HOSTNAME
let connection : Connection, channel : Channel; 

const amqpConnection = async() => {
    const amqpServer:any = await amqp.connect(amqp_hostname)
    connection = await amqp.connect(amqpServer)
    channel = await connection.createChannel()

    Object.entries(documentQueues).forEach( async([key, value]) => {
      //Method used to verify if the name of the queue exists, otherwise it creates it
      await channel.assertQueue(value)

      channel.consume(value, async (message) => {
        if(message){
            let content = message.content.toString()

            const rabbitmq = {
              key, value, content, channel
            }
            redirectQueuesByRequest(rabbitmq)
            channel.ack( message ) //message processed and removed  
        }
      })
    });
}

export {
  amqpConnection
}

