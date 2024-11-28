import { gql } from "apollo-angular";

const GET_COUNTRIES = gql`
{
  countries {
    code
    name
    emoji
    zli
  }
}
`;

export { GET_COUNTRIES };
