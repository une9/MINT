package com.ssafy.api.request;

import java.time.LocalDateTime;

import com.ssafy.db.entity.Planet;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

/**
 * 화상회의 생성 API ([POST] /conferences) 요청에 필요한 리퀘스트 바디 정의.
 */
@Getter
@Setter
@ApiModel("TilePutRequest")
public class TilePutReq {
	
	@ApiModelProperty(name="타일 ID", example="1")
	long tid;
	
	@ApiModelProperty(name="면적", example="3000")
	int area;
	
	@ApiModelProperty(name="행성 아이디", example="2")
	long planet;
	
	@ApiModelProperty(name="최초 구매자 지갑 주소", example="account 1")
	String buyerId;
	
	@ApiModelProperty(name="최초 구매자 지갑 주소", example="0xB697444e418aeA6A4E7f23611f61a43Ab4761b5C")
	String buyerAdr;
	
	@ApiModelProperty(name="거래 일자", example="20150203")
	LocalDateTime tradeDate;
	
	@ApiModelProperty(name="가격", example="50")
	int price;
	
	@ApiModelProperty(name="token 아이디", example="0xB697444e418aeA6A4E7f23611f61a43Ab4761b5C")
	String tokenId;
	
}
