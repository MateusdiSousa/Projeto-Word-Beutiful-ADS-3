package com.wb.wbbackend.verificadores;

import org.springframework.stereotype.Component;

import com.wb.wbbackend.entidades.Endereco;

@Component
public class VerificadorEnderecoNulo implements Verificador<Endereco>{
	@Override
	public boolean verificar(Endereco objeto) {
		if(objeto != null) {
			return false;
		}else {
			return true;
		}
	}	
}