import React from "react";

export default function BootMenu({title, instruction, osOptions, tools, selectedOsIndex, toolsFocused, footer}) {
    return (
        <div className="boot-screen boot-menu">
            <div className="boot-wrap">
                <div className="boot-title">{title}</div>
                <div className="boot-instruction">{instruction}</div>
                <div className="boot-list">
                    {osOptions.map((label, idx) => {
                        const selected = !toolsFocused && idx === selectedOsIndex;
                        return (
                            <div key={`${label}-${idx}`} className={`boot-item ${selected ? "selected" : ""}`}>
                                <span className="boot-item-text">{label}</span>
                            </div>
                        );
                    })}
                </div>
                <div className="boot-tools">
                    <div className="boot-tools-label">Tools:</div>
                    <div className={`boot-item ${toolsFocused ? "selected" : ""}`}>
                        <span className="boot-item-text">{tools[0] || ""}</span>
                    </div>
                </div>
                <div className="boot-footer">{footer}</div>
                <div className="boot-hint">
                    <span>↑/↓ = Select</span>
                    <span style={{ marginLeft: 12 }}>TAB = Tools</span>
                    <span style={{ marginLeft: 12 }}>ENTER = Choose</span>
                </div>
            </div>
        </div>
    );
}