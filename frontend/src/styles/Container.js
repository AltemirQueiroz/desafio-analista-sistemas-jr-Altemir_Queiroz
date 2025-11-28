import styled from "styled-components";

export const Page = styled.div`
  max-width: 1100px;
  margin: 32px auto;
  padding: 24px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 18px;
`;

export const Brand = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const Logo = styled.img`
  width: 44px;
  height: 44px;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0 6px 18px rgba(11, 59, 102, 0.12);
`;

export const Title = styled.h1`
  font-size: 22px;
  margin: 0;
  color: #0b3b66;
  font-weight: 700;
  text-align: center;
`;

export const TopBar = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 14px;
`;
// teste de botão de status
export const StatusDot = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-left: 8px;
  display: inline-block;
  background-color: ${({ status }) => {
    switch (status) {
      case "Pendente":
        return "#e63946";
      case "Em Progresso":
        return "#f4a261";
      case "Concluído":
        return "#2a9d8f";
      default:
        return "#999";
    }
  }};
`;
// teste de botão de status
export const StatusButton = styled.button`
  background: #fff;
  border: 1px solid #cbd5e1;
  padding: 6px 10px;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  transition: 0.2s;

  &:hover {
    background: #f1f5f9;
  }
`;
//teste botão de status
export const StatusDropdown = styled.div`
  position: absolute;
  top: 35px;
  left: 0;
  background: #fff;
  border: 1px solid #cbd5e1;
  border-radius: 8px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.12);
  padding: 8px 0;
  z-index: 10;
`;

export const StatusOption = styled.div`
  padding: 8px 16px;
  cursor: pointer;
  font-size: 14px;

  display: flex;
  align-items: center;
  gap: 8px;

  &:hover {
    background: #f1f5f9;
  }
`;
