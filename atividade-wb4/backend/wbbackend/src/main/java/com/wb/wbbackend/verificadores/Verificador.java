package com.wb.wbbackend.verificadores;

public interface Verificador<T> {
	public boolean verificar(T objeto);
}