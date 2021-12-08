import React from "react";

interface Props {
    className?: string;
    label: string;
    value?: boolean;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox = React.forwardRef(
    ({ className, label, value, onChange }: Props, ref: any) => {
        return (
            <label className={className}>
                <input
                    className="mr-1"
                    type="checkbox"
                    ref={ref}
                    checked={value}
                    onChange={onChange}
                />
                {label}
            </label>
        );
    }
);

Checkbox.displayName = "Checkbox";
export default Checkbox;
