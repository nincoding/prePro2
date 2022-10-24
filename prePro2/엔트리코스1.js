//건드릴 html 플레이어 설정해주기
//버튼들은 btns로 변수 설정
//결괏값을 보여줄 부분은 result로 변수 설정
//버튼 클릭시 함수1을 함수2로 이동

//const btns = document.querySelectorAll("button"),
//result = document.querySelector(".selected"); //result가 selected부분

//for(let btn of btns){
    //btn.addEventListener("click" , handleCartBtn);
//}

//btn에 클릭 이벤트가 발생했을때 일어날 handleCartBtn() 함수 만들기

//function handleCartBtn(event){
//event.showAdded(event); //해당 이벤트가 일어난 버튼의 innerText를 바꿔주는 함수
//}

//showAdded()함수 만들기

//function showAdded(event){
//return(event.target.innerText='added!')
//} //이벤트가 일어난 타겟의 이너텍스트를 변경

function toggle(){
document.getElementById("change").src="img/tomato.png";
document.getElementById("change").style.paddingLeft="50px";
document.getElementById("change").style.marginRight="0px";
document.getElementById("name").innerHTML="토마토 주스";
document.getElementById("name").style.fontSize="50px";
document.getElementById("name").style.fontFamily="'Dongle', sans-serif";
document.getElementById("change").style.display="block";
document.getElementById("name").style.top="10px";
}

function toggle2(){
    document.getElementById("change").src="img/carrot.png";
    document.getElementById("change").style.paddingLeft="50px";
    document.getElementById("change").style.marginRight="0px";
    document.getElementById("name").innerHTML="당근 주스";
    document.getElementById("name").style.fontSize="50px";
    document.getElementById("name").style.fontFamily="'Dongle', sans-serif";
    document.getElementById("change").style.display="block";
    document.getElementById("name").style.top="10px";
    }

    function toggle3(){
        document.getElementById("change").src="img/strawberry.png";
        document.getElementById("change").style.paddingLeft="50px";
        document.getElementById("change").style.marginRight="0px";
        document.getElementById("name").innerHTML="딸기 주스";
        document.getElementById("name").style.fontSize="50px";
        document.getElementById("name").style.fontFamily="'Dongle', sans-serif";
        document.getElementById("change").style.display="block";
        document.getElementById("name").style.top="10px";
        }

        function toggle4(){
            document.getElementById("change").src="img/banana.png";
            document.getElementById("change").style.paddingLeft="50px";
            document.getElementById("change").style.marginRight="0px";
            document.getElementById("name").innerHTML="바나나 스무디";
            document.getElementById("name").style.fontSize="50px";
            document.getElementById("name").style.fontFamily="'Dongle', sans-serif";
            document.getElementById("change").style.display="block";
            document.getElementById("name").style.top="10px";
            }

        function toggle5(){
            document.getElementById("change").src="img/kiwi.png";
            document.getElementById("change").style.paddingLeft="50px";
            document.getElementById("change").style.marginRight="0px";
            document.getElementById("name").innerHTML="키위 주스";
            document.getElementById("name").style.fontSize="50px";
            document.getElementById("name").style.fontFamily="'Dongle', sans-serif";
            document.getElementById("change").style.display="block";
            document.getElementById("name").style.top="10px";
            }

            function toggle6(){
                document.getElementById("change").src="img/strawberry_smoothie.png";
                document.getElementById("change").style.paddingLeft="50px";
                document.getElementById("change").style.marginRight="0px";
                document.getElementById("name").innerHTML="딸기 스무디";
                document.getElementById("name").style.fontSize="50px";
                document.getElementById("name").style.fontFamily="'Dongle', sans-serif";
                document.getElementById("change").style.display="block";
                document.getElementById("name").style.top="10px";
                }

                function toggle7(){
                    document.getElementById("change").src="img/banana_smoothie.png";
                    document.getElementById("change").style.paddingLeft="50px";
                    document.getElementById("change").style.marginRight="0px";
                    document.getElementById("name").innerHTML="바나나 스무디";
                    document.getElementById("name").style.fontSize="50px";
                    document.getElementById("name").style.fontFamily="'Dongle', sans-serif";
                    document.getElementById("change").style.display="block";
                    document.getElementById("name").style.top="10px";
                    }

                    function toggle8(){
                        document.getElementById("change").src="img/kiwi_smoothie.png";
                        document.getElementById("change").style.paddingLeft="50px";
                        document.getElementById("change").style.marginRight="0px";
                        document.getElementById("name").innerHTML="키위 스무디";
                        document.getElementById("name").style.fontSize="50px";
                        document.getElementById("name").style.fontFamily="'Dongle', sans-serif";
                        document.getElementById("change").style.display="block";
                        document.getElementById("name").style.top="10px";
                        }

                        function toggle9(){
                            document.getElementById("change").src="img/CoolTomato.png";
                            document.getElementById("change").style.paddingLeft="50px";
                            document.getElementById("change").style.marginRight="0px";
                            document.getElementById("name").innerHTML="멋쟁이 토마토";
                            document.getElementById("name").style.fontSize="50px";
                            document.getElementById("name").style.fontFamily="'Dongle', sans-serif";
                            document.getElementById("change").style.display="block";
                            document.getElementById("name").style.top="10px";
                            }