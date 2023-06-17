import React from 'react'
import { useParams } from 'react-router-dom'
// import { appId,serverSecret } from '../helper';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
const Room = () => {
    const {roomid} = useParams();
    const myMeeting = async(element)=>{
        const appId = 1144121185;
        const serverSecret = "dffe74f33da694e62d4fd41cfd34f9f6";
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appId, serverSecret, roomid,  Date.now().toString(), "harsh gujrati");

        //create instance object form kit token.
        const zp = ZegoUIKitPrebuilt.create(kitToken);

        zp.joinRoom({
            container: element,
            sharedLinks:[{
                name:"Copy Link",
                url:`http://localhost:3000/room/${roomid}`
            }],
            scenario: {
                mode: ZegoUIKitPrebuilt.VideoConference,
               },
        })
    }
  return (
    <>
   <h1>Room</h1>
   <div>
     <div ref={myMeeting}/>
   </div>
    </>
  )
}

export default Room
