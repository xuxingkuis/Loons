/*
# 自用备份 BaiduCloud 🔐4K & 2x speed
# !url = https://raw.githubusercontent.com/MCdasheng/Module/main/Scripts/BaiduYun.js
# From https://github.com/ddgksf2013/Scripts/raw/master/bdcloud.js
-----------------------------------------------------------------------------------------------------------------------------------------------------
QX:
[Rewrite local]
https:\/\/pan\.baidu\.com\/rest\/2\.0\/membership\/user url script-response-body https://raw.githubusercontent.com/MCdasheng/Module/main/Scripts/BaiduYun.js
[Mitm]
hostname = pan.baidu.com
-----------------------------------------------------------------------------------------------------------------------------------------------------
*/

$done({
  body: JSON["\x73\x74\x72\x69\x6e\x67\x69\x66\x79"](
    (obj = {
      product_infos: [
        {
          product_id:
            "\x35\x33\x31\x30\x38\x39\x37\x37\x39\x32\x31\x32\x38\x36\x33\x33\x33\x39\x30",
          start_time: 1417260485,
          end_time: 3147483648,
          buy_time: "\x31\x34\x31\x37\x32\x36\x30\x34\x38\x35",
          cluster: "\x6f\x66\x66\x6c\x69\x6e\x65\x64\x6c",
          detail_cluster: "\x6f\x66\x66\x6c\x69\x6e\x65\x64\x6c",
          product_name:
            "\x67\x7a\x5f\x74\x65\x6c\x65\x63\x6f\x6d\x5f\x65\x78\x70",
        },
        {
          product_name: "\x73\x76\x69\x70\x32\x5f\x6e\x64",
          product_description: "\u8d85\u7ea7\u4f1a\u5458",
          function_num: 0,
          start_time: 1553702399,
          buy_description: "",
          buy_time: 0,
          product_id: "\x31",
          auto_upgrade_to_svip: 0,
          end_time: 3672502399,
          cluster: "\x76\x69\x70",
          detail_cluster: "\x73\x76\x69\x70",
          status: 0,
        },
      ],
      currenttime: 1573473597,
      reminder: { reminderWithContent: [], advertiseContent: [] },
      request_id: 0x681c020293b79000,
      guide_data: {
        title: "\u8d85\u7ea7\u4f1a\u5458 \x53\x56\x49\x50",
        content:
          "\u5df2\u62e5\u6709\u6781\u901f\u4e0b\u8f7d\x2b\u89c6\u9891\u500d\u901f\u7279\u6743",
        button: {
          text: "\u4f1a\u5458\u4e2d\u5fc3",
          action_url:
            "\x68\x74\x74\x70\x73\x3a\x2f\x2f\x70\x61\x6e\x2e\x62\x61\x69\x64\x75\x2e\x63\x6f\x6d\x2f\x77\x61\x70\x2f\x76\x69\x70\x2f\x75\x73\x65\x72\x3f\x66\x72\x6f\x6d\x3d\x6d\x79\x76\x69\x70\x32\x23\x73\x76\x69\x70",
        },
      },
    })
  ),
});
