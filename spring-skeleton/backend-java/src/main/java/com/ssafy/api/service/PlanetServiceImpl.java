package com.ssafy.api.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.ssafy.db.entity.Tile;
import com.ssafy.db.repository.PlanetRepository;

/**
 *	유저 관련 비즈니스 로직 처리를 위한 서비스 구현 정의.
 */
@Service("userService")
public class PlanetServiceImpl implements PlanetService {
	@Autowired
	PlanetRepository userRepository;
	
	@Autowired
	PasswordEncoder passwordEncoder;

	@Override
	public Tile getUserByUserId(String userId) {
		// 디비에 유저 정보 조회 (userId 를 통한 조회).
		Tile user = userRepository.findByUserId(userId).get();
		return user;
	}
	
	@Override
	public Tile getUserByUid(Long uid) {
		// 디비에 유저 정보 조회 (oid 를 통한 조회).
		Tile user = userRepository.findByUid(uid).get();
		return user;
	}

	@Override
	public boolean checkIdDuplicate(String userId) {
		return userRepository.existsByUserId(userId);
	}
}
