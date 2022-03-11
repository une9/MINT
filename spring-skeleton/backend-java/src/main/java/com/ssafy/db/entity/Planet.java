package com.ssafy.db.entity;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.transaction.Transactional;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

//행성 모델 정의
@Entity(name = "planet")
@Getter
@NoArgsConstructor
public class Planet {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    Long pid;
	
	@Column(name = "total_cell")
    int totalCell;
    
    @OneToMany(mappedBy = "planet")
    private List<Tile> tiles = new ArrayList<>();

}
