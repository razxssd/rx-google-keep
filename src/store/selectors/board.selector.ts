import { RootState } from "../Store";

export const getBoardNotes = (state: RootState) => state.boardStore.notes;
