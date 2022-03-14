package com.ssafy.api.response;

import java.util.ArrayList;
import java.util.List;

import com.ssafy.common.model.response.BaseResponseBody;
import com.ssafy.db.entity.Tile;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@ApiModel("PlanetResponse")
public class PlanetRes{
	
	Long pid;
	String name;
	double diameter;
	double mass;
	String galaxy;
	String content;
    int totalCell;
}
