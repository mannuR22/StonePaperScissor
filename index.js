$(document).ready(function () {

    $(".rules").hide();
    $(".ruleScreen").hide();
    // $(".playArea1").hide();
    $(".playArea2").hide();
    var userChoice;

    function rule() {
        this.open = function () {
            $(".ruleScreen").fadeIn(300);
            $(".ruleScreen").css("display", "flex");
            $(".rules").slideToggle(400);
        };

        this.close = function () {
            $(".rules").slideUp(400);
            $(".ruleScreen").fadeOut(300);
            $(".playArea1").fadeIn(300);

        };
    }


    let Rule = new rule();

    Rule.open();


    $(".close").on("click", function () {
        Rule.close();
    });

    $(".ruleToggle").on("click", function () {
        Rule.open();
    });

    $(".rock").on("click", function () {
        userChoice = 1;
        $(".playArea1").hide(200);
        $(".userChoice").html('<img src="images/icon-rock.svg" alt="">');
        $(".userChoice").css("border-color", "#dd3755");
        $(".playArea2").show(400);
    });

    $(".paper").on("click", function () {
        userChoice = 2;
        $(".playArea1").fadeOut(200);
        $(".userChoice").html('<img src="images/icon-paper.svg" alt="">');
        $(".userChoice").css("border-color", "#5671f4");
        $(".playArea2").slideDown(400);
    });

    $(".scissor").on("click", function () {
        userChoice = 3;
        $(".playArea1").fadeOut(200);
        $(".userChoice").html('<img src="images/icon-scissors.svg" alt="">');
        $(".userChoice").css("border-color", "#eaa826");
        $(".playArea2").slideDown(400);
    });

    $(".playArea2").on("show", function(){
        var houseChoice = Math.floor(Math.randon()*3 + 1);
    });
    // $('.rules').css("display", "flex");

    // $(".close").on("click",function(){
    //     $(".ruleScreen").fadeOut(300);
    // })



});