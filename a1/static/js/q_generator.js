
// 整理整頓
const qsLength2  = 4;// 問題数

let questions2 = [];

var saveData2  = new Array(1); // ２次元配列必須１行目?

function b1_gene1_click(){
    document.f2.b1_gene1.value ="sakura";
    chunkDataMap2();
    id_generator2();

}
function b1_gene2_click(){
    document.f2.b1_gene2.value ="sakura";
/*    
    document.f2.t1_0.value    = saveData2[0][0];
    document.f2.t1_1.value    = saveData2[1][0];
    document.f2.t1_2.value    = saveData2[2][0];
    document.f2.t1_3.value    = saveData2[3][0];
*/
    document.f2.t1_0.value    = questions2[0];
    document.f2.t1_1.value    = questions2[1];
    document.f2.t1_2.value    = questions2[2];
    document.f2.t1_3.value    = questions2[3];

}

// 問題群　二乗数
function id_generator2(){
    
    let all_id      = [];
    for (let i=0; i<100; i++){
        if ( i%10 != 0){
            all_id.push( 100000 + (101*i));}}

    for ( let i=0; i< qsLength2; i++ ){
        x = Math.floor( Math.random() * all_id.length );
        questions2.push(all_id[x]); 
        saveData2[i][0] = questions2[i];// koko yuika
    }

}
function chunkDataMap2(){
    for (let i=0; i< qsLength2; i++)
    {
        saveData2[i] = new Array(9).fill(0);  // カラムの数
    }
}







