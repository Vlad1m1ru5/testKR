//пишем функцию для привязки события onsubmit нашей формы
window.onload = function () {
	var	myform = document.getElementById("myForm");//находим элемент нашей формы по id
	myform.onsubmit = proverka //привязываем событие onsubmit по наступлению которого будет запускаться функция proverka
}

//функция для проверки правильности заполнения формы
function proverka (){
	var proverkaLogin = document.getElementById("prLogin");//находим элемент «Логин» по id
	var proverkaVkid = document.getElementById("prVkid");//находим элемент «vkid» по id
	var proverkaPsw = document.getElementById("prPsw");//находим элемент «пароль» по id
	
        if (proverkaLogin.value=="" || proverkaVkid.value=="" || proverkaPsw.value==""){//условие проверки полей
		proverkaLogin = (proverkaLogin.value) ? "" : "Поле - Логин\n"/*если в поле «Логин» пусто то в переменную 	
		proverkaLogin вставляем "Поле – Логин", для вывода в предупредительном сообщении*/
		proverkaVkid = (proverkaVkid.value) ? "" : "Поле - vkid\n"/*если в поле «id» пусто то в переменную
		proverkaVkid вставляем "Поле – vkid", для вывода в предупредительном сообщении */
		proverkaPsw = (proverkaPsw.value) ? "" : "Поле - пароль\n"/*если в поле «пароль» пусто то в переменную 
		proverkaPsw вставляем "Поле – пароль", для вывода в предупредительном сообщении */
		alert ("Не заполнены следующие обязательные поля:\n"+proverkaLogin+proverkaVkid+proverkaPsw);/*формируем 
		предупредительное сообщение */
                return  false;/*прекращаем выполнения события onsubmit, для того чтобы наши «неправильные» 	
                данные не отправились на сервер */
        }
        else{
                //сообщение что данные заполнены правильно и отправились на сервер
                alert ("Данные успешно отправлены в сообщении");
                return  false;/*для применения на действующем сайте эту строку необходимо удалить!!!
                а то в случае правильного заполнения формы данные все равно не отправятся*/ 
	}
}

//функция выравнивания полей по центру
function alignCenter (){
	var form = document.getElementById("myTable");//находим элемент таблица по ее id
	var alCentr = form.getElementsByTagLogin("TR")//находим все теги tr в нашей таблице
        
        for (var i = 0; i < alCentr.length; i++){//циклом переберем все строки таблицы добавляем им атрибут align 
                alCentr[i].setAttribute("align", "center" );//добавляем строкам атрибут align
	}
}