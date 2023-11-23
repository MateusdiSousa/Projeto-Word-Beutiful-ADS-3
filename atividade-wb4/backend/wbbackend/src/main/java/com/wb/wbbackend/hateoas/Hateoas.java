package com.wb.wbbackend.hateoas;

import java.util.List;

public interface Hateoas<T> {
	public void adicionarLink(List<T> lista);
	public void adicionarLink(T objeto);
}