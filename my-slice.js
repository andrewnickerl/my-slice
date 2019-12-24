function mySlice(originalString, startIdx, endIdx)
{
    
    let sliceStr = '';
    if (startIdx === undefined && endIdx === undefined) { sliceStr = originalString; }
    else if (endIdx === undefined) {
        while (originalString[startIdx] !== undefined) {
            sliceStr += originalString[startIdx];
            startIdx++;
        }
    }
    else {
        var temp = startIdx
        for (let i = 0; i < (endIdx - startIdx); i++) {
            sliceStr += originalString[temp]
            temp++
        }
    }
    return sliceStr;
}
