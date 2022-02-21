var express = require('express');
var path = require('path');
var router = express.Router();
const endpoints = new Array('accounts_endpoint', 'idtoken_endpoint', 'client_id_metadata_endpoint');


/* GET home page. */
router.get('/:func', function(req, res, next) {
  if(endpoints.includes(req.params.func)){
    
    res.sendFile(path.join(__dirname, '../endpoints/', req.params.func));
    console.log("Referer:" + req.get("Referer"));
    console.log("cookie:" + req.get("cookie"));
    console.log("sec-fedcm-csrf:" + req.get("sec-fedcm-csrf"));
    console.log("Body:" + JSON.stringify(req.body));
    res.setHeader('Content-Type', 'application/json');
  } else {
      console.log('Method undefined');
      next(new Error("Unsupported"));
  }
  }
);

router.post('/token_endpoint', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  console.log("sub:" + req.body.account_id);
  res.json({"id_token": req.body.account_id,"approvedBy": "user"})
  console.log("Referer:" + req.get("Referer"));
  console.log("cookie:" + req.get("cookie"));
  console.log("sec-fedcm-csrf:" + req.get("sec-fedcm-csrf"));
  console.log("Body:" + JSON.stringify(req.body));
 });

module.exports = router;
