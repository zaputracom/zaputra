
//<![CDATA[
// Recent Comments
function idbcomments(a){var e;e='<ul class="idbcomments">';for(var t=0;numComments>t;t++){var r,o,n,i;if(t==a.feed.entry.length)break;e+="<li>";for(var d=a.feed.entry[t],s=0;s<d.link.length;s++)"alternate"==d.link[s].rel&&(r=d.link[s].href);for(var l=0;l<d.author.length;l++)o=d.author[l].name.$t,n=d.author[l].gd$image.src;n=-1!=n.indexOf("/s1600/")?n.replace("/s1600/","/s"+avatarSize+"-c/"):-1!=n.indexOf("/s220/")?n.replace("/s220/","/s"+avatarSize+"-c/"):-1!=n.indexOf("/s512-c/")&&0!=n.indexOf("http:")?"http:"+n.replace("/s512-c/","/s"+avatarSize+"-c/"):-1!=n.indexOf("blogblog.com/img/b16-rounded.gif")?"http://1.bp.blogspot.com/-7bkcAKdpGXI/UrbyQRqvSKI/AAAAAAAAFmI/oBv_yMeYnMQ/s"+avatarSize+"/blogger.png":-1!=n.indexOf("blogblog.com/img/openid16-rounded.gif")?"http://2.bp.blogspot.com/-VgnInuIUKBU/UrbzyXTYWRI/AAAAAAAAFmU/3f_Vfj3TI6A/s"+avatarSize+"/openid.png":-1!=n.indexOf("blogblog.com/img/blank.gif")?-1!=defaultAvatar.indexOf("gravatar.com")?defaultAvatar+"&s="+avatarSize:defaultAvatar:n,1==showAvatar&&(i=1==roundAvatar?"avatarRound":"",e+='<div class="avatarImage '+i+'"><img class="'+i+'" src="'+n+'" alt="'+o+'" width="'+avatarSize+'" height="'+avatarSize+'"/></div>'),e+='<a href="'+r+'">'+o+"</a>";var A=d.content.$t,v=A.replace(/(<([^>]+)>)/gi,"");""!=v&&v.length>characters?(v=v.substring(0,characters),v+="&hellip;",1==showMorelink&&(v+='<a href="'+r+'">'+moreLinktext+"</a>")):v=v,e+="<span>"+v+"</span>",e+="</li>"}e+="</ul>";var c="";0==hideCredits&&(c="display:block;"),e+="",document.write(e)}var numComments=7,showAvatar=!0,avatarSize=42,roundAvatar=!0,characters=40,showMorelink=!1,defaultAvatar="http://2.bp.blogspot.com/-XjxrXKBPQqs/VYcGtLWPGUI/AAAAAAAAKaQ/5jr871JIwds/s1600/default-avatar.jpg",hideCredits=!0,numComments=numComments||25,avatarSize=avatarSize||60,characters=characters||40,defaultAvatar=defaultAvatar||"http://4.bp.blogspot.com/-SRSVCXNxbAc/UrbxxXd06YI/AAAAAAAAFl4/332qncR9pD4/s1600/default-avatar.jpg",moreLinktext=moreLinktext||" More &raquo;",showAvatar="undefined"==typeof showAvatar?!0:showAvatar,showMorelink="undefined"==typeof showMorelink?!1:showMorelink,roundAvatar="undefined"==typeof roundAvatar?!0:roundAvatar,hideCredits="undefined"==typeof hideCredits?!1:roundAvatar;
//
<script src='/feeds/comments/default?alt=json&amp;callback=idbcomments&amp;max-results=25' type='text/javascript'/>
</div>
<div class='tab-page' id='d-tab-page'>
<div class='dsq-widget' id='RecentComments'>
<script type='text/javascript'>
//
document.write("<scr" + "ipt type=\"text/javascript\" src=\"https://zaputra.disqus.com/recent_comments_widget.js?num_items=20&hide_mods=1&hide_avatars=0&avatar_size=32&excerpt_length=80\"></scr" + "ipt>");
$("#RecentComments a").filter(function(){return this.hostname&&this.hostname!==location.hostname}).attr('rel', 'nofollow').attr('target', '_blank');
//]]>
