import { useState } from "react";
import { StatusButton, StatusDropdown, StatusOption, StatusDot } from "../styles/Container";

export default function StatusSelector({ status, onChange }) {
  const [open, setOpen] = useState(false);

  const opcoes = ["Pendente", "Em Progresso", "Concluído"];

  function escolher(novo) {
    onChange(novo);
    setOpen(false);
  }

  return (
    <div style={{ position: "relative" }}>
      <StatusButton onClick={() => setOpen(!open)}>
        {status}
        <StatusDot status={status} />
      </StatusButton>

      {open && (
        <StatusDropdown>
          {opcoes.map(op => (
            <StatusOption key={op} onClick={() => escolher(op)}>
              <StatusDot status={op} />
              {op}
            </StatusOption>
          ))}
        </StatusDropdown>
      )}
    </div>
  );
}
