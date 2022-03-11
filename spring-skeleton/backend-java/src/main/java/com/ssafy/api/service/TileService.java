package com.ssafy.api.service;

import com.ssafy.api.request.TilePutReq;
import com.ssafy.db.entity.Planet;
import com.ssafy.db.entity.Tile;

public interface TileService {
	Planet create(Tile user);
	Planet getConferenceByOid(Long oid);
	boolean checkConferenceDuplicate(Long oid);
	Planet conferenceAddUser(Long oid, Long uid);
	Planet conferenceLeaveAll(Planet conference);
	Planet conferenceLeave(Planet conference, Tile user);
	boolean conferenceModify(TilePutReq conferenceInfo);
}
