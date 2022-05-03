$(document).ready(function () {

    $(".rules").hide();
    $(".ruleScreen").hide();
    $(".playArea2").hide();
    $('.hoverScreen').hide();
    var first = true;
    var userChoice;
    var score = 0;
    $('.playerScore').css({
        width: (document.querySelector('.playerScore').clientHeight).toString()
    });
    //0 = draw, 1 = userWin, 2 = houseWin
    var result = 0;

    var x = window.matchMedia("(max-width: 1080px)");

    function house() {
        var houseChoice = Math.floor(Math.random() * 3 + 1);
        switch (houseChoice) {
            case 1:
                $(".houseChoice").html('<img src="images/icon-rock.svg" alt="">');
                $(".houseChoice").css("border-color", "#dd3755");
                break;
            case 2:
                $(".houseChoice").html('<img src="images/icon-paper.svg" alt="">');
                $(".houseChoice").css("border-color", "#5671f4");
                break;
            case 3:
                $(".houseChoice").html('<img src="images/icon-scissors.svg" alt="">');
                $(".houseChoice").css("border-color", "#eaa826");
                break;

            default:

        };

        setTimeout(function () {
            $('#HouseChoice').hide();
            $('#HouseChoice').removeClass('houseChoice', 500);
            $('#HouseChoice').addClass('houseChoiceAddOn', 500);
            $('#HouseChoice').fadeIn(500);



        }, 1000);

        whoWins(userChoice, houseChoice);

        setTimeout(function () {
            $('.scoreN').text(score.toString());

            if (!x.matches) {
                $('.housePick').animate({
                    marginLeft: "10em"
                }, {
                    duration: 200,
                    queue: false
                });

                $('.userPick').animate({
                    marginRight: "10em"
                }, {
                    duration: 200,
                    queue: false
                });
            }




        }, 1500);

        setTimeout(function () {
            $('.playAgain').text('PLAY AGAIN')
            if (result === 0) {
                $('.resultText').text("DRAW");
            } else if (result === 1) {
                $('.resultText').text("YOU WIN");
            } else {
                $('.resultText').text("YOU LOSE");
            }
            $('.hoverScreen').show(400);
        }, 1900);


        return houseChoice;
    }

    function whoWins(user, house) {

        if ((user === 1 && house === 3) || (user === 2 && house === 1) || (user === 3 && house === 2)) {
            //userWins
            score += 4;
            result = 1;
        } else if ((house === 1 && user === 3) || (house === 2 && user === 1) || (house === 3 && user === 2)) {
            //houseWins
            score -= 1;
            result = 2;
        } else {
            //draw
            score += 1;
            result = 0;
        }

    }

    function rule() {
        this.open = function () {
            $(".ruleScreen").fadeIn(300);
            $(".ruleScreen").css("display", "flex");
            $(".rules").slideToggle(400);
        };

        this.close = function () {
            $(".rules").slideUp(400);
            $(".ruleScreen").fadeOut(300);
            if (first) {
                first = false;
                $(".playArea").fadeIn(300);
            }


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
        house();
    });

    $(".paper").on("click", function () {
        userChoice = 2;
        $(".playArea1").fadeOut(200);
        $(".userChoice").html('<img src="images/icon-paper.svg" alt="">');
        $(".userChoice").css("border-color", "#5671f4");
        $(".playArea2").slideDown(400);
        house();
    });

    $(".scissor").on("click", function () {
        userChoice = 3;
        $(".playArea1").fadeOut(200);
        $(".userChoice").html('<img src="images/icon-scissors.svg" alt="">');
        $(".userChoice").css("border-color", "#eaa826");
        $(".playArea2").slideDown(400);
        house();
    });
    // $(".playArea1").on("display: none", function () {
    //     $(".houseChoice").html('<img src="images/icon-rock.svg" alt="">');
    //     $("houseChoice").fadeIn(200);
    // });


    // $('.rules').css("display", "flex");

    // $(".close").on("click",function(){
    //     $(".ruleScreen").fadeOut(300);
    // })
    $('.playAgain').on('click', function () {
        $(".playArea2").hide();
        $('.hoverScreen').hide();
        $('.playArea1').show(500);
        
        if(!x.matches){
            $('.housePick').css({
                marginLeft: "4em"
            });
            $('.userPick').css({
                marginRight: "4em"
            });
        }
        
        $('#HouseChoice').addClass('houseChoice');
        $('#HouseChoice').removeClass('houseChoiceAddOn');
    });


});