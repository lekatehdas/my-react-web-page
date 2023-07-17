import { Box, Button, Text, Image, Stack } from '@chakra-ui/react';

const About = () => {
  return (
    <Box pt={10} pb={10} display='flex' flexDirection='column' alignItems='center'>
      <Image
        src="path-to-your-image.jpg"
        alt="About Image"
        objectFit='cover'
        mb={5}
      />
      <Box
        maxW={['90%', '80%', '70%']}
        p={5}
        borderRadius='lg'
        shadow='md'
        backgroundColor='white'
      >
        <Text
          fontSize={['lg', 'xl', '2xl']}
          textAlign='center'
          mb={5}
        >
          This is a simple example of an about page. It has some text and two buttons.
        </Text>
        <Stack direction={['column', 'row']} spacing={4}>
          <Button colorScheme='teal' variant='outline' width={['100%', 'auto']}>
            Button 1
          </Button>
          <Button colorScheme='teal' variant='solid' width={['100%', 'auto']}>
            Button 2
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default About;
