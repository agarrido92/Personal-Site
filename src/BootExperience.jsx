import React, { useEffect, useMemo, useRef, useState } from "react";
import Power from './boot_screens/Power.jsx';
import Splash from './boot_screens/Splash.jsx';
import BootMenu from './boot_screens/BootMenu.jsx';
import './styles/boot.css';

export default function BootExperience({ onChoose, onToolChoose }) {
    
    const [stage, setStage] = useState("power");

    //Boot menu stage
    const osOptions = useMemo(() => ["Professional", "Personal"], []);

    const tools = useMemo(() => [
        {id: "surprise1", label: "Favorite Video"},
        {id: "surprise2", label: "Favorite Place"},
        {id: "surprise3", label: "Favorite Activity"}
    ], []);

    //Boot menu state
    const [selectedOsIndex, setSelectedOsIndex] = useState(0);
    const [toolsFocused, setToolsFocused] = useState(false);
    const [selectedToolIndex, setSelectedToolIndex] = useState(0);

    //Store timeout IDs
    const stageTimeoutRef = useRef(null);

    //--------Stage sequencing-----------
    useEffect(() => {
        //Clear any previous timeouts if stage changes quickly
        if(stageTimeoutRef.current){
            clearTimeout(stageTimeoutRef.current);
            stageTimeoutRef.current = null;
        }

        if(stage === "power"){
            stageTimeoutRef.current = setTimeout(() => setStage("splash"), 1200);
        }

        return () => {
            if(stageTimeoutRef.current){
                clearTimeout(stageTimeoutRef.current);
                stageTimeoutRef.current = null;
            }
        };

    }, [stage]);    

    //--------Keyboard Handling (menu only)-----------
    useEffect(() => {
        if(stage !== "menu") return;

        function handleChoose(){
            if(toolsFocused){
                const toolId = tools[selectedToolIndex].id;
                onToolChoose?.(toolId);
                return;
            }
            
            const mode = selectedOsIndex === 0 ? "professional" : "personal";
            onChoose?.(mode);
        }

        function restartSequence(){
            //reset everything and replay from beginning
            setToolsFocused(false);
            setSelectedOsIndex(0);
            setSelectedToolIndex(0);
            setStage("power");
        }

        const onKeyDown = (e) => {
            const key = e.key;

            //prevent page scroll on arrows/tab
            if(key === "ArrowUp"){
                e.preventDefault();

                if(toolsFocused){
                    setSelectedToolIndex((i) => (i - 1 + tools.length) % tools.length);
                }
                else{
                    setSelectedOsIndex((i) => (i - 1 + osOptions.length) % osOptions.length);
                }
            }

            if(key === "ArrowDown"){
                e.preventDefault();

                if(toolsFocused){
                    setSelectedToolIndex((i) => (i + 1) % tools.length);
                }
                else{
                    setSelectedOsIndex((i) => (i + 1) % osOptions.length);
                } 
            }

            if(key === "Tab"){
                e.preventDefault();
                setToolsFocused((v) => !v);
            }

            if(key === "Enter"){
                e.preventDefault();
                handleChoose();
            }

            if (key === "F8") {
                e.preventDefault();
                restartSequence();
            }
        };

        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [stage, toolsFocused, selectedOsIndex, selectedToolIndex, osOptions, tools, onToolChoose, onChoose]);

    //-------Render current stage-----------
    if(stage === "power") return <Power />

    if(stage === "splash"){
        return (
            <Splash 
                initText="Initializing"
                initTextMs={2000}
                barMs={5000}
                onDone={() => setStage("menu")}
            />
        );
    }

    return(
        <BootMenu 
            title="Andrea's Boot Manager"
            instruction="Choose an page to start, or press TAB to select a surprise:"
            osOptions={osOptions}
            tools={tools}
            selectedOsIndex={selectedOsIndex}
            selectedToolIndex={selectedToolIndex}
            toolsFocused={toolsFocused}
            note="To rewatch that animation, press F8."
        />
    );
}

