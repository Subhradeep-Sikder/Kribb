import { useAuth } from "@clerk/expo";
import { Redirect } from "expo-router";

export default function Index() {
  const { isSignedIn, isLoaded } = useAuth();

  if (!isLoaded) return null;

  if (isSignedIn) return <Redirect href="/(roots)/(tabs)" />;

  // If the user is not signed in, redirect to the sign-in page
  return <Redirect href="/sign-up" />;
}
