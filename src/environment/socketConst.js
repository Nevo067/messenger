import socketIOClient from "socket.io-client";
import apiIp from "./apiConst";

const socket = socketIOClient(apiIp);
socket.on('connect',()=>{
    console.log("xxx")
    });
socket.on("textx", (data) => {
  console.log(data);
});



export default socket;