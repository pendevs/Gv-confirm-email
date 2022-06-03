import { gql } from "@apollo/client";

export const CONFIRM_EMAIL = gql`
    mutation confirmEmail($token: String!) {
        confirmEmail(
            confirmationData: {
            token: $token
            }
        ) {
            success,
            messages
        }
    }
`;
  