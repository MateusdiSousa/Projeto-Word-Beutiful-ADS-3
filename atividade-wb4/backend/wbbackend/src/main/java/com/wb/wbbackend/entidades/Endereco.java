package com.wb.wbbackend.entidades;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import org.springframework.hateoas.RepresentationModel;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
public class Endereco extends RepresentationModel<Endereco> {
	@Id()
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column
	private String estado;
	@Column
	private String cidade;
	@Column
	private String bairro;
	@Column
	private String rua;
	@Column
	private String numero;
	@Column
	private String codigoPostal;
	@Column
	private String informacoesAdicionais;

}