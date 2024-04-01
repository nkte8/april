import { useState } from "react";
import Button from "./components/Button";

import { modes } from "./types";

function App() {
    const [mode, setMode] = useState<modes>("open");

    return (
        <div className={["text-center", "my-4", "mx-2"].join(" ")}>
            <div
                className={[
                    "border-2",
                    "border-gray-300",
                    "max-w-full",
                    "w-96",
                    "mx-auto",
                    "px-4",
                    "py-4",
                    "rounded-xl",
                ].join(" ")}
            >
                <img
                    src={"https://cdn.bsky.app/img/feed_thumbnail/plain/did:plc:3ogwpzp2gzdy4bezzbnug37n/bafkreihi4pyyp7kav7gmguqvrzslq23ftpsv3hjwljh6stysgwkfjxqmla@jpeg"}
                    alt="あぬさん(@ringoanu.bsky.social)からお借りした桜です"
                    className={["rounded-xl", "border-2", "my-2"].join(" ")}
                />
                <div className="my-2">今日は3月32日です</div>
                {mode === "open" ? (
                    <Button setMode={setMode} />
                ) : (
                    <div
                        className={[
                            "p-1",
                            "px-6",
                            "block",
                            "w-full",
                            "border-2",
                            "rounded-full",
                        ].join(" ")}
                    >
                        完了でブラウザを閉じ、開いた投稿画面にて
                        <br />
                        <span className="text-sky-600">リンクカードを追加してください。</span>
                    </div>
                )}
            </div>
            Photo:&nbsp;
            <a
                className={["hover:text-red-400", "text-sky-400"].join(" ")}
                href="https://bsky.app/profile/ringoanu.bsky.social/post/3kozwgqkyad2g"
            >
                あぬさん(@ringoanu.bsky.social)
            </a>
        </div>
    );
}

export default App;
