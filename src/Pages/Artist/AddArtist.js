import React, { useState } from "react";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
import {
  NativeBaseProvider,
  Box,
  Text,
  Heading,
  VStack,
  FormControl,
  Input,
  Link,
  Button,
  Icon,
  IconButton,
  HStack,
  Divider,
} from "native-base";

export default function AddArtist() {
  const [name, setName] = useState("");
  const [old, setOld] = useState("");
  const [type, setType] = useState("");
  const [startCareer, setStartCareer] = useState("");

  const submit = () => {
    const data = {
      name,
      old,
      type,
      startCareer,
    };
    console.log("DateBeforeSend: ", data);
  };
  return (
    <NativeBaseProvider>
      <Box safeArea flex={1} p={2} w="90%" mx="auto">
        <Heading size="lg" color="#FF7800">
          Add Artist
        </Heading>

        <VStack space={2} mt={5}>
          <FormControl>
            <FormControl.Label
              _text={{ color: "muted.700", fontSize: "sm", fontWeight: 600 }}
            >
              Name
            </FormControl.Label>
            <Input value={name} onChangeText={(value) => setName(value)} />
          </FormControl>
          <FormControl>
            <FormControl.Label
              _text={{ color: "muted.700", fontSize: "sm", fontWeight: 600 }}
            >
              Old
            </FormControl.Label>
            <Input value={old} onChangeText={(value) => setOld(value)} />
          </FormControl>
          <FormControl>
            <FormControl.Label
              _text={{ color: "muted.700", fontSize: "sm", fontWeight: 600 }}
            >
              Type
            </FormControl.Label>
            <Input value={type} onChangeText={(value) => setType(value)} />
          </FormControl>
          <FormControl>
            <FormControl.Label
              _text={{ color: "muted.700", fontSize: "sm", fontWeight: 600 }}
            >
              Start Career
            </FormControl.Label>
            <Input
              value={startCareer}
              onChangeText={(value) => setStartCareer(value)}
            />
          </FormControl>
          <VStack space={2} mt={5}>
            <Button
              colorScheme="cyan"
              _text={{ color: "white" }}
              onPress={submit}
            >
              Add
            </Button>

            <HStack justifyContent="center" alignItem="center">
              <IconButton
                variant="unstyled"
                startIcon={
                  <Icon
                    as={<MaterialCommunityIcons name="facebook" />}
                    color="muted.700"
                    size="sm"
                  />
                }
              />
              <IconButton
                variant="unstyled"
                startIcon={
                  <Icon
                    as={<MaterialCommunityIcons name="google" />}
                    color="muted.700"
                    size="sm"
                  />
                }
              />
              <IconButton
                variant="unstyled"
                startIcon={
                  <Icon
                    as={<MaterialCommunityIcons name="github" />}
                    color="muted.700"
                    size="sm"
                  />
                }
              />
            </HStack>
          </VStack>
        </VStack>
      </Box>
    </NativeBaseProvider>
  );
}
