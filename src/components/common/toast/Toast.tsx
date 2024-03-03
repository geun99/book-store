import { ToastItem } from "@/store/toastStore";
import { FaBan, FaInfoCircle, FaPlus } from "react-icons/fa";
import styled from "styled-components";

function Toast({ id, message, type }: ToastItem) {
  const handleRemoveToast = () => {};
  return (
    <ToastStyle>
      <p>
        {type === "info" && <FaInfoCircle />}
        {type === "error" && <FaBan />}
        {message}
      </p>
      <button onClick={handleRemoveToast}>
        <FaPlus />
      </button>
    </ToastStyle>
  );
}

const ToastStyle = styled.div`
  background-color: ${(props) => props.theme.color.background};
  padding: 12px;
  border-radius: ${({ theme }) => theme.borderRadius.default};
  display: flex;
  justify-content: space-between;
  align-items: start;
  gap: 24px;

  p {
    color: ${({ theme }) => theme.color.text};
    line-height: 1;
    margin: 0;
    flex: 1;

    display: flex;
    align-items: end;
    gap: 4px;
  }
  button {
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    margin: 0;

    svg {
      transform: rotate(45deg);
    }
  }
`;
export default Toast;
