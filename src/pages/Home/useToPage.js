import { useNavigate } from "react-router-dom";

function useToPage() {
  const navigate = useNavigate();

  function toPage(page) {
    navigate(page);
  }

  return toPage;
}

export default useToPage;
