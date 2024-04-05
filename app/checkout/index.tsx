import { useRouter } from "expo-router";
import { ScrollView, View } from "react-native";
import {
  Button,
  Card,
  HelperText,
  TextInput,
  useTheme,
  withTheme,
} from "react-native-paper";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  PersonalInfoSchema,
  PersonalInfo,
} from "../../src/schema/checkout.schema";
import ControlledInput from "../../src/components/ControlledInput";

export default function PersonalDetails() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<PersonalInfo>({
    resolver: zodResolver(PersonalInfoSchema),
  });

  const router = useRouter();
  const theme = useTheme();
  const nextPage = () => {
    router.push("checkout/delivery");
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
        <Card.Title title="Personal information" titleVariant="titleLarge" />
        <Card.Content style={{ gap: 10 }}>
          <ControlledInput
            control={control}
            name="name"
            placeholder="name"
            label="Name"
          />

          <ControlledInput
            placeholder="hey@gmail.com"
            control={control}
            name="email"
            label="Email"
          />
        </Card.Content>
      </Card>
      <Button mode="contained" onPress={handleSubmit(nextPage)}>
        Next
      </Button>
    </ScrollView>
  );
}
