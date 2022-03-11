package com.ssafy.db.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ssafy.db.entity.Planet;
import com.ssafy.db.entity.Tile;

@Repository
public interface TileRepository extends JpaRepository<Planet, Long>{

	Optional<Planet> findByOid(Long oid);
	boolean existsByOid(Long oid);
	Planet save(Tile user);
}
