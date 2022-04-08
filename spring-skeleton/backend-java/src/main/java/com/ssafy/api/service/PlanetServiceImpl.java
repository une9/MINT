package com.ssafy.api.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ssafy.db.entity.Planet;
import com.ssafy.db.entity.Tile;
import com.ssafy.db.repository.PlanetRepository;
import com.ssafy.db.repository.TileRepository;

/**
 *	행성 관련 API ServeiceImpl
 */
@Service("PlanetService")
public class PlanetServiceImpl implements PlanetService {
	
	@Autowired
	PlanetRepository planetRepository;
	
	@Autowired
	TileRepository tileRepository;
	
	@Override
	public List<Planet> getPlanets() {
		List<Planet> planets = planetRepository.findAll();
		
		return planets;
	}
	
	@Override
	public Planet getPlanet(Long pid) {
		Optional<Planet> planet = planetRepository.findByPid(pid);
		return planet.get();
	}
	
	@Override
	public List<Tile> getTilesByPid(Long pid) {
		Optional<Planet> planet = planetRepository.findByPid(pid);
		
		return planet.get().getTiles();
	}

	@Override
	public List<Tile> getRemainTile(Long pid) {
		Optional<Planet> planet = planetRepository.findByPid(pid);
		List<Tile> tile = planet.get().getTiles();
		
		List<Tile> tileRes = new ArrayList<>();
		for(Tile t : tile) {
			if(t.getTokenId() != null) {
				tileRes.add(t);
			}
		}
		
		return tileRes;
	}

	@Override
	public List<Tile> getAllTile() {
		List<Tile> tiles = tileRepository.findAll();
		
		return tiles;
	}
}
