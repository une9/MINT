package com.ssafy.db.entity;

import java.security.Timestamp;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

/**
 * 타일 모델 정의.
 */
@Entity(name = "tile")
@Getter
@Setter
@NoArgsConstructor
public class Tile {

	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    Long tid;
	
	@OneToMany
	@JoinColumn(name = "planet_id")
    Planet planet;
	
    String image;
    
    @Column(name = "trade_date")
    Timestamp tradeDate;
    
    @Column(name = "token_id")
    String tokenId;
    
    int area;
    
    String buyer;
}
