import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer({answer, hint}: {answer: string, hint: string}): React.JSX.Element {
    const [answerVisible, setanswerVisible] = useState<boolean>(false);
    const [answerHintVisible, setanswerHintVisible] = useState<boolean>(false);
    const [hintGotten, setHintGotten] = useState<boolean>(false);

    function toggleVisibility() {
        if (answerVisible) {
            setanswerVisible(false);
        } else {
            setanswerVisible(true);
        }
    }

    function toggleHintVisibility() {
        if (answerHintVisible) {
            setanswerHintVisible(false);
        } else {
            setHintGotten(true);
            setanswerHintVisible(true);
        }
    }

    return (
        <div>
            Answer: {answerVisible && answer}
            Hint: {answerHintVisible ? hint : ""}
            <span>
                <Button disabled={!hintGotten} onClick={toggleVisibility}>
                    Toggle Answer Visibility
                </Button>
            </span>
            <span>
                <Button onClick={toggleHintVisibility}>
                    Toggle Hint Visibility
                </Button>
            </span>
        </div>
    );
}
