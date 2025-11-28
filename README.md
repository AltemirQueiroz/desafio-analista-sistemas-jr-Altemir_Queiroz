Projeto

Este repositório contém uma aplicação simples de gerenciamento de tarefas baseadas em temas (taskboard temático) com duas partes:

-Backend: API REST criada com FastAPI em `backend/main.py`.
-Frontend: SPA construída com Vite + React em `frontend/`.

Estrutura do Projeto

-`backend/`: código do servidor FastAPI (`main.py`).
-`frontend/`: código cliente (Vite + React). Principais arquivos em `src/`.
-`package.json` (raiz): lista de dependências, scripts de execução.

Backend

-Descrição: API simples em formato CRUD de tarefas em mock para testes.
-Principais arquivos: `backend/main.py`.
-Modelo de dados (Tarefa):
  - `titulo`: string
  - `descricao`: string
  - `tema`: string
  - `status`: string

- Valores permitidos para `tema` (definidos em `TemaEnum`):
  - `Expedição`
  - `Controle de Jornada`
  - `Gerenciamento de Risco`

- Dependências (instale no virtualenv do projeto):

```powershell
python -m venv venv
& .\venv\Scripts\Activate.ps1
pip install fastapi uvicorn pydantic
```

- Como rodar (desenvolvimento):

```powershell
# Ative o virtualenv (Windows PowerShell)
& .\venv\Scripts\Activate.ps1

# A partir da raiz do repositório execute:
uvicorn backend.main:app --reload --host 127.0.0.1 --port 8000
```

- Endpoints (em `backend/main.py`):

  - `GET /` — rota inicial, retorna mensagem simples.
  - `GET /tasks` — lista todas as tarefas. Recebe opcionalmente o query param `tema` com os valores do `TemaEnum` para filtrar por tema.
  - `POST /tasks` — cria uma nova tarefa.
  - `GET /tasks/{id}` — busca tarefa por `id`.
  - `PUT /tasks/{id}` — atualiza tarefa por `id`.
  - `DELETE /tasks/{id}` — deleta tarefa por `id`.

Observação: a API atualmente mantém dados em memória (`todas_tarefas`), sem persistência.

Frontend

- Descrição: aplicação cliente feita com React (Vite). Código principal em `frontend/src/`.
- Principais componentes: `TaskList.jsx`, `TaskCard.jsx`, `TaskModal.jsx`, `TaskFilter.jsx`, `StatusSelector.jsx`.
- Dependências: gerenciadas por `frontend/package.json` (Node.js + npm).

- Instalação e rodar (desenvolvimento):

```powershell
# Entrar na pasta frontend
cd frontend

# Instalar dependências (npm)
npm install

# Rodar o servidor de desenvolvimento (Vite)
npm run dev
```

- Padrões de porta: por padrão o Vite expõe a aplicação em `http://localhost:5173`.

Depois, abra o frontend no navegador (normalmente `http://localhost:5173`) e verifique que as chamadas à API funcionam (`http://127.0.0.1:8000`).
