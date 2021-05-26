
// 整理整頓
// 問題群作成　九九の事情　5個
// id_generate// question_generate
// 正解・不正解判定
// IDから問題群　作成

// リミッターをつける
let limiter = 0;

let id = [];
let ima = 0;
function id_generate(){
    let x = 100101;
    let y = 101;
    let z = [0,0,0,0,0];
    limiter = z.length;
    for (let i=0; i< limiter ; i++){
        z[i] = x + y * i ; }
        id   = z;
    
}
function question_generate(idNum){
    
    idd = idNum - 100000;
    yy = idd % 100;
    xx = Math.floor(idd * 0.01);
    up = String(xx);
    dw = String(yy);
    
    qu = up + "x" + dw;
    return qu;
}
function correct(){
        idd = id[ima];
        x = idd - 100000;
        yy = x % 100;
        xx = Math.floor(x * 0.01);
        if ( inputText == String(xx * yy) )
        {
            return 22222222222 ;    
        }
        else
        {
            return 0 ;
        }
        
    }
    
let nowDate   = 0;
let inputText = "" ;// 入力数字

// 二重配列　9個のカラムを持つテーブル 10個
let questAmount = 10;
var hairetu = new Array(8);
for (let i = 0; i < questAmount ; i++ ){
    hairetu[i] = new Array(8).fill(0); }

var saveTime  = [0,0,0,0,0,0,0,0,0]; //1-9

// ______________________________
function start_click(){
    enable_start();
    document.f1.t_input.value    = 0; //入力数字
    
    saveTime[0] = id[ima];
    
    x = new Date();
    saveTime[1] = x.getTime();
    document.f1.t_s.value        = saveTime[1];

    document.f1.t_test.value = id[ima];
    document.f1.t_question.value = question_generate(id[ima]);
    document.f1.t_remain.value = limiter - ima;
}

function prep_click(){
         prep_enable();
         id_generate();

         
    
}

function reset_click(){
    reset_enable();
    document.f1.b_reset.disabled = true;
    document.f1.b_prep.disabled = true;
    document.f1.b_start.disabled = false;
    
    document.f1.t_test.value = limiter;
    
    ima += 1;
    
    if (ima < limiter){
        document.f1.b_start.disabled = false;
    }
    else{
        document.f1.b_start.disabled = true;
        document.f1.b_next.disabled  = false;
    }
    

    document.f1.t_input.value   = "";
    document.f1.t_question.value= "";
    document.f1.t_test.value    = "";
    document.f1.t_remain.value  = "";
    
    inputText = "";
    nowDate = 0;
    

    for (let i=0; i < 9; i++){
        saveTime[i]  = 0;
    }
    document.f1.t_s.value   = "";
    document.f1.t_1_s.value = "";
    document.f1.t_1.value   = "";
    document.f1.t_2_1.value = "";
    document.f1.t_2.value   = "";
    document.f1.t_2_1.value = "";
    document.f1.t_3.value   = "";
    document.f1.t_3_2.value = "";
    document.f1.t_4.value   = "";
    document.f1.t_4_3.value = "";
    document.f1.t_e.value   = "";
    document.f1.t_e_4.value = "";

    document.f1.t_0x.value  = "";
    document.f1.t_1x.value  = "";
    document.f1.t_2x.value  = "";
    document.f1.t_3x.value  = "";
    document.f1.t_4x.value  = "";
    document.f1.t_5x.value  = "";
    document.f1.t_6x.value  = "";
    document.f1.t_7x.value  = "";
    document.f1.t_8x.value  = "";
}

function save_click(){
    save_enable();
    
    for (let i=0; i<9; i++){
        hairetu[ima][i] = saveTime[i];
    }
}
function enter_click(){
         enter_enable();
    saveTime[7] = correct();
    saveTime[8] = inputText;  // 入力数字
    
    x = new Date();
    saveTime[6]             = x.getTime();
    document.f1.t_e.value   = saveTime[6];
    document.f1.t_e_4.value = saveTime[6] - nowDate;
    
    document.f1.t_0x.value      = saveTime[0];// ID
    document.f1.t_1x.value      = saveTime[1];// start
    document.f1.t_2x.value      = saveTime[2];// 1
    document.f1.t_3x.value      = saveTime[3];// 2
    document.f1.t_4x.value      = saveTime[4];// 3
    document.f1.t_5x.value      = saveTime[5];// 4
    document.f1.t_6x.value      = saveTime[6];// enter
    document.f1.t_7x.value      = saveTime[7];// TRUE or
    document.f1.t_8x.value      = saveTime[8];// input

}
function clear_click(){
    clear_enable();
    
    inputText                   = "";
    
    document.f1.t_input.value   = inputText ;
    document.f1.t_1.value       = "";
    document.f1.t_1_s.value     = "";
    document.f1.t_2.value       = "";
    document.f1.t_2_1.value     = "";
    document.f1.t_3.value       = "";
    document.f1.t_3_2.value     = "";
    document.f1.t_4.value       = "";
    document.f1.t_4_3.value     = "";
    
    saveTime[2] = 0; // 1
    saveTime[3] = 0; // 2
    saveTime[4] = 0; // 3
    saveTime[5] = 0; // 4

}
function b1_click(obj){
    if (inputText.length < 4){
        if      (inputText.length === 0 ){
            x = new Date();
            saveTime[2] = x.getTime();
            nowDate = saveTime[2];
            document.f1.t_1.value   = saveTime[2];
            document.f1.t_1_s.value = saveTime[2] - saveTime[1];
            b1_enable();
        }
        else if (inputText.length === 1 ){
            x = new Date();
            saveTime[3] = x.getTime();
            nowDate = saveTime[3];
            document.f1.t_2.value = saveTime[3];
            document.f1.t_2_1.value = saveTime[3] - saveTime[2];
        }
        else if (inputText.length === 2 ){
            x = new Date();
            saveTime[4] = x.getTime();
            nowDate = saveTime[4];
            document.f1.t_3.value   = saveTime[4];
            document.f1.t_3_2.value = saveTime[4] - saveTime[3];
        }
        else if (inputText.length === 3 ){
            x = new Date();
            saveTime[5] = x.getTime();
            nowDate = saveTime[5];
            document.f1.t_4.value = saveTime[5];
            document.f1.t_4_3.value = saveTime[5] - saveTime[4];
        }
        else{ }
        inputText = inputText + obj.value;
        document.f1.t_input.value = inputText;
        }
}
//-------------------------
function b1_enable(){
    document.f1.b0.disabled      = false;
    document.f1.clear.disabled   = false;
    document.f1.b_enter.disabled = false;
    
}
function reset_enable(){
    document.f1.b_save.disabled = true;
    document.f1.b_reset.disabled= false;

}
function save_enable(){
    document.f1.b_save.disabled = true;
    document.f1.b_reset.disabled= false;

}
function enter_enable(){
    document.f1.b1.disabled      = true;
    document.f1.b2.disabled      = true;
    document.f1.b3.disabled      = true;
    document.f1.b4.disabled      = true;
    document.f1.b5.disabled      = true;
    document.f1.b6.disabled      = true;
    document.f1.b7.disabled      = true;
    document.f1.b8.disabled      = true;
    document.f1.b9.disabled      = true;
    document.f1.b0.disabled      = true;
    document.f1.clear.disabled   = true;
    document.f1.b_enter.disabled = true;
    document.f1.b_save.disabled = false;

    
}
function clear_enable(){
    document.f1.b_enter.disabled = true;
    document.f1.b0.disabled      = true;
    
}
function enable_start(){
    document.f1.b1.disabled      = false;
    document.f1.b2.disabled      = false;
    document.f1.b3.disabled      = false;
    document.f1.b4.disabled      = false;
    document.f1.b5.disabled      = false;
    document.f1.b6.disabled      = false;
    document.f1.b7.disabled      = false;
    document.f1.b8.disabled      = false;
    document.f1.b9.disabled      = false;
    document.f1.b0.disabled      = true;
    document.f1.clear.disabled   = true;
    document.f1.b_prep.disabled  = true;
    document.f1.b_start.disabled = true;
    document.f1.b_enter.disabled = true;
    document.f1.b_save.disabled  = true;
    document.f1.b_reset.disabled = true;

}
function prep_enable(){
    
    document.f1.b1.disabled      = true;
    document.f1.b2.disabled      = true;
    document.f1.b3.disabled      = true;
    document.f1.b4.disabled      = true;
    document.f1.b5.disabled      = true;
    document.f1.b6.disabled      = true;
    document.f1.b7.disabled      = true;
    document.f1.b8.disabled      = true;
    document.f1.b9.disabled      = true;
    document.f1.b0.disabled      = true;
    document.f1.clear.disabled   = true;
    document.f1.b_prep.disabled  = true;
    document.f1.b_start.disabled = true;
    document.f1.b_enter.disabled = true;
    document.f1.b_save.disabled  = true;
    document.f1.b_reset.disabled = true;
    document.f1.b_next.disabled  = true;
    
    document.f1.b_start.disabled = false;

}

// _____________________________________________________________

