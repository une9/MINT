package com.ssafy.api.request;

import java.time.LocalDateTime;

import org.springframework.format.annotation.DateTimeFormat;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@ApiModel("TilePutRequest")
public class TilePutReq {
	
	@ApiModelProperty(name="타일 ID", example="1")
	String tid;
	
	@ApiModelProperty(name="면적", example="3000")
	int area;
	
	@ApiModelProperty(name="행성 아이디", example="2")
	long planet;
	
	@ApiModelProperty(name="최초 구매자 지갑 주소", example="0xB697444e418aeA6A4E7f23611f61a43Ab4761b5C")
	String buyerAdr;
	
	@ApiModelProperty(name="거래 일자", example="20150203")
	@DateTimeFormat(pattern="yyyy-MM-dd HH:mm:ss")
	LocalDateTime tradeDate;
	
	@ApiModelProperty(name="가격", example="50")
	double price;
	
	@ApiModelProperty(name="token 아이디", example="0xB697444e418aeA6A4E7f23611f61a43Ab4761b5C")
	String tokenId;
	
}
