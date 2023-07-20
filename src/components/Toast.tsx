import { useToast } from "@chakra-ui/react";
import React from "react";

type Props = {
  title: string;
  description: string;
  status: "info" | "warning" | "success" | "error";
};

const Toast = ({ title, description, status }: Props) => {
  const toast = useToast();

  React.useEffect(() => {
    toast({
      title,
      description,
      status,
      duration: 5000,
      isClosable: true,
    });
  }, [title, description, status, toast]);

  return null;
};

export default Toast;