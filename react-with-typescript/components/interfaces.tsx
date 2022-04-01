export interface TodoListProps {
    items: { id: string; text: string }[];
    onDeleteTodo: (id: string) => void;
  }
  