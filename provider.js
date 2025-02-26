async function scheduleHtmlProvider() {
  await loadTool('AIScheduleTools')
  try {
    const res = await fetch("https://webvpn.sxdtdx.edu.cn:8443/http/77726476706e69737468656265737421a1a70fcd7e622603305ade/jwglxt/kbcx/xskbcx_cxXsgrkb.html?vpn-12-o1-10.192.3.27&gnmkdm=N2151", {
      "headers": {
        "accept": "*/*",
        "content-type": "application/x-www-form-urlencoded;charset=UTF-8",
        "x-requested-with": "XMLHttpRequest"
      },
      "body": "xnm=2024&xqm=3&kzlx=ck&xsdm=",
      "method": "POST",
      "mode": "cors",
      "credentials": "include"
    })

    const ret = await res.json()
    return JSON.stringify(ret.kbList)

  } catch (error) {
    await AIScheduleAlert('请确定你已经登陆了教务系统')
    return 'do not continue'
  }
}
