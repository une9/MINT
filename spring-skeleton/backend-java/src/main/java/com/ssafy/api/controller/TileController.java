package com.ssafy.api.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ssafy.api.request.TilePutReq;
import com.ssafy.api.service.PlanetService;
import com.ssafy.api.service.TileService;
import com.ssafy.common.model.response.BaseResponseBody;
import com.ssafy.db.entity.Planet;
import com.ssafy.db.entity.Tile;
import com.ssafy.db.repository.TileRepository;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;

@Api(value = "타일 API", tags = {"Tile."})
@RestController
public class TileController {
	

}
