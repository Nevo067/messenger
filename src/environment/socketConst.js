import socketIOClient from "socket.io-client";
import apiIp from "./apiConst";

const socket = socketIOClient(apiIp);
socket.on('connect',()=>{
    console.log("xxx")
    socket.emit("textx","va te faire foutre");
    });
socket.on("textx", (data) => {
  console.log(data);
});



export default socket;