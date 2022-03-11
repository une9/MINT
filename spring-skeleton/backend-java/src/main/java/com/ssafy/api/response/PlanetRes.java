package com.ssafy.api.response;

import com.ssafy.common.model.response.BaseResponseBody;
import com.ssafy.db.entity.Tile;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

/**
 * 회원 본인 정보 조회 API ([GET] /api/v1/users/me) 요청에 대한 응답값 정의.
 */
@Getter
@Setter
@ApiModel("UserResponse")
public class PlanetRes{
	@ApiModelProperty(name="User ID")
	String userId;
	
	@ApiModelProperty(name="User Nickname")
	String nickname;
	
	public static PlanetRes of(Tile user) {
		PlanetRes res = new PlanetRes();
		res.setUserId(user.getUserId());
		res.setNickname(user.getNickname());
		
		return res;
	}
}
