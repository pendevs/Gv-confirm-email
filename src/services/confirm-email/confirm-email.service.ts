import { useMutation } from "@apollo/client";
import { CONFIRM_EMAIL } from "./confirm-email.mutation";

export const useConfirmEmail = () => {
  const [confirmEmail, { data, loading, error }] = useMutation(CONFIRM_EMAIL);

  const confirmationEmail = (token: string) => {

    confirmEmail({
      variables: { token },
    });
  };

  return {
    data,
    loading,
    error,
    confirmationEmail,
  };
};