"use client";
import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
const ToastProvider = () => {
  const [isMoutned, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMoutned) {
    return null;
  }
  return (
    <>
      <Toaster />
    </>
  );
};

export default ToastProvider;
