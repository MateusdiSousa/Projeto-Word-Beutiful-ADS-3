package com.wb.wbbackend.comparadores;

import java.util.Comparator;

import com.wb.wbbackend.entidades.Telefone;

public class ComparadorTelefone implements Comparator<Telefone> {

	@Override
	public int compare(Telefone o1, Telefone o2) {
		String id1 = o1.getDdd() + o1.getNumero();
		id1 = id1.trim().toLowerCase();

		String id2 = o2.getDdd() + o2.getNumero();
		id2 = id2.trim().toLowerCase();

		return id1.compareTo(id2);
	}
}