export var basicFunctions = {
    sum_items: function(items) {

        if (isNaN(items) || items < 0)
            throw 'Input must be a positive integer value'
    
        let return_value = 0
        for (var i = 0; i < items.toString().length; i++) {
            return_value += parseInt(items.toString().charAt(i))
        }
    
        if (return_value >= 10)
            return sum_items(return_value)
        else
            return return_value
    },
    
    reverse_string: function(input) {
        let output = '',
            i = input.length - 1
    
        while (i >= 0) {
            output += input.charAt(i)
            i--
        }
    
        return output
    },
    
    findElement: function(arr, func) {
        return arr.find(func);
    },
    
    truncateString: function(str, num) {
        return (num < str.length) ? str.substring(0, num) + "..." : str;
    },
    
    repeatStringNumTimes: function(str, num) {
        let output = ''
        while (num > 0) {
            output = output + str
            num--
        }
        return output
    },
    
    confirmEnding: function(str, target) {
        return str.lastIndexOf(target) === str.length - target.length;
    },
    
    largestOfFour: function(arr) {
        return arr.map(
            (e) => e.sort(
                (a, b) => b - a
            )[0]
        )
    },
    
    booWho: function(bool) {
        return typeof (bool) == 'boolean';
    },
    
    titleCase: function(str) {
        return str.toLowerCase()
            .split(' ')
            .map(a => a[0].toUpperCase() + a.slice(1))
            .join(' ');
    },
    
    frankenSplice: function(arr1, arr2, n) {
        return [...arr2.slice(0, n),
            ...arr1,
            ...arr2.slice(n)
        ];
    },
    
    bouncer: function(arr) {
        return arr.filter(a => a);
    },
    
    mutation: function(arr) {
        return [...arr[1].toLowerCase()]
            .every(c => [...arr[0].toLowerCase()].indexOf(c) > -1)
    },
    
    chunkArrayInGroups: function(arr, size) {
        let arrGroups = []
        for (let cpt = 0; cpt < arr.length; cpt = cpt + size) {
            arrGroups.push(arr.slice(cpt, cpt + size))
        }
        return arrGroups
    },
    
    getIndexToIns: function(arr, num) {
        arr.push(num)
        arr.sort((a, b) => a - b)
        return arr.indexOf(num)
    }
}