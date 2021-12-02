import React from "react";

interface Props {
    className?: string;
    label: string;
    value: boolean;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function Checkbox({ className, label, value, onChange }: Props) {
    return (
        <label className={className}>
            <input
                className="mr-1"
                type="checkbox"
                checked={value}
                onChange={onChange}
            />
            {label}
        </label>
    );
}

export default Checkbox;
