var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/api/index_list/data', function(req, res, next) {



  res.json({
    "code":0,
      torBar:[
          {id:1,name:'首页'},
        {id:2,name:'推荐'},
        {id:3,name:'商品'},
        {id:4,name:'老婆好看'},
        {id:5,name:'优化'},
        {id:6,name:'好看'},
        {id:7,name:'性感'},
        {id:8,name:'靓女'},
        {id:9,name:'时尚'},
        {id:10,name:'二次元'}
      ],
   
     data:[
      {
        type:'indexSwiper',
        data:[
       {imgurl:'../../static/bz1.png'},
        {imgurl:'../../static/bz2.png'},
        {imgurl:'../../static/bz3.png'}

      ]

      },
      {  type:'Wife',
        data:[
          {bigurl:'../../static/wife/wifeone.png',
          data:[
           {imgurl:'../../static/wife/wifefive.jpg'},
           {imgurl:'../../static/wife/wifesix.png'},
           {imgurl:'../../static/wife/wifenine.png'}
          ]
        },
        {bigurl:'../../static/wife/wifetwo.png',
        data:[
         {imgurl:'../../static/wife/wifenight.jpg'},
         {imgurl:'../../static/wife/wifeseven.jpg'},
         {imgurl:'../../static/wife/wifethree.png'}
        ]
         },
      ]
      },
      {
        type:'Cartone',
      data:[
        {
          url:'/static/wife/wifethree.png',
          shopname:'埃利瑟',
          bq:['好看','很好看'],
          Money:'99',
          ck:'5.7'
          
        },
        {
          url:'/static/wife/wifethree.png',
          shopname:'埃利瑟',
          bq:['好看','很好看'],
          Money:'99',
          ck:'5.7'
          
        },{
        url:'/static/wife/wifethree.png',
        shopname:'埃利瑟',
        bq:['好看','很好看'],
        Money:'99',
        ck:'5.7'
        
      },
      {
        url:'/static/wife/wifethree.png',
        shopname:'埃利瑟',
        bq:['好看','很好看'],
        Money:'99',
        ck:'5.7'
        
      },
      {
        url:'/static/wife/wifethree.png',
        shopname:'埃利瑟',
        bq:['好看','很好看'],
        Money:'99',
        ck:'5.7'
        
      },
      {
        url:'/static/wife/wifethree.png',
        shopname:'埃利瑟',
        bq:['好看','很好看'],
        Money:'99',
        ck:'5.7'
        
      }
      ]
       },
    ]

    },   
      
       
      
  )
  
 

});





module.exports = router;
