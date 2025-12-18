import React from 'react'
import TitleHeader from "../components/TitleHeader.jsx";
import { skillHighlights, skillCategories } from "../constants/index.js";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const TechStack = () => {

    useGSAP(() => {

        gsap.fromTo(
            ".skill-card",
            {
                y: 50,
                opacity: 0,
            },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: "power2.inOut",
                stagger: 0.2,
                scrollTrigger: {
                    trigger: "#skills",
                    start: "top center",
                },
            }
        );

        gsap.fromTo(
            ".skill-pill",
            { opacity: 0, y: 15 },
            {
                opacity: 1,
                y: 0,
                delay: 0.2,
                duration: 0.6,
                stagger: 0.05,
                ease: "power1.out",
                scrollTrigger: {
                    trigger: "#skills",
                    start: "top center",
                },
            }
        );
    });

    return (
        <div id="skills" className="flex-center section-padding">
            <div className="w-full h-full px-5">
                <TitleHeader title="My Artillery ⚔️🥷🏼" sub="🤝 The weapons I bring to the table" />

                <div className="skill-intro card-border">

                    <div className="skill-highlight-grid">
                        {skillHighlights.map((highlight) => (
                            <div key={highlight.label} className="skill-highlight card-border">
                                <p className="skill-highlight__label">{highlight.label}</p>
                                <div className="skill-pill-row">
                                    {highlight.skills.map((skill) => (
                                        <span key={skill} className="skill-pill skill-pill--ghost">{skill}</span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="skill-grid">
                    {skillCategories.map((group) => (
                        <div key={group.title} className="card-border skill-card">
                            <div className="skill-card__header">
                                <div>
                                    <p className="skill-card__kicker">{group.usage}</p>
                                    <h4 className="skill-card__title">{group.title}</h4>
                                </div>
                            </div>
                            <p className="skill-card__desc">{group.description}</p>
                            <div className="skill-pill-grid">
                                {group.skills.map((skill) => (
                                    <span key={skill} className="skill-pill">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default TechStack
