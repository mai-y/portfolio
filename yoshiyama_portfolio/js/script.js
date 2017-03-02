$(document).ready(function(){
    var explination = ["説明 : リサイクル事業の宅配買取サービスに<br>おける企画書を作成し<br>授業内でプレゼンを行いました。", "説明 : HP作成ツールWix.comを使用して<br>作成しました。テーマは好きな映画です。","説明 : Javascriptの授業内で作成しました。","説明 : HTML5の授業内で作成しました。","説明 : HTML5の授業内で作成しました。<br>テーマはファッションブランドです。","説明 : HTML5の授業内で<br>テンプレートを使用して作成しました。","説明 : HTML5の授業内で作成しました。<br>赤い玉を表示させるのが大変でした。","説明 : HTML5の授業内で作成しました。","説明 : HTML5の授業内で作成しました。","説明 : HTML5の授業内で作成しました。","説明 : ITプロジェクトの授業内で作成しました。","説明 : Illustrator/Photoshopの授業内で<br>初めて作ったポートフォリオです。","説明 : UI/UXデザインの授業内で<br>画像編集を行いました。","説明 : UI/UXデザインの授業内で<br>美味しく見えるように加工を行いました。","説明 : UI/UXデザインの授業内で<br>画像編集を行いました。","説明 : UI/UXデザインの授業内で<br>画像編集を行いました。","説明 : UI/UXデザインの授業内で<br>BCGの痕を消す作業を行いました。"];
    var created = ["制作期間 : 5ヶ月<br>制作日 : 2015/04〜2015/09","制作期間 : 6時間<br>制作日 : 2016/01","制作期間 : 3時間<br>制作日 : 2016/01/28","制作期間 : 3時間<br>制作日 : 2016/05/10","制作期間 : 3時間<br>制作日 : 2016/05/17","制作期間 : 3時間<br>制作日 : 2016/05/24","制作期間 : 5時間<br>制作日 : 2016/05/31","制作期間 : 3時間<br>制作日 : 2016/05/31","制作期間 : 5時間<br>制作日 : 2016/09/06","制作期間 : 3時間<br>制作日 : 2016/11/01","制作期間 : 2時間<br>制作日 : 2017/02/25","制作期間 : 3日<br>制作日 : 2016/01","制作期間 : 1時間<br>制作日 : 2017/01/12","制作期間 : 1時間<br>制作日 : 2017/01/12","制作期間 : 1時間<br>制作日 : 2017/01/12","制作期間 : 1時間<br>制作日 : 2017/01/12","制作期間 : 1時間半<br>制作日 : 2017/01/19"];
    var link = ["Portfolio/Recycling.pptx","http://mai08280220.wixsite.com/taiyou2","Portfolio/Tetris/index.html","Portfolio/Script/index.html","Portfolio/3DTransform/index.html","Portfolio/Parallax/index.html","Portfolio/JScodelesson/index.html","Portfolio/Othello/index.html","Portfolio/Concentration/index.html","Portfolio/Mogura/index.html","Portfolio/VR/html/index.html","Portfolio/Illustrator/Illustrator.png","images/Candy.png","images/Dish.png","images/Nightview.png","images/Sunflower.png","images/Baby.png"];
    var name = ["「カシコシュ」企画書","Wix.com","テトリス","Script","3DTransform","パララックス","JScodelesson","オセロ","神経衰弱","もぐら叩き","VR","Illustrator","Photoshop","Photoshop","Photoshop","Photoshop","Photoshop"];
    var aux = 0;
    document.getElementById("btn").setAttribute("href", link[0]);
    document.getElementById("name").innerHTML = name[0];
    
    document.getElementById("expl").innerHTML = explination[0];
    document.getElementById("created").innerHTML = created[0];
    
    $(".carousel-control-prev").click(function(){
        if(aux>0){
            --aux;
            document.getElementById("expl").innerHTML = explination[aux];
            document.getElementById("created").innerHTML = created[aux];
            document.getElementById("btn").setAttribute("href", link[aux]);
            document.getElementById("name").innerHTML = name[aux];
            $("#carouselExampleIndicators").carousel("prev");
            $("#carouselExampleIndicators").carousel("pause");
        }
    });
    $(".carousel-control-next").click(function(){
        if(aux<explination.length-1){
            ++aux;
            document.getElementById("expl").innerHTML = explination[aux];
            document.getElementById("created").innerHTML = created[aux];
            document.getElementById("btn").setAttribute("href", link[aux]);
            document.getElementById("name").innerHTML = name[aux];
            $("#carouselExampleIndicators").carousel("next");
            $("#carouselExampleIndicators").carousel("pause");
        }
    });

    var iFrame = document.getElementsByTagName( "iframe" );
    for(var i=0 ; i<iFrame.length ; i++){
        iFrame[i].width = 745;
        iFrame[i].height = 350;
    }
    console.log(iFrame);
});