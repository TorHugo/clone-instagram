import { Route, Link, Routes } from "react-router-dom";
import {Home} from '../screens/home';

export function Rotas() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}
