!function(){var e,t,n=new Date,a=n.getMonth(),d=n.getFullYear(),c=document.getElementById("year"),r=document.getElementById("month"),o=document.querySelector("#calendar > thead > tr"),l=document.querySelector("#month"),u=document.querySelector("#year"),i=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],m=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],p=["2010","2011","2012","2013","2014","2015","2016","2017","2018","2019","2020","2021"],s=document.getElementById("monthAndYear"),h=document.getElementById("next"),g=document.getElementById("previous"),v=document.getElementById("month"),E=document.getElementById("year"),f=[],y=[];function I(){d=11===a?d+1:d,L(a=(a+1)%12,d)}function T(){d=0===a?d-1:d,L(a=0===a?11:a-1,d)}function x(){d=parseInt(c.value),L(a=parseInt(r.value),d)}function L(e,t){let a=new Date(t,e).getDay();var d=document.getElementById("calendar-body"),o=y.map(e=>({date:e.launch_date_local,text:e.mission_name}));d.innerHTML="",s.innerHTML=i[e]+" "+t,c.value=t,r.value=e;let l=1;for(let c=0;c<6;c++){let r=document.createElement("tr");for(let d=0;d<7;d++)if(0===c&&d<a)u=document.createElement("td"),m=document.createTextNode(""),u.appendChild(m),r.appendChild(u);else{if(l>32-new Date(t,e,32).getDate())break;{var u=document.createElement("td"),m=document.createTextNode(l);l===n.getDate()&&t===n.getFullYear()&&e===n.getMonth()&&u.classList.add("bg-info");var p=(e+1).toString();const a=o.filter(e=>e.date.includes("0"+p));for(var h=0;h<a.length;h++){var g=a[h].date.split(/-|T/g),v=a[h].text,E=parseInt(g[2]),f=parseInt(g[1]),I=parseInt(g[0]),T=v+" ("+g[3]+")";if(E===l&&I===t&&f===e+1){u.classList.add("bg-space");var x=document.createElement("span");u.appendChild(x),x.innerText=T}}u.appendChild(m),r.appendChild(u),l++}}d.appendChild(r)}}(e=new XMLHttpRequest).onreadystatechange=function(){4==e.readyState&&200==e.status&&(y=JSON.parse(e.responseText),f.concat(y),L(a,d))},e.open("GET","https://api.spacexdata.com/v3/launches/upcoming?launch_year=2020&filter=launch_date_local,mission_name",!0),e.send(),m.forEach((function(e){var t=document.createElement("th");t.innerText=e,o.append(t)})),t=0,i.forEach((function(e){var n=document.createElement("option");n.value=t++,n.innerText=e,l.append(n)})),p.forEach((function(e){var t=document.createElement("option");t.value=e,t.innerText=e,u.append(t)})),h.addEventListener("click",I),g.addEventListener("click",T),v.addEventListener("change",x),E.addEventListener("change",x)}();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsieG1saHR0cCIsImluZGV4IiwidG9kYXkiLCJEYXRlIiwiY3VycmVudE1vbnRoIiwiZ2V0TW9udGgiLCJjdXJyZW50WWVhciIsImdldEZ1bGxZZWFyIiwic2VsZWN0WWVhciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJzZWxlY3RNb250aCIsImNhbGVuZGFyRGF5cyIsInF1ZXJ5U2VsZWN0b3IiLCJjYWxlbmRhck1vbnRocyIsImNhbGVuZGFyWWVhcnMiLCJtb250aHMiLCJkYXlzIiwieWVhcnMiLCJtb250aEFuZFllYXIiLCJuZXh0QnRuIiwicHJldkJ0biIsIm1vbnRoRHJvcGRvd24iLCJ5ZWFyRHJvcGRvd24iLCJmZXRjaFJlc3VsdHMiLCJvYmoiLCJuZXh0Iiwic2hvd0NhbGVuZGFyIiwicHJldmlvdXMiLCJqdW1wIiwicGFyc2VJbnQiLCJ2YWx1ZSIsIm1vbnRoIiwieWVhciIsImZpcnN0RGF5IiwiZ2V0RGF5IiwidGJsIiwicmVzdWx0cyIsIm1hcCIsIml0ZW0iLCJkYXRlIiwibGF1bmNoX2RhdGVfbG9jYWwiLCJ0ZXh0IiwibWlzc2lvbl9uYW1lIiwiaW5uZXJIVE1MIiwiaSIsInJvdyIsImNyZWF0ZUVsZW1lbnQiLCJqIiwiY2VsbCIsImNlbGxUZXh0IiwiY3JlYXRlVGV4dE5vZGUiLCJhcHBlbmRDaGlsZCIsImdldERhdGUiLCJjbGFzc0xpc3QiLCJhZGQiLCJtb250aE1hdGNoIiwidG9TdHJpbmciLCJyZXN1bHQiLCJmaWx0ZXIiLCJoIiwiaW5jbHVkZXMiLCJrIiwibGVuZ3RoIiwicGFydCIsInNwbGl0IiwibWlzc2lvbk5hbWUiLCJkYXRlSW50IiwibW9udGhJbnQiLCJ5ZWFySW50IiwibWlzc2lvbkRldGFpbHMiLCJzcGFuIiwiaW5uZXJUZXh0IiwiWE1MSHR0cFJlcXVlc3QiLCJvbnJlYWR5c3RhdGVjaGFuZ2UiLCJyZWFkeVN0YXRlIiwic3RhdHVzIiwiSlNPTiIsInBhcnNlIiwicmVzcG9uc2VUZXh0IiwiY29uY2F0Iiwib3BlbiIsInNlbmQiLCJmb3JFYWNoIiwiZGF5IiwiYXBwZW5kIiwiYWRkRXZlbnRMaXN0ZW5lciJdLCJtYXBwaW5ncyI6IkNBQUEsV0FFSSxJQXVCUUEsRUFnQ0FDLEVBdERKQyxFQUFRLElBQUlDLEtBQ1pDLEVBQWVGLEVBQU1HLFdBQ3JCQyxFQUFjSixFQUFNSyxjQUNwQkMsRUFBYUMsU0FBU0MsZUFBZSxRQUNyQ0MsRUFBY0YsU0FBU0MsZUFBZSxTQUN0Q0UsRUFBZUgsU0FBU0ksY0FBYywwQkFDdENDLEVBQWlCTCxTQUFTSSxjQUFjLFVBQ3hDRSxFQUFnQk4sU0FBU0ksY0FBYyxTQUN2Q0csRUFBUyxDQUFDLE1BQU8sTUFBTyxNQUFPLE1BQU8sTUFBTyxNQUFPLE1BQU8sTUFBTyxNQUFPLE1BQU8sTUFBTyxPQUN2RkMsRUFBTyxDQUFDLE1BQU8sTUFBTyxNQUFPLE1BQU8sTUFBTyxNQUFPLE9BQ2xEQyxFQUFRLENBQUMsT0FBUSxPQUFRLE9BQVEsT0FBUSxPQUFRLE9BQVEsT0FBUSxPQUFRLE9BQVEsT0FBUSxPQUFRLFFBQ2pHQyxFQUFlVixTQUFTQyxlQUFlLGdCQUN2Q1UsRUFBVVgsU0FBU0MsZUFBZSxRQUNsQ1csRUFBVVosU0FBU0MsZUFBZSxZQUNsQ1ksRUFBZ0JiLFNBQVNDLGVBQWUsU0FDeENhLEVBQWVkLFNBQVNDLGVBQWUsUUFFdkNjLEVBQWUsR0FDZkMsRUFBTSxHQXNEVixTQUFTQyxJQUNMcEIsRUFBZ0MsS0FBakJGLEVBQXVCRSxFQUFjLEVBQUlBLEVBRXhEcUIsRUFEQXZCLEdBQWdCQSxFQUFlLEdBQUssR0FDVEUsR0FHL0IsU0FBU3NCLElBQ0x0QixFQUFnQyxJQUFqQkYsRUFBc0JFLEVBQWMsRUFBSUEsRUFFdkRxQixFQURBdkIsRUFBaUMsSUFBakJBLEVBQXNCLEdBQUtBLEVBQWUsRUFDL0JFLEdBRy9CLFNBQVN1QixJQUNMdkIsRUFBY3dCLFNBQVN0QixFQUFXdUIsT0FFbENKLEVBREF2QixFQUFlMEIsU0FBU25CLEVBQVlvQixPQUNUekIs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QUFLaUMsVUFBWXZDLEVBQ2pCbEIsRUFBY3NFLE9BQU85QyxNQW9HekJuQixFQUFRa0UsaUJBQWlCLFFBQVM1RCxHQUNsQ0wsRUFBUWlFLGlCQUFpQixRQUFTMUQsR0FDbENOLEVBQWNnRSxpQkFBaUIsU0FBVXpELEdBQ3pDTixFQUFhK0QsaUJBQWlCLFNBQVV6RCxHQTlLaEQiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiAoKSB7XG5cbiAgICB2YXJcbiAgICAgICAgdG9kYXkgPSBuZXcgRGF0ZSgpLFxuICAgICAgICBjdXJyZW50TW9udGggPSB0b2RheS5nZXRNb250aCgpLFxuICAgICAgICBjdXJyZW50WWVhciA9IHRvZGF5LmdldEZ1bGxZZWFyKCksXG4gICAgICAgIHNlbGVjdFllYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInllYXJcIiksXG4gICAgICAgIHNlbGVjdE1vbnRoID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb250aFwiKSxcbiAgICAgICAgY2FsZW5kYXJEYXlzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjYWxlbmRhciA+IHRoZWFkID4gdHJcIiksXG4gICAgICAgIGNhbGVuZGFyTW9udGhzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtb250aFwiKSxcbiAgICAgICAgY2FsZW5kYXJZZWFycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjeWVhclwiKSxcbiAgICAgICAgbW9udGhzID0gW1wiSmFuXCIsIFwiRmViXCIsIFwiTWFyXCIsIFwiQXByXCIsIFwiTWF5XCIsIFwiSnVuXCIsIFwiSnVsXCIsIFwiQXVnXCIsIFwiU2VwXCIsIFwiT2N0XCIsIFwiTm92XCIsIFwiRGVjXCJdLFxuICAgICAgICBkYXlzID0gW1wiU3VuXCIsIFwiTW9uXCIsIFwiVHVlXCIsIFwiV2VkXCIsIFwiVGh1XCIsIFwiRnJpXCIsIFwiU2F0XCJdLFxuICAgICAgICB5ZWFycyA9IFtcIjIwMTBcIiwgXCIyMDExXCIsIFwiMjAxMlwiLCBcIjIwMTNcIiwgXCIyMDE0XCIsIFwiMjAxNVwiLCBcIjIwMTZcIiwgXCIyMDE3XCIsIFwiMjAxOFwiLCBcIjIwMTlcIiwgXCIyMDIwXCIsIFwiMjAyMVwiXSxcbiAgICAgICAgbW9udGhBbmRZZWFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb250aEFuZFllYXJcIiksXG4gICAgICAgIG5leHRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV4dCcpLFxuICAgICAgICBwcmV2QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByZXZpb3VzJyksXG4gICAgICAgIG1vbnRoRHJvcGRvd24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9udGgnKSxcbiAgICAgICAgeWVhckRyb3Bkb3duID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3llYXInKSxcbiAgICAgICAgRmV0Y2hVcmwgPSBcImh0dHBzOi8vYXBpLnNwYWNleGRhdGEuY29tL3YzL2xhdW5jaGVzL3VwY29taW5nP2xhdW5jaF95ZWFyPTIwMjAmZmlsdGVyPWxhdW5jaF9kYXRlX2xvY2FsLG1pc3Npb25fbmFtZVwiLFxuICAgICAgICBmZXRjaFJlc3VsdHMgPSBbXSxcbiAgICAgICAgb2JqID0gW107XG5cblxuICAgIGZ1bmN0aW9uIGNhbGxBamF4KHVybCwgY2FsbGJhY2spIHtcbiAgICAgICAgdmFyIHhtbGh0dHA7XG4gICAgICAgIHhtbGh0dHAgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICAgeG1saHR0cC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoeG1saHR0cC5yZWFkeVN0YXRlID09IDQgJiYgeG1saHR0cC5zdGF0dXMgPT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgb2JqID0gSlNPTi5wYXJzZSh4bWxodHRwLnJlc3BvbnNlVGV4dCk7XG4gICAgICAgICAgICAgICAgZmV0Y2hSZXN1bHRzLmNvbmNhdChvYmopO1xuICAgICAgICAgICAgICAgIHNob3dDYWxlbmRhcihjdXJyZW50TW9udGgsIGN1cnJlbnRZZWFyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgeG1saHR0cC5vcGVuKFwiR0VUXCIsIEZldGNoVXJsLCB0cnVlKTtcbiAgICAgICAgeG1saHR0cC5zZW5kKCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcHJvY2Vzc1Jlc3VsdHMoKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSBvYmoubWFwKGl0ZW0gPT4gKHtcbiAgICAgICAgICAgICAgICBkYXRlOiBpdGVtLmxhdW5jaF9kYXRlX2xvY2FsLCB0ZXh0OiBpdGVtLm1pc3Npb25fbmFtZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgKTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxuXG5cbiAgICBmdW5jdGlvbiBwb3B1bGF0ZURheXMoKSB7XG4gICAgICAgIGRheXMuZm9yRWFjaChmdW5jdGlvbiAoZGF5KSB7XG4gICAgICAgICAgICB2YXIgaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0aFwiKTtcbiAgICAgICAgICAgIGl0ZW0uaW5uZXJUZXh0ID0gZGF5O1xuICAgICAgICAgICAgY2FsZW5kYXJEYXlzLmFwcGVuZChpdGVtKTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwb3B1bGF0ZU1vbnRocygpIHtcbiAgICAgICAgdmFyIGluZGV4ID0gMDtcbiAgICAgICAgbW9udGhzLmZvckVhY2goZnVuY3Rpb24gKG1vbnRoKSB7XG4gICAgICAgICAgICB2YXIgaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgICAgICAgICBpdGVtLnZhbHVlID0gaW5kZXgrKztcbiAgICAgICAgICAgIGl0ZW0uaW5uZXJUZXh0ID0gbW9udGg7XG4gICAgICAgICAgICBjYWxlbmRhck1vbnRocy5hcHBlbmQoaXRlbSk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcG9wdWxhdGVZZWFycygpIHtcbiAgICAgICAgeWVhcnMuZm9yRWFjaChmdW5jdGlvbiAoeWVhcikge1xuICAgICAgICAgICAgdmFyIGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgICAgICAgaXRlbS52YWx1ZSA9IHllYXI7XG4gICAgICAgICAgICBpdGVtLmlubmVyVGV4dCA9IHllYXI7XG4gICAgICAgICAgICBjYWxlbmRhclllYXJzLmFwcGVuZChpdGVtKTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgICBjdXJyZW50WWVhciA9IChjdXJyZW50TW9udGggPT09IDExKSA/IGN1cnJlbnRZZWFyICsgMSA6IGN1cnJlbnRZZWFyO1xuICAgICAgICBjdXJyZW50TW9udGggPSAoY3VycmVudE1vbnRoICsgMSkgJSAxMjtcbiAgICAgICAgc2hvd0NhbGVuZGFyKGN1cnJlbnRNb250aCwgY3VycmVudFllYXIpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHByZXZpb3VzKCkge1xuICAgICAgICBjdXJyZW50WWVhciA9IChjdXJyZW50TW9udGggPT09IDApID8gY3VycmVudFllYXIgLSAxIDogY3VycmVudFllYXI7XG4gICAgICAgIGN1cnJlbnRNb250aCA9IChjdXJyZW50TW9udGggPT09IDApID8gMTEgOiBjdXJyZW50TW9udGggLSAxO1xuICAgICAgICBzaG93Q2FsZW5kYXIoY3VycmVudE1vbnRoLCBjdXJyZW50WWVhcik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24ganVtcCgpIHtcbiAgICAgICAgY3VycmVudFllYXIgPSBwYXJzZUludChzZWxlY3RZZWFyLnZhbHVlKTtcbiAgICAgICAgY3VycmVudE1vbnRoID0gcGFyc2VJbnQoc2VsZWN0TW9udGgudmFsdWUpO1xuICAgICAgICBzaG93Q2FsZW5kYXIoY3VycmVudE1vbnRoLCBjdXJyZW50WWVhcik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2hvd0NhbGVuZGFyKG1vbnRoLCB5ZWFyKSB7XG5cbiAgICAgICAgbGV0IGZpcnN0RGF5ID0gKG5ldyBEYXRlKHllYXIsIG1vbnRoKSkuZ2V0RGF5KCk7XG4gICAgICAgIHZhciB0YmwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbGVuZGFyLWJvZHlcIik7IC8vIGJvZHkgb2YgdGhlIGNhbGVuZGFyXG4gICAgICAgIHZhciByZXN1bHRzID0gcHJvY2Vzc1Jlc3VsdHMoKTtcblxuICAgICAgICB0YmwuaW5uZXJIVE1MID0gXCJcIjtcblxuICAgICAgICBtb250aEFuZFllYXIuaW5uZXJIVE1MID0gbW9udGhzW21vbnRoXSArIFwiIFwiICsgeWVhcjtcbiAgICAgICAgc2VsZWN0WWVhci52YWx1ZSA9IHllYXI7XG4gICAgICAgIHNlbGVjdE1vbnRoLnZhbHVlID0gbW9udGg7XG5cbiAgICAgICAgLy8gY3JlYXRpbmcgYWxsIGNlbGxzXG4gICAgICAgIGxldCBkYXRlID0gMTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA2OyBpKyspIHtcbiAgICAgICAgICAgIC8vIGNyZWF0ZXMgYSB0YWJsZSByb3dcbiAgICAgICAgICAgIGxldCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XG5cbiAgICAgICAgICAgIC8vY3JlYXRpbmcgaW5kaXZpZHVhbCBjZWxscywgZmlsaW5nIHRoZW0gdXAgd2l0aCBkYXRhLlxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCA3OyBqKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoaSA9PT0gMCAmJiBqIDwgZmlyc3REYXkpIHtcbiAgICAgICAgICAgICAgICAgICAgY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcbiAgICAgICAgICAgICAgICAgICAgY2VsbFRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlwiKTtcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5hcHBlbmRDaGlsZChjZWxsVGV4dCk7XG4gICAgICAgICAgICAgICAgICAgIHJvdy5hcHBlbmRDaGlsZChjZWxsKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGRhdGUgPiBkYXlzSW5Nb250aChtb250aCwgeWVhcikpIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBjZWxsVGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGRhdGUpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0ZSA9PT0gdG9kYXkuZ2V0RGF0ZSgpICYmIHllYXIgPT09IHRvZGF5LmdldEZ1bGxZZWFyKCkgJiYgbW9udGggPT09IHRvZGF5LmdldE1vbnRoKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcImJnLWluZm9cIik7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB2YXIgbW9udGhQYXJ0ID0gbW9udGggKyAxO1xuICAgICAgICAgICAgICAgICAgICB2YXIgbW9udGhNYXRjaCA9IG1vbnRoUGFydC50b1N0cmluZygpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSByZXN1bHRzLmZpbHRlcihoID0+IGguZGF0ZS5pbmNsdWRlcyhcIjBcIiArIG1vbnRoTWF0Y2gpKTtcblxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBrID0gMDsgayA8IHJlc3VsdC5sZW5ndGg7IGsrKykge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcGFydCA9IHJlc3VsdFtrXS5kYXRlLnNwbGl0KC8tfFQvZyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWlzc2lvbk5hbWUgPSByZXN1bHRba10udGV4dDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkYXRlSW50ID0gcGFyc2VJbnQocGFydFsyXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbW9udGhJbnQgPSBwYXJzZUludChwYXJ0WzFdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB5ZWFySW50ID0gcGFyc2VJbnQocGFydFswXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdGltZUludCA9IHBhcnRbM107XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWlzc2lvbkRldGFpbHMgPSAobWlzc2lvbk5hbWUgKyAnICgnICsgdGltZUludCArICcpJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYXRlSW50ID09PSBkYXRlICYmIHllYXJJbnQgPT09IHllYXIgJiYgbW9udGhJbnQgPT09IG1vbnRoICsgMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcImJnLXNwYWNlXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VsbC5hcHBlbmRDaGlsZChzcGFuKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcGFuLmlubmVyVGV4dCA9IG1pc3Npb25EZXRhaWxzXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBjZWxsLmFwcGVuZENoaWxkKGNlbGxUZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgcm93LmFwcGVuZENoaWxkKGNlbGwpO1xuICAgICAgICAgICAgICAgICAgICBkYXRlKys7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0YmwuYXBwZW5kQ2hpbGQocm93KTsgLy8gYXBwZW5kaW5nIGVhY2ggcm93IGludG8gY2FsZW5kYXIgYm9keS5cbiAgICAgICAgfVxuICAgIH1cblxuLy8gY2hlY2sgaG93IG1hbnkgZGF5cyBpbiBhIG1vbnRoIGNvZGUgZnJvbSBodHRwczovL2R6b25lLmNvbS9hcnRpY2xlcy9kZXRlcm1pbmluZy1udW1iZXItZGF5cy1tb250aFxuICAgIGZ1bmN0aW9uIGRheXNJbk1vbnRoKGlNb250aCwgaVllYXIpIHtcbiAgICAgICAgcmV0dXJuIDMyIC0gbmV3IERhdGUoaVllYXIsIGlNb250aCwgMzIpLmdldERhdGUoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbml0KCkge1xuXG4gICAgICAgIGNhbGxBamF4KCk7XG4gICAgICAgIHBvcHVsYXRlRGF5cygpO1xuICAgICAgICBwb3B1bGF0ZU1vbnRocygpO1xuICAgICAgICBwb3B1bGF0ZVllYXJzKCk7XG5cbiAgICAgICAgbmV4dEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG5leHQpO1xuICAgICAgICBwcmV2QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcHJldmlvdXMpO1xuICAgICAgICBtb250aERyb3Bkb3duLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGp1bXApO1xuICAgICAgICB5ZWFyRHJvcGRvd24uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywganVtcCk7XG4gICAgfVxuXG4gICAgaW5pdCgpO1xufSkoKTsiXX0=
