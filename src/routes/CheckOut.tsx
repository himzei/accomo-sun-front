import { useEffect } from "react";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Checkbox,
  Grid,
  HStack,
  Image,
  Select,
  Text,
  VStack,
} from "@chakra-ui/react";
import { IoIosArrowBack } from "react-icons/io";
import { useLocation, useNavigate } from "react-router-dom";

export default function CheckOut() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  const navigate = useNavigate();
  return (
    <VStack w="full" my="20" alignItems={"center"} spacing="8">
      <HStack w="7xl" spacing={2}>
        <Button variant={"ghost"} p="0" onClick={() => navigate(-1)}>
          <IoIosArrowBack size="24" />
        </Button>
        <Text fontSize="28" fontWeight={600}>
          확인 및 결제
        </Text>
      </HStack>
      <Grid w="7xl" templateColumns={"2fr 1fr"} gap={4}>
        <VStack w="full" rounded="lg" spacing="4">
          {/* 예약 정보 */}
          <VStack
            p="8"
            w="full"
            border="1px"
            borderColor="gray.300"
            rounded={"lg"}
            alignItems={"flex-start"}
            spacing="6"
          >
            <Text fontSize="24" fontWeight={600}>
              예약정보
            </Text>
            <HStack>
              <Box w="316px" h="178px" overflow={"hidden"} rounded="lg">
                <Image
                  objectFit={"cover"}
                  src="https://plus.unsplash.com/premium_photo-1668383208163-6acb12673857?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                />
              </Box>
              <VStack alignItems={"flex-start"} h="full" p="4">
                <Text fontWeight={600} fontSize="18">
                  아이캔 4번룸
                </Text>
                <Text fontSize="18">
                  [마리따] m01, 바닷가 바로 앞,커플,10평형원룸,
                  조용한마을,곽지,협재 인근
                </Text>
              </VStack>
            </HStack>
            <VStack
              w="full"
              borderTop="1px"
              borderBottom="1px"
              borderColor="gray.300"
              py="2"
            >
              <HStack w="full" justifyContent="space-between">
                <HStack spacing="8" w="full">
                  <Text fontSize="18px">예약날짜</Text>
                  <Text fontSize="18px">2월 7일(화요일)</Text>
                </HStack>
                <Text w="100px" textAlign={"end"} as="u">
                  수정
                </Text>
              </HStack>
              <Box w="full" h="1px" bg="gray.300" />
              <HStack w="full" justifyContent="space-between">
                <HStack spacing="8" w="full">
                  <Text fontSize="18px">예약시간</Text>
                  <Text fontSize="18px">10:30 ~ 13:30(3시간)</Text>
                </HStack>
                <Text w="100px" textAlign={"end"} as="u">
                  수정
                </Text>
              </HStack>
              <Box w="full" h="1px" bg="gray.300" />
              <HStack w="full" justifyContent="space-between">
                <HStack spacing="8" w="full">
                  <Text fontSize="18px">예약인원</Text>
                  <Text fontSize="18px">4명</Text>
                </HStack>
                <Text w="100px" textAlign={"end"} as="u">
                  수정
                </Text>
              </HStack>
            </VStack>
          </VStack>

          {/* 결제방식 선택 */}
          <VStack
            p="8"
            w="full"
            border="1px"
            borderColor="gray.300"
            rounded={"lg"}
            alignItems={"flex-start"}
            spacing="6"
          >
            <Text fontSize="24" fontWeight={600}>
              결제방식 선택
            </Text>
            <Select placeholder="Select option">
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
            <Text as="u">쿠폰 입력하기</Text>
          </VStack>

          {/* 환불정책 */}
          <VStack
            p="8"
            w="full"
            border="1px"
            borderColor="gray.300"
            rounded={"lg"}
            alignItems={"flex-start"}
            spacing="6"
          >
            <Text fontSize="24" fontWeight={600}>
              환불정책
            </Text>
            <VStack alignItems="flex-start" spacing="0">
              <Text>
                이용당일 (첫 날) 이후에 환불 관련 사항은 운영자에게 직접
                문의하셔야 합니다.{" "}
              </Text>
              <Text>
                결제 후 2시간 이내에는 100% 환불이 가능합니다. (단, 이용시간
                전까지만 가능)
              </Text>
            </VStack>
            <VStack
              w="full"
              borderTop="1px"
              borderBottom="1px"
              borderColor="gray.300"
              py="2"
            >
              <HStack w="full" justifyContent="space-between">
                <HStack spacing="8" w="full">
                  <Text fontSize="18px" w="100px">
                    이용 8일 전
                  </Text>
                  <Text fontSize="18px">총 금액의 100% 환불</Text>
                </HStack>
                <Text w="100px" textAlign={"end"} as="u"></Text>
              </HStack>
              <Box w="full" h="1px" bg="gray.300" />

              <HStack w="full" justifyContent="space-between">
                <HStack spacing="8" w="full">
                  <Text fontSize="18px" w="100px">
                    이용 7일 전
                  </Text>
                  <Text fontSize="18px">총 금액의 90% 환불</Text>
                </HStack>
                <Text w="100px" textAlign={"end"} as="u"></Text>
              </HStack>
              <Box w="full" h="1px" bg="gray.300" />

              <HStack w="full" justifyContent="space-between">
                <HStack spacing="8" w="full">
                  <Text fontSize="18px" w="100px">
                    이용 6일 전
                  </Text>
                  <Text fontSize="18px">총 금액의 80% 환불</Text>
                </HStack>
                <Text w="100px" textAlign={"end"} as="u"></Text>
              </HStack>
              <Box w="full" h="1px" bg="gray.300" />

              <HStack w="full" justifyContent="space-between">
                <HStack spacing="8" w="full">
                  <Text fontSize="18px" w="100px">
                    이용 5일 전
                  </Text>
                  <Text fontSize="18px">총 금액의 70% 환불</Text>
                </HStack>
                <Text w="100px" textAlign={"end"} as="u"></Text>
              </HStack>
              <Box w="full" h="1px" bg="gray.300" />

              <HStack w="full" justifyContent="space-between">
                <HStack spacing="8" w="full">
                  <Text fontSize="18px" w="100px">
                    이용 4일 전
                  </Text>
                  <Text fontSize="18px">총 금액의 60% 환불</Text>
                </HStack>
                <Text w="100px" textAlign={"end"} as="u"></Text>
              </HStack>
              <Box w="full" h="1px" bg="gray.300" />

              <HStack w="full" justifyContent="space-between">
                <HStack spacing="8" w="full">
                  <Text fontSize="18px" w="100px">
                    이용 3일 전
                  </Text>
                  <Text fontSize="18px">총 금액의 50% 환불</Text>
                </HStack>
                <Text w="100px" textAlign={"end"} as="u"></Text>
              </HStack>
              <Box w="full" h="1px" bg="gray.300" />

              <HStack w="full" justifyContent="space-between">
                <HStack spacing="8" w="full">
                  <Text fontSize="18px" w="100px">
                    이용 2일 전
                  </Text>
                  <Text fontSize="18px">총 금액의 40% 환불</Text>
                </HStack>
                <Text w="100px" textAlign={"end"} as="u"></Text>
              </HStack>
              <Box w="full" h="1px" bg="gray.300" />

              <HStack w="full" justifyContent="space-between">
                <HStack spacing="8" w="full">
                  <Text fontSize="18px" w="100px">
                    이용 전날
                  </Text>
                  <Text fontSize="18px">환불 불가</Text>
                </HStack>
                <Text w="100px" textAlign={"end"} as="u"></Text>
              </HStack>
              <Box w="full" h="1px" bg="gray.300" />

              <HStack w="full" justifyContent="space-between">
                <HStack spacing="8" w="full">
                  <Text fontSize="18px" w="100px">
                    이용 당일
                  </Text>
                  <Text fontSize="18px">환불 불가</Text>
                </HStack>
                <Text w="100px" textAlign={"end"} as="u"></Text>
              </HStack>
            </VStack>
          </VStack>

          {/* 서비스 동의 */}
          <VStack
            p="8"
            w="full"
            border="1px"
            borderColor="gray.300"
            rounded={"lg"}
            alignItems={"flex-start"}
            spacing="6"
          >
            <Text fontSize="24" fontWeight={600}>
              서비스 동의
            </Text>
            <VStack w="full" py="2">
              <Accordion defaultIndex={[0]} allowMultiple w="full">
                {/* 전체동의 */}
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left">
                        <Checkbox value="naruto">
                          <Text fontWeight={600}>전체동의</Text>
                        </Checkbox>
                      </Box>
                    </AccordionButton>
                  </h2>
                </AccordionItem>

                {/* 이용규칙 및 취소/환불규정 동의 */}
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left">
                        <Checkbox value="naruto">
                          <Text>이용규칙 및 취소/환불규정 동의</Text>
                        </Checkbox>
                      </Box>
                    </AccordionButton>
                  </h2>
                </AccordionItem>

                {/* 개인정보 수집 및 이용 동의 */}
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left">
                        <Checkbox value="naruto">
                          <Text>개인정보 수집 및 이용 동의</Text>
                        </Checkbox>
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </AccordionPanel>
                </AccordionItem>

                {/* 개인정보 제3자 제공동의 */}
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left">
                        <Checkbox value="naruto">
                          <Text>개인정보 제 3자 제공동의</Text>
                        </Checkbox>
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </VStack>
          </VStack>
        </VStack>
        <VStack w="full">
          <VStack
            p="8"
            w="full"
            border="1px"
            borderColor="gray.300"
            rounded={"lg"}
            alignItems={"flex-start"}
            spacing="6"
            position="sticky"
            bg="gray.50"
            top="80px"
          >
            <Text fontSize="24" fontWeight={600}>
              결제 예정금액
            </Text>
            <VStack
              w="full"
              alignItems="flex-start"
              spacing="0"
              borderColor="gray.300"
            >
              <HStack w="full" justifyContent="space-between" py="3" px="2">
                <Text fontSize="16px" w="240px" color="gray.500">
                  1번룸 10:00 ~ 13:00(3시간)
                </Text>
                <Text fontSize="16px" fontWeight={600}>
                  12,000원
                </Text>
              </HStack>
              <HStack w="full" justifyContent="space-between" py="3" px="2">
                <Text fontSize="16px" w="240px" color="gray.500">
                  1인(인원추가)
                </Text>
                <Text fontSize="16px" fontWeight={600}>
                  3,000원
                </Text>
              </HStack>
              <HStack w="full" justifyContent="space-between" py="3" px="2">
                <Text fontSize="16px" w="240px" color="gray.500">
                  노트북 대여
                </Text>
                <Text fontSize="16px" fontWeight={600}>
                  0원
                </Text>
              </HStack>
              <Box w="full" h="1px" bg="gray.300" />
              <HStack w="full" justifyContent="space-between" py="3" px="2">
                <Text
                  fontSize="16px"
                  w="240px"
                  color="red.500"
                  fontWeight={600}
                >
                  총금액
                </Text>
                <Text fontSize="16px" color="red.500" fontWeight={600}>
                  15,000원
                </Text>
              </HStack>
              <Box py="8" />
              <Box w="full">
                <Button w="full" colorScheme={"red"}>
                  결제하기
                </Button>
              </Box>
            </VStack>
          </VStack>
        </VStack>
      </Grid>
    </VStack>
  );
}
