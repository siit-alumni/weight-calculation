
export default function  UserCheckBox({
    visible,
    checked,
    onChange
}) {
    if (!visible) {
        return null;
    }

    return (
        <input
            type="checkbox"
            checked={checked}
            onChange={onChange}
            onClick={(event) => event.stopPropagation()}
        />
    );
}

