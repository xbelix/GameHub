import { useState } from "react";
import { Button, Text } from "@chakra-ui/react";

interface Props {
  children: string;
}

const ExpandableText = ({ children }: Props) => {
  const [isExpanded, setExpanded] = useState(false);
  const text = isExpanded ? `${children}.` : `${children.slice(0, 300)} ...`;

  if (children.length <= 300) return <Text>{children}</Text>;
  return (
    <Text>
      {isExpanded ? children : text}
      <Button
        fontWeight="bold"
        onClick={() => setExpanded(!isExpanded)}
        colorScheme="yellow"
        size="xs"
        mx={1}
      >
        {isExpanded ? "Show less" : "Show More"}
      </Button>
    </Text>
  );
};

export default ExpandableText;
