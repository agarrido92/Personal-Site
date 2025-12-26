import React from "react";

export default function BootMenu({title, instruction, osOptions, tools, selectedOsIndex, selectedToolIndex, toolsFocused, note}) {
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
                <div className="boot-note">{note}</div>
                <div className="boot-tools">
                    <div className="boot-tools-label">Surprises:</div>
                    {tools.map((tool, idx) => {
                        const selected = toolsFocused && idx === selectedToolIndex;

                        return (
                            <div key={`${tool.id}-${idx}`} className={`boot-item ${selected ? "selected" : ""}`}>
                                <span className="boot-item-text">{tool.label}</span>
                            </div>
                        )
                    })}
                </div>
                <div className="boot-hint">
                    <span>↑/↓ = Select</span>
                    <span style={{ marginLeft: 12 }}>TAB = Tools</span>
                    <span style={{ marginLeft: 12 }}>ENTER = Choose</span>
                </div>
            </div>
        </div>
    );
}