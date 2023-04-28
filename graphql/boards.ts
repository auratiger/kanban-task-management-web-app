import { gql } from "@apollo/client";

export const GET_BOARDS = gql`
  query Boards {
    boards {
      id
      name
    }
  }
`;

export const GET_BOARD = gql`
  query ($id: String) {
    board(where: { id: $id }) {
      id
      name
      columns {
        id
        name
        tasks {
          id
          title
          status
          subtasks {
            id
            isComplete
            title
          }
        }
      }
    }
  }
`;
