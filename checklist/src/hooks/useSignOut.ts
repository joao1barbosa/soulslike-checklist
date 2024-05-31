import { useNavigate } from "react-router-dom";
import { supaClient } from "../services/supabase";

export const useSignOut = () => {
  const navigate = useNavigate();
  return {
    signOut: () => {
      supaClient.auth.signOut();
      navigate("/");
    },
  };
};
