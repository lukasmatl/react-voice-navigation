import {FC} from "react";
import {VoiceNavigationContext} from "./VoiceNavigationContext";
import {useVoiceNavigationCommands} from "../hooks";

export interface VoiceNavigationProviderProps {
    children: any;
}

export const VoiceNavigationProvider: FC<VoiceNavigationProviderProps> = ({children}) => {
    const {transcript,
        listening,
        resetTranscript,
        browserSupportsSpeechRecognition,
        registerCommands,
        unregisterCommands} = useVoiceNavigationCommands();

    return <VoiceNavigationContext.Provider value={{transcript,
        listening,
        resetTranscript,
        browserSupportsSpeechRecognition,
        registerCommands,
        unregisterCommands}}>
        {children}
    </VoiceNavigationContext.Provider>
}