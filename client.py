import socketio
import numpy as np
import cv2
import base64

sio = socketio.Client();
sio.connect('http://localhost:4000');



print('my sid is', sio.sid);





cap = cv2.VideoCapture(0)


while(True):
   
    ret, frame = cap.read()

    ret,buffer=cv2.imencode(".jpg",frame)
    b64=base64.b64encode(buffer)
    final=b64.decode('utf-8')
    
    
    
    #print(type(final))
    
    #print(final[0:9])
    sio.emit('message',final)
   
    
    
    
   
    cv2.imshow('frame',frame)
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break


cap.release()
cv2.destroyAllWindows()






