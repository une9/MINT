package com.ssafy.api.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ssafy.api.request.TilePutReq;
import com.ssafy.db.entity.Planet;
import com.ssafy.db.entity.Tile;
import com.ssafy.db.repository.PlanetRepository;
import com.ssafy.db.repository.TileRepository;

@Service("ConferenceService")
public class TileServiceImpl implements TileService {
	
	@Autowired
	TileRepository tileRepository;
	
	@Autowired
	PlanetRepository planetRepository;
	
	@Override
	public List<Tile> getAllTiles() { // 모든 타일 조회
		return tileRepository.findAll();
	}

	@Override
	public Tile getTile(long tid) { // tid로 타일 조회
		return tileRepository.getOne(tid);
	}

	@Override
	public boolean tileModify(TilePutReq tileInfo) { // tid로 타일 가져와서 수정
		try {
			Tile tile = getTile(tileInfo.getTid());
			
			Planet planet = planetRepository.getOne(tileInfo.getPlanet());
			
			tile.setArea(tileInfo.getArea());
			tile.setBuyerId(tileInfo.getBuyerId());
			tile.setBuyerAdr(tileInfo.getBuyerAdr());
			tile.setPlanet(planet);
			tile.setPrice(tileInfo.getPrice());
			tile.setTokenId(tileInfo.getTokenId());
			tile.setTradeDate(tileInfo.getTradeDate());
			tileRepository.save(tile);
			return true;
		} catch (Exception e) {
			return false;
		}
	}
}
