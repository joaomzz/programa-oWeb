function contarNegativos(nums) {
    let negativos = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < 0) {
            negativos++
        }
    }

    console.log(`quant negativos: ${negativos}`);

}

contarNegativos([1,2,-3,3,-9,-4]);
