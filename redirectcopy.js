bplist00�_WebMainResource�	
^WebResourceURL_WebResourceFrameName_WebResourceData_WebResourceMIMEType_WebResourceTextEncodingName_@https://raw.githack.com/linhfaceseo/cssjs/master/redirectcopy.jsPO$<html><head></head><body><pre style="word-wrap: break-word; white-space: pre-wrap;">function FSAddOriginalLink(){
    var body_element = document.getElementsByTagName('body')[0];
    var selection;
    selection = window.getSelection();
    var pagelink = "&lt;br/&gt;&lt;br/&gt;MUON COPY THI VAO DAY : &lt;a href='http://muabanphumyhung.net'&gt;http://muabanphumyhung.net"+document.location.pathname+"&lt;/a&gt;";
    var copytext = pagelink;
    var newdiv = document.createElement('div');
    newdiv.style.position='absolute';
    newdiv.style.left='-99999px';
    body_element.appendChild(newdiv);
    newdiv.innerHTML = copytext;
    selection.selectAllChildren(newdiv);
    window.setTimeout(function() {
        body_element.removeChild(newdiv);
    },0);
}
document.oncopy = FSAddOriginalLink;
</pre></body></html>_application/javascriptUUTF-8    ( 7 N ` v � � �              
              