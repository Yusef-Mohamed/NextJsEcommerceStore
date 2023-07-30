"use client";
import PreviewModal from "@/components/preview-modal";
import { useEffect, useState } from "react";

const ModalProvider = () => {
  const [isMoutned, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMoutned) {
    return null;
  }
  return (
    <>
      <PreviewModal />
    </>
  );
};

export default ModalProvider;
