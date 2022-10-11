import styled from "@emotion/styled";
import { useEffect, useState } from "react";
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
  const [criptos, setCriptos] = useState([]);
  const [moneda, SelectMonedas] = useSelectMonedas("Elige tu Moneda", monedas);
  const [cripto, SelectCripto] = useSelectMonedas(
    "Elige tu Criptomoneda",
    criptos
  );

  useEffect(() => {
    const consultarAPI = async () => {
      const url = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD`;
      const resp = await fetch(url);
      const resultado = await resp.json();
      // console.log(resultado.Data);

      const arrayCriptos = resultado.Data.map((cripto) => {
        const objeto = {
          id: cripto.CoinInfo.Name,
          nombre: cripto.CoinInfo.FullName,
        };
        // console.log(objeto);
        return objeto;
      });

      // console.log(arrayCriptos);
      setCriptos(arrayCriptos);
    };
    consultarAPI();
  }, []);

  return (
    <>
      <form>
        <SelectMonedas />
        <SelectCripto />
        <InputSubmit type="submit" value="cotizar" />
      </form>
    </>
  );
};

export default Formulario;
