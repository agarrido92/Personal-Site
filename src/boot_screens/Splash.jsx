import React, { useEffect, useRef, useState } from "react";
import logo from "../assets/logo.png"

export default function Splash({initText = "Initializing", initTextMs = 2000, barMs = 5000, onDone = () => {}}) {
    const [phase, setPhase] = useState("text");
    const [dots, setDots] = useState("");

    const doneTimeoutRef = useRef(null);
    const phaseTimeoutRef = useRef(null);
    const dotsIntervalRef = useRef(null);

    //handle phase timing from text to bar
    useEffect(() => {
        phaseTimeoutRef.current = setTimeout(() => setPhase("bar"), initTextMs);
        doneTimeoutRef.current = setTimeout(() => onDone(), initTextMs +barMs);

        return () => {
            if(phaseTimeoutRef.current) clearTimeout(phaseTimeoutRef.current);
            if(doneTimeoutRef.current) clearTimeout(doneTimeoutRef.current);
        };
    }, [initTextMs, barMs, onDone]);

    //handle dots in the text phase
    useEffect(() => {
        if (phase !== "text") return;

        dotsIntervalRef.current = setInterval(() => {
        setDots((d) => (d.length >= 3 ? "" : d + "."));
        }, 350);

        return () => {
        clearInterval(dotsIntervalRef.current);
        setDots(""); 
        };
    }, [phase]);

    return(
        <div className="boot-screen boot-splash">
            <div className="splash-center">
                <img src={logo} alt="Brand logo" className="splash-logo" />
                <div className={`splash-subtitle splash-fade ${phase === "bar" ? "out" : "in"}`}>
                    {initText}{dots}
                </div>
                <div className={`splash-progress splash-fade ${phase === "bar" ? "in" : "out"}`} aria-label="Loading">
                    <div className={`splash-progress-fill ${phase === "bar" ? "run" : ""}`} style={{ animationDuration: `${barMs}ms` }}/>
                </div>
            </div>
        </div>
    );
}