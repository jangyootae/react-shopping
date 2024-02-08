import { useNavigate } from "react-router-dom";

const Introduce = () => {
  const navigate = useNavigate();

  const goToSign = () => {
    navigate("/SignIn");
  }

  const goToLogIn = () => {
    navigate("/LogIn");
  }
}