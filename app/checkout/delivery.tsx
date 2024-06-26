import { useRouter } from "expo-router";
import { useState } from "react";
import { Text, View, ScrollView } from "react-native";
import {
  Button,
  Card,
  HelperText,
  RadioButton,
  TextInput,
  useTheme,
} from "react-native-paper";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  DeliveryInfoSchema,
  DeliveryInfo,
} from "../../src/schema/checkout.schema";
import ControlledInput from "../../src/components/ControlledInput";

export default function DeliveryDetails() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<DeliveryInfo>({
    resolver: zodResolver(DeliveryInfoSchema),
    defaultValues: {
      shipping: "free",
    },
  });

  const router = useRouter();
  const theme = useTheme();
  const nextPage = () => {
    router.push("checkout/payment");
  };
  return (
    <ScrollView
      contentContainerStyle={{
        gap: 15,
        width: "100%",
        maxWidth: 500,
        alignSelf: "center",
      }}
      showsVerticalScrollIndicator={false}
    >
      <Card style={{ backgroundColor: theme.colors.background }}>
        <Card.Title title={"Delivery address"} titleVariant="titleLarge" />
        <Card.Content style={{ gap: 10 }}>
          <ControlledInput
            control={control}
            name="city"
            label={"City"}
            style={{ backgroundColor: theme.colors.background }}
          />
          <ControlledInput
            control={control}
            name="postalCode"
            label={"Postal Code"}
            style={{ backgroundColor: theme.colors.background }}
          />
          <ControlledInput
            control={control}
            name="address"
            label={"Address"}
            style={{ backgroundColor: theme.colors.background }}
          />
        </Card.Content>
      </Card>
      <Card style={{ backgroundColor: theme.colors.background }}>
        <Card.Title title={"Shipping options"} titleVariant="titleLarge" />
        <Card.Content style={{ gap: 10 }}>
          <Controller
            control={control}
            name="shipping"
            render={({
              field: { value, onChange },
              fieldState: { invalid, error },
            }) => (
              <View>
                <HelperText type="error" visible={invalid}>
                  {error?.message}
                </HelperText>
                <RadioButton.Group value={value} onValueChange={onChange}>
                  <RadioButton.Item label="Free" value="free" />
                  <RadioButton.Item label="Fast" value="fast" />
                  <RadioButton.Item label="Same Day" value="same_day" />
                </RadioButton.Group>
              </View>
            )}
          />
        </Card.Content>
      </Card>
      <Button mode="contained" onPress={handleSubmit(nextPage)}>
        Next
      </Button>
    </ScrollView>
  );
}
