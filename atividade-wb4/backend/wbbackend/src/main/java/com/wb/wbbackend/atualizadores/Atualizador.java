package com.wb.wbbackend.atualizadores;

public interface Atualizador<T> {
	public void atualizar(T alvo, T atualizacao);
}