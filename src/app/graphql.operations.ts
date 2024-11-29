import { gql } from "apollo-angular";

const GET_COUNTRIES = gql`
{
  countries {
    code
    emoji
  }
}
`;

export { GET_COUNTRIES };
