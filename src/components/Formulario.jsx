import styled from "@emotion/styled";
import { monedas } from "../data/monedas";
import useSelectMonedas from "../hooks/useSelectMonedas";

const InputSubmit = styled.input`
  background-color: #9497ff;
  border: none;
  width: 100%;
  padding: 10px;
  color: #fff;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 20px;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  margin-top: 30px;
  &:hover {
    background-color: #7a7efe;
    cursor: pointer;
  }
`;

const Formulario = () => {
  const [SelectMonedas] = useSelectMonedas("Elige tu moneda", monedas);

  return (
    <>
      <form>
        <SelectMonedas />
        <InputSubmit type="submit" value="cotizar" />
      </form>
    </>
  );
};

export default Formulario;
