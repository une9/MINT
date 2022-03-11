package com.ssafy.api.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.ssafy.api.request.TilePutReq;
import com.ssafy.common.model.response.BaseResponseBody;
import com.ssafy.db.entity.Planet;
import com.ssafy.db.entity.Tile;
import com.ssafy.db.repository.TileRepository;

@Service("ConferenceService")
public class TileServiceImpl implements TileService {
	
	@Autowired
	TileRepository conferenceRepository;
	
	@Autowired
	PlanetService userService;

	@Override
	public Planet create(Tile user) {
		return conferenceRepository.save(user);
	}

	@Override
	public boolean checkConferenceDuplicate(Long oid) {
		return conferenceRepository.existsByOid(oid);
	}

	@Override
	public Planet getConferenceByOid(Long oid) {
		return conferenceRepository.findByOid(oid).get();
	}

	@Override
	public Planet conferenceAddUser(Long oid, Long uid) {
		
		Planet conference = this.getConferenceByOid(oid);
		Tile user = userService.getUserByUid(uid);
		
		return conferenceRepository.save(conference);
	}

	@Override
	public Planet conferenceLeave(Planet conference, Tile user) {
		return conferenceRepository.save(conference);
	}

	@Override
	public Planet conferenceLeaveAll(Planet conference) {
		
		return conferenceRepository.save(conference);
	}

	@Override
	public boolean conferenceModify(TilePutReq conferenceInfo) {

		try {
			Tile user = userService.getUserByUserId(conferenceInfo.getUserId());
			
			return true;
		}catch(Exception e) {
			return false;
		}
	}
}
