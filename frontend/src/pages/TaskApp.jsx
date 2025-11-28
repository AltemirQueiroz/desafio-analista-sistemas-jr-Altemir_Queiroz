import { useState } from "react";
import { Page, Header, Brand, Logo, Title, TopBar } from "../styles/Container";
import TaskFilter from "../components/TaskFilter";
import TaskList from "../components/TaskList";
import TaskModal from "../components/TaskModal";
import tarefasIniciais from "../data/tasks";

export default function TaskApp() {
  const [tasks, setTasks] = useState(tarefasIniciais);
  const [filtro, setFiltro] = useState("Todas");
  const [modalAberto, setModalAberto] = useState(false);
  const [tarefaEditando, setTarefaEditando] = useState(null);

  const temas = [...new Set(tasks.map(t => t.tema))]
    .filter(Boolean)
    .sort((a, b) => a.localeCompare(b, "pt-BR"));

  function abrirModal(t = null) {
    setTarefaEditando(t);
    setModalAberto(true);
  }

  function salvarTarefa(t) {
    if (t.id) {
      setTasks(tasks.map(item => (item.id === t.id ? t : item)));
    } else {
      t.id = tasks.reduce((m, it) => Math.max(m, it.id), 0) + 1;
      setTasks([...tasks, t]);
    }
    setModalAberto(false);
  }

  function atualizarStatus(tarefaAtualizada) {
    const lista = tasks.map(t =>
      t.id === tarefaAtualizada.id ? tarefaAtualizada : t
    );
    setTasks(lista);
  }

  function deletarTarefa(id) {
    if (!window.confirm("Deseja realmente excluir esta tarefa?")) return;

    const atualizado = tasks.filter(t => t.id !== id);
    setTasks(atualizado);

    if (filtro !== "Todas" && !atualizado.some(t => t.tema === filtro)) {
      setFiltro("Todas");
    }
  }

  const tarefasFiltradas =
    filtro === "Todas" ? tasks : tasks.filter(t => t.tema === filtro);

  return (
    <Page>
      <Header>
        <Brand>
          <Logo src="/logo.png" alt="Logo da empresa" />
          <Title>TaskBoard Temático</Title>
        </Brand>
      </Header>

      <TopBar>
        <TaskFilter
          temas={temas}
          filtro={filtro}
          setFiltro={setFiltro}
          abrirModal={() => abrirModal()}
        />
      </TopBar>

      <TaskList
        tasks={tarefasFiltradas}
        onEdit={abrirModal}
        onDelete={deletarTarefa}
        onStatusChange={atualizarStatus}
      />

      {modalAberto && (
        <TaskModal
          fechar={() => setModalAberto(false)}
          salvar={salvarTarefa}
          tarefaEditando={tarefaEditando}
        />
      )}
    </Page>
  );
}
