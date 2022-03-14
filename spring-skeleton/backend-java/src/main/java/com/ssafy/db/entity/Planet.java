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
    @Column(name = "planet_id")
    Long pid;
	
	@Column(name = "total_cell")
    int totalCell;
    
    @OneToMany(mappedBy = "planet", cascade = CascadeType.ALL)
    private List<Tile> tiles = new ArrayList<>();

    public void addTiles(Tile tile) { 
    	this.tiles.add(tile);
    	if (tile.getPlanet() != this) { 
    		tile.setPlanet(this); 
    	}
    }
}
