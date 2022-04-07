<h3>DB 기본 정보</h3>

**사용 DB: mysql** <br/>
- ID: j6a206 <br/>
- PW: sAs1a0f6y <br/>
- port번호: 3306 <br/>
- DB 이름: mint <br>
----------------------------
**Table 정보**

- Tile 테이블 <br>

| Flied      | Type         | Null | Key  | Default | Extra          |
| -----      | ----         | ---- | ---- | ------  | ------         |
| tile_id    | String       | NO   | PRI  | NULL    | auto_increment |
| area       | Int          | YES  |      | NULL    |                |
| image      | String       | YES  |      | NULL    |                |
| planet_id  | Long         | YES  | FK   | NULL    |                |
| buyer_adr  | String       | YES  |      | NULL    |                |
| trade_date | DateTime     | YES  |      | NULL    |                |
| price      | int          | YES  |      | NULL    |                |
| token_id   | String       | YES  |      | NULL    |                |

- Planet 테이블

| Flied       | Type         | Null | Key  | Default | Extra  |
| -----       | ----         | ---- | ---- | ------  | ------ |
| planet_id   | Long         | NO   | PRI  | NULL    |        |
| name        | String       | YES  |      | NULL    |        |
| diameter    | Double       | YES  |      | NULL    |        |
| mass        | Double       | YES  |      | NULL    |        |
| galaxy      | String       | YES  |      | NULL    |        |
| content     | String       | YES  |      | NULL    |        |
| total_cell  | Int          | YES  |      | NULL    |        |

- Favorite 테이블

| Flied       | Type         | Null | Key  | Default | Extra  |
| -----       | ----         | ---- | ---- | ------  | ------ |
| id          | Long         | NO   | PRI  | NULL    |        |
| wallet_id   | String       | YES  |      | NULL    |        |
| tile_id     | String       | YES  |      | NULL    |        |
