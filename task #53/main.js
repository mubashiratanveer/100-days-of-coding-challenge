"use strict";
// Question 53: Pulling Apart a Nested Object: Imagine you have a list inside
//  another list that shows what a computer programmer knows, like coding languages, tools,
//  and software frameworks. Find a way to get three specific skills from this list and show them.
let developerSkills = {
    languages: ["javascript", "html", "CSS"],
    tools: ["git", "VS code", "Docker"],
    frameWork: ["React", "Angular", "Django"]
};
let { languages, tools, frameWork } = developerSkills;
console.log(`languages: ${languages} \n tools: ${tools} \n framework: ${frameWork}`);
