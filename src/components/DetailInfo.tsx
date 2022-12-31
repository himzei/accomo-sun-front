import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Text,
  VStack,
} from "@chakra-ui/react";
import LocationMap from "./LocationMap";

export default function DetailInfo() {
  return (
    <>
      <Accordion defaultIndex={[0]} allowMultiple>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                기본 정보
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <VStack
              w="4xl"
              bg="gray.100"
              py="8"
              px="4"
              spacing={6}
              alignItems="flex-start"
            >
              <VStack spacing={1} w="full" alignItems={"flex-start"}>
                <Text>혜택안내</Text>
                <Text fontSize="sm" color="gray.700">
                  요금할인
                </Text>
              </VStack>
              <VStack spacing={1} w="full" alignItems={"flex-start"}>
                <Text>주차장 정보</Text>
                <Text fontSize="sm" color="gray.700">
                  -지하 타워 주차장 2개 포함 지상주차장 총 40대 주차가능
                  -선주차는 프런트에 문의후 가능 -발렛서비스 제공 지상주차장으로
                  입차후 차량키는 차에두고 로비로 들어오심됩니다. 총 40대
                  주차시설 보유
                </Text>
              </VStack>
              <VStack spacing={1} w="full" alignItems={"flex-start"}>
                <Text>추가 안내사항</Text>
                <Text fontSize="sm" color="gray.700">
                  연박예약 이용시 공지사항 연박 예약시 얼리체크인메뉴로
                  예약바랍니다.
                  <br />
                  일반객실메뉴로 예약시 입실시간과 퇴실시간이 정해져있기 때문에{" "}
                  <br /> 그 시간과 동일하게 입퇴실 하지않는이상 현장 추가료가
                  발생됨을 공지합니다. <br />
                  현장에서 그런게있니 없니 따지시는 고객님은 퇴실조치합니다.
                </Text>
              </VStack>
              <LocationMap />
            </VStack>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                편의시설 및 서비스
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <VStack
              w="4xl"
              bg="gray.100"
              py="8"
              px="4"
              spacing={6}
              alignItems="flex-start"
            >
              <VStack spacing={1} w="full" alignItems={"flex-start"}>
                <Text>혜택안내</Text>
                <Text fontSize="sm" color="gray.700">
                  요금할인
                </Text>
              </VStack>
              <VStack spacing={1} w="full" alignItems={"flex-start"}>
                <Text>주차장 정보</Text>
                <Text fontSize="sm" color="gray.700">
                  -지하 타워 주차장 2개 포함 지상주차장 총 40대 주차가능
                  -선주차는 프런트에 문의후 가능 -발렛서비스 제공 지상주차장으로
                  입차후 차량키는 차에두고 로비로 들어오심됩니다. 총 40대
                  주차시설 보유
                </Text>
              </VStack>
              <VStack spacing={1} w="full" alignItems={"flex-start"}>
                <Text>추가 안내사항</Text>
                <Text fontSize="sm" color="gray.700">
                  연박예약 이용시 공지사항 연박 예약시 얼리체크인메뉴로
                  예약바랍니다.
                  <br />
                  일반객실메뉴로 예약시 입실시간과 퇴실시간이 정해져있기 때문에{" "}
                  <br /> 그 시간과 동일하게 입퇴실 하지않는이상 현장 추가료가
                  발생됨을 공지합니다. <br />
                  현장에서 그런게있니 없니 따지시는 고객님은 퇴실조치합니다.
                </Text>
              </VStack>
            </VStack>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                판매자 정보
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <VStack
              w="4xl"
              bg="gray.100"
              py="8"
              px="4"
              spacing={6}
              alignItems="flex-start"
            >
              <VStack spacing={1} w="full" alignItems={"flex-start"}>
                <Text>혜택안내</Text>
                <Text fontSize="sm" color="gray.700">
                  요금할인
                </Text>
              </VStack>
              <VStack spacing={1} w="full" alignItems={"flex-start"}>
                <Text>주차장 정보</Text>
                <Text fontSize="sm" color="gray.700">
                  -지하 타워 주차장 2개 포함 지상주차장 총 40대 주차가능
                  -선주차는 프런트에 문의후 가능 -발렛서비스 제공 지상주차장으로
                  입차후 차량키는 차에두고 로비로 들어오심됩니다. 총 40대
                  주차시설 보유
                </Text>
              </VStack>
              <VStack spacing={1} w="full" alignItems={"flex-start"}>
                <Text>추가 안내사항</Text>
                <Text fontSize="sm" color="gray.700">
                  연박예약 이용시 공지사항 연박 예약시 얼리체크인메뉴로
                  예약바랍니다.
                  <br />
                  일반객실메뉴로 예약시 입실시간과 퇴실시간이 정해져있기 때문에{" "}
                  <br /> 그 시간과 동일하게 입퇴실 하지않는이상 현장 추가료가
                  발생됨을 공지합니다. <br />
                  현장에서 그런게있니 없니 따지시는 고객님은 퇴실조치합니다.
                </Text>
              </VStack>
            </VStack>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </>
  );
}
