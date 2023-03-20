import SpeechRecognition from "react-speech-recognition";
import {useContext, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {VoiceNavigationContext} from "../../contexts";

export const SpeechRecognitionButton = () => {
    const navigate = useNavigate();
    const {registerCommands, listening, resetTranscript, transcript, unregisterCommands} = useContext<any>(VoiceNavigationContext);

    useEffect(() => {
        registerCommands([{
            command: ["Open *", "Go to *"],
            callback: (page: string) => {
                console.log(page);
                switch (page) {
                    case "home":
                        navigate("/");
                        break;
                    case "contact":
                        navigate("/contact");
                        break;
                    default:
                        console.log(page);
                }
            },
            group: "default",
        }]);

        return () => unregisterCommands("default");
    }, []);

    return <div>
        <p>Microphone: {listening ? 'on' : 'off'}</p>
        <button onClick={() => SpeechRecognition.startListening()}>Start</button>
        <button onClick={SpeechRecognition.stopListening}>Stop</button>
        <button onClick={resetTranscript}>Reset</button>
        <p>{transcript}</p>
    </div>
}