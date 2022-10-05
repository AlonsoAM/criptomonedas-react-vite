import styled from "@emotion/styled";

const Label = styled.label`
  color: #fff;
  display: block;
  font-family: "Lato", sans-serif;
  font-size: 24px;
  font-weight: 700;
  margin: 15px 0;
`;

const Select = styled.select`
  width: 100%;
  font-size: 18px;
  padding: 14px;
  border-radius: 10px;
`;

const useSelectMonedas = (label, opciones) => {
  const SelectMonedas = () => (
    <>
      <Label> {label} </Label>
      <Select>
        <option value="">Seleccione</option>
        {opciones.map((opcion) => (
          <option value={opcion.id} key={opcion.id}>
            {" "}
            {opcion.nombre}{" "}
          </option>
        ))}
      </Select>
    </>
  );
  return [SelectMonedas];
};

export default useSelectMonedas;
