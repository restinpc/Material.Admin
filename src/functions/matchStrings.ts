/**
 * Material.App - функция сравнения строк для сортировок
 *
 * @ 06.12.2019 # Aleksandr <Vorkunov.Al.Va@omega.sbrf.ru>
 */

export default function matchString(string1, string2){
    let pos = 0;
    let fout = null;
    do{
        if(string1.charCodeAt(pos) > string2.charCodeAt(pos)){
            fout = 1;
            break;
        }else if(string1.charCodeAt(pos) < string2.charCodeAt(pos)){
            fout = 0;
            break;
        }else{
            pos++;
        }
    }while(pos < string1.lenght);
    if(fout === null){
        if(string1.length < string2.length){
            fout = 0;
        }else if(string1.length > string2.length){
            fout = 1;
        }
    }
    return fout;
}