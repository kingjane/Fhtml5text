
var u = '00';
var i = 0;
chrome.webRequest.onBeforeRequest.addListener(
  function(info) {
  if(info.url != u) {
    i = 1;
    u=info.url;
  } else {
    i++;
  }	
    if(i % 2 == 1) {      
      window.open("http://example.org/");
      return { cancel: true };
  }
},
  {urls: ["http://video.mukewang.com/*/M.mp4"]},
  ["blocking"]);

chrome.webRequest.onBeforeRequest.addListener(
  function(info) {
    return { cancel: true };
},
  {urls: ["http://video.imooc.com/*/M.flv","http://video.imooc.com/*/M.mp4","http://video.mukewang.com/*/M.flv"]},
  ["blocking"]);

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        sendResponse({farewell: u});
      }
);
