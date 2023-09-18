import {
  HStack,
  List,
  ListItem,
  Skeleton,
  SkeletonText,
} from "@chakra-ui/react";

const GenreListSkeleton = () => {
  const skeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
  return (
    <List>
      {skeleton.map((skel) => (
        <ListItem key={skel} py="5px">
          <HStack>
            <Skeleton borderRadius={8} boxSize="32px" />
            <SkeletonText width="100%" noOfLines={1} />
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreListSkeleton;
