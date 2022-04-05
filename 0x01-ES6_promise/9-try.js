export default function guardrail(mathFunction) {
  const array = [];

  try {
    const res = mathFunction();
    array.push(res);
  } catch (error) {
    array.push(error.toString());
  } finally {
    array.push('Guardrail was processed');
  }
  return array;
}
