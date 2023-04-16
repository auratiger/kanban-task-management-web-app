import { gql } from "@apollo/client";

export const GET_BOARDS = gql`
  query Boards {
    boards {
      createdAt
      id
      name
      publishedAt
      updatedAt
    }
  }
`;
