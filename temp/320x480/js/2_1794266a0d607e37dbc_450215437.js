// =========================================================== // Eskimi Def
 var ticket_id = "86c7rbuk5"; // Replace this with the main ClickUp ticket ID (not the subtask ID)

 var images_url = "https://dsp-media.eskimi.com/upload/rm/upload/6a0d607cdddf5/DataCollection_300x600/images/";

 var campaign_id = __campaignId;
 var creative_set_title = __creativeSetTitle;
 var site_title = __siteTitle;
 var site_id = __siteId;
 var creative_set_id = __creativeSetId;

 var tracker_id = document.querySelector(
 'meta[name="x-rm-alias"]'
 )?.content;
 var submitUrl = `https://api.eskimi-creatives.com/usage_tracker/tracker.php?ticketid=${ticket_id}&campid=${campaign_id}&cset_id=${creative_set_id}&cset_title=${creative_set_title}&stitle=${site_title}&site_id=${site_id}`;

 var ismain = false;
 var isseen = false;

 const wrapper = document.querySelector(".wrapper");
 gsap.set(wrapper, { opacity: 0 });

 var clickTag = __clickUrl;
 var eventUrl = __eventUrl;
 var videoEventUrl = __videoEventUrl;

 function startEvent(event) {
 var track = new Image();
 track.src = eventUrl + event;
 }

 var isStarted = true;
 function startedFunction() {
 if (isStarted) {
 isStarted = false;
 startEvent("Main");
 }
 }

 var isFinished = true;
 function finishedFunction() {
 if (isFinished) {
 isFinished = false;
 startEvent("Seen_All");
 }
 }

 function clickThrough(event) {
 window.open(clickTag);
 }

 var engOb = {
 mouseOver: false,
 touch: false,
 };

 function setEng(event) {
 if (!engOb.mouseOver && !engOb.touch) {
 switch (event.type) {
 case "mouseover":
 engOb.mouseOver = true;
 startEvent("Mouse_Over");
 break;
 case "touchstart":
 engOb.touch = true;
 startEvent("Touch");
 break;
 }
 }
 }

 wrapper.addEventListener("mouseover", setEng);
 wrapper.addEventListener("touchstart", setEng);

 const initTracker = document.querySelector(
 'meta[name="x-rm-alias"]'
 )?.content;
 startEvent(initTracker);

 document.addEventListener("DOMContentLoaded", () => {
 fetch(submitUrl)
 .then((res) => res.json())
 .then((data) => {
 // Optional: handle response
 });

 if (ticket_id === "" || tracker_id === "") {
 console.error("!!!!!! Ticket ID || Tracker not found !!!!!!!");
 var errorTxt = document.createElement("div");
 errorTxt.innerText = "Ticket ID || Tracker not found";
 errorTxt.classList.add("errorTxt");
 document.body.appendChild(errorTxt);
 } else {
 startEvent(tracker_id);
 }
 });

 //Track Data
 function trackValues(val1, val2, val3, val4, val5) {
 tracker = new Image();
 tracker.src =
 "https://rm.eskimi.com/dsptools/api/tracker?site_id=" +
 __siteId +
 "&cid=" +
 __campaignId +
 "&crid=" +
 __creativeId +
 "&value1=" +
 val1 +
 "&value2=" +
 val2 +
 "&value3=" +
 val3 +
 "&value4=" +
 val4 +
 "&value5=" +
 val5;
 }