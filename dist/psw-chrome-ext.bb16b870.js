let e=[],t=document.getElementById("workouts-list"),o=document.getElementById("workouts-loading"),n=document.getElementById("updateP-el"),a="";const r=document.getElementById("refresh-btn");function s(){fetch("https://proswimworkouts.com/wp-json/wp/v2/workouts?per_page=10&orderby=modified").then(e=>{if(!e.ok)throw Error("Network response was not ok");return e.json()}).then(t=>{e=t,localStorage.setItem("pswWorkouts",JSON.stringify(e)),l(e)}).catch(e=>{console.error("Error:",e)})}function l(e){let o="";for(let t=0;t<e.length;t++){let n=new Date(e[t].date);o+=`<li class="pt-1 mb-2">
        <a class="hover:text-orange-700 hover:font-bold" href='${e[t].link}' target='_blank'>
          ${e[t].title.rendered}
        </a>
        <br/><span class="italic text-xs text-sky-700">Published on ${n.toLocaleDateString("en-US",{weekday:"long",month:"long",day:"numeric",year:"numeric"})} </span>
      </li>`}t.innerHTML=o}window.setTimeout(function(){localStorage.getItem("pswWorkouts")?(console.log("Workouts already in local storage."),a=localStorage.getItem("lastUpdate"),n.innerHTML=`<span class="font-medium">Last updated on ${a}</span>`,o.classList.remove("hidden"),setTimeout(()=>{l(JSON.parse(localStorage.getItem("pswWorkouts"))),o.classList.add("hidden")},500)):(t.innerHTML='<li class="italic font-medium text-orange-700">Loading workouts ...</li>',console.log("Workouts not currently in local storage."),s())},500),r.addEventListener("click",function(){a=new Date().toLocaleDateString("en-US",{weekday:"long",year:"numeric",month:"long",day:"numeric"}),n.innerHTML=`<span class="font-medium">Last updated on ${a}</span>`,localStorage.clear(),localStorage.setItem("lastUpdate",a),t.innerHTML='<li class="italic font-medium text-orange-700">Updating workouts ...</li>',s()});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJtYXBwaW5ncyI6IkFDQUEsSUFBSSxFQUFjLEVBQUUsQ0FDaEIsRUFBZSxTQUFTLGNBQWMsQ0FBQyxpQkFDdkMsRUFBa0IsU0FBUyxjQUFjLENBQUMsb0JBQzFDLEVBQVUsU0FBUyxjQUFjLENBQUMsY0FDbEMsRUFBYyxHQUNsQixNQUFNLEVBQWEsU0FBUyxjQUFjLENBQUMsZUE2QjNDLFNBQVMsSUFDUCxNQTdCRixtRkE4QkcsSUFBSSxDQUFDLEFBQUEsSUFDSixHQUFJLENBQUMsRUFBUyxFQUFFLENBQ2QsTUFBTSxBQUFJLE1BQU0sK0JBRWxCLE9BQU8sRUFBUyxJQUFJLEVBQ3RCLEdBQ0MsSUFBSSxDQUFDLEFBQUEsSUFDSixFQUFjLEVBQ2QsYUFBYSxPQUFPLENBQUMsY0FBZSxLQUFLLFNBQVMsQ0FBQyxJQUNuRCxFQUFPLEVBQ1QsR0FDQyxLQUFLLENBQUMsQUFBQSxJQUNMLFFBQVEsS0FBSyxDQUFDLFNBQVUsRUFDMUIsRUFDRixDQUVBLFNBQVMsRUFBTyxDQUFRLEVBQ3RCLElBQUksRUFBb0IsR0FDeEIsSUFBSyxJQUFJLEVBQUksRUFBRyxFQUFJLEVBQVMsTUFBTSxDQUFFLElBQUssQ0FDeEMsSUFBSSxFQUFPLElBQUksS0FBSyxDQUFRLENBQUMsRUFBRSxDQUFDLElBQUksRUFDcEMsR0FDRSxDQUFDOytEQUN3RCxFQUFFLENBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO1VBQ3hFLEVBQUUsQ0FBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDOztvRUFFNkIsRUFBRSxFQUFLLGtCQUFrQixDQUFDLFFBQVMsQ0FBQyxRQUFTLE9BQVEsTUFBTyxPQUFRLElBQUssVUFBVyxLQUFNLFNBQVUsR0FBRztXQUNoSyxDQUFDLEFBQ1YsQ0FDQSxFQUFhLFNBQVMsQ0FBRyxDQUMzQixDQXpEQSxPQUFPLFVBQVUsQ0FBQyxXQUNYLGFBQWEsT0FBTyxDQUFDLGdCQUt4QixRQUFRLEdBQUcsQ0FBQyxzQ0FDWixFQUFjLGFBQWEsT0FBTyxDQUFDLGNBQ25DLEVBQVEsU0FBUyxDQUFHLENBQUMsMENBQTBDLEVBQUUsRUFBWSxPQUFPLENBQUMsQ0FDckYsRUFBZ0IsU0FBUyxDQUFDLE1BQU0sQ0FBQyxVQUNqQyxXQUFXLEtBQ1QsRUFBTyxLQUFLLEtBQUssQ0FBQyxhQUFhLE9BQU8sQ0FBQyxpQkFDdkMsRUFBZ0IsU0FBUyxDQUFDLEdBQUcsQ0FBQyxTQUNoQyxFQUFHLE9BWEgsRUFBYSxTQUFTLENBQUcsMkVBQ3pCLFFBQVEsR0FBRyxDQUFDLDRDQUNaLElBVUQsRUFBRyxLQUdOLEVBQVcsZ0JBQWdCLENBQUMsUUFBUyxXQUNuQyxFQUFjLElBQUksT0FBTyxrQkFBa0IsQ0FBQyxRQUFTLENBQUUsUUFBUyxPQUFRLEtBQU0sVUFBVyxNQUFPLE9BQVEsSUFBSyxTQUFVLEdBQ3ZILEVBQVEsU0FBUyxDQUFHLENBQUMsMENBQTBDLEVBQUUsRUFBWSxPQUFPLENBQUMsQ0FDckYsYUFBYSxLQUFLLEdBQ2xCLGFBQWEsT0FBTyxDQUFDLGFBQWMsR0FDbkMsRUFBYSxTQUFTLENBQUcsNEVBQ3pCLEdBQ0YiLCJzb3VyY2VzIjpbIjxhbm9uPiIsInNyYy9hcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyICQxNTU2MWEzZGQ1ZmNmMTAxJGV4cG9ydHMgPSB7fTtcbmxldCAkMTU1NjFhM2RkNWZjZjEwMSR2YXIkcHN3V29ya291dHMgPSBbXTtcbmxldCAkMTU1NjFhM2RkNWZjZjEwMSR2YXIkd29ya291dHNMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3b3Jrb3V0cy1saXN0XCIpO1xubGV0ICQxNTU2MWEzZGQ1ZmNmMTAxJHZhciR3b3Jrb3V0c0xvYWRpbmcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndvcmtvdXRzLWxvYWRpbmdcIik7XG5sZXQgJDE1NTYxYTNkZDVmY2YxMDEkdmFyJHBVcGRhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVwZGF0ZVAtZWxcIik7XG5sZXQgJDE1NTYxYTNkZDVmY2YxMDEkdmFyJGRhdGVSZWZyZXNoID0gXCJcIjtcbmNvbnN0ICQxNTU2MWEzZGQ1ZmNmMTAxJHZhciRidG5SZWZyZXNoID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZWZyZXNoLWJ0blwiKTtcbmNvbnN0ICQxNTU2MWEzZGQ1ZmNmMTAxJHZhciRhcGlVcmwgPSBcImh0dHBzOi8vcHJvc3dpbXdvcmtvdXRzLmNvbS93cC1qc29uL3dwL3YyL3dvcmtvdXRzP3Blcl9wYWdlPTEwJm9yZGVyYnk9bW9kaWZpZWRcIjtcbndpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgIGlmICghbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwc3dXb3Jrb3V0c1wiKSkge1xuICAgICAgICAkMTU1NjFhM2RkNWZjZjEwMSR2YXIkd29ya291dHNMaXN0LmlubmVySFRNTCA9IGA8bGkgY2xhc3M9XCJpdGFsaWMgZm9udC1tZWRpdW0gdGV4dC1vcmFuZ2UtNzAwXCI+TG9hZGluZyB3b3Jrb3V0cyAuLi48L2xpPmA7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiV29ya291dHMgbm90IGN1cnJlbnRseSBpbiBsb2NhbCBzdG9yYWdlLlwiKTtcbiAgICAgICAgJDE1NTYxYTNkZDVmY2YxMDEkdmFyJGdldFdvcmtvdXRzRnJvbVBTVygpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiV29ya291dHMgYWxyZWFkeSBpbiBsb2NhbCBzdG9yYWdlLlwiKTtcbiAgICAgICAgJDE1NTYxYTNkZDVmY2YxMDEkdmFyJGRhdGVSZWZyZXNoID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJsYXN0VXBkYXRlXCIpO1xuICAgICAgICAkMTU1NjFhM2RkNWZjZjEwMSR2YXIkcFVwZGF0ZS5pbm5lckhUTUwgPSBgPHNwYW4gY2xhc3M9XCJmb250LW1lZGl1bVwiPkxhc3QgdXBkYXRlZCBvbiAkeyQxNTU2MWEzZGQ1ZmNmMTAxJHZhciRkYXRlUmVmcmVzaH08L3NwYW4+YDtcbiAgICAgICAgJDE1NTYxYTNkZDVmY2YxMDEkdmFyJHdvcmtvdXRzTG9hZGluZy5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuICAgICAgICBzZXRUaW1lb3V0KCgpPT57XG4gICAgICAgICAgICAkMTU1NjFhM2RkNWZjZjEwMSR2YXIkcmVuZGVyKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwc3dXb3Jrb3V0c1wiKSkpO1xuICAgICAgICAgICAgJDE1NTYxYTNkZDVmY2YxMDEkdmFyJHdvcmtvdXRzTG9hZGluZy5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICAgICAgICB9LCA1MDApO1xuICAgIH1cbn0sIDUwMCk7XG4kMTU1NjFhM2RkNWZjZjEwMSR2YXIkYnRuUmVmcmVzaC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gICAgJDE1NTYxYTNkZDVmY2YxMDEkdmFyJGRhdGVSZWZyZXNoID0gbmV3IERhdGUoKS50b0xvY2FsZURhdGVTdHJpbmcoXCJlbi1VU1wiLCB7XG4gICAgICAgIHdlZWtkYXk6IFwibG9uZ1wiLFxuICAgICAgICB5ZWFyOiBcIm51bWVyaWNcIixcbiAgICAgICAgbW9udGg6IFwibG9uZ1wiLFxuICAgICAgICBkYXk6IFwibnVtZXJpY1wiXG4gICAgfSk7XG4gICAgJDE1NTYxYTNkZDVmY2YxMDEkdmFyJHBVcGRhdGUuaW5uZXJIVE1MID0gYDxzcGFuIGNsYXNzPVwiZm9udC1tZWRpdW1cIj5MYXN0IHVwZGF0ZWQgb24gJHskMTU1NjFhM2RkNWZjZjEwMSR2YXIkZGF0ZVJlZnJlc2h9PC9zcGFuPmA7XG4gICAgbG9jYWxTdG9yYWdlLmNsZWFyKCk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJsYXN0VXBkYXRlXCIsICQxNTU2MWEzZGQ1ZmNmMTAxJHZhciRkYXRlUmVmcmVzaCk7XG4gICAgJDE1NTYxYTNkZDVmY2YxMDEkdmFyJHdvcmtvdXRzTGlzdC5pbm5lckhUTUwgPSBgPGxpIGNsYXNzPVwiaXRhbGljIGZvbnQtbWVkaXVtIHRleHQtb3JhbmdlLTcwMFwiPlVwZGF0aW5nIHdvcmtvdXRzIC4uLjwvbGk+YDtcbiAgICAkMTU1NjFhM2RkNWZjZjEwMSR2YXIkZ2V0V29ya291dHNGcm9tUFNXKCk7XG59KTtcbmZ1bmN0aW9uICQxNTU2MWEzZGQ1ZmNmMTAxJHZhciRnZXRXb3Jrb3V0c0Zyb21QU1coKSB7XG4gICAgZmV0Y2goJDE1NTYxYTNkZDVmY2YxMDEkdmFyJGFwaVVybCkudGhlbigocmVzcG9uc2UpPT57XG4gICAgICAgIGlmICghcmVzcG9uc2Uub2spIHRocm93IG5ldyBFcnJvcihcIk5ldHdvcmsgcmVzcG9uc2Ugd2FzIG5vdCBva1wiKTtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICB9KS50aGVuKChkYXRhKT0+e1xuICAgICAgICAkMTU1NjFhM2RkNWZjZjEwMSR2YXIkcHN3V29ya291dHMgPSBkYXRhO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInBzd1dvcmtvdXRzXCIsIEpTT04uc3RyaW5naWZ5KCQxNTU2MWEzZGQ1ZmNmMTAxJHZhciRwc3dXb3Jrb3V0cykpO1xuICAgICAgICAkMTU1NjFhM2RkNWZjZjEwMSR2YXIkcmVuZGVyKCQxNTU2MWEzZGQ1ZmNmMTAxJHZhciRwc3dXb3Jrb3V0cyk7XG4gICAgfSkuY2F0Y2goKGVycm9yKT0+e1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3I6XCIsIGVycm9yKTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uICQxNTU2MWEzZGQ1ZmNmMTAxJHZhciRyZW5kZXIod29ya291dHMpIHtcbiAgICBsZXQgd29ya291dHNMaXN0SXRlbXMgPSBcIlwiO1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCB3b3Jrb3V0cy5sZW5ndGg7IGkrKyl7XG4gICAgICAgIGxldCBkYXRlID0gbmV3IERhdGUod29ya291dHNbaV0uZGF0ZSk7XG4gICAgICAgIHdvcmtvdXRzTGlzdEl0ZW1zICs9IGA8bGkgY2xhc3M9XCJwdC0xIG1iLTJcIj5cbiAgICAgICAgPGEgY2xhc3M9XCJob3Zlcjp0ZXh0LW9yYW5nZS03MDAgaG92ZXI6Zm9udC1ib2xkXCIgaHJlZj0nJHt3b3Jrb3V0c1tpXS5saW5rfScgdGFyZ2V0PSdfYmxhbmsnPlxuICAgICAgICAgICR7d29ya291dHNbaV0udGl0bGUucmVuZGVyZWR9XG4gICAgICAgIDwvYT5cbiAgICAgICAgPGJyLz48c3BhbiBjbGFzcz1cIml0YWxpYyB0ZXh0LXhzIHRleHQtc2t5LTcwMFwiPlB1Ymxpc2hlZCBvbiAke2RhdGUudG9Mb2NhbGVEYXRlU3RyaW5nKFwiZW4tVVNcIiwge1xuICAgICAgICAgICAgd2Vla2RheTogXCJsb25nXCIsXG4gICAgICAgICAgICBtb250aDogXCJsb25nXCIsXG4gICAgICAgICAgICBkYXk6IFwibnVtZXJpY1wiLFxuICAgICAgICAgICAgeWVhcjogXCJudW1lcmljXCJcbiAgICAgICAgfSl9IDwvc3Bhbj5cbiAgICAgIDwvbGk+YDtcbiAgICB9XG4gICAgJDE1NTYxYTNkZDVmY2YxMDEkdmFyJHdvcmtvdXRzTGlzdC5pbm5lckhUTUwgPSB3b3Jrb3V0c0xpc3RJdGVtcztcbn1cblxuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKdFlYQndhVzVuY3lJNklqdEJRVUZCTEVsQlFVa3NiME5CUVdNc1JVRkJSVHRCUVVOd1FpeEpRVUZKTEhGRFFVRmxMRk5CUVZNc1kwRkJZeXhEUVVGRE8wRkJRek5ETEVsQlFVa3NkME5CUVd0Q0xGTkJRVk1zWTBGQll5eERRVUZETzBGQlF6bERMRWxCUVVrc1owTkJRVlVzVTBGQlV5eGpRVUZqTEVOQlFVTTdRVUZEZEVNc1NVRkJTU3h2UTBGQll6dEJRVU5zUWl4TlFVRk5MRzFEUVVGaExGTkJRVk1zWTBGQll5eERRVUZETzBGQlF6TkRMRTFCUVUwN1FVRkZUaXhQUVVGUExGVkJRVlVzUTBGQlF6dEpRVU5vUWl4SlFVRkpMRU5CUVVNc1lVRkJZU3hQUVVGUExFTkJRVU1zWjBKQlFXZENPMUZCUTNoRExHMURRVUZoTEZOQlFWTXNSMEZCUnl4RFFVRkRMSGRGUVVGM1JTeERRVUZETzFGQlEyNUhMRkZCUVZFc1IwRkJSeXhEUVVGRE8xRkJRMW83U1VGRFJpeFBRVUZQTzFGQlEwd3NVVUZCVVN4SFFVRkhMRU5CUVVNN1VVRkRXaXh2UTBGQll5eGhRVUZoTEU5QlFVOHNRMEZCUXp0UlFVTnVReXc0UWtGQlVTeFRRVUZUTEVkQlFVY3NRMEZCUXl3d1EwRkJNRU1zUlVGQlJTeHJRMEZCV1N4UFFVRlBMRU5CUVVNN1VVRkRja1lzYzBOQlFXZENMRk5CUVZNc1EwRkJReXhOUVVGTkxFTkJRVU03VVVGRGFrTXNWMEZCVnp0WlFVTlVMRFpDUVVGUExFdEJRVXNzUzBGQlN5eERRVUZETEdGQlFXRXNUMEZCVHl4RFFVRkRPMWxCUTNaRExITkRRVUZuUWl4VFFVRlRMRU5CUVVNc1IwRkJSeXhEUVVGRE8xRkJRMmhETEVkQlFVYzdTVUZEVER0QlFVRkRMRWRCUVVjN1FVRkhUaXhwUTBGQlZ5eG5Ra0ZCWjBJc1EwRkJReXhUUVVGVE8wbEJRMjVETEc5RFFVRmpMRWxCUVVrc1QwRkJUeXhyUWtGQmEwSXNRMEZCUXl4VFFVRlRPMUZCUVVVc1UwRkJVenRSUVVGUkxFMUJRVTA3VVVGQlZ5eFBRVUZQTzFGQlFWRXNTMEZCU3p0SlFVRlZPMGxCUTNaSUxEaENRVUZSTEZOQlFWTXNSMEZCUnl4RFFVRkRMREJEUVVFd1F5eEZRVUZGTEd0RFFVRlpMRTlCUVU4c1EwRkJRenRKUVVOeVJpeGhRVUZoTEV0QlFVczdTVUZEYkVJc1lVRkJZU3hQUVVGUExFTkJRVU1zWTBGQll6dEpRVU51UXl4dFEwRkJZU3hUUVVGVExFZEJRVWNzUTBGQlF5eDVSVUZCZVVVc1EwRkJRenRKUVVOd1J6dEJRVU5HTzBGQlJVRXNVMEZCVXp0SlFVTlFMRTFCUVUwc09FSkJRMHdzU1VGQlNTeERRVUZETEVOQlFVRTdVVUZEU2l4SlFVRkpMRU5CUVVNc1UwRkJVeXhGUVVGRkxFVkJRMlFzVFVGQlRTeEpRVUZKTEUxQlFVMDdVVUZGYkVJc1QwRkJUeXhUUVVGVExFbEJRVWs3U1VGRGRFSXNSMEZEUXl4SlFVRkpMRU5CUVVNc1EwRkJRVHRSUVVOS0xHOURRVUZqTzFGQlEyUXNZVUZCWVN4UFFVRlBMRU5CUVVNc1pVRkJaU3hMUVVGTExGTkJRVk1zUTBGQlF6dFJRVU51UkN3MlFrRkJUenRKUVVOVUxFZEJRME1zUzBGQlN5eERRVUZETEVOQlFVRTdVVUZEVEN4UlFVRlJMRXRCUVVzc1EwRkJReXhWUVVGVk8wbEJRekZDTzBGQlEwWTdRVUZGUVN4VFFVRlRMRFpDUVVGUExGRkJRVkU3U1VGRGRFSXNTVUZCU1N4dlFrRkJiMEk3U1VGRGVFSXNTVUZCU3l4SlFVRkpMRWxCUVVrc1IwRkJSeXhKUVVGSkxGTkJRVk1zVFVGQlRTeEZRVUZGTEVsQlFVczdVVUZEZUVNc1NVRkJTU3hQUVVGUExFbEJRVWtzUzBGQlN5eFJRVUZSTEVOQlFVTXNSVUZCUlN4RFFVRkRMRWxCUVVrN1VVRkRjRU1zY1VKQlEwVXNRMEZCUXpzclJFRkRkMFFzUlVGQlJTeFJRVUZSTEVOQlFVTXNSVUZCUlN4RFFVRkRMRWxCUVVrc1EwRkJRenRWUVVONFJTeEZRVUZGTEZGQlFWRXNRMEZCUXl4RlFVRkZMRU5CUVVNc1MwRkJTeXhEUVVGRExGRkJRVkVzUTBGQlF6czdiMFZCUlRaQ0xFVkJRVVVzUzBGQlN5eHJRa0ZCYTBJc1EwRkJReXhUUVVGVE8xbEJRVU1zVTBGQlV6dFpRVUZSTEU5QlFVODdXVUZCVVN4TFFVRkxPMWxCUVZjc1RVRkJUVHRSUVVGVkxFZEJRVWM3VjBGRGFFc3NRMEZCUXp0SlFVTldPMGxCUTBFc2JVTkJRV0VzVTBGQlV5eEhRVUZITzBGQlF6TkNJaXdpYzI5MWNtTmxjeUk2V3lKemNtTXZZWEJ3TG1weklsMHNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJbXhsZENCd2MzZFhiM0pyYjNWMGN5QTlJRnRkWEc1c1pYUWdkMjl5YTI5MWRITk1hWE4wSUQwZ1pHOWpkVzFsYm5RdVoyVjBSV3hsYldWdWRFSjVTV1FvSjNkdmNtdHZkWFJ6TFd4cGMzUW5LVHRjYm14bGRDQjNiM0pyYjNWMGMweHZZV1JwYm1jZ1BTQmtiMk4xYldWdWRDNW5aWFJGYkdWdFpXNTBRbmxKWkNnbmQyOXlhMjkxZEhNdGJHOWhaR2x1WnljcE8xeHViR1YwSUhCVmNHUmhkR1VnUFNCa2IyTjFiV1Z1ZEM1blpYUkZiR1Z0Wlc1MFFubEpaQ2duZFhCa1lYUmxVQzFsYkNjcE8xeHViR1YwSUdSaGRHVlNaV1p5WlhOb0lEMGdYQ0pjSWp0Y2JtTnZibk4wSUdKMGJsSmxabkpsYzJnZ1BTQmtiMk4xYldWdWRDNW5aWFJGYkdWdFpXNTBRbmxKWkNnbmNtVm1jbVZ6YUMxaWRHNG5LVHRjYm1OdmJuTjBJR0Z3YVZWeWJDQTlJSEJ5YjJObGMzTXVaVzUyTGxkUVgxVlNURHRjYmx4dWQybHVaRzkzTG5ObGRGUnBiV1Z2ZFhRb1puVnVZM1JwYjI0b0tTQjdYRzRnSUdsbUlDZ2hiRzlqWVd4VGRHOXlZV2RsTG1kbGRFbDBaVzBvSjNCemQxZHZjbXR2ZFhSekp5a3BJSHRjYmlBZ0lDQjNiM0pyYjNWMGMweHBjM1F1YVc1dVpYSklWRTFNSUQwZ1lEeHNhU0JqYkdGemN6MWNJbWwwWVd4cFl5Qm1iMjUwTFcxbFpHbDFiU0IwWlhoMExXOXlZVzVuWlMwM01EQmNJajVNYjJGa2FXNW5JSGR2Y210dmRYUnpJQzR1TGp3dmJHaytZRHRjYmlBZ0lDQmpiMjV6YjJ4bExteHZaeWhjSWxkdmNtdHZkWFJ6SUc1dmRDQmpkWEp5Wlc1MGJIa2dhVzRnYkc5allXd2djM1J2Y21GblpTNWNJaWs3WEc0Z0lDQWdaMlYwVjI5eWEyOTFkSE5HY205dFVGTlhLQ2s3WEc0Z0lIMGdaV3h6WlNCN1hHNGdJQ0FnWTI5dWMyOXNaUzVzYjJjb1hDSlhiM0pyYjNWMGN5QmhiSEpsWVdSNUlHbHVJR3h2WTJGc0lITjBiM0poWjJVdVhDSXBPMXh1SUNBZ0lHUmhkR1ZTWldaeVpYTm9JRDBnYkc5allXeFRkRzl5WVdkbExtZGxkRWwwWlcwb0oyeGhjM1JWY0dSaGRHVW5LVHRjYmlBZ0lDQndWWEJrWVhSbExtbHVibVZ5U0ZSTlRDQTlJR0E4YzNCaGJpQmpiR0Z6Y3oxY0ltWnZiblF0YldWa2FYVnRYQ0krVEdGemRDQjFjR1JoZEdWa0lHOXVJQ1I3WkdGMFpWSmxabkpsYzJoOVBDOXpjR0Z1UG1BN1hHNGdJQ0FnZDI5eWEyOTFkSE5NYjJGa2FXNW5MbU5zWVhOelRHbHpkQzV5WlcxdmRtVW9KMmhwWkdSbGJpY3BPMXh1SUNBZ0lITmxkRlJwYldWdmRYUW9LQ2tnUFQ0Z2UxeHVJQ0FnSUNBZ2NtVnVaR1Z5S0VwVFQwNHVjR0Z5YzJVb2JHOWpZV3hUZEc5eVlXZGxMbWRsZEVsMFpXMG9KM0J6ZDFkdmNtdHZkWFJ6SnlrcEtWeHVJQ0FnSUNBZ2QyOXlhMjkxZEhOTWIyRmthVzVuTG1Oc1lYTnpUR2x6ZEM1aFpHUW9KMmhwWkdSbGJpY3BPMXh1SUNBZ0lIMHNJRFV3TUNrN1hHNGdJSDE5TENBMU1EQmNiaWs3WEc1Y2JtSjBibEpsWm5KbGMyZ3VZV1JrUlhabGJuUk1hWE4wWlc1bGNpZ25ZMnhwWTJzbkxDQm1kVzVqZEdsdmJpZ3BJSHRjYmlBZ1pHRjBaVkpsWm5KbGMyZ2dQU0J1WlhjZ1JHRjBaU2dwTG5SdlRHOWpZV3hsUkdGMFpWTjBjbWx1WnlnblpXNHRWVk1uTENCN0lIZGxaV3RrWVhrNklDZHNiMjVuSnl3Z2VXVmhjam9nSjI1MWJXVnlhV01uTENCdGIyNTBhRG9nSjJ4dmJtY25MQ0JrWVhrNklDZHVkVzFsY21sakp5QjlLVHRjYmlBZ2NGVndaR0YwWlM1cGJtNWxja2hVVFV3Z1BTQmdQSE53WVc0Z1kyeGhjM005WENKbWIyNTBMVzFsWkdsMWJWd2lQa3hoYzNRZ2RYQmtZWFJsWkNCdmJpQWtlMlJoZEdWU1pXWnlaWE5vZlR3dmMzQmhiajVnTzF4dUlDQnNiMk5oYkZOMGIzSmhaMlV1WTJ4bFlYSW9LVHRjYmlBZ2JHOWpZV3hUZEc5eVlXZGxMbk5sZEVsMFpXMG9YQ0pzWVhOMFZYQmtZWFJsWENJc0lHUmhkR1ZTWldaeVpYTm9LVHRjYmlBZ2QyOXlhMjkxZEhOTWFYTjBMbWx1Ym1WeVNGUk5UQ0E5SUdBOGJHa2dZMnhoYzNNOVhDSnBkR0ZzYVdNZ1ptOXVkQzF0WldScGRXMGdkR1Y0ZEMxdmNtRnVaMlV0TnpBd1hDSStWWEJrWVhScGJtY2dkMjl5YTI5MWRITWdMaTR1UEM5c2FUNWdPMXh1SUNCblpYUlhiM0pyYjNWMGMwWnliMjFRVTFjb0tUdGNibjBwTzF4dVhHNW1kVzVqZEdsdmJpQm5aWFJYYjNKcmIzVjBjMFp5YjIxUVUxY29LU0I3WEc0Z0lHWmxkR05vS0dGd2FWVnliQ2xjYmlBZ0xuUm9aVzRvY21WemNHOXVjMlVnUFQ0Z2UxeHVJQ0FnSUdsbUlDZ2hjbVZ6Y0c5dWMyVXViMnNwSUh0Y2JpQWdJQ0FnSUhSb2NtOTNJRzVsZHlCRmNuSnZjaWduVG1WMGQyOXlheUJ5WlhOd2IyNXpaU0IzWVhNZ2JtOTBJRzlySnlrN1hHNGdJQ0FnZlZ4dUlDQWdJSEpsZEhWeWJpQnlaWE53YjI1elpTNXFjMjl1S0NrN1hHNGdJSDBwWEc0Z0lDNTBhR1Z1S0dSaGRHRWdQVDRnZTF4dUlDQWdJSEJ6ZDFkdmNtdHZkWFJ6SUQwZ1pHRjBZVHRjYmlBZ0lDQnNiMk5oYkZOMGIzSmhaMlV1YzJWMFNYUmxiU2hjSW5CemQxZHZjbXR2ZFhSelhDSXNJRXBUVDA0dWMzUnlhVzVuYVdaNUtIQnpkMWR2Y210dmRYUnpLU2s3WEc0Z0lDQWdjbVZ1WkdWeUtIQnpkMWR2Y210dmRYUnpLVHRjYmlBZ2ZTbGNiaUFnTG1OaGRHTm9LR1Z5Y205eUlEMCtJSHRjYmlBZ0lDQmpiMjV6YjJ4bExtVnljbTl5S0NkRmNuSnZjam9uTENCbGNuSnZjaWs3WEc0Z0lIMHBPMXh1ZlZ4dVhHNW1kVzVqZEdsdmJpQnlaVzVrWlhJb2QyOXlhMjkxZEhNcElIdGNiaUFnYkdWMElIZHZjbXR2ZFhSelRHbHpkRWwwWlcxeklEMGdYQ0pjSWp0Y2JpQWdabTl5SUNoc1pYUWdhU0E5SURBN0lHa2dQQ0IzYjNKcmIzVjBjeTVzWlc1bmRHZzdJR2tyS3lrZ2UxeHVJQ0FnSUd4bGRDQmtZWFJsSUQwZ2JtVjNJRVJoZEdVb2QyOXlhMjkxZEhOYmFWMHVaR0YwWlNrN1hHNGdJQ0FnZDI5eWEyOTFkSE5NYVhOMFNYUmxiWE1nS3oxY2JpQWdJQ0FnSUdBOGJHa2dZMnhoYzNNOVhDSndkQzB4SUcxaUxUSmNJajVjYmlBZ0lDQWdJQ0FnUEdFZ1kyeGhjM005WENKb2IzWmxjanAwWlhoMExXOXlZVzVuWlMwM01EQWdhRzkyWlhJNlptOXVkQzFpYjJ4a1hDSWdhSEpsWmowbkpIdDNiM0pyYjNWMGMxdHBYUzVzYVc1cmZTY2dkR0Z5WjJWMFBTZGZZbXhoYm1zblBseHVJQ0FnSUNBZ0lDQWdJQ1I3ZDI5eWEyOTFkSE5iYVYwdWRHbDBiR1V1Y21WdVpHVnlaV1I5WEc0Z0lDQWdJQ0FnSUR3dllUNWNiaUFnSUNBZ0lDQWdQR0p5THo0OGMzQmhiaUJqYkdGemN6MWNJbWwwWVd4cFl5QjBaWGgwTFhoeklIUmxlSFF0YzJ0NUxUY3dNRndpUGxCMVlteHBjMmhsWkNCdmJpQWtlMlJoZEdVdWRHOU1iMk5oYkdWRVlYUmxVM1J5YVc1bktDZGxiaTFWVXljc0lIdDNaV1ZyWkdGNU9pQW5iRzl1Wnljc0lHMXZiblJvT2lBbmJHOXVaeWNzSUdSaGVUb2dKMjUxYldWeWFXTW5MQ0I1WldGeU9pQW5iblZ0WlhKcFl5Y3NmU2w5SUR3dmMzQmhiajVjYmlBZ0lDQWdJRHd2YkdrK1lEdGNiaUFnZlZ4dUlDQjNiM0pyYjNWMGMweHBjM1F1YVc1dVpYSklWRTFNSUQwZ2QyOXlhMjkxZEhOTWFYTjBTWFJsYlhNN1hHNTlYRzRpWFN3aWJtRnRaWE1pT2x0ZExDSjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2ljSE4zTFdOb2NtOXRaUzFsZUhRdVNFRlRTRjlTUlVaZk1EaGxOekF3TkRjek56TmlPR1UzWkM1cWN5NXRZWEFpZlE9PVxuIiwibGV0IHBzd1dvcmtvdXRzID0gW11cbmxldCB3b3Jrb3V0c0xpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd29ya291dHMtbGlzdCcpO1xubGV0IHdvcmtvdXRzTG9hZGluZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3b3Jrb3V0cy1sb2FkaW5nJyk7XG5sZXQgcFVwZGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1cGRhdGVQLWVsJyk7XG5sZXQgZGF0ZVJlZnJlc2ggPSBcIlwiO1xuY29uc3QgYnRuUmVmcmVzaCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZWZyZXNoLWJ0bicpO1xuY29uc3QgYXBpVXJsID0gcHJvY2Vzcy5lbnYuV1BfVVJMO1xuXG53aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgaWYgKCFsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHN3V29ya291dHMnKSkge1xuICAgIHdvcmtvdXRzTGlzdC5pbm5lckhUTUwgPSBgPGxpIGNsYXNzPVwiaXRhbGljIGZvbnQtbWVkaXVtIHRleHQtb3JhbmdlLTcwMFwiPkxvYWRpbmcgd29ya291dHMgLi4uPC9saT5gO1xuICAgIGNvbnNvbGUubG9nKFwiV29ya291dHMgbm90IGN1cnJlbnRseSBpbiBsb2NhbCBzdG9yYWdlLlwiKTtcbiAgICBnZXRXb3Jrb3V0c0Zyb21QU1coKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zb2xlLmxvZyhcIldvcmtvdXRzIGFscmVhZHkgaW4gbG9jYWwgc3RvcmFnZS5cIik7XG4gICAgZGF0ZVJlZnJlc2ggPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbGFzdFVwZGF0ZScpO1xuICAgIHBVcGRhdGUuaW5uZXJIVE1MID0gYDxzcGFuIGNsYXNzPVwiZm9udC1tZWRpdW1cIj5MYXN0IHVwZGF0ZWQgb24gJHtkYXRlUmVmcmVzaH08L3NwYW4+YDtcbiAgICB3b3Jrb3V0c0xvYWRpbmcuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICByZW5kZXIoSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHN3V29ya291dHMnKSkpXG4gICAgICB3b3Jrb3V0c0xvYWRpbmcuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgfSwgNTAwKTtcbiAgfX0sIDUwMFxuKTtcblxuYnRuUmVmcmVzaC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICBkYXRlUmVmcmVzaCA9IG5ldyBEYXRlKCkudG9Mb2NhbGVEYXRlU3RyaW5nKCdlbi1VUycsIHsgd2Vla2RheTogJ2xvbmcnLCB5ZWFyOiAnbnVtZXJpYycsIG1vbnRoOiAnbG9uZycsIGRheTogJ251bWVyaWMnIH0pO1xuICBwVXBkYXRlLmlubmVySFRNTCA9IGA8c3BhbiBjbGFzcz1cImZvbnQtbWVkaXVtXCI+TGFzdCB1cGRhdGVkIG9uICR7ZGF0ZVJlZnJlc2h9PC9zcGFuPmA7XG4gIGxvY2FsU3RvcmFnZS5jbGVhcigpO1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImxhc3RVcGRhdGVcIiwgZGF0ZVJlZnJlc2gpO1xuICB3b3Jrb3V0c0xpc3QuaW5uZXJIVE1MID0gYDxsaSBjbGFzcz1cIml0YWxpYyBmb250LW1lZGl1bSB0ZXh0LW9yYW5nZS03MDBcIj5VcGRhdGluZyB3b3Jrb3V0cyAuLi48L2xpPmA7XG4gIGdldFdvcmtvdXRzRnJvbVBTVygpO1xufSk7XG5cbmZ1bmN0aW9uIGdldFdvcmtvdXRzRnJvbVBTVygpIHtcbiAgZmV0Y2goYXBpVXJsKVxuICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdOZXR3b3JrIHJlc3BvbnNlIHdhcyBub3Qgb2snKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgfSlcbiAgLnRoZW4oZGF0YSA9PiB7XG4gICAgcHN3V29ya291dHMgPSBkYXRhO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHN3V29ya291dHNcIiwgSlNPTi5zdHJpbmdpZnkocHN3V29ya291dHMpKTtcbiAgICByZW5kZXIocHN3V29ya291dHMpO1xuICB9KVxuICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yOicsIGVycm9yKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHJlbmRlcih3b3Jrb3V0cykge1xuICBsZXQgd29ya291dHNMaXN0SXRlbXMgPSBcIlwiO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHdvcmtvdXRzLmxlbmd0aDsgaSsrKSB7XG4gICAgbGV0IGRhdGUgPSBuZXcgRGF0ZSh3b3Jrb3V0c1tpXS5kYXRlKTtcbiAgICB3b3Jrb3V0c0xpc3RJdGVtcyArPVxuICAgICAgYDxsaSBjbGFzcz1cInB0LTEgbWItMlwiPlxuICAgICAgICA8YSBjbGFzcz1cImhvdmVyOnRleHQtb3JhbmdlLTcwMCBob3Zlcjpmb250LWJvbGRcIiBocmVmPScke3dvcmtvdXRzW2ldLmxpbmt9JyB0YXJnZXQ9J19ibGFuayc+XG4gICAgICAgICAgJHt3b3Jrb3V0c1tpXS50aXRsZS5yZW5kZXJlZH1cbiAgICAgICAgPC9hPlxuICAgICAgICA8YnIvPjxzcGFuIGNsYXNzPVwiaXRhbGljIHRleHQteHMgdGV4dC1za3ktNzAwXCI+UHVibGlzaGVkIG9uICR7ZGF0ZS50b0xvY2FsZURhdGVTdHJpbmcoJ2VuLVVTJywge3dlZWtkYXk6ICdsb25nJywgbW9udGg6ICdsb25nJywgZGF5OiAnbnVtZXJpYycsIHllYXI6ICdudW1lcmljJyx9KX0gPC9zcGFuPlxuICAgICAgPC9saT5gO1xuICB9XG4gIHdvcmtvdXRzTGlzdC5pbm5lckhUTUwgPSB3b3Jrb3V0c0xpc3RJdGVtcztcbn1cbiJdLCJuYW1lcyI6WyIkMTU1NjFhM2RkNWZjZjEwMSR2YXIkcHN3V29ya291dHMiLCIkMTU1NjFhM2RkNWZjZjEwMSR2YXIkd29ya291dHNMaXN0IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIiQxNTU2MWEzZGQ1ZmNmMTAxJHZhciR3b3Jrb3V0c0xvYWRpbmciLCIkMTU1NjFhM2RkNWZjZjEwMSR2YXIkcFVwZGF0ZSIsIiQxNTU2MWEzZGQ1ZmNmMTAxJHZhciRkYXRlUmVmcmVzaCIsIiQxNTU2MWEzZGQ1ZmNmMTAxJHZhciRidG5SZWZyZXNoIiwiJDE1NTYxYTNkZDVmY2YxMDEkdmFyJGdldFdvcmtvdXRzRnJvbVBTVyIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwib2siLCJFcnJvciIsImpzb24iLCJkYXRhIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsIkpTT04iLCJzdHJpbmdpZnkiLCIkMTU1NjFhM2RkNWZjZjEwMSR2YXIkcmVuZGVyIiwiY2F0Y2giLCJlcnJvciIsImNvbnNvbGUiLCJ3b3Jrb3V0cyIsIndvcmtvdXRzTGlzdEl0ZW1zIiwiaSIsImxlbmd0aCIsImRhdGUiLCJEYXRlIiwibGluayIsInRpdGxlIiwicmVuZGVyZWQiLCJ0b0xvY2FsZURhdGVTdHJpbmciLCJ3ZWVrZGF5IiwibW9udGgiLCJkYXkiLCJ5ZWFyIiwiaW5uZXJIVE1MIiwid2luZG93Iiwic2V0VGltZW91dCIsImdldEl0ZW0iLCJsb2ciLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJwYXJzZSIsImFkZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjbGVhciJdLCJ2ZXJzaW9uIjozLCJmaWxlIjoicHN3LWNocm9tZS1leHQuSEFTSF9SRUZfMDhlNzAwNDczNzNiOGU3ZC5qcy5tYXAifQ==
