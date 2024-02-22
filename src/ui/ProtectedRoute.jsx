import styled from "styled-components";
import { useUser } from "../features/authentication/userUser";
import Spinner from "./Spinner";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const FullPage = styled.div`
  height: 100vh;
  background-color: var() (--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
`;

function ProtectedRoute({ children }) {
  const navigete = useNavigate();

  // 1. Load authenticated user
  const { isLoading, isAuthenticated } = useUser();

  //3. If there is no Auth user, redirect to the login page
  useEffect(
    function () {
      if (!isAuthenticated && !isLoading) navigete("/login");
    },
    [isAuthenticated, isLoading, navigete]
  );

  // 2. While loading, show spinner
  if (isLoading)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );

  // 4. If there is a user, render the app

  if (isAuthenticated) return children;
}

export default ProtectedRoute;
