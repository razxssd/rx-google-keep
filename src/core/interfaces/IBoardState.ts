export interface IBoardStoreProps {
  notes: IBoardNote[];
}

export interface IBoardNote {
    title?: string;
    content: string;
}
