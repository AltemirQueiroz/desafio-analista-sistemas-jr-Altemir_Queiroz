import { useState, useEffect } from "react";
import { ModalOverlay, ModalContent } from "../styles/ModalStyles";
import styled from "styled-components";

const Field = styled.div` margin-bottom: 10px; `;
const Input = styled.input`
  width:100%; padding:10px; border-radius:8px; border:1px solid #d6dee9;
`;
const Text = styled.textarea`
  width:100%; padding:10px; border-radius:8px; border:1px solid #d6dee9; resize:vertical;
`;
const Select = styled.select`
  width:100%; padding:10px; border-radius:8px; border:1px solid #d6dee9;
`;
const Row = styled.div` display:flex; justify-content:flex-end; gap:10px; margin-top:8px; `;
const Save = styled.button` background: linear-gradient(180deg,#0b66d6,#084db0); color:white; padding:10px 14px; border-radius:8px; border:none; font-weight:700; cursor:pointer; &:hover{opacity:.95;} `;
const Cancel = styled.button` background:#fff; color:#222; padding:10px 14px; border-radius:8px; border:1px solid #d6dee9; cursor:pointer; &:hover{background:#f7fafc;} `;

export default function TaskModal({ fechar, salvar, tarefaEditando }) {
  const [form, setForm] = useState({ id: null, titulo: "", descricao: "", tema: "", status: "pendente" });

  useEffect(() => {
    if (tarefaEditando) setForm(tarefaEditando);
    else setForm({ id: null, titulo: "", descricao: "", tema: "", status: "pendente" });
  }, [tarefaEditando]);

  function change(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function submit() {
    if (!form.titulo || !form.tema) return alert("Título e Tema são obrigatórios");
    salvar(form);
  }

  return (
    <ModalOverlay onClick={fechar}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <h2 style={{ marginTop: 0 }}>{form.id ? "Editar Tarefa" : "Nova Tarefa"}</h2>

        <Field><Input name="titulo" placeholder="Título" value={form.titulo} onChange={change} /></Field>
        <Field><Text name="descricao" rows={3} placeholder="Descrição" value={form.descricao} onChange={change} /></Field>
        <Field><Input name="tema" placeholder="Tema" value={form.tema} onChange={change} /></Field>
        <Field>
          <Select name="status" value={form.status} onChange={change}>
            <option value="pendente">Pendente</option>
            <option value="em progresso">Em Progresso</option>
            <option value="concluído">Concluído</option>
          </Select>
        </Field>

        <Row>
          <Cancel onClick={fechar}>Cancelar</Cancel>
          <Save onClick={submit}>{form.id ? "Salvar" : "Adicionar"}</Save>
        </Row>
      </ModalContent>
    </ModalOverlay>
  );
}
