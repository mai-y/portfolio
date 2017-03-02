var displayPanel;
var feedUrl = "http://fastpshb.appspot.com/feed/1/fastpshb";
google.load("feeds","1");
google.setOnLoadCallback(appInit);

function appInit(){
	displayPanel = document.getElementById("displayPanel");
	requestFeeds();
	setInterval(requestFeeds,3600000);
}

function requestFeeds(){
	var feed = new google.feeds.Feed(feedUrl);
	feed.setNumEntries(10);
	feed.load(showResults);
}

function showResults(result){
	if(result.error)return;
	var entries = result.feed.entries;
	if(entries.length == 0)return;

	var child;
	while(child = displayPanel.firstChild){
		displayPanel.removeChild(child);
	};

document.title = result.feed.title;

for(var i = 0;i < result.feed.entries.length; i++){
	var entry = entries[i];
	if(entry.title.indexOf("PR:") == 0 || entry.title.indexOf("AD:") == 0)continue;
	var date = new Date(entry.publishedDate);
	var datestring = date.toLocaleTimeString();
	datestring = datestring.replace(/:00$/,"");
	var panel = document.createElement("div");
	var title = document.createElement("div");
	panel.className = "entry";
	title.className = "title";
	title.textContent = entry.title + "("+ datestring +")";
	panel.appendChild(title);
	displayPanel.appendChild(panel);

	var contentbox = document.createElement("div");
	var content = document.createElement("p");
	var link = document.createElement("a");
	var contentText =entry.content.replace(/<[^>]*>/g,"");
	contentbox.className = "content hidden";
	content.textContent = contentText;
	link.href = entry.link;
	link.target = "_blank";
	link.textContent = "記事を読む";
	contentbox.appendChild(content);
	contentbox.appendChild(link);
	panel.appendChild(contentbox);
	title.addEventListener("click",clickTitle,false);
	}
}

function clickTitle(event){
	var parent = event.target.parentElement;
	var content = parent.getElementsByClassName("content").item(0);
	var className = content.className;

	var contents = displayPanel.getElementsByClassName("content shown");
	for(var i = 0;i < contents.length; i++){
		contents[i].className = "content hidden";
	}
	if(className == "content hidden"){
		content.className = "content shown";
		var offsetBottom = parent.offsetTop + parent.offsetHeight;
		var height = document.body.offsetHeight;
		var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
		if(height < offsetBottom - scrollTop){
			if(document.body.offsetHeight > parent.offsetHeight)
				window.scrollTo(0,offsetBottom - height - 5);
				else
				window.scrollTo(0,parent,offsetTop - 5);

		}
	}
}
