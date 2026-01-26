import React from "react";
import "../../styles/about.css";

export function AboutData() {
    return (
        <div className="about-grid">
            <section className="panel">
                <header>PROFILE :: OVERVIEW</header>
                <div className="panel-body">
                    <p><strong>Name</strong> Comfort Ngwenya</p>
                    <p><strong>Role</strong> Software Developer</p>
                    <p><strong>Focus</strong> AI Systems · Frontend · Data</p>
                </div>
            </section>

            <section className="panel">
                <header>BACKGROUND :: SUMMARY</header>
                <div className="panel-body">
                    <p>
                        I build interactive systems that sit at the intersection
                        of software engineering and applied artificial intelligence.
                        My focus is on clarity, accessibility, and ethical data usage.
                    </p>

                    <p>
                        I enjoy translating complex technical ideas into intuitive
                        user experiences while maintaining strong architectural
                        foundations across the stack.
                    </p>
                </div>
            </section>

            <section className="panel">
                <header>CORE :: COMPETENCIES</header>
                <div className="panel-body tags">
                    <span>Artificial Intelligence</span>
                    <span>Machine Learning Foundations</span>
                    <span>React & TypeScript</span>
                    <span>API Design</span>
                    <span>Data Analysis</span>
                    <span>Responsible AI</span>
                </div>
            </section>
        </div>
    );
}
