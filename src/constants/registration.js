export const MINIMUM_NAME_CHARACTERS = 4;
export const PASSPORT_REGEX = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
export const SKILLS = [
    { value: "HTML", label: "HTML" },
    { value: "CSS", label: "CSS" },
    { value: "Sass", label: "Sass" },
    { value: "JavaScript", label: "JavaScript" },
    { value: "React", label: "React" },
    { value: "Angular", label: "Angular" },
    { value: "Vue", label: "Vue" },
    { value: "PHP", label: "PHP" },
    { value: "C#", label: "C#" },
    { value: "Wordpress", label: "Wordpress" },
    { value: "MySQL", label: "MySQL" }
];
export const DEFAULT_VALUES = {
    skills: ""
};
