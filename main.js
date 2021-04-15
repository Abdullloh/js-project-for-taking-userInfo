function myFunction(name){
    alert('ALITECH ACADEMIYASIGA HUSH KELIBSIZ 👨🏻‍')
    let userInterest = confirm('Dasturlashga qiziqasizmi?');
    //   -------------------------------------------
      //  TAKING WHOLE INFORMATION ABOUT USER
    //   ------------------------------------------
    let userInfo = {
        name: prompt(" Ism va Familyangizni kiriting "),
        adress: prompt(" Manzilingini kiriting "),
        phone:prompt(" Bog'lanish uchun tel-number "),
        age : prompt (" Yoshingiz nechida "),
        all: function(){
            alert( 'Salom ' + userInfo.name  )
        },
        configure:function(){
            confirm( userInfo.name +' ' + userInfo.age + 'yosh'+ userInfo.phone +' '+ userInfo.adress + " Ma'lumotlar to'g'rimi?" )
        }
    }
    userInfo.all()
    userInfo.configure()

    confirm('Bizada Front End va Back End dasturlash turlari bor!')

    let userInterests = prompt("Qaysi dasturlash sohasini tanaysiz(Front End or Back End)");
    // -----------------------------------------------------------------------
    //        IF USER CHOOSE FRONT END COURSE
    // -----------------------------------------------------------------------
    if (userInterests === 'Front End'){
            alert(userInfo.name + ' Front End kursimizga hush kelibsiz')
            let lessonType = prompt("Qanday ta'lim olishni hohlaysiz(online or offline)");
            switch(lessonType){
                case 'online':
                    confirm("Siz online ta'lim turini tanladiz")
                    break;
                case 'offline':
                    confirm("Siz offline ta'lim turini tanladiz")
                    break;
                default:
                    userInfo.configure()
            }
            confirm('Bu kursda HTML,CSS,Javascript o\'tiladi. Kurs davomiyligi 6 oy.')
            let frontEnduser = {
                language:prompt('Kursni qaysi tilda o\'rganishni hohlaysiz?'),
                programmingLanguage:prompt('Qo\'shimcha qaysi dasturlash tillarini o\'rgamoqchisiz?'),
                duration:' 6 oy',
                userList: function(){
                    alert(userInfo.name + ' siz kursni ' + frontEnduser.language  + ' tilda va qo\'shimcha quyidagi tillarni tanladiz ' + frontEnduser.programmingLanguage + ' kurs davomiyligi ' + frontEnduser.duration )
                }
        }
        frontEnduser.userList()
        confirm('Oyik to\'lovlar bilan tanishish')
        confirm('Fron End kursi uchun oylik tulov 400.000 so\'m')
        alert('Agarda oylikni 10 sanagacha tulasez 25% chegirma , 15 sanagacha to\'lasez 15% cheirmalar mavjud')
        let wantDiscount = prompt ('Oylikni qaysi sanagacha tulashingizni kiriting va chegirmani oling');
        if (wantDiscount <= 10 ){
            alert('Chegirma asosida oylik to\'lov 300 ming so\'m (100 ming chegirma)')
        }else if (wantDiscount >10 && wantDiscount <= 15) {
            alert('Chegirma asosida oylik to\'lov 340 ming so\'m (60 ming chegirma)')
        }else {
            alert('Bu muddatda chegirma mavjud emas')
        }
        
        if ((userInfo.name)&&(userInfo.adress)&&(userInfo.phone)&&(userInfo.age)&&(userInterests === 'Front End')&& (lessonType)&&(frontEnduser.language)&&(frontEnduser.programmingLanguage)&&(wantDiscount)){
              alert('Tabriklaymiz ' + userInfo.name + 'siz Back End kursimizga muvofaqiyatli yozildiz')
        }
        else{
            alert('Ma\'lumotlar to\'liq emas')
        }
    }


    // -------------------------------------------------------------------------------------
    //           IF USER CHOOSE BACK END COURSE
    // -------------------------------------------------------------------------------------
    
   else if (userInterests === 'Back End'){
        alert(userInfo.name + ' Back End kursimizga hush kelibsiz')
            let lessonType = prompt("Qanday ta'lim olishni hohlaysiz(online or offline)");
            switch(lessonType){
                case 'online':
                    confirm("Siz online ta'lim turini tanladiz")
                    break;
                case 'offline':
                    confirm("Siz offline ta'lim turini tanladiz")
                    break;
                default:
                    userInfo.configure()
            }
            confirm('Bu kursda PHP,RAECTJS,NODEJS o\'tiladi. Kurs davomiyligi 6 oy.')
            let frontEnduser = {
                language:prompt('Kursni qaysi tilda o\'rganishni hohlaysiz?'),
                programmingLanguage:prompt('Qo\'shimcha qaysi dasturlash tillarini o\'rgamoqchisiz?'),
                duration:' 6 oy',
                userList: function(){
                    alert(userInfo.name + ' siz kursni ' + frontEnduser.language  + ' tilda va qo\'shimcha quyidagi tillarni tanladiz: ' + frontEnduser.programmingLanguage, + ' kurs davomiyligi ' + frontEnduser.duration )
                }
        }
        frontEnduser.userList()
        confirm('Oyik to\'lovlar bilan tanishish')
        confirm('Back End kursi uchun oylik tulov 600.000 so\'m')
        alert('Agarda oylikni 10 sanagacha tulasez 25% chegirma , 15 sanagacha to\'lasez 15% cheirmalar mavjud')
        let wantDiscount = prompt ('Oylikni qaysi sanagacha tulashingizni kiriting va chegirmani oling');
        if (wantDiscount <= 10 ){
            alert('Chegirma asosida oylik to\'lov 450 ming so\'m (150 ming chegirma)')
        }else if (wantDiscount >10 && wantDiscount <= 15) {
            alert('Chegirma asosida oylik to\'lov 510 ming so\'m (90 ming chegirma)')
        }else {
            alert('Bu muddatda chegirma mavjud emas')
        }
        
        if ((userInfo.name)&&(userInfo.phone)&&(userInfo.age)&&(userInfo.adress)&&(userInterests === 'Back End')&& (lessonType)&&(frontEnduser.language)&&(frontEnduser.programmingLanguage)&&(wantDiscount)){
              alert('Tabriklaymiz ' + userInfo.name + 'siz Back End kursimizga muvofaqiyatli yozildiz')
        }
        else{
            alert('Ma\'lumotlar to\'liq emas')
        }
    }else {
        alert('Bizda bunday kurslar mavjud emas murojaatingiz uchun rahmat')
    }
}