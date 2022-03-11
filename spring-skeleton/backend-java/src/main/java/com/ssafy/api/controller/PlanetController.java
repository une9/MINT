package com.ssafy.api.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ssafy.api.request.TilePutReq;
import com.ssafy.api.service.PlanetService;
import com.ssafy.common.model.response.BaseResponseBody;
import com.ssafy.db.entity.Tile;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;

/**
 * 유저 관련 API 요청 처리를 위한 컨트롤러 정의.
 */

@Api(value = "유저 API", tags = {"User"})
@RestController
@RequestMapping("/users")
public class PlanetController {
	
	@Autowired
	PlanetService userService;
	
	@PostMapping()
	@ApiOperation(value = "회원 가입", notes = "<strong>아이디와 패스워드</strong>를 통해 회원가입 한다.") 
    @ApiResponses({
        @ApiResponse(code = 201, message = "성공"),
        @ApiResponse(code = 400, message = "유효성 검증 실패"),
        @ApiResponse(code = 403, message = "ID 중복"),
        @ApiResponse(code = 500, message = "서버 오류")
    })
	public ResponseEntity<? extends BaseResponseBody> register(
			@Valid @RequestBody @ApiParam(value="회원가입 정보", required = true) TilePutReq registerInfo, Errors errors) {
		if(errors.hasErrors()) {
			return ResponseEntity.status(400).body(BaseResponseBody.of(400, errors.getFieldError().getDefaultMessage()));
		} else {
			//임의로 리턴된 User 인스턴스. 현재 코드는 회원 가입 성공 여부만 판단하기 때문에 굳이 Insert 된 유저 정보를 응답하지 않음.
			try {
				return ResponseEntity.status(201).body(BaseResponseBody.of(201, "Success"));
			} catch (Exception e) {
				return ResponseEntity.status(403).body(BaseResponseBody.of(403, "Id duplicate error"));
			}
		}
	}
}
