import {
    Box,
    Button,
    FormControl,
    FormLabel,
    GridItem,
    Input,
    Text,
    Textarea,
    VStack,
    Grid
} from "@chakra-ui/react";
import React from "react";
import useForm, {FormProps} from "../hooks/useForm.ts";
import Toast from "../components/Toast.tsx";

const Contact = () => {
    const {handleSubmit, success, error} = useForm()

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const data: FormProps = {
            name: formData.get('name') as string,
            email: formData.get('email') as string,
            message: formData.get('message') as string
        }

        const formElement = e.currentTarget

        handleSubmit(data)
            .then(() => formElement.reset())
            .catch(err => console.log("Error occurred: " + err))
    };

    return (
        <Grid
            gap={6}
            p={10}
        >
            <GridItem>
                <Text fontSize={'xl'} textAlign={'center'}>Lets work together!</Text>
                <Text fontSize={'sm'} textAlign={'center'}>Send me a message.</Text>
            </GridItem>

            <GridItem>
                <Box
                    as="form"
                    padding={4}
                    borderWidth={1}
                    borderRadius="lg"
                    boxShadow="lg"
                    onSubmit={onSubmit}
                >
                    <VStack spacing={4}>
                        <FormControl isRequired>
                            <FormLabel htmlFor="name">Name</FormLabel>
                            <Input type="text" id="name" name="name"/>
                        </FormControl>

                        <FormControl isRequired>
                            <FormLabel htmlFor="email">Email address</FormLabel>
                            <Input type="email" id="email" name="email"/>
                        </FormControl>

                        <FormControl isRequired>
                            <FormLabel htmlFor="message">Message</FormLabel>
                            <Textarea id="message" name="message" maxLength={1024}/>
                        </FormControl>

                        <Button type="submit" colorScheme="highlight">
                            Submit
                        </Button>
                    </VStack>
                </Box>
            </GridItem>
            {success && (
                <Toast
                    title="Message sent."
                    description="I will get back to you soon."
                    status="success"
                />
            )}
            {error && (
                <Toast
                    title="An error occurred."
                    description="Unable to send your message. Please try again."
                    status="error"
                />
            )}
        </Grid>
    );
};

export default Contact;
