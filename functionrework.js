var images=[];
var words=[];
var time1 = 3000;
var time2 = 2000;
var i=0;
var j=0;
images[0]= 'chair.jpg';
images[1]='flower.jpg';
images[2]='woman.jpg';
words[0]= "Xin Chao";
words[1]="Hi";
words[2]="Bonjour";
words[3]="你好";
words[4]="Привет";
words[5]="Hei";
words[6]="こんにちは";
function changeImg(){
    console.log('hello')
    document.getElementById("banner-img").src= images[i];
    if(i<images.length -1 ){
        i++;
    }else{
        i=0;
    }
    setTimeout("changeImg()", time1);
}
function changeWrd(){
    document.getElementById("word").innerHTML=words[j];
    if(j<words.length -1 ){
        j++;
    }else{
        j=0;
    }
    setTimeout("changeWrd()", time2);
}

changeImg()
changeWrd()




