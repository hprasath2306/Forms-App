import { useRouter } from "expo-router";
import { Alert, ScrollView, Text, View } from "react-native";
import {
  Button,
  Card,
  Checkbox,
  TextInput,
  useTheme,
} from "react-native-paper";
import {Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  PaymentInfoSchema,
  PaymentInfo,
} from "../../src/schema/checkout.schema";
import ControlledInput from "../../src/components/ControlledInput";

export default function PaymentDetails() {

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<PaymentInfo>({
    resolver: zodResolver(PaymentInfoSchema),
  });

  const router = useRouter();
  const theme = useTheme();
  const nextPage = () => {
    Alert.alert("Thus the forms are successfully validated and submitted.", "You can now proceed to the next page.");
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
        <Card.Title title={"Payment details"} titleVariant="titleLarge" />
        <Card.Content style={{ gap: 10 }}>
          <ControlledInput
            control={control}
            name="number"
            label={"Card number"}
            placeholder="4242 4242 4242 4242"
          />
          <View style={{ flexDirection: "row", gap: 15 }}>
            <ControlledInput
              control={control}
              name="expirationDate"
              label={"Expiration date"}
              placeholder="mm/yyyy"
            />
            <ControlledInput
              control={control}
              name="securityCode"
              label={"Security code"}
            />
          </View>
          <Controller
            control={control}
            name="saveInfo"
            render={({ field: { value, onChange } }) => (
              <Checkbox.Item
                label="Save payment information"
                status={value ? "checked" : "unchecked"}
                onPress={() => onChange(!value)}
              />
            )}
          />
        </Card.Content>
      </Card>
      <Button mode="contained" onPress={handleSubmit(nextPage)}>
        Submit
      </Button>
    </ScrollView>
  );
}
