package com.ssafy.api.response;

import java.util.ArrayList;
import java.util.List;

import com.ssafy.db.entity.Planet;
import com.ssafy.db.entity.Tile;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@ApiModel("ConferenceResponse")
public class TileRes {
	@ApiModelProperty(name="방장", example="1")
	Long oid;
	
	@ApiModelProperty(name="방 제목", example="홍길동의 화상회의")
	String title;
	
	@ApiModelProperty(name="방 설명", example="설명 내용")
	String description;	
	
	@ApiModelProperty(name="방 참가자 목록", example="이호성 1")
	private List<PlanetRes> users = new ArrayList<>();
	
	public static TileRes of(Planet conference) {
		TileRes res = new TileRes();
		res.setOid(conference.getOid());
		res.setTitle(conference.getTitle());
		res.setDescription(conference.getDescription());
		
		for(Tile u : conference.getUsers()) {
			res.addUserRes(u);
		}
		
		return res;
	}
	
	public void addUserRes(Tile user) {
		PlanetRes ur = new PlanetRes();
		ur.setUserId(user.getUserId());
		ur.setNickname(user.getNickname());
		
    	users.add(ur);
    }
}