import { renderHook } from "@testing-library/react";

describe('Pruebas en useCounter', () => {
        test('debe retornar os valores por defecto', () => {
            
            const { result } = renderHook( () => useCounter() )
            console.log(result)
        });
});