

const LEsson = {

    sumOfTripledEvens(array){
        let res = array.filter(
            (element) => (element % 2 === 0)
        ).map(
            (element) => element * 3
        ).reduce(
            (sum, element) => sum += element
        , 0);
    
        return res;
    },
    
    camelize(str){
        let arrSplitted =  str.split('-');
        return arrSplitted[0] +
        arrSplitted.slice(1)
        .map(
            (word) => word[0].toUpperCase() + word.slice(1)
        ).join('');
    },

    filterRange(arr, a, b){
        return arr.filter(
            element => (element >= a && element <= b)
        );
    },

    filterRangeInPlace(arr, a, b){
        for(let i = 0; i < arr.length; i++){
            let c = arr[i];
            if(!(c >= a && c <= b)){
                arr.splice(i,1);
                i--;
            }
        }
        return arr;
    },

    sortDec(arr){
        return arr.sort(
            (a,b) => b - a
        );
    },

    copySorted(arr){
        return arr.slice().sort();
    },

    shuffle(arr){
        for(let i = arr.length - 1; i > 0; i--){
            let left = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[left]] = [arr[left], arr[i]];
        }
    },

    unique(arr){
        let res = [];
        arr.forEach(element => {
            if(! res.includes(element))
                res.push(element);
        });
        return res;
    }
};

exports = {
    LEsson
}