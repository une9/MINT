package com.ssafy.api.service;

import com.ssafy.db.entity.Tile;

/**
 *	유저 관련 비즈니스 로직 처리를 위한 서비스 인터페이스 정의.
 */
public interface PlanetService {
	Tile getUserByUserId(String userId);
	boolean checkIdDuplicate(String userId);
	Tile getUserByUid(Long uid);
}
