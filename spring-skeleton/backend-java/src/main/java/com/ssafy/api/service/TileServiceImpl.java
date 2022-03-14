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

	@Override
	public Planet create(Tile user) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Planet getConferenceByOid(Long oid) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public boolean checkConferenceDuplicate(Long oid) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public Planet conferenceAddUser(Long oid, Long uid) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Planet conferenceLeaveAll(Planet conference) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Planet conferenceLeave(Planet conference, Tile user) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public boolean conferenceModify(TilePutReq conferenceInfo) {
		// TODO Auto-generated method stub
		return false;
	}
	

}
