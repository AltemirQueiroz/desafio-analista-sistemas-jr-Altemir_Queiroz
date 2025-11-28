import styled from "styled-components";

const FilterRow = styled.div`
  display:flex;
  align-items:center;
  gap:12px;
`;

const Select = styled.select`
  padding: 10px 12px;
  border-radius: 8px;
  border: 1px solid #d6dee9;
  background: #fff;
  font-size: 14px;
  min-width: 220px;
`;

const NewBtn = styled.button`
  padding: 10px 14px;
  border-radius: 8px;
  background: linear-gradient(180deg,#0b66d6,#084db0);
  color: white;
  border: none;
  cursor: pointer;
  font-weight: 600;
  box-shadow: 0 6px 18px rgba(11,59,102,0.12);
  transition: transform .08s ease;
  &:active { transform: translateY(1px); }
`;

export default function TaskFilter({ temas, filtro, setFiltro, abrirModal }) {
  return (
    <FilterRow>
      <Select value={filtro} onChange={(e) => setFiltro(e.target.value)}>
        <option value="Todas">Todas as tarefas</option>
        {temas.map(t => <option key={t} value={t}>{t}</option>)}
      </Select>

      <NewBtn onClick={abrirModal}>+ Nova Tarefa</NewBtn>
    </FilterRow>
  );
}
