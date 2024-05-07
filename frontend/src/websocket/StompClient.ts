import { Client } from '@stomp/stompjs';
import { handshake } from './client';
import {
    addPeopleRoomState,
    currentRoomState,
    givenChoiceState,
    readyState,
    removePeopleRoomState,
    meDead,
} from '../store/user-slice';
import { store } from '../store/store';
import { createStream, handleData, endStream } from '../assets/js/voice';

class StompClient {
    private static instance: StompClient;
    private client: Client | null = null;
    public isConnected = false;

    private constructor() {
        // private constructor to prevent direct instantiation.
    }

    public static getInstance(): StompClient {
        if (!StompClient.instance) {
            StompClient.instance = new StompClient();
        }
        return StompClient.instance;
    }

    public connect(
        roomId: string,
        setFlag: React.Dispatch<React.SetStateAction<boolean>>
    ): void {
        if (!this.client) {
            this.client = handshake();

            this.client.onConnect = () => {
                //public subscribe
                // console.log('소켓 연결.');
                setFlag(true);

                this.isConnected = true;
                if (this.client !== null) {
                    this.client.subscribe(`/sub/room/${roomId}`, (message) => {
                        const msg = JSON.parse(message.body);
                        // console.log(message.body);
                        switch (msg.type) {
                            case 'player.enter': {
                                console.log('플레이어 입장', msg);
                                store.dispatch(addPeopleRoomState(msg.data));
                                break;
                            }
                            case 'player.exit': {
                                console.log('플레이어 퇴장', msg);
                                store.dispatch(removePeopleRoomState(msg.data));
                                break;
                            }
                            case 'player.dead': {
                                // const meInfo = useSelector(
                                //     (state: any) => state.reduxFlag.userSlice.meInfo
                                // );
                                
                                // if(meInfo.nickname === msg.data.nickname) {
                                //     meInfo.isDead = true;
                                // } 
                                console.log('플레이어 사망1 : ' + msg.data.nickname);  
                                store.dispatch(meDead(true)); 
                                break;
                            }
                            case 'player.choose': {
                                console.log('플레이어 선택지', msg);
                                store.dispatch(givenChoiceState(msg.data));
                                break;
                            }
                            /** 게임 입장 (요청 필요) */
                            case 'room.gameInit': {
                                console.log('게임 입장', msg);
                                store.dispatch(readyState(true));
                                store.dispatch(currentRoomState(msg.data));
                                break;
                            }
                            case 'player.object': {
                                console.log('물체 변경', msg);
                                break;
                            }
                            /** 플레이어 위치 정보 반환 */
                            case 'room.gameState': {
                                // console.log('위치 정보', msg);
                                store.dispatch(currentRoomState(msg.data));
                                break;
                            }
                            /** 숨기 시작 */
                            case 'room.hideStart': {
                                console.log('숨기 시작', msg);
                                store.dispatch(currentRoomState(msg.data));
                                break;
                            }
                            case 'room.findStart': {
                                console.log('찾기 시작', msg);
                                store.dispatch(currentRoomState(msg.data));
                                break;
                            }
                            case 'room.hiderWin': {
                                console.log('숨는팀 승리', msg);
                                break;
                            }
                            case 'room.seekerWin': {
                                console.log('찾는팀 승리', msg);
                                break;
                            }
                            case 'room.changeAdmin': {
                                console.log('방장 위임', msg);
                                break;
                            }
                            case 'room.backRoom': {
                                console.log('대기실로 이동', msg);
                                store.dispatch(currentRoomState(msg.data));
                                this.exitVoiceChannel()
                                break;
                            }
                            default: {
                                console.log('여분의 msg', msg);
                                break;
                            }
                        }
                    });
                }
            };
            this.client.activate();
        } else if (this.client) {
            console.log('소켓이 이미있음');
            setFlag(true);
            this.client.subscribe(`/sub/room/${roomId}`, (message) => {
                const msg = JSON.parse(message.body);
                switch (msg.type) {
                    case 'player.enter': {
                        console.log('플레이어 입장', msg);
                        store.dispatch(addPeopleRoomState(msg.data));
                        break;
                    }
                    case 'player.exit': {
                        console.log('플레이어 퇴장', msg);
                        store.dispatch(removePeopleRoomState(msg.data));
                        break;
                    }
                    case 'player.dead': {
                        console.log('플레이어 사망2', msg);
                        break;
                    }
                    /** 게임 입장 (요청 필요) */
                    case 'room.gameInit': {
                        console.log('게임 입장', msg);
                        store.dispatch(readyState(true));
                        store.dispatch(currentRoomState(msg.data));
                        break;
                    }
                    case 'player.object': {
                        // console.log('물체 변경', msg);
                        break;
                    }
                    /** 플레이어 위치 정보 반환 */
                    case 'room.gameState': {
                        console.log('위치 반환');
                        // console.log(msg);
                        store.dispatch(currentRoomState(msg.data));
                        break;
                    }
                    /** 숨기 시작 */
                    case 'room.hideStart': {
                        console.log('숨기 시작', msg);
                        store.dispatch(currentRoomState(msg.data));
                        break;
                    }
                    case 'room.findStart': {
                        console.log('찾기 시작', msg);
                        store.dispatch(currentRoomState(msg.data));
                        break;
                    }
                    case 'room.hiderWin': {
                        console.log('숨는팀 승리', msg);
                        break;
                    }
                    case 'room.seekerWin': {
                        console.log('찾는팀 승리', msg);
                        break;
                    }
                    case 'room.changeAdmin': {
                        console.log('방장 위임', msg);
                        break;
                    }
                    case 'room.backRoom': {
                        console.log('대기실로 이동', msg);
                        store.dispatch(currentRoomState(msg.data));
                        this.exitVoiceChannel()
                        break;
                    }
                }
            });
        }
    }

    public disconnect(): void {
        if (this.client) {
            this.client.deactivate();
        }
    }

    public sendMessage(destination: string, body: string): void {
        if (this.client && this.client.connected) {
            this.client.publish({ destination: destination, body: body });
        }
    }

    private subscribeId = Math.round(Math.random()*10000)+"";

    public enterVoiceChannel(roomId: string, nickname: string): void {
        if(!this.client){
            alert('연결된 소켓이 없습니다')
            return
        }
        createStream(roomId, nickname)

        this.client.subscribe(`/sub/voice/${roomId}`, (message) => {
            const stompPayload = JSON.parse(message.body);
            handleData(stompPayload)
        },
        {id: this.subscribeId}
        );
    }

    public exitVoiceChannel(): void {
        if(!this.client) return

        this.client.unsubscribe(this.subscribeId)
        endStream()
    }

}

export default StompClient;