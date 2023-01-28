import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  useEffect(() => {
    const timerId = setTimeout(() => {
      navigate("/");
    }, 5000);
    return () => {
      clearTimeout(timerId);
    };
  }, [navigate]);

  return (
    <div>
      <h1>No Page found</h1>
      <p>redirecting to homepage in 5 seconds</p>
    </div>
  );
}
