"use client";

import Button from "@/components/ui/Button";
import { Color, Size } from "@/types";
import { Plus, X } from "lucide-react";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import IconButton from "@/components/ui/icon-button";
import Filter from "./Filter";

interface MobileFiltersProps {
  sizes: Size[];
  colors: Color[];
}
const MobileFilters: React.FC<MobileFiltersProps> = ({ sizes, colors }) => {
  const [isOpen, setIsOpen] = useState(false);
  const onOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);
  return (
    <>
      <Button onClick={onOpen} className="flex items-center gap-x-2  lg:hidden">
        Filters <Plus size={20} />
      </Button>
      <Dialog
        open={isOpen}
        onClose={onClose}
        className="relative z-40 lg:hidden"
        as="div"
      >
        {/*Backgorund*/}
        <div className="fixed inset-0 bg-black bg-opacity-25" />
        <div className=" fixed inset-0 z-40 flex">
          <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl">
            <div className="flex items-center justify-end px-4">
              <IconButton
                icon={<X size={15} />}
                onClick={onClose}
                className=""
              />
            </div>
            <div className="p-4">
              <Filter valueKey="sizeid" name="Sizes" data={sizes} />
              <Filter valueKey="colorid" name="Colors" data={colors} />
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
};

export default MobileFilters;
