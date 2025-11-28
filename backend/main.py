from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from enum import Enum

#Inicialização do FastAPI
app = FastAPI()

#Modelo de dados para Tarefa
class Tarefa(BaseModel):
    titulo: str
    descricao: str
    tema: str
    status: str

#Enumeração para temas
class TemaEnum(str, Enum):
    expedicao = "Expedição"
    controle_jornada = "Controle de Jornada"
    gerenciamento_risco = "Gerenciamento de Risco"

#Lita de tarefas para testes
todas_tarefas = [
    { "id": 1, "titulo": "Gerar CTes", "descricao": "Gerar CTes prioritários", "tema": "Expedição", "status": "concluído" },
    { "id": 2, "titulo": "Gerar Rastreio", "descricao": "Gerar monitoramento das rotas de 1 a 10", "tema": "Expedição", "status": "em progresso" },
    { "id": 3, "titulo": "Gerar Relatório", "descricao": "Gerar relatório de todas as emissões do dia anterior", "tema": "Expedição", "status": "pendente" },
    { "id": 4, "titulo": "Pendências", "descricao": "Eliminar pendências do relatório", "tema": "Expedição", "status": "pendente" },

    { "id": 5, "titulo": "Gerar Relatório", "descricao": "Gerar relatório das viagens da semana", "tema": "Controle de Jornada", "status": "concluído" },
    { "id": 6, "titulo": "Validar Jornadas", "descricao": "Analisar jornadas realizadas pelos motoristas", "tema": "Controle de Jornada", "status": "concluído" },
    { "id": 7, "titulo": "Ajustar Jornadas", "descricao": "Ajustar jornadas das viagens com inconsistências", "tema": "Controle de Jornada", "status": "em progresso" },

    { "id": 8, "titulo": "Atualizar Rotas", "descricao": "Adicionar novas rotas no sistema", "tema": "Gerenciamento de Risco", "status": "em progresso" },
    { "id": 9, "titulo": "Verificar Excesso de Velocidade", "descricao": "Orientar motoristas que excederam a velocidade", "tema": "Gerenciamento de Risco", "status": "pendente" }
]


#Página inicial
@app.get("/")
async def home():
    return {"mensagem": "Taskboard Temático"}

#Filtrar por tema
@app.get("/tasks")
async def listar_tarefas(tema: TemaEnum | None = None):
    try:
        if tema is None:
            return todas_tarefas

        return [t for t in todas_tarefas if t["tema"] == tema.value]

    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=f"Erro ao filtrar tarefas: {str(e)}"
        )

#Criar nova tarefa
@app.post("/tasks")
async def criar_tarefa(nova_tarefa: Tarefa):
    try:
        novo_id = max([t["id"] for t in todas_tarefas], default=0) + 1

        tarefa_dict = nova_tarefa.model_dump()
        tarefa_dict["id"] = novo_id

        todas_tarefas.append(tarefa_dict)
        return tarefa_dict

    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=f"Erro ao criar tarefa: {str(e)}"
        )

#Listar todas as tarefas
@app.get("/tasks")
async def listar_tarefas():
    try:
        return todas_tarefas
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

#Buscar tarefa por ID
@app.get("/tasks/{id}")
async def buscar_tarefa(id: int):
    try:
        for tarefa in todas_tarefas:
            if tarefa["id"] == id:
                return tarefa

        raise HTTPException(status_code=404, detail="Tarefa não encontrada")

    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

#Editar tarefa por ID
@app.put("/tasks/{id}")
async def atualizar_tarefa(id: int, dados: Tarefa):
    try:
        for i, tarefa in enumerate(todas_tarefas):
            if tarefa["id"] == id:
                atualizada = dados.model_dump()
                atualizada["id"] = id
                todas_tarefas[i] = atualizada
                return atualizada

        raise HTTPException(status_code=404, detail="Tarefa não encontrada")

    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

#Deletar tarefa por ID
@app.delete("/tasks/{id}")
async def deletar_tarefa(id: int):
    try:
        for i, tarefa in enumerate(todas_tarefas):
            if tarefa["id"] == id:
                removida = todas_tarefas.pop(i)
                return {"mensagem": "Tarefa deletada", "tarefa": removida}

        raise HTTPException(status_code=404, detail="Tarefa não encontrada")

    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
