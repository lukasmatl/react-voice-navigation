import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";
import {useState} from "react";

interface Command {
    command: string | string[] | RegExp;
    callback: (...args: any[]) => unknown;
    isFuzzyMatch?: boolean | undefined;
    matchInterim?: boolean | undefined;
    fuzzyMatchingThreshold?: number | undefined;
    bestMatchOnly?: boolean | undefined;
}


export const useVoiceNavigationCommands = () => {
    const [commands, setCommands] = useState<Command[]>([]);
    const {
        transcript,
        listening,
        resetTranscript,
        browserSupportsSpeechRecognition
    } = useSpeechRecognition({
        transcribing: true,
        clearTranscriptOnListen: true,
        commands,
    });

    const registerCommands = (commands: Command[]) => {
        setCommands(commands);
    }

    const unregisterCommands = () => {
        setCommands([]);
    }

    return {
        transcript,
        listening,
        resetTranscript,
        browserSupportsSpeechRecognition,
        registerCommands,
        unregisterCommands,
    }
};