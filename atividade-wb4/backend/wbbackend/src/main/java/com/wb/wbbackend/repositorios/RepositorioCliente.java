package com.wb.wbbackend.repositorios;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.wb.wbbackend.entidades.Cliente;

@Repository
public interface RepositorioCliente extends JpaRepository<Cliente, Long> {
}