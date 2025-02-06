"use client";

import React, { useRef } from "react";
import { useRouter } from "next/navigation";
import { X } from "lucide-react";

interface FormResetButtonProps {
  formInputs: string[];
  formURL: string;
}

const FormResetButton: React.FC<FormResetButtonProps> = ({
  formInputs,
  formURL,
}) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const router = useRouter();

  const handleReset = () => {
    const form = buttonRef?.current?.closest("form");
    if (form instanceof HTMLFormElement) {
      formInputs.forEach((inputName) => {
        form[inputName].value = "";
      });
      router.push(formURL, { scroll: false });
      form.query.focus();
    }
  };

  return (
    <button
      type="reset"
      className="circle-button bg-secondary hover:bg-secondary/85 text-secondary-foreground"
      ref={buttonRef}
      onClick={handleReset}
      onKeyUp={(e) => e.key === "Enter" && handleReset()}
    >
      <X />
    </button>
  );
};

export default FormResetButton;
