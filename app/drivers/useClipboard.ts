export default () => {
    const copyToClipboard = (text: string, onCopied: () => void) => {
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(text)
                .then(onCopied)
                .catch((err) => {
                    console.error("Failed to copy text: ", err);
                });
        } else {
            const textarea = document.createElement("textarea");
            textarea.value = text;
            textarea.style.position = "fixed";
            document.body.appendChild(textarea);
            textarea.focus();
            textarea.select();
            try {
                document.execCommand("copy");
                onCopied()
            } catch (err) {
                console.error("Fallback failed to copy text: ", err);
            } finally {
                document.body.removeChild(textarea);
            }
        }
    }

    return { copyToClipboard };
};
