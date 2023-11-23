package com.wb.wbbackend.verificadores;

import org.springframework.stereotype.Component;

@Component
public class VerificadorStringNula implements Verificador<String> {
	@Override
	public boolean verificar(String objeto) {
		boolean nulo = true;
		if (!(objeto == null)) {
			nulo = objeto.isBlank();
		}
		return nulo;
	}
}