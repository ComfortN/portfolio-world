import clsx from "clsx";

interface Props {
    label: string;
    category: string;
    active: boolean;
}

export function SkillNode({ label, category, active }: Props) {
    return (
        <div
            role="button"
            aria-selected={active}
            tabIndex={-1}
            className={clsx("skill-node", category, active && "active")}
        >            {label}
        </div>
    );
}
