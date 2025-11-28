import styled from "styled-components";

const Card = styled.article`
  background: white;
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 18px;
  border: 1px solid #e6eef7;
  box-shadow: 0 8px 28px rgba(11,59,102,0.06);
  display:flex;
  justify-content:space-between;
  gap:16px;
  align-items:flex-start;
`;

const Left = styled.div` flex:1; `;
const Right = styled.div` display:flex; flex-direction:column; gap:10px; align-items:flex-end; min-width:140px; `;

const Title = styled.h3`
  margin: 0 0 6px 0;
  color: #0b3b66;
  font-size: 18px;
`;

const Description = styled.p`
  margin: 0 0 8px 0;
  color: #3b4b5f;
  font-size: 14px;
  line-height: 1.3;
`;

const Meta = styled.p`
  margin: 6px 0 0 0;
  color: #657787;
  font-size: 13px;
`;

// 🔵 Bolinha de Status
const StatusDot = styled.span`
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-left: 6px;
  background: ${({ status }) =>
    status === "pendente" ? "#ff4d4d" :
    status === "em progresso" ? "#ffcc00" :
    "#2ecc71"};
`;

const StatusSelect = styled.select`
  padding: 6px 10px;
  border-radius: 8px;
  border: 1px solid #cfe0ff;
  background: #f8fbff;
  cursor: pointer;
  font-size: 13px;
  font-weight: 600;

  &:hover {
    background: #eef6ff;
  }
`;

const Actions = styled.div`
  display:flex;
  gap:8px;
`;

const EditBtn = styled.button`
  padding: 8px 10px;
  border-radius: 8px;
  border: 1px solid #cfe0ff;
  background: white;
  cursor:pointer;
  font-weight:600;
  &:hover { background:#cad6e2; }
`;

const DeleteBtn = styled.button`
  padding: 8px 10px;
  border-radius: 8px;
  background: #da3333;
  color: white;
  border: none;
  cursor:pointer;
  &:hover { background:#c02424; }
`;

export default function TaskCard({ tarefa, onEdit, onDelete, onStatusChange }) {
  function atualizarStatus(e) {
    const novoStatus = e.target.value;
    const tarefaNova = { ...tarefa, status: novoStatus };
    onStatusChange(tarefaNova); // 👈 agora NÃO abre modal
  }

  return (
    <Card>
      <Left>
        <Title>{tarefa.titulo}</Title>
        <Description>{tarefa.descricao}</Description>

        <Meta>
          <strong>Tema:</strong> {tarefa.tema}
        </Meta>

        <Meta>
          <strong>Status:</strong> {tarefa.status}
          <StatusDot status={tarefa.status} />
        </Meta>
      </Left>

      <Right>

        <StatusSelect value={tarefa.status} onChange={atualizarStatus}>
          <option value="pendente">Pendente</option>
          <option value="em progresso">Em Progresso</option>
          <option value="concluído">Concluído</option>
        </StatusSelect>

        <Actions>
          <EditBtn onClick={() => onEdit(tarefa)}>Editar</EditBtn>
          <DeleteBtn onClick={() => onDelete(tarefa.id)}>Excluir</DeleteBtn>
        </Actions>
      </Right>
    </Card>
  );
}
