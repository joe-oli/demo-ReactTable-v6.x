let Utils = {}; 
Utils = Utils || {};

const AbcFn = () => {
    return '123'
}

const CindiFn  = () => {
    return 'Rella'
}


const currDateAsYMD_FN = () => {
    let yourDate = new Date();
    const offset = yourDate.getTimezoneOffset() //in mins; Syd time is -600
    //console.log('offset:',`${offset}, in mins`);
    yourDate = new Date(yourDate.getTime() - (offset*60*1000)) //convert to millisecs
    const result = yourDate.toISOString().split('T')[0]
    //console.log('result:', result);
    return result;
  }



// eslint-disable-next-line no-unused-vars
export default Utils = { 
    Abc : AbcFn,
    Cindi : CindiFn,
    currDateAsYMDStr : currDateAsYMD_FN
}


