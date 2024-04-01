import { Dispatch, SetStateAction } from "react";
import { modes } from "../types";

const Component = ({
    setMode,
}: {
    setMode: Dispatch<SetStateAction<modes>>;
}) => {
    const handleClick = () => {
        setMode("close");
    };
    return (
        <a
            href={`https://bsky.app/intent/compose?text=${encodeURIComponent(
                "今日は3月32日です\nhttps://nkte8.github.io/april/\n\n#3月32日"
            )}`}
            onClick={handleClick}
            className={[
                "p-1",
                "px-6",
                "block",
                "w-full",
                "border-2",
                "rounded-full",
                "text-sky-600",
                "hover:text-blue-600",
                "hover:bg-sky-200",
                "bg-white",
                "bg-opacity-80",
                "transition-colors",
                "text-lg"
            ].join(" ")}
            type="button"
        >
            ポストする！
        </a>
    );
};

export default Component;
