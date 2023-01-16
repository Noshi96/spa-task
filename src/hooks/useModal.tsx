import { useState } from 'react';

const useModal = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggle = () => {
    setIsOpen(prevState => !prevState);
  };

  return { isOpen, toggle };
};

export default useModal;
