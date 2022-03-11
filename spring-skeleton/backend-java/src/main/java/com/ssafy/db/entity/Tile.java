package com.ssafy.db.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

/**
 * 유저 모델 정의.
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

    Long planet_id;
    String image;
    String trade_date;
    String token_id;
    int area;
    String buyer;
}
