import { useEffect } from "react";

export const useCardUtils = (
  inputRef: {
    current: HTMLInputElement | null;
  },
  setCardNumber: React.Dispatch<
    React.SetStateAction<{
      section1: string;
      section2: string;
      section3: string;
      section4: string;
    }>
  >
) => {
  useEffect(() => {
    const handlePaste = (event: ClipboardEvent) => {
      // Access the pasted data
      const pastedText = event.clipboardData?.getData("text/plain") || "";

      // Do something with the pasted text
      console.log("Pasted text:", pastedText);

      // Update the input field (if needed)
      if (inputRef.current) {
        setCardNumber({
          section1: pastedText.substring(0, 4),
          section2: pastedText.substring(4, 8),
          section3: pastedText.substring(8, 12),
          section4: pastedText.substring(12, 16),
        });
      }
    };

    if (inputRef.current) {
      inputRef.current.addEventListener("paste", handlePaste);
    }

    return () => {
      if (inputRef.current) {
        inputRef.current.removeEventListener("paste", handlePaste);
      }
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Backspace") {
        if (inputRef.current) {
          setCardNumber({
            section1: "",
            section2: "",
            section3: "",
            section4: "",
          });
        }
      }
    };

    if (inputRef.current) {
      inputRef.current.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      if (inputRef.current) {
        inputRef.current.removeEventListener("keydown", handleKeyDown);
      }
    };
  }, []);
};
