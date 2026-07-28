import useTyping from "../../hooks/useTyping";

function TypingText() {
  const text = useTyping();

  return <h3 id="typing">{text}</h3>;
}

export default TypingText;