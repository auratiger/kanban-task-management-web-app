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
  query Board($id: ID) {
    board(where: { id: $id }) {
      id
      name
      columns {
        id
        name
        tasks {
          id
          title
          task_status
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
