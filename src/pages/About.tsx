import { Box, Button, Text, Image, Stack } from '@chakra-ui/react';
import pic_me from '../assets/me.jpg';

const About = () => {
  return (
    <Box pt={10} pb={10} display='flex' flexDirection='column' alignItems='center' h='100vh' as='section'>
      <Image
        src={pic_me}
        alt="About Image"
        objectFit='cover'
        flex='2'
        borderRadius='lg'
        shadow='md'
        backgroundColor='secondary.500'
      />
      <Box
        flex='2'
        p={5}
      >
        <Text
          fontSize={['2xl', '3xl', '4xl']}
          textAlign='center'
          mb={2}
        >
          My name is <Text as='span' fontWeight='bold' color='secondary'>Aki</Text>
        </Text>
        <Text
          fontSize={['lg', 'xl', '2xl']}
          textAlign='center'
          mb={5}
        >
          I'm a computer science graduate with a passion for coding.
        </Text>
        <Stack direction={['column', 'row']} spacing={4}>
          <Button colorScheme='highlight' variant='solid' width={['100%', 'auto']}>
            Download CV
          </Button>
          <Button colorScheme='highlight' variant='solid' width={['100%', 'auto']}>
            Hire Me
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default About;
