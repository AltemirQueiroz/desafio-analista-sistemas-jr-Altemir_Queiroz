import TaskCard from "./TaskCard";
import styled from "styled-components";

const List = styled.div`
  margin-top: 18px;
`;

export default function TaskList({ tasks, onEdit, onDelete, onStatusChange }) {
  if (!tasks || tasks.length === 0) {
    return <p>Nenhuma tarefa encontrada.</p>;
  }

  return (
    <List>
      {tasks.map(t => (
        <TaskCard
          key={t.id}
          tarefa={t}
          onEdit={onEdit}
          onDelete={onDelete}
          onStatusChange={onStatusChange}
        />
      ))}
    </List>
  );
}
