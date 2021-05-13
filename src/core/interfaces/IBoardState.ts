export interface IBoardStoreProps {
  notes: IBoardNote[];
}

export interface IBoardNote {
  id: string;
  title?: string;
  content: string;
}
