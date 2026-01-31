import React from "react";
import { PresenceLine } from "./PresenceLine";
import "../../styles/about.css";

export function AboutData() {
    return (
        <div className="about-layout">

            {/* LEFT — IDENTITY */}
            <section className="panel identity-panel">
                <header>IDENTITY</header>
                <div className="panel-body">
                    <p className="identity-name">Nqobile Ngwenya</p>
                    <p className="identity-role">Software Developer</p>
                    <p className="identity-meta">South Africa</p>
                </div>
            </section>

            {/* CENTER — PRESENCE (ANIMATED) */}
            <section className="panel presence-panel">
                <header>ABOUT ME</header>
                <div className="panel-body presence-body">
                    <PresenceLine
                        delay={0.2}
                        text="I design and build interactive digital systems with a focus on clarity, intention, and human-centered problem solving."
                    />

                    <PresenceLine
                        delay={0.6}
                        text="My work lives at the intersection of software engineering, applied artificial intelligence, and thoughtful interface design."
                    />

                    <PresenceLine
                        delay={1.0}
                        text="I care deeply about how people experience technology, and how responsible design decisions shape trust."
                    />
                </div>
            </section>

            {/* RIGHT — PHILOSOPHY */}
            <section className="panel philosophy-panel">
                <header>PHILOSOPHY</header>
                <div className="panel-body philosophy-list">
                    <span>Clarity over complexity</span>
                    <span>Systems before features</span>
                    <span>Ethical AI by design</span>
                    <span>Accessibility as default</span>
                    <span>Learning in public</span>
                </div>
            </section>

        </div>
    );
}
