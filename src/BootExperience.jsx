import React, { useEffect, useMemo, useRef, useState } from "react";
import Power from './boot_screens/Power.jsx';
import Splash from './boot_screens/Splash.jsx';
import BootMenu from './boot_screens/BootMenu.jsx';
import './styles/boot.css';

export default function BootExperience() {
    
    const [stage, setStage] = useState("power");

    //Boot menu stage
    const osOptions = useMemo(() => ["Windows 7", "Windows 7 (Recovered)"], []);

    const tools = useMemo(() => ["Windows Memory Diagnostic"], []);

    //Boot menu state
    const [selectedOsIndex, setSelectedOsIndex] = useState(0);
    const [toolsFocused, setToolsFocused] = useState(false);

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
            //not currently set up for the two options for personal page
            if(toolsFocused){
                alert(`Tool selected: ${tools[0]}`);
                return;
            }
            
            alert(`OS selected: ${osOptions[selectedOsIndex]}`);
        }

        function restartSequence(){
            //reset everything and replay from beginning
            setToolsFocused(false);
            setSelectedOsIndex(0);
            setStage("power");
        }

        const onKeyDown = (e) => {
            const key = e.key;

            //prevent page scroll on arrows/tab
            if(key === "ArrowUp"){
                e.preventDefault();
                if(toolsFocused) return;  //tools only has one line; ignore up and down
                setSelectedOsIndex((i) => (i - 1 + osOptions.length) % osOptions.length);
            }

            if(key === "ArrowDown"){
                e.preventDefault();
                if(toolsFocused) return;
                setSelectedOsIndex((i) => (i + 1) % osOptions.length);
            }

            if(key === "Tab"){
                e.preventDefault();
                setToolsFocused((v) => !v);
            }

            if(key === "Enter"){
                e.preventDefault();
                handleChoose();
            }

            // Optional: quick restart for dev
            if (key.toLowerCase() === "r") {
                e.preventDefault();
                restartSequence();
            }
        };

        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [stage, toolsFocused, selectedOsIndex, osOptions, tools]);

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
            title="Windows Boot Manager"
            instruction="Choose an operating system to start, or press TAB to select a tool:"
            osOptions={osOptions}
            tools={tools}
            selectedOsIndex={selectedOsIndex}
            toolsFocused={toolsFocused}
            footer="To specify an advanced option for this choice, press F8."
        />
    );
}

