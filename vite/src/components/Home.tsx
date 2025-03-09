import { Box, Button, Divider, Flex, Text } from "@chakra-ui/react";
import { FC } from "react";
import { useNavigate } from "react-router";

const Home : FC = () => {
    const navigator = useNavigate();

    return (
        <Flex w="100%" h="100vh" flexDir="column" bgColor="backgroundColor" backgroundImage="/main.jpg" backgroundSize="cover" backgroundPosition="center">
            <Flex
                flexGrow={0.8}
                borderBottomColor="dark-gray"
                borderBottomWidth="2px"
            >
                <Flex
                flexDir="column"
                justifyContent="flex-end"
                position="relative"
                flexGrow={0.75}
                p={4}
                >
                <Box
                    w="100%"
                    alignSelf="center"
                    width="800px"
                    mb={20}
                    color="white"
                    fontWeight="bold"
                    fontSize="20px"
                    position="absolute"
                    left={12}
                    
                >
                    <Flex flexDir="column">
                    <Text fontWeight="bold" fontSize="24px" textAlign="left">
                        <Box
                        as="span"
                        color="teal.400"
                        fontSize="24px"
                        fontWeight="bold"
                        >
                        토큰 다중 전송
                        </Box>
                    </Text>
                    <Divider my={2} w="32%" />
                    <Text fontWeight="bold" fontSize="18px">
                        다양한 네트워크에서 다중 전송 기능을 이용하세요!
                    </Text>
                    <Text fontWeight="bold" fontSize="18px">
                        Arbitrum, BSC 네트워크에서 여러 지갑 주소로 토큰 전송 및 에어드랍이 가능합니다
                    </Text>
                    </Flex>
                </Box>
                <Button
                    p={4}
                    bgColor="teal"
                    w="250px"
                    position="absolute"
                    left={12}
                    mb={4}
                    _hover={{ bg: "teal.400", transform: "scale(1.05)" }}
                    _active={{ bg: "teal.300", transform: "scale(0.95)" }}
                    onClick={() => {navigator("/multi")}}
                >
                    <Text 
                        color="white"
                        position="absolute"
                        fontSize="30px"
                        fontWeight="bold"
                    >
                    토큰 전송
                    </Text>
                </Button>
                </Flex>
            </Flex>
            <Flex
                flexGrow={0.2}
                justifyContent="center"
                alignItems="center"
                gap={4}
                bgColor="gray.800"
            >
            </Flex>
        </Flex>
        
    )
}

export default Home;