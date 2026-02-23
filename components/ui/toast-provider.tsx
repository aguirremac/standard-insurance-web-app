"use client";

import * as Toast from "@radix-ui/react-toast";
import { createContext, useContext, useState, ReactNode } from "react";

type ToastType = "success" | "error";

type ToastContextType = {
  showToast: (message: string, type?: ToastType) => void;
};

const ToastContext = createContext<ToastContextType | null>(null);

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error("useToast must be used inside ToastProvider");
  return ctx;
}

export function ToastProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [type, setType] = useState<ToastType>("success");

  const showToast = (msg: string, t: ToastType = "success") => {
    setMessage(msg);
    setType(t);
    setOpen(false); // reset
    setTimeout(() => setOpen(true), 10);
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      <Toast.Provider swipeDirection="right">
        {children}

        <Toast.Root
          open={open}
          onOpenChange={setOpen}
          className={`fixed bottom-6 right-6 rounded-xl px-5 py-3 shadow-lg text-white ${
            type === "success" ? "bg-green-600" : "bg-red-600"
          }`}
        >
          <Toast.Title className="font-medium">{message}</Toast.Title>
        </Toast.Root>

        <Toast.Viewport className="fixed bottom-0 right-0 flex flex-col p-6 gap-2 w-96 max-w-[100vw] z-[100]" />
      </Toast.Provider>
    </ToastContext.Provider>
  );
}