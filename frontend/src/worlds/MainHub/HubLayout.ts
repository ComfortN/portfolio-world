export type TileType =
| "EMPTY"
| "CORE"
| "ABOUT"
| "SKILLS"
| "PROJECTS"
| "CAPSTONE"
| "CONTACT";


export interface Tile {
x: number;
y: number;
type: TileType;
label?: string;
}


export const HUB_WIDTH = 9;
export const HUB_HEIGHT = 9;


// Grid origin is top-left (0,0)
// Player starts at CORE
export const hubLayout: Tile[] = [
// ─── About & Skills ─────────────────────────
{ x: 2, y: 1, type: "ABOUT", label: "About Me" },
{ x: 6, y: 1, type: "SKILLS", label: "Skills" },


// ─── Vertical connectors ────────────────────
{ x: 2, y: 2, type: "EMPTY" },
{ x: 6, y: 2, type: "EMPTY" },


// ─── Core Hub ───────────────────────────────
{ x: 4, y: 4, type: "CORE", label: "Nqobile Ngwenya" },


// ─── Horizontal connectors ──────────────────
{ x: 3, y: 4, type: "EMPTY" },
{ x: 5, y: 4, type: "EMPTY" },


// ─── Projects & Capstone ────────────────────
{ x: 2, y: 6, type: "PROJECTS", label: "Projects" },
{ x: 6, y: 6, type: "CAPSTONE", label: "Capstone" },


// ─── Contact ────────────────────────────────
{ x: 4, y: 8, type: "CONTACT", label: "Contact" }
];